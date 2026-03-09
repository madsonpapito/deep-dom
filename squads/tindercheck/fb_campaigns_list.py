import os
import requests
import json
from dotenv import load_dotenv

load_dotenv(os.path.join(r"C:\Users\madso\OneDrive\Área de Trabalho\AIOS", ".env"))
token = os.environ.get("META_ACCESS_TOKEN")
act_id = os.environ.get("AD_ACCOUNT_ID")

url = f"https://graph.facebook.com/v19.0/act_{act_id}/campaigns"
params = {
    "access_token": token,
    "fields": "name,status",
    "limit": 500
}

res = requests.get(url, params=params).json()

print("--- BUSCANDO A CAMPANHA ESPECÍFICA ---")
found = False
if "data" in res:
    for item in res["data"]:
        name = item.get("name", "")
        if "SCALE" in name.upper() or "12/02" in name:
            print(f"[{item.get('status')}] {name}")
            found = True
            
    if not found:
        print("Achei as campanhas na conta, mas nenhuma chama 'SCALE' ou tem '12/02' nela.")
        print("Esses são os 10 últimos nomes criados para você conferir:")
        for i, item in enumerate(res["data"][:10]):
            print(f"[{item.get('status')}] {item.get('name')}")
else:
    print(res)
