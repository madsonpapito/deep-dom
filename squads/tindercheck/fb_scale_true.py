import os
import requests
import json
import pandas as pd
from dotenv import load_dotenv

load_dotenv(os.path.join(r"C:\Users\madso\OneDrive\Área de Trabalho\AIOS", ".env"))
token = os.environ.get("META_ACCESS_TOKEN")
# Usando o ID EXATO da campanha informado
campaign_id = "52515538766692"

url = f"https://graph.facebook.com/v19.0/{campaign_id}/insights"
params = {
    "access_token": token,
    "level": "ad",
    "fields": "adset_name,ad_name,spend,impressions,inline_link_clicks,actions",
    "date_preset": "maximum"
}

res = requests.get(url, params=params).json()

if "data" in res:
    data = []
    
    for item in res["data"]:
        purchases = 0
        if 'actions' in item:
            for action in item['actions']:
                if action.get('action_type') == 'purchase':
                    purchases = float(action.get('value', 0))
                    
        data.append({
            'Adset': item.get('adset_name', ''),
            'Ad Name': item.get('ad_name', ''),
            'Spend': float(item.get('spend', 0)),
            'Imprs': int(item.get('impressions', 0)),
            'Clicks': int(item.get('inline_link_clicks', 0)),
            'Purchs': purchases
        })

    if data:
        df = pd.DataFrame(data)
        
        grouped = df.groupby(["Ad Name"]).agg(
            Spend=('Spend', 'sum'),
            Imprs=('Imprs', 'sum'),
            Clicks=('Clicks', 'sum'),
            Purchs=('Purchs', 'sum')
        ).reset_index()
        
        grouped['CTR (%)'] = grouped.apply(lambda r: round((r['Clicks']/r['Imprs'])*100, 2) if r['Imprs']>0 else 0, axis=1)
        grouped['CPA ($)'] = grouped.apply(lambda r: round(r['Spend']/r['Purchs'], 2) if r['Purchs']>0 else 0, axis=1)
        grouped = grouped.sort_values(by="Spend", ascending=False)
        
        pd.set_option('display.max_columns', None)
        pd.set_option('display.width', 1000)
        
        print(f"\n=== RX PROFUNDO DA CAMPANHA DE TESTE ===")
        print(f"ID: {campaign_id}")
        print("\n--- PERFORMANCE POR CRIATIVO ---")
        print(grouped.to_string(index=False))
        
        total_spend = df['Spend'].sum()
        total_purchs = df['Purchs'].sum()
        total_clicks = df['Clicks'].sum()
        total_imprs = df['Imprs'].sum()
        avg_cpa = round(total_spend / total_purchs, 2) if total_purchs > 0 else 0
        avg_ctr = round((total_clicks / total_imprs) * 100, 2) if total_imprs > 0 else 0
        
        print("\n--- RESUMO DA CAMPANHA ---")
        print(f"Gasto Total FB: €{round(total_spend, 2)}")
        print(f"Cliques Totais: {total_clicks} (CTR Médio: {avg_ctr}%)")
        print(f"Vendas FB Marcadas: {total_purchs} (CPA FB: €{avg_cpa})")
    else:
        print("API não retornou dados de entrega financeira válidos para esta campanha no período Maximum. Ela pode ter rodado fora do Token ou os dados não propagaram nos insights da Graph.")
else:
    print("ERRO DA API:", res)
