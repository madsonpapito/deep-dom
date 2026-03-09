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
    "fields": "ad_name,spend,impressions,inline_link_clicks,actions,cost_per_action_type",
    "time_range": "{'since':'2025-12-30','until':'2026-02-28'}"
}

res = requests.get(url, params=params).json()

if "data" in res:
    data = []
    for item in res["data"]:
        purchases = 0
        cpa = 0.0
        
        if 'actions' in item:
            for action in item['actions']:
                if action.get('action_type') == 'purchase':
                    purchases = float(action.get('value', 0))
                    
        if 'cost_per_action_type' in item:
            for cost in item['cost_per_action_type']:
                if cost.get('action_type') == 'purchase':
                    cpa = float(cost.get('value', 0))
                    
        ad_name = item.get('ad_name', '')
        
        data.append({
            'Ad Name': ad_name,
            'Spend ($)': float(item.get('spend', 0)),
            'Impressions': int(item.get('impressions', 0)),
            'Link Clicks': int(item.get('inline_link_clicks', 0)),
            'Purchases': purchases,
            'CPA ($)': round(cpa, 2)
        })

    df = pd.DataFrame(data)
    
    # Lista de nomes esperados baseada nos arquivos locais
    # "AG0-AD20", "AG1-AD20", "AG7-AD10-A", "AG7-AD20", "AG7-AD4-C", "AG7-IMG3", "ANG8", "IM34...", "IMG34..."
    
    # Agrupa por nome do criativo
    grouped = df.groupby("Ad Name").agg(
        Total_Spend_USD=('Spend ($)', 'sum'),
        Impressions=('Impressions', 'sum'),
        Clicks=('Link Clicks', 'sum'),
        Purchases=('Purchases', 'sum')
    ).reset_index()
    
    grouped['CPA_USD'] = grouped.apply(lambda row: round(row['Total_Spend_USD'] / row['Purchases'], 2) if row['Purchases'] > 0 else 0, axis=1)
    
    grouped = grouped.sort_values(by="Total_Spend_USD", ascending=False)
    
    pd.set_option('display.max_columns', None)
    pd.set_option('display.width', 1000)
    print("===== DESEMPENHO DOS ÚLTIMOS 60 DIAS =====")
    print(grouped.to_string(index=False))

else:
    print("RESPOSTA DO FACEBOOK:")
    print(res)
