"""
Infoproduct Traffic Monitor - Meta Ad Library Scraper
=====================================================
Script que interage com o Apify Facebook Ads Library Scraper
(curious_coder/facebook-ads-library-scraper) para coletar dados de anúncios.

O actor recebe URLs de busca da Facebook Ad Library.
Este script converte keywords/domínios em URLs de busca automaticamente.

Uso:
    python run_ads_library_scraper.py --keyword "ritual" --country BR --max-items 50
    python run_ads_library_scraper.py --keyword "pay.hotmart.com" --country BR --max-items 100
    python run_ads_library_scraper.py --keywords-file references/target_keywords.txt --country BR
    python run_ads_library_scraper.py --dry-run --keyword "teste"

Requer:
    - APIFY_API_TOKEN no arquivo .env
    - pip install requests pandas python-dotenv
"""

import os
import sys
import csv
import json
import time
import argparse
import requests
import pandas as pd
from datetime import datetime, timedelta
from pathlib import Path
from urllib.parse import quote
from dotenv import load_dotenv

# Caminhos relativos à skill
SKILL_DIR = Path(__file__).parent.parent
REFERENCES_DIR = SKILL_DIR / "references"
OUTPUT_DIR = SKILL_DIR / "output"
OUTPUT_FILE = OUTPUT_DIR / "infoproduct_traffic_data.csv"

# Carregar .env do projeto AIOS
PROJECT_ROOT = Path(__file__).parent.parent.parent.parent.parent
load_dotenv(PROJECT_ROOT / ".env")

APIFY_TOKEN = os.environ.get("APIFY_API_TOKEN")

# Actor correto do Apify Store (curious_coder)
APIFY_ACTOR_ID = "curious_coder~facebook-ads-library-scraper"
APIFY_API_BASE = "https://api.apify.com/v2"

# Colunas do CSV de saída
CSV_COLUMNS = [
    "ad_archive_id", "page_name", "page_id", "destination_link", "link_type",
    "caption", "ad_text", "creative_type", "publisher_platform",
    "start_date", "end_date", "is_active", "days_active",
    "collation_count", "page_like_count", "cta_text",
    "niche_keyword", "country", "total_results", "collected_at"
]


def build_ad_library_url(keyword: str, country: str = "BR") -> str:
    """
    Constrói a URL de busca da Facebook Ad Library.
    Formato: https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=BR&q=KEYWORD&search_type=keyword_unordered
    """
    encoded_keyword = quote(keyword)
    url = (
        f"https://www.facebook.com/ads/library/"
        f"?active_status=active"
        f"&ad_type=all"
        f"&country={country}"
        f"&q={encoded_keyword}"
        f"&search_type=keyword_unordered"
    )
    return url


