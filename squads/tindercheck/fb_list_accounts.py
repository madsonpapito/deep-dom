import os
import requests
from dotenv import load_dotenv

load_dotenv(os.path.join(r"C:\Users\madso\OneDrive\Área de Trabalho\AIOS", ".env"))
token = os.environ.get("META_ACCESS_TOKEN")

url = "https://graph.facebook.com/v19.0/me/adaccounts"
params = {
    "access_token": token,
    "fields": "name,account_id",
    "limit": 50
}

res = requests.get(url, params=params).json()

print("--- CONTAS DE ANÚNCIO VINCULADAS A ESTE TOKEN ---")
if "data" in res:
    for account in res["data"]:
        print(f"Nome: {account.get('name')} | ID: {account.get('account_id')}")
else:
    print("ERRO:", res)
