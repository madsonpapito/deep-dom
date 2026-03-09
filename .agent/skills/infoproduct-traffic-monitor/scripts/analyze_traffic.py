"""
Infoproduct Traffic Monitor - Traffic Analyzer
================================================
Script que analisa e classifica os dados coletados pelo scraper,
calculando score de escala e gerando ranking de ofertas.

Uso:
    python analyze_traffic.py --top 10
    python analyze_traffic.py --niche "emagrecer" --min-score 5
    python analyze_traffic.py --report weekly
    python analyze_traffic.py --funnel "https://exemplo.com/vsl"

Requer:
    - pip install pandas
    - Dados coletados em output/infoproduct_traffic_data.csv
"""

import os
import sys
import argparse
import pandas as pd
from datetime import datetime, timedelta
from pathlib import Path
from collections import Counter

# Caminhos
SKILL_DIR = Path(__file__).parent.parent
OUTPUT_DIR = SKILL_DIR / "output"
DATA_FILE = OUTPUT_DIR / "infoproduct_traffic_data.csv"


def load_data() -> pd.DataFrame:
    """Carrega e prepara os dados do CSV."""
    if not DATA_FILE.exists():
        print("❌ Arquivo de dados não encontrado!")
        print(f"   Esperado: {DATA_FILE}")
        print("   Execute primeiro: python run_ads_library_scraper.py")
        sys.exit(1)

    df = pd.read_csv(DATA_FILE, encoding="utf-8")
    print(f"📂 Carregados {len(df)} registros de {DATA_FILE.name}")

    # Converter datas
    if "start_date" in df.columns:
        df["start_date"] = pd.to_datetime(df["start_date"], errors="coerce")
    if "collected_at" in df.columns:
        df["collected_at"] = pd.to_datetime(df["collected_at"], errors="coerce")

    return df


def calculate_scale_score(group: pd.DataFrame) -> dict:
    """
    Calcula o score de escala de uma oferta (agrupada por destination_link).

    Critérios (0-10):
    - Tempo ativo: 25% peso
    - Nº de criativos: 20% peso
    - Volume estimado (nº de anúncios como proxy): 25% peso
    - Diversidade de anunciantes: 15% peso
    - Frequência de coleta: 15% peso
    """
    scores = {}

    # 1. Tempo Ativo (25%)
    max_days = group["days_active"].max() if "days_active" in group.columns else 0
    if max_days >= 60:
        scores["tempo_ativo"] = 10
    elif max_days >= 30:
        scores["tempo_ativo"] = 8
    elif max_days >= 14:
        scores["tempo_ativo"] = 5
    elif max_days >= 7:
        scores["tempo_ativo"] = 3
    else:
        scores["tempo_ativo"] = 1

    # 2. Nº de Criativos (20%)
    n_creatives = len(group)
    if n_creatives >= 20:
        scores["criativos"] = 10
    elif n_creatives >= 10:
        scores["criativos"] = 8
    elif n_creatives >= 5:
        scores["criativos"] = 5
    elif n_creatives >= 3:
        scores["criativos"] = 3
    else:
        scores["criativos"] = 1

    # 3. Volume (nº de anúncios como proxy) (25%)
    # Quanto mais anúncios apontando, mais tráfego provável
    if n_creatives >= 15:
        scores["volume"] = 10
    elif n_creatives >= 8:
        scores["volume"] = 7
    elif n_creatives >= 4:
        scores["volume"] = 4
    else:
        scores["volume"] = 1

    # 4. Diversidade de anunciantes (15%)
    n_pages = group["page_name"].nunique() if "page_name" in group.columns else 1
    if n_pages >= 5:
        scores["diversidade"] = 10
    elif n_pages >= 3:
        scores["diversidade"] = 7
    elif n_pages >= 2:
        scores["diversidade"] = 4
    else:
        scores["diversidade"] = 2

    # 5. Frequência de Coleta (15%)
    if "collected_at" in group.columns:
        n_collections = group["collected_at"].dt.date.nunique()
        if n_collections >= 7:
            scores["frequencia"] = 10
        elif n_collections >= 3:
            scores["frequencia"] = 7
        elif n_collections >= 2:
            scores["frequencia"] = 4
        else:
            scores["frequencia"] = 2
    else:
        scores["frequencia"] = 2

    # Score final ponderado
    final_score = (
        scores["tempo_ativo"] * 0.25 +
        scores["criativos"] * 0.20 +
        scores["volume"] * 0.25 +
        scores["diversidade"] * 0.15 +
        scores["frequencia"] * 0.15
    )

    return {
        "scale_score": round(final_score, 1),
        "scores_detail": scores,
        "max_days_active": max_days,
        "num_creatives": n_creatives,
        "num_pages": n_pages,
    }


def get_star_rating(score: float) -> str:
    """Converte score em classificação visual."""
    if score >= 8:
        return "⭐⭐⭐ ALTAMENTE ESCALADA"
    elif score >= 5:
        return "⭐⭐ EM ESCALA"
    elif score >= 3:
        return "⭐ POTENCIAL"
    else:
        return "📌 INICIANTE/TESTE"