def load_keywords_from_file(filepath: str) -> list[str]:
    """Carrega keywords de um arquivo (uma por linha, ignora comentários e vazias)."""
    keywords = []
    with open(filepath, "r", encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if line and not line.startswith("#"):
                keywords.append(line)
    return keywords


def classify_link(url: str) -> str:
    """Classifica um destination_link como 'checkout', 'vsl', ou 'unknown'."""
    if not url:
        return "unknown"

    checkout_domains = [
        "pay.hotmart.com", "hotmart.com/checkout",
        "checkout.kiwify.com.br", "pay.kiwify.com.br",
        "go.perfectpay.com.br",
        "checkout.braip.com",
        "sun.eduzz.com",
        "pay.monetizze.com.br",
        "pay.ticto.com.br",
    ]

    url_lower = url.lower()
    for domain in checkout_domains:
        if domain in url_lower:
            return "checkout"

    return "vsl"


def calculate_days_active(start_str: str, end_str: str = None) -> int:
    """Calcula dias ativos a partir de start_date_formatted e end_date_formatted."""
    if not start_str:
        return 0
    try:
        start = datetime.strptime(str(start_str)[:19], "%Y-%m-%d %H:%M:%S")
        if end_str:
            end = datetime.strptime(str(end_str)[:19], "%Y-%m-%d %H:%M:%S")
        else:
            end = datetime.now()
        return max(0, (end - start).days)
    except (ValueError, TypeError):
        return 0


def run_apify_scraper(keyword: str, country: str = "BR", max_items: int = 50) -> list[dict]:
    """Executa o actor Apify Facebook Ads Library Scraper."""
    if not APIFY_TOKEN:
        print("❌ ERRO: APIFY_API_TOKEN não configurado no .env")
        print("   Veja: references/apify_config.md para instruções")
        sys.exit(1)

    ad_library_url = build_ad_library_url(keyword, country)
    print(f"🔍 Buscando anúncios para: '{keyword}' (país: {country}, max: {max_items})")
    print(f"   URL: {ad_library_url}")

    # Input para o actor curious_coder~facebook-ads-library-scraper
    actor_input = {
        "urls": [{"url": ad_library_url}],
        "count": max_items,
        "limitPerSource": max_items,
        "proxyConfiguration": {
            "useApifyProxy": True
        }
    }

    # Iniciar o actor run (maxItems fica nos parâmetros de execução da plataforma)
    run_url = f"{APIFY_API_BASE}/acts/{APIFY_ACTOR_ID}/runs"
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {APIFY_TOKEN}"
    }

    print(f"   🚀 Iniciando actor...")

    # Pass maxItems as query parameter for Pay-per-result actors
    response = requests.post(run_url, json=actor_input, headers=headers, params={"maxItems": max_items})

    if response.status_code not in [200, 201]:
        print(f"❌ Erro ao iniciar o actor: HTTP {response.status_code}")
        try:
            print(f"   Detalhe: {json.dumps(response.json(), indent=2)[:500]}")
        except Exception:
            print(f"   Resposta: {response.text[:500]}")
        return []

    run_data = response.json().get("data", {})
    run_id = run_data.get("id")
    dataset_id = run_data.get("defaultDatasetId")
    status = run_data.get("status")

    print(f"   Run ID: {run_id}")

    # Polling até completar (max ~5 min)
    for attempt in range(30):
        check = requests.get(f"{APIFY_API_BASE}/actor-runs/{run_id}", headers=headers)
        if check.status_code == 200:
            run_data = check.json().get("data", {})
            status = run_data.get("status")
            items_count = run_data.get("stats", {}).get("datasetItemCount", 0)
            print(f"   [{attempt+1}] Status: {status} | Items: {items_count}")
            if status in ["SUCCEEDED", "FAILED", "ABORTED", "TIMED-OUT"]:
                break
        time.sleep(10)

    if status != "SUCCEEDED":
        print(f"❌ Actor não terminou com sucesso. Status final: {status}")
        # Tentar ver o log de erro
        log_r = requests.get(f"{APIFY_API_BASE}/actor-runs/{run_id}/log", headers=headers)
        if log_r.status_code == 200:
            print(f"   LOG: {log_r.text[-500:]}")
        return []

    # Buscar os resultados do dataset
    if not dataset_id:
        dataset_id = run_data.get("defaultDatasetId")
    if not dataset_id:
        print("❌ Nenhum dataset encontrado na run")
        return []

    items_url = f"{APIFY_API_BASE}/datasets/{dataset_id}/items"
    items_response = requests.get(items_url, headers=headers, params={"format": "json"})

    if items_response.status_code != 200:
        print(f"❌ Erro ao buscar resultados: HTTP {items_response.status_code}")
        return []

    items = items_response.json()
    print(f"   ✅ {len(items)} anúncios coletados!")
    return items


