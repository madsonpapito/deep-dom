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
    "date_preset": "last_3d"  # Filtro dos últimos 3 dias
}

print("Iniciando busca na API do Facebook Ads para os últimos 3 dias...")
res = requests.get(url, params=params).json()

if "data" in res:
    data_scale = []
    data_test = []
    
    # Busca pelas strings (Scale) e (test)
    for item in res["data"]:
        camp_name = item.get('campaign_name', '').upper()
        
        # Filtro de compra
        purchases = 0
        if 'actions' in item:
            for action in item['actions']:
                if action.get('action_type') == 'purchase':
                    purchases = float(action.get('value', 0))
                    
        row = {
            'Campaign': item.get('campaign_name', ''),
            'Ad Name': item.get('ad_name', ''),
            'Spend': float(item.get('spend', 0)),
            'Imprs': int(item.get('impressions', 0)),
            'Clicks': int(item.get('inline_link_clicks', 0)),
            'Purchs': purchases
        }
        
        if "SCALE" in camp_name:
            data_scale.append(row)
        elif "TEST" in camp_name:
            data_test.append(row)

    pd.set_option('display.max_columns', None)
    pd.set_option('display.width', 1000)

    def print_report(data_list, title):
        print(f"\n=========================================")
        print(f"   📊 {title} (ÚLTIMOS 3 DIAS)")
        print(f"=========================================")
        if not data_list:
            print("Nenhum dado financeiro gravado para esta campanha nos últimos 3 dias.")
            return

        df = pd.DataFrame(data_list)
        
        # Agrupamento por Ad Name para ver criativos
        grouped = df.groupby(["Ad Name"]).agg(
            Spend=('Spend', 'sum'),
            Imprs=('Imprs', 'sum'),
            Clicks=('Clicks', 'sum'),
            Purchs=('Purchs', 'sum')
        ).reset_index()
        
        grouped['CTR (%)'] = grouped.apply(lambda r: round((r['Clicks']/r['Imprs'])*100, 2) if r['Imprs']>0 else 0, axis=1)
        grouped['CPA ($)'] = grouped.apply(lambda r: round(r['Spend']/r['Purchs'], 2) if r['Purchs']>0 else 0, axis=1)
        # Limpar nulos
        grouped = grouped.fillna(0)
        grouped = grouped.sort_values(by="Spend", ascending=False)
        
        print("\n--- PERFORMANCE POR CRIATIVO ---")
        print(grouped.to_string(index=False))
        
        total_spend = df['Spend'].sum()
        total_purchs = df['Purchs'].sum()
        total_clicks = df['Clicks'].sum()
        total_imprs = df['Imprs'].sum()
        avg_cpa = round(total_spend / total_purchs, 2) if total_purchs > 0 else 0
        avg_ctr = round((total_clicks / total_imprs) * 100, 2) if total_imprs > 0 else 0
        
        print("\n--- RESUMO GERAL DA CAMPANHA ---")
        print(f"Gasto Total: ${round(total_spend, 2)}")
        print(f"Cliques Totais: {total_clicks} (CTR Médio: {avg_ctr}%)")
        print(f"Vendas Marcadas FB: {total_purchs} (CPA FB: ${avg_cpa})")

    print_report(data_scale, "CAMPANHA DE ESCALA (SCALE)")
    print_report(data_test, "CAMPANHA DE TESTE (TEST)")

else:
    print("ERRO DA API OU SEM DADOS:")
    if "error" in res:
        print(res["error"])
    else:
        print(res)
