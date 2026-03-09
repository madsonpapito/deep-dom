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
    
    for item in res["data"]:
        camp_name = item.get('campaign_name', '')
        # Filtrando pela campanha EXATA que você pediu: (SCALE) CP1 - PFSARA-04 - TINDER EN - 1-1-X - 12/02
        if "(SCALE) CP1 - PFSARA-04 - TINDER EN - 1-1-X - 12/02" not in camp_name:
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
        grouped = df.groupby(["Ad Name"]).agg(
            Spend=('Spend', 'sum'),
            Imprs=('Imprs', 'sum'),
            Clicks=('Clicks', 'sum'),
            Purchs=('Purchs', 'sum')
        ).reset_index()
        
        # Recálculo de métricas
        grouped['CTR (%)'] = grouped.apply(lambda r: round((r['Clicks']/r['Imprs'])*100, 2) if r['Imprs']>0 else 0, axis=1)
        grouped['CPC ($)'] = grouped.apply(lambda r: round(r['Spend']/r['Clicks'], 2) if r['Clicks']>0 else 0, axis=1)
        grouped['CPM ($)'] = grouped.apply(lambda r: round((r['Spend']/r['Imprs'])*1000, 2) if r['Imprs']>0 else 0, axis=1)
        grouped['CPA ($)'] = grouped.apply(lambda r: round(r['Spend']/r['Purchs'], 2) if r['Purchs']>0 else 0, axis=1)
        
        grouped = grouped.sort_values(by="Spend", ascending=False)
        pd.set_option('display.max_columns', None)
        pd.set_option('display.width', 1000)
        
        print("\n=== RX PROFUNDO: (SCALE) CP1 - PFSARA-04 - TINDER EN - 1-1-X - 12/02 ===")
        print(grouped.to_string(index=False))
        
        total_spend = df['Spend'].sum()
        total_purchs = df['Purchs'].sum()
        total_clicks = df['Clicks'].sum()
        total_imprs = df['Imprs'].sum()
        avg_cpa = round(total_spend / total_purchs, 2) if total_purchs > 0 else 0
        avg_ctr = round((total_clicks / total_imprs) * 100, 2) if total_imprs > 0 else 0
        
        print("\n--- RESUMO DA CAMPANHA ---")
        print(f"Gasto Total FB: ${round(total_spend, 2)}")
        print(f"Cliques Totais: {total_clicks} (CTR Médio: {avg_ctr}%)")
        print(f"Vendas FB Marcadas: {total_purchs} (CPA FB: ${avg_cpa})")
    else:
        print("Nenhum dado com gastos/impressões encontrado para a campanha: (SCALE) CP1 - PFSARA-04 - TINDER EN - 1-1-X - 12/02")
else:
    print("ERRO DA API:", res)