def process_apify_results(items: list[dict], keyword: str, country: str) -> list[dict]:
    """
    Processa os resultados brutos do Apify em formato padronizado.

    Campos do actor curious_coder~facebook-ads-library-scraper:
    - ad_archive_id, page_id, page_name, is_active
    - snapshot.link_url → destination link (VSL ou checkout)
    - snapshot.caption → geralmente o domínio (ex: pay.hotmart.com)
    - snapshot.body.text → texto do anúncio
    - snapshot.display_format → VIDEO, IMAGE, etc.
    - snapshot.cta_text → Call to Action
    - snapshot.page_like_count → likes da página
    - start_date_formatted, end_date_formatted
    - publisher_platform → [FACEBOOK, INSTAGRAM, etc.]
    - collation_count → número de versões do anúncio
    - total → total de resultados da busca
    """
    processed = []
    now = datetime.now().isoformat()

    for item in items:
        snapshot = item.get("snapshot", {}) or {}

        # Extrair destination link
        destination = snapshot.get("link_url", "") or ""

        # Extrair texto do body
        body = snapshot.get("body", {}) or {}
        ad_text = body.get("text", "") if isinstance(body, dict) else str(body)

        # Extrair publisher platforms
        platforms = item.get("publisher_platform", [])
        platform_str = ", ".join(platforms) if isinstance(platforms, list) else str(platforms)

        # Datas
        start_date = item.get("start_date_formatted", "") or ""
        end_date = item.get("end_date_formatted", "") or ""

        record = {
            "ad_archive_id": str(item.get("ad_archive_id", "")),
            "page_name": str(item.get("page_name", "") or snapshot.get("page_name", "")),
            "page_id": str(item.get("page_id", "")),
            "destination_link": destination,
            "link_type": classify_link(destination),
            "caption": str(snapshot.get("caption", "")),
            "ad_text": str(ad_text)[:200] if ad_text else "",
            "creative_type": str(snapshot.get("display_format", "")),
            "publisher_platform": platform_str,
            "start_date": start_date,
            "end_date": end_date,
            "is_active": item.get("is_active", False),
            "days_active": calculate_days_active(start_date, end_date if not item.get("is_active") else None),
            "collation_count": item.get("collation_count", 0),
            "page_like_count": snapshot.get("page_like_count", 0),
            "cta_text": str(snapshot.get("cta_text", "")),
            "niche_keyword": keyword,
            "country": country,
            "total_results": item.get("total", 0),
            "collected_at": now,
        }
        processed.append(record)

    return processed


def save_to_csv(records: list[dict], append: bool = True):
    """Salva ou adiciona registros ao CSV de saída."""
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    file_exists = OUTPUT_FILE.exists()
    mode = "a" if append and file_exists else "w"

    with open(OUTPUT_FILE, mode, newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=CSV_COLUMNS)
        if mode == "w" or not file_exists:
            writer.writeheader()
        writer.writerows(records)

    total = len(pd.read_csv(OUTPUT_FILE)) if OUTPUT_FILE.exists() else len(records)
    print(f"💾 Dados salvos em: {OUTPUT_FILE}")
    print(f"   Total de registros no arquivo: {total}")


def print_summary(records: list[dict]):
    """Exibe um resumo rápido dos resultados."""
    if not records:
        print("\n📊 Nenhum resultado para resumir.")
        return

    df = pd.DataFrame(records)

    total_in_library = df["total_results"].max() if "total_results" in df.columns else "?"

    print(f"\n{'='*60}")
    print(f"  📊 RESUMO DA COLETA")
    print(f"{'='*60}")
    print(f"  Anúncios coletados: {len(df)}")
    print(f"  Total disponível na Ad Library: {total_in_library}")
    print(f"  Páginas únicas: {df['page_name'].nunique()}")
    print(f"  Links VSL/TSL: {len(df[df['link_type'] == 'vsl'])}")
    print(f"  Links Checkout direto: {len(df[df['link_type'] == 'checkout'])}")

    if 'days_active' in df.columns:
        active = df[df['days_active'] > 0]
        if len(active) > 0:
            avg_days = active['days_active'].mean()
            max_days = active['days_active'].max()
            print(f"  Média de dias ativo: {avg_days:.0f}")
            print(f"  Anúncio mais antigo: {max_days} dias")

    # Plataformas
    if 'publisher_platform' in df.columns:
        platforms = df['publisher_platform'].value_counts().head(3)
        print(f"\n  📱 Plataformas:")
        for plat, count in platforms.items():
            print(f"     - {plat}: {count} anúncios")

    # Tipos de criativo
    if 'creative_type' in df.columns:
        types = df['creative_type'].value_counts().head(3)
        print(f"\n  🎨 Tipos de Criativo:")
        for t, count in types.items():
            print(f"     - {t}: {count} anúncios")

    # Top anunciantes
    top_pages = df['page_name'].value_counts().head(5)
    if not top_pages.empty:
        print(f"\n  🏆 Top 5 Anunciantes (por nº de anúncios):")
        for i, (page, count) in enumerate(top_pages.items(), 1):
            likes = df[df['page_name'] == page]['page_like_count'].max()
            print(f"     {i}. {page} ({count} anúncios, {likes:,} likes)")

    # Top destinos
    has_links = df[df['destination_link'].str.len() > 5]
    if not has_links.empty:
        # VSLs
        vsls = has_links[has_links['link_type'] == 'vsl']
        if not vsls.empty:
            vsl_counts = vsls['destination_link'].value_counts().head(5)
            print(f"\n  🎯 Top 5 VSLs/TSLs:")
            for i, (url, count) in enumerate(vsl_counts.items(), 1):
                short_url = str(url)[:60] + "..." if len(str(url)) > 60 else url
                print(f"     {i}. {short_url} ({count} anúncios)")

        # Checkouts
        checkouts = has_links[has_links['link_type'] == 'checkout']
        if not checkouts.empty:
            checkout_counts = checkouts['destination_link'].value_counts().head(3)
            print(f"\n  💰 Top Checkouts diretos:")
            for i, (url, count) in enumerate(checkout_counts.items(), 1):
                short_url = str(url)[:60] + "..." if len(str(url)) > 60 else url
                print(f"     {i}. {short_url} ({count} anúncios)")

    print(f"{'='*60}\n")


