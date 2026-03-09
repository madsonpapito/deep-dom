import os
import requests
import json
import pandas as pd
from dotenv import load_dotenv

load_dotenv(os.path.join(r"C:\Users\madso\OneDrive\Área de Trabalho\AIOS", ".env"))
token = os.environ.get("META_ACCESS_TOKEN")
act_id = "1593816948471366" 

url = f"https://graph.facebook.com/v19.0/act_{act_id}/insights"
params = {
    "access_token": token,
    "level": "ad",
    "fields": "campaign_name,adset_name,ad_name,spend,impressions,inline_link_clicks,actions",
    "date_preset": "maximum"
}

res = requests.get(url, params=params).json()

print("Procurando resultados reais gravados pela API:")
if "data" in res:
    data = []
    
    for item in res["data"]:
        # Traz tudo que tem SCALE (case insensitive)
        camp_name = item.get('campaign_name', '')
        if "SCALE" in camp_name.upper():
            purchases = 0
            if 'actions' in item:
                for action in item['actions']:
                    if action.get('action_type') == 'purchase':
                        purchases = float(action.get('value', 0))
                        
            data.append({
                'Camp': camp_name,
                'Ad Name': item.get('ad_name', ''),
                'Spend': float(item.get('spend', 0)),
                'Imprs': int(item.get('impressions', 0)),
                'Clicks': int(item.get('inline_link_clicks', 0)),
                'Purchs': purchases
            })

    if data:
        df = pd.DataFrame(data)
        grouped = df.groupby(["Camp", "Ad Name"]).agg(
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
        
        print("\n=== RX DAS CAMPANHAS 'SCALE' ===")
        print(grouped.to_string(index=False))
    else:
        print("\n Nenhuma campanha chamada SCALE possui dados de GASTO registrados no Facebook (ela pode estar Pausada sem rodar ou estar em outra conta de anúncios).")
else:
    print("ERRO:", res)