def show_top_offers(df: pd.DataFrame, top_n: int = 10, min_score: float = 0, niche: str = None):
    """Exibe ranking das melhores ofertas."""

    # Filtrar por nicho se especificado
    if niche and niche.lower() != "all":
        df = df[df["niche_keyword"].str.lower().str.contains(niche.lower(), na=False)]

    # Filtrar apenas VSLs (mais interessante que checkout direto)
    vsls = df[df["link_type"] == "vsl"].copy()

    if vsls.empty:
        print("\n⚠️ Nenhuma VSL/TSL encontrada nos dados.")
        return

    # Agrupar por destination_link e calcular scores
    offers = []
    for link, group in vsls.groupby("destination_link"):
        score_data = calculate_scale_score(group)
        if score_data["scale_score"] >= min_score:
            offers.append({
                "destination_link": link,
                "top_page": group["page_name"].mode().iloc[0] if not group["page_name"].mode().empty else "N/A",
                "keywords": ", ".join(group["niche_keyword"].unique()[:3]),
                **score_data,
            })

    if not offers:
        print(f"\n⚠️ Nenhuma oferta com score >= {min_score} encontrada.")
        return

    # Ordenar por score
    offers.sort(key=lambda x: x["scale_score"], reverse=True)
    offers = offers[:top_n]

    # Exibir ranking
    print(f"\n{'='*70}")
    print(f"  🏆 TOP {len(offers)} OFERTAS ESCALADAS")
    if niche:
        print(f"  📌 Nicho: {niche}")
    if min_score > 0:
        print(f"  📊 Score mínimo: {min_score}")
    print(f"{'='*70}")

    for i, offer in enumerate(offers, 1):
        rating = get_star_rating(offer["scale_score"])
        url = offer["destination_link"]
        short_url = url[:55] + "..." if len(url) > 55 else url

        print(f"\n  #{i} | Score: {offer['scale_score']}/10 | {rating}")
        print(f"      URL: {short_url}")
        print(f"      Anunciante: {offer['top_page']}")
        print(f"      Keywords: {offer['keywords']}")
        print(f"      Criativos: {offer['num_creatives']} | Dias Ativo: {offer['max_days_active']} | Páginas: {offer['num_pages']}")
        print(f"      Breakdown: tempo={offer['scores_detail']['tempo_ativo']} criativos={offer['scores_detail']['criativos']} volume={offer['scores_detail']['volume']} diversidade={offer['scores_detail']['diversidade']} freq={offer['scores_detail']['frequencia']}")

    print(f"\n{'='*70}\n")


def analyze_funnel(df: pd.DataFrame, url: str):
    """Analisa tudo que sabemos sobre um funil específico."""
    matches = df[df["destination_link"].str.contains(url, case=False, na=False)]

    if matches.empty:
        print(f"\n⚠️ URL não encontrada nos dados: {url}")
        print("   Tente buscar com uma parte menor da URL.")
        return

    print(f"\n{'='*70}")
    print(f"  🔍 ANÁLISE DE FUNIL")
    print(f"  URL: {url}")
    print(f"{'='*70}")

    score_data = calculate_scale_score(matches)
    rating = get_star_rating(score_data["scale_score"])

    print(f"\n  📊 Score de Escala: {score_data['scale_score']}/10 | {rating}")
    print(f"  📅 Dias ativo: {score_data['max_days_active']}")
    print(f"  🎨 Criativos encontrados: {score_data['num_creatives']}")
    print(f"  📄 Páginas anunciantes: {score_data['num_pages']}")

    # Anunciantes
    pages = matches["page_name"].value_counts()
    print(f"\n  👤 Anunciantes:")
    for page, count in pages.head(5).items():
        print(f"     - {page} ({count} anúncios)")

    # Keywords
    keywords = matches["niche_keyword"].value_counts()
    print(f"\n  🏷️ Keywords associadas:")
    for kw, count in keywords.items():
        print(f"     - {kw} ({count}x)")

    # Tipo de link
    link_type = matches["link_type"].iloc[0]
    print(f"\n  🔗 Tipo de destino: {link_type.upper()}")

    # Timeline
    if "start_date" in matches.columns:
        earliest = matches["start_date"].min()
        latest = matches["start_date"].max()
        print(f"\n  📅 Timeline:")
        print(f"     Primeiro anúncio: {earliest}")
        print(f"     Último anúncio: {latest}")

    # Texto dos anúncios (amostra)
    if "ad_text" in matches.columns:
        texts = matches[matches["ad_text"].notna()]["ad_text"].unique()[:3]
        if len(texts) > 0:
            print(f"\n  📝 Amostra de textos dos anúncios:")
            for j, text in enumerate(texts, 1):
                print(f"     {j}. \"{text[:100]}...\"")

    print(f"\n{'='*70}\n")