def main():
    parser = argparse.ArgumentParser(
        description="🎯 Infoproduct Traffic Monitor - Meta Ad Library Scraper"
    )
    parser.add_argument("--keyword", type=str, help="Keyword de busca (ex: 'ritual', 'pay.hotmart.com')")
    parser.add_argument(
        "--keywords-file", type=str,
        help="Arquivo com lista de keywords"
    )
    parser.add_argument("--country", type=str, default="BR", help="Código do país (padrão: BR)")
    parser.add_argument("--max-items", type=int, default=50, help="Máximo de itens por busca (padrão: 50)")
    parser.add_argument("--dry-run", action="store_true", help="Modo teste - não chama a API")
    parser.add_argument("--no-append", action="store_true", help="Sobrescrever CSV em vez de adicionar")

    args = parser.parse_args()

    # Determinar keywords a buscar
    keywords = []
    if args.keyword:
        keywords.append(args.keyword)
    elif args.keywords_file:
        keywords = load_keywords_from_file(args.keywords_file)
    else:
        default_file = REFERENCES_DIR / "target_keywords.txt"
        if default_file.exists():
            keywords = load_keywords_from_file(str(default_file))
            print(f"📂 Carregadas {len(keywords)} keywords de {default_file.name}")
        else:
            print("❌ Nenhuma keyword fornecida. Use: --keyword 'ritual'")
            sys.exit(1)

    print(f"\n🎯 Sentinel - Infoproduct Traffic Monitor")
    print(f"{'='*60}")
    print(f"  Keywords: {len(keywords)}")
    if len(keywords) <= 3:
        print(f"  Termos: {', '.join(keywords)}")
    print(f"  País: {args.country}")
    print(f"  Max itens/keyword: {args.max_items}")
    print(f"  Modo: {'🧪 DRY RUN' if args.dry_run else '🔴 PRODUÇÃO'}")
    print(f"{'='*60}\n")

    all_records = []

    for i, keyword in enumerate(keywords, 1):
        print(f"\n[{i}/{len(keywords)}] Processando: '{keyword}'")
        print("-" * 40)

        if args.dry_run:
            fake_records = [
                {col: "" for col in CSV_COLUMNS} | {
                    "ad_archive_id": f"dry_{i}_{j}",
                    "page_name": f"Página Teste {j}",
                    "page_id": f"test_{j}",
                    "destination_link": f"https://exemplo{j}.com.br/vsl",
                    "link_type": "vsl",
                    "creative_type": "VIDEO",
                    "ad_text": f"Anúncio teste para '{keyword}'",
                    "start_date": (datetime.now() - timedelta(days=j * 10)).strftime("%Y-%m-%d %H:%M:%S"),
                    "is_active": True,
                    "days_active": j * 10,
                    "niche_keyword": keyword,
                    "country": args.country,
                    "total_results": 100,
                    "collected_at": datetime.now().isoformat(),
                }
                for j in range(1, 4)
            ]
            all_records.extend(fake_records)
            print(f"   🧪 DRY RUN: {len(fake_records)} registros fictícios gerados")
        else:
            raw_items = run_apify_scraper(keyword, args.country, args.max_items)
            if raw_items:
                records = process_apify_results(raw_items, keyword, args.country)
                all_records.extend(records)
            else:
                print(f"   ⚠️ Nenhum resultado para '{keyword}'")

    if all_records:
        save_to_csv(all_records, append=not args.no_append)
        print_summary(all_records)
    else:
        print("\n⚠️ Nenhum resultado encontrado.")


if __name__ == "__main__":
    main()
