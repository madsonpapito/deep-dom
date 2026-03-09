import os, sys, io
import requests
import pandas as pd
from dotenv import load_dotenv

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

load_dotenv(os.path.join(r"C:\Users\madso\OneDrive\Área de Trabalho\AIOS", ".env"))
token = os.environ.get("META_ACCESS_TOKEN")

campaigns = [
    {"id": "52511935672692", "label": "SCALE"},
    {"id": "52515538766692", "label": "TEST"}
]

output_lines = []
def p(text=""):
    output_lines.append(text)
    print(text)

for c in campaigns:
    url = f"https://graph.facebook.com/v19.0/{c['id']}/insights"
    
    params_total = {
        "access_token": token,
        "level": "ad",
        "fields": "campaign_name,adset_name,ad_name,spend,impressions,inline_link_clicks,actions,cpc,cpm",
        "time_range": '{"since":"2026-02-28","until":"2026-03-03"}'
    }
    res_total = requests.get(url, params=params_total).json()
    
    p(f"\n{'='*55}")
    p(f"  CAMPANHA: {c['label']} (28/02 - 03/03)")
    p(f"{'='*55}")
    
    if "data" in res_total and len(res_total["data"]) > 0:
        data_list = []
        for item in res_total["data"]:
            purchases = 0
            if 'actions' in item:
                for action in item['actions']:
                    if action.get('action_type') == 'purchase':
                        purchases = float(action.get('value', 0))
            data_list.append({
                'Ad': item.get('ad_name', ''),
                'Spend': float(item.get('spend', 0)),
                'Imprs': int(item.get('impressions', 0)),
                'Clicks': int(item.get('inline_link_clicks', 0)),
                'Sales': purchases
            })
        df = pd.DataFrame(data_list)
        grouped = df.groupby(["Ad"]).agg(
            Spend=('Spend','sum'), Imprs=('Imprs','sum'),
            Clicks=('Clicks','sum'), Sales=('Sales','sum')
        ).reset_index()
        grouped['CTR'] = grouped.apply(lambda r: round((r['Clicks']/r['Imprs'])*100,2) if r['Imprs']>0 else 0, axis=1)
        grouped['CPA'] = grouped.apply(lambda r: round(r['Spend']/r['Sales'],2) if r['Sales']>0 else 0, axis=1)
        grouped = grouped.sort_values(by="Spend", ascending=False)
        pd.set_option('display.max_columns', None)
        pd.set_option('display.width', 1200)
        p("\n--- POR CRIATIVO ---")
        p(grouped[['Ad','Spend','Imprs','Clicks','Sales','CTR','CPA']].to_string(index=False))
        
        total_spend = df['Spend'].sum()
        total_sales = df['Sales'].sum()
        total_clicks = df['Clicks'].sum()
        total_imprs = df['Imprs'].sum()
        avg_cpa = round(total_spend/total_sales,2) if total_sales>0 else 0
        avg_ctr = round((total_clicks/total_imprs)*100,2) if total_imprs>0 else 0
        p(f"\n  TOTAIS: Gasto=${round(total_spend,2)} | Clicks={total_clicks} | CTR={avg_ctr}% | Vendas={int(total_sales)} | CPA=${avg_cpa}")
    else:
        p("  Sem dados neste periodo.")
    
    # DIA A DIA
    params_daily = {
        "access_token": token,
        "level": "campaign",
        "fields": "campaign_name,spend,impressions,inline_link_clicks,actions",
        "time_range": '{"since":"2026-02-28","until":"2026-03-03"}',
        "time_increment": "1"
    }
    res_daily = requests.get(url, params=params_daily).json()
    
    p(f"\n  --- DIA A DIA ({c['label']}) ---")
    if "data" in res_daily and len(res_daily["data"]) > 0:
        for day in res_daily["data"]:
            date = day.get('date_start','?')
            spend = float(day.get('spend',0))
            imprs = int(day.get('impressions',0))
            clicks = int(day.get('inline_link_clicks',0))
            purchs = 0
            if 'actions' in day:
                for a in day['actions']:
                    if a.get('action_type') == 'purchase':
                        purchs = int(float(a.get('value',0)))
            ctr = round((clicks/imprs)*100,2) if imprs>0 else 0
            cpa = round(spend/purchs,2) if purchs>0 else 0
            tag = "OK" if purchs>0 else "SEM VENDA"
            p(f"  {date} | ${spend:.2f} | {imprs} imprs | {clicks} clicks | CTR {ctr}% | {purchs} vendas | CPA ${cpa} [{tag}]")
    else:
        p("  Sem dados diarios.")

# Salvar em arquivo UTF-8
with open("fb_4days_report_utf8.txt", "w", encoding="utf-8") as f:
    f.write("\n".join(output_lines))
