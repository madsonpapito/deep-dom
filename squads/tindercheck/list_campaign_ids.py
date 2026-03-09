import os
import requests
from dotenv import load_dotenv

load_dotenv(os.path.join(r"C:\Users\madso\OneDrive\Área de Trabalho\AIOS", ".env"))
token = os.environ.get("META_ACCESS_TOKEN")
act_id = os.environ.get("AD_ACCOUNT_ID")

url = f"https://graph.facebook.com/v19.0/act_{act_id}/campaigns"
params = {
    "access_token": token,
    "fields": "id,name,status",
    "effective_status": "['ACTIVE']"
}

res = requests.get(url, params=params).json()

print("--- CAMPANHAS ATIVAS ---")
if "data" in res:
    for c in res["data"]:
        print(f"ID: {c['id']} | Nome: {c['name']}")
else:
    print(res)