def generate_report(df: pd.DataFrame, period: str = "weekly"):
    """Gera um relatório consolidado em markdown."""
    now = datetime.now()

    if period == "weekly":
        cutoff = now - timedelta(days=7)
        period_label = "Semanal"
    elif period == "biweekly":
        cutoff = now - timedelta(days=14)
        period_label = "Quinzenal"
    elif period == "monthly":
        cutoff = now - timedelta(days=30)
        period_label = "Mensal"
    else:
        cutoff = now - timedelta(days=7)
        period_label = "Semanal"

    # Filtrar por período
    if "collected_at" in df.columns:
        recent = df[df["collected_at"] >= cutoff].copy()
    else:
        recent = df.copy()

    report_lines = []
    report_lines.append(f"# 📊 Relatório {period_label} — Infoproduct Traffic Monitor")
    report_lines.append(f"\n**Gerado em:** {now.strftime('%Y-%m-%d %H:%M')}")
    report_lines.append(f"**Período:** {cutoff.strftime('%Y-%m-%d')} a {now.strftime('%Y-%m-%d')}")
    report_lines.append(f"**Total de anúncios analisados:** {len(recent)}")

    # Resumo geral
    report_lines.append(f"\n## Resumo Geral\n")
    report_lines.append(f"- Anúncios coletados: **{len(recent)}**")
    report_lines.append(f"- Páginas únicas: **{recent['page_name'].nunique()}**")
    report_lines.append(f"- VSLs/TSLs identificadas: **{len(recent[recent['link_type'] == 'vsl'])}**")
    report_lines.append(f"- Checkouts diretos: **{len(recent[recent['link_type'] == 'checkout'])}**")

    # Top nichos
    niche_counts = recent["niche_keyword"].value_counts().head(10)
    report_lines.append(f"\n## Top Nichos por Volume de Anúncios\n")
    report_lines.append("| # | Nicho | Anúncios |")
    report_lines.append("|---|-------|----------|")
    for i, (niche, count) in enumerate(niche_counts.items(), 1):
        report_lines.append(f"| {i} | {niche} | {count} |")

    # Top Ofertas
    vsls = recent[recent["link_type"] == "vsl"]
    if not vsls.empty:
        report_lines.append(f"\n## Top Ofertas Escaladas\n")
        offers = []
        for link, group in vsls.groupby("destination_link"):
            score_data = calculate_scale_score(group)
            offers.append({
                "url": link,
                "page": group["page_name"].mode().iloc[0] if not group["page_name"].mode().empty else "N/A",
                **score_data,
            })
        offers.sort(key=lambda x: x["scale_score"], reverse=True)

        report_lines.append("| # | Score | Classificação | Anunciante | URL |")
        report_lines.append("|---|-------|---------------|------------|-----|")
        for i, offer in enumerate(offers[:10], 1):
            rating = get_star_rating(offer["scale_score"])
            short_url = offer["url"][:40] + "..." if len(offer["url"]) > 40 else offer["url"]
            report_lines.append(f"| {i} | {offer['scale_score']} | {rating} | {offer['page']} | {short_url} |")

    # Salvar relatório
    report_text = "\n".join(report_lines)
    report_file = OUTPUT_DIR / f"report_{period}_{now.strftime('%Y%m%d')}.md"
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    with open(report_file, "w", encoding="utf-8") as f:
        f.write(report_text)

    print(f"\n📄 Relatório salvo em: {report_file}")
    print(report_text)


def main():
    parser = argparse.ArgumentParser(
        description="🎯 Infoproduct Traffic Monitor - Data Analyzer"
    )
    parser.add_argument("--top", type=int, default=10, help="Mostrar top N ofertas (padrão: 10)")
    parser.add_argument("--min-score", type=float, default=0, help="Score mínimo (padrão: 0)")
    parser.add_argument("--niche", type=str, default="all", help="Filtrar por nicho (padrão: all)")
    parser.add_argument("--funnel", type=str, help="Analisar funil de uma URL específica")
    parser.add_argument("--report", type=str, choices=["weekly", "biweekly", "monthly"], help="Gerar relatório do período")
    parser.add_argument("--stats", action="store_true", help="Mostrar estatísticas gerais")

    args = parser.parse_args()

    df = load_data()

    if args.funnel:
        analyze_funnel(df, args.funnel)
    elif args.report:
        generate_report(df, args.report)
    elif args.stats:
        print(f"\n📊 Estatísticas Gerais:")
        print(f"   Total registros: {len(df)}")
        print(f"   Páginas únicas: {df['page_name'].nunique()}")
        print(f"   Keywords: {df['niche_keyword'].nunique()}")
        print(f"   VSLs: {len(df[df['link_type'] == 'vsl'])}")
        print(f"   Checkouts: {len(df[df['link_type'] == 'checkout'])}")
    else:
        show_top_offers(df, top_n=args.top, min_score=args.min_score, niche=args.niche)


if __name__ == "__main__":
    main()
