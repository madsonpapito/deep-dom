import os
import requests
import pandas as pd
from dotenv import load_dotenv

load_dotenv(os.path.join(r"C:\Users\madso\OneDrive\Área de Trabalho\AIOS", ".env"))
token = os.environ.get("META_ACCESS_TOKEN")
act_id = os.environ.get("AD_ACCOUNT_ID")

url = f"https://graph.facebook.com/v19.0/act_{act_id}/insights"
params = {
    "access_token": token,
    "level": "ad",
    "fields": "campaign_name,adset_name,ad_name,spend,impressions,inline_link_clicks,actions",
    "date_preset": "maximum"
}

res = requests.get(url, params=params).json()

if "data" in res:
    data = []
    
    # Primeira checagem para mostrar todos os nomes de campanhas únicos
    c_names = set(item.get('campaign_name') for item in res["data"])
    print("=== TODAS AS CAMPANHAS ENCONTRADAS NESTA CONTA ===")
    for c in sorted(c_names):
        print(f"- {c}")
        
    print("\n")
    
    # Busca pela exata "SCALE"
    for item in res["data"]:
        camp_name = item.get('campaign_name', '')
        if "SCALE" not in camp_name.upper():
            continue
            
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
        
        # Agrupamento
        grouped = df.groupby(["Adset", "Ad Name"]).agg(
            Spend=('Spend', 'sum'),
            Imprs=('Imprs', 'sum'),
            Clicks=('Clicks', 'sum'),
            Purchs=('Purchs', 'sum')
        ).reset_index()
        
        # Recálculo de métricas
        grouped['CTR (%)'] = grouped.apply(lambda r: round((r['Clicks']/r['Imprs'])*100, 2) if r['Imprs']>0 else 0, axis=1)
        grouped['CPA ($)'] = grouped.apply(lambda r: round(r['Spend']/r['Purchs'], 2) if r['Purchs']>0 else 0, axis=1)
        grouped = grouped.sort_values(by="Spend", ascending=False)
        
        pd.set_option('display.max_columns', None)
        pd.set_option('display.width', 1000)
        
        print("=== RESULTADOS: (SCALE) CP1 - PFSARA-04 ===")
        print(grouped.to_string(index=False))
        
        total_spend = df['Spend'].sum()
        total_purchs = df['Purchs'].sum()
        total_clicks = df['Clicks'].sum()
        total_imprs = df['Imprs'].sum()
        avg_cpa = round(total_spend / total_purchs, 2) if total_purchs > 0 else 0
        avg_ctr = round((total_clicks / total_imprs) * 100, 2) if total_imprs > 0 else 0
        
        print("\n--- RESUMO GERAL ---")
        print(f"Gasto FB: ${round(total_spend, 2)}")
        print(f"Vendas FB: {total_purchs} (CPA FB: ${avg_cpa})")
        print(f"Cliques: {total_clicks} (CTR Médio: {avg_ctr}%)")
    else:
        print("\nNenhum dado financeiro gravado com a string 'SCALE' apareceu na API de Insights (Custo Zero ou nome trocado).")
else:
    print("RESPOSTA VAZIA OU ERRO DA API.")
