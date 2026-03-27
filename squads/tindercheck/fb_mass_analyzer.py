import os
import requests
import pandas as pd
from datetime import datetime
from dotenv import load_dotenv

# Carregar variáveis de ambiente
load_dotenv(os.path.join(r"C:\Users\madso\OneDrive\Área de Trabalho\AIOS", ".env"))
token = os.environ.get("META_ACCESS_TOKEN")

#IDs fornecidos pelo usuário
campaign_ids = [
    "52511935672692", 
    "52523607479292", 
    "52528000213692", 
    "52522984583492", 
    "52515538766692"
]

# Período: Março de 2026 (hoje é 13/03/2026)
since_date = "2026-03-01"
until_date = "2026-03-31" 

all_data = []

print(f"🚀 Iniciando extração de dados para {len(campaign_ids)} campanhas (Março 2026)...")

for c_id in campaign_ids:
    url = f"https://graph.facebook.com/v19.0/{c_id}/insights"
    params = {
        "access_token": token,
        "level": "ad",
        "fields": "campaign_name,adset_name,ad_name,spend,impressions,inline_link_clicks,actions",
        "time_range": f'{{"since":"{since_date}","until":"{until_date}"}}'
    }

    try:
        res = requests.get(url, params=params).json()
        
        if "data" in res and len(res["data"]) > 0:
            for item in res["data"]:
                purchases = 0
                if 'actions' in item:
                    for action in item['actions']:
                        if action.get('action_type') == 'purchase':
                            # Algumas vezes o FB retorna o valor monetário da compra, outras a quantidade. 
                            # Aqui focamos no contador de eventos de compra.
                            purchases += int(action.get('value', 0))
                            
                all_data.append({
                    'Campaign': item.get('campaign_name', ''),
                    'Adset': item.get('adset_name', ''),
                    'Ad Name': item.get('ad_name', ''),
                    'Spend': float(item.get('spend', 0)),
                    'Imprs': int(item.get('impressions', 0)),
                    'Clicks': int(item.get('inline_link_clicks', 0)),
                    'Purchs': purchases
                })
        else:
            print(f"⚠️  Sem dados para a campanha {c_id} no período.")
    except Exception as e:
        print(f"❌ Erro ao processar ID {c_id}: {str(e)}")

if all_data:
    df = pd.DataFrame(all_data)
    
    # Agrupamento para consolidar criativos repetidos em diferentes adsets
    grouped = df.groupby(["Ad Name"]).agg(
        Spend=('Spend', 'sum'),
        Imprs=('Imprs', 'sum'),
        Clicks=('Clicks', 'sum'),
        Purchs=('Purchs', 'sum')
    ).reset_index()
    
    # Cálculos de métricas
    grouped['CTR (%)'] = grouped.apply(lambda r: round((r['Clicks']/r['Imprs'])*100, 2) if r['Imprs']>0 else 0, axis=1)
    grouped['CPC ($)'] = grouped.apply(lambda r: round(r['Spend']/r['Clicks'], 2) if r['Clicks']>0 else 0, axis=1)
    grouped['CPA ($)'] = grouped.apply(lambda r: round(r['Spend']/r['Purchs'], 2) if r['Purchs']>0 else 0, axis=1)
    
    grouped = grouped.sort_values(by="Spend", ascending=False)
    
    # Output principal
    report_path = r"c:\Users\madso\OneDrive\Área de Trabalho\AIOS\squads\tindercheck\relatorio_final_marco.txt"
    with open(report_path, "w", encoding="utf-8") as f:
        f.write(f"=== RELATORIO DE TRAFEGO SQUAD TINDERCHECK - MARCO 2026 ===\n")
        f.write(f"Data da Analise: {datetime.now().strftime('%d/%m/%Y %H:%M:%S')}\n\n")
        f.write(grouped.to_string(index=False))
        f.write("\n\n--- RESUMO CONSOLIDADO ---\n")
        f.write(f"Gasto Total: ${round(df['Spend'].sum(), 2)}\n")
        f.write(f"Impressoes: {df['Imprs'].sum()}\n")
        f.write(f"Cliques: {df['Clicks'].sum()} (CTR Medio: {round((df['Clicks'].sum()/df['Imprs'].sum())*100, 2) if df['Imprs'].sum()>0 else 0}%)\n")
        f.write(f"Vendas: {df['Purchs'].sum()} (CPA Medio: ${round(df['Spend'].sum()/df['Purchs'].sum(), 2) if df['Purchs'].sum()>0 else 0})\n")

    print(f"\n✅ Relatório gerado com sucesso em: {report_path}")
    print(grouped.head(10).to_string(index=False))
else:
    print("\n❌ NENHUM DADO ENCONTRADO para os IDs e período informados.")
