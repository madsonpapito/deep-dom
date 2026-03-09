import os
import requests
import pandas as pd
from dotenv import load_dotenv

load_dotenv(os.path.join(r"C:\Users\madso\OneDrive\Área de Trabalho\AIOS", ".env"))
token = os.environ.get("META_ACCESS_TOKEN")

# ID informado pelo usuario para a campanha TEST
campaign_id = "52515538766692"

url = f"https://graph.facebook.com/v19.0/{campaign_id}/insights"
params = {
    "access_token": token,
    "level": "ad",
    "fields": "campaign_name,adset_name,ad_name,spend,impressions,inline_link_clicks,actions",
    "date_preset": "last_3d"
}

res = requests.get(url, params=params).json()

print(f"\n=========================================")
print(f"    PERFORMANCE (TEST) NO REDTRACK/FB")
print(f"=========================================")

if "data" in res and len(res["data"]) > 0:
    data_list = []
    for item in res["data"]:
        purchases = 0
        if 'actions' in item:
            for action in item['actions']:
                if action.get('action_type') == 'purchase':
                    purchases = float(action.get('value', 0))
                    
        data_list.append({
            'Ad Name': item.get('ad_name', ''),
            'Spend': float(item.get('spend', 0)),
            'Imprs': int(item.get('impressions', 0)),
            'Clicks': int(item.get('inline_link_clicks', 0)),
            'Purchs': purchases
        })
        
    df = pd.DataFrame(data_list)
    grouped = df.groupby(["Ad Name"]).agg(
        Spend=('Spend', 'sum'),
        Imprs=('Imprs', 'sum'),
        Clicks=('Clicks', 'sum'),
        Purchs=('Purchs', 'sum')
    ).reset_index()
    
    grouped['CTR (%)'] = grouped.apply(lambda r: round((r['Clicks']/r['Imprs'])*100, 2) if r['Imprs']>0 else 0, axis=1)
    grouped['CPA ($)'] = grouped.apply(lambda r: round(r['Spend']/r['Purchs'], 2) if r['Purchs']>0 else 0, axis=1)
    grouped = grouped.fillna(0).sort_values(by="Spend", ascending=False)
    
    pd.set_option('display.max_columns', None)
    pd.set_option('display.width', 1000)
    
    print("\n--- PERFORMANCE POR CRIATIVO ---")
    print(grouped.to_string(index=False))
    
    total_spend = df['Spend'].sum()
    total_purchs = df['Purchs'].sum()
    total_clicks = df['Clicks'].sum()
    total_imprs = df['Imprs'].sum()
    avg_cpa = round(total_spend / total_purchs, 2) if total_purchs > 0 else 0
    avg_ctr = round((total_clicks / total_imprs) * 100, 2) if total_imprs > 0 else 0
    
    print("\n--- RESUMO GERAL DOS ULTIMOS 3 DIAS ---")
    print(f"Gasto Total: ${round(total_spend, 2)}")
    print(f"Cliques: {total_clicks} (CTR Medio: {avg_ctr}%)")
    print(f"Vendas FB: {total_purchs} (CPA FB: ${avg_cpa})")
else:
    print("Zero gasto ou impressoes nos ultimos 3 dias para esta campanha.")
