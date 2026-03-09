"""
Infoproduct Traffic Monitor - Reverse Checkout (DataForSEO)
=========================================================
Descobre quais páginas/VSLs estão enviando tráfego para um domínio de checkout.

Uso:
    python reverse_checkout.py --target pay.hotmart.com --limit 20
"""

import os
import sys
import argparse
import requests
import pandas as pd
from pathlib import Path
from dotenv import load_dotenv

SKILL_DIR = Path(__file__).parent.parent
OUTPUT_DIR = SKILL_DIR / "output"
OUTPUT_FILE = OUTPUT_DIR / "reverse_checkout_data.csv"

PROJECT_ROOT = Path(__file__).parent.parent.parent.parent.parent
load_dotenv(PROJECT_ROOT / ".env")

API_KEY = os.environ.get("RAPIDAPI_KEY")
API_HOST = "dataforseo-backlinks.p.rapidapi.com"
BASE_URL = f"https://{API_HOST}"


def get_backlinks(target: str, limit: int = 20):
    if not API_KEY:
        print("❌ ERRO: RAPIDAPI_KEY não configurada no .env")
        sys.exit(1)

    print(f"🔍 Buscando VSLs/Páginas apontando para: {target}")
    
    url = f"{BASE_URL}/backlinks/backlinks/live"
    
    payload = [{
        "target": target,
        "limit": limit,
        "include_indirect_links": False,
        "order_by": ["rank,desc"]
    }]
    
    headers = {
        "x-rapidapi-key": API_KEY,
        "x-rapidapi-host": API_HOST,
        "Content-Type": "application/json"
    }

    print("🚀 Fazendo requisição para DataForSEO via RapidAPI...")
    response = requests.post(url, json=payload, headers=headers)
    
    if response.status_code != 200:
        print(f"❌ Erro na API (HTTP {response.status_code})")
        print(response.text[:500])
        return []
        
    data = response.json()
    try:
        tasks = data.get("tasks", [])
        if not tasks:
            print("⚠️ Sem tarefas na resposta da API.")
            return []
            
        result = tasks[0].get("result", [])
        if not result:
            print(f"⚠️ Nenhum backlink encontrado para {target}")
            return []
            
        items = result[0].get("items", [])
        print(f"✅ Recebidos {len(items)} backlinks/referrals.")
        return items
    except Exception as e:
        print(f"❌ Erro ao processar JSON da API: {e}")
        return []

def process_results(items: list, target: str):
    records = []
    
    for item in items:
        record = {
            "checkout_target": target,
            "referring_page_url": item.get("url_from", ""),
            "referring_domain": item.get("domain_from", ""),
            "page_title": item.get("title", ""),
            "link_anchor": item.get("item_type", ""), # e.g. anchor
            "anchor_text": item.get("anchor", ""),
            "rank": item.get("rank", 0),
            "first_seen": item.get("first_seen", ""),
        }
        records.append(record)
        
    return records

def save_and_summarize(records: list):
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    df = pd.DataFrame(records)
    
    # Save CSV
    df.to_csv(OUTPUT_FILE, index=False, encoding="utf-8")
    print(f"\n💾 Salvo em: {OUTPUT_FILE}")
    
    print(f"\n{'='*60}")
    print(f"  📊 TOP VSLs / REFERRERS ENCONTRADOS")
    print(f"{'='*60}")
    
    for i, row in enumerate(records[:10], 1):
        domain = row["referring_domain"]
        url = row["referring_page_url"]
        rank = row["rank"]
        print(f"  {i}. Domínio: {domain} (Rank: {rank})")
        print(f"     URL: {url[:80]}...")
        if row["page_title"]:
            print(f"     Título: {row['page_title'][:60]}")
        print()
    print(f"{'='*60}\n")
    

def main():
    parser = argparse.ArgumentParser(description="Sentinel - Reverse Checkout Monitor")
    parser.add_argument("--target", type=str, required=True, help="Checkout domain/URL (e.g. pay.hotmart.com)")
    parser.add_argument("--limit", type=int, default=20, help="Max results")
    args = parser.parse_args()

    items = get_backlinks(args.target, args.limit)
    if items:
        records = process_results(items, args.target)
        save_and_summarize(records)

if __name__ == "__main__":
    main()
