import os
import requests
import json
from dotenv import load_dotenv

# Configurações Iniciais
load_dotenv(os.path.join(r"C:\Users\madso\OneDrive\Área de Trabalho\AIOS", ".env"))
token = os.environ.get("META_ACCESS_TOKEN")
act_id = os.environ.get("AD_ACCOUNT_ID")

def create_campaign():
    url = f"https://graph.facebook.com/v19.0/act_{act_id}/campaigns"
    payload = {
        "name": "[TESTE] TinderCheck - Variações AG7-IMG3 (ABO)",
        "objective": "OUTCOME", # Objetivo de Vendas/Conversão
        "status": "PAUSED",    # Criar pausada para revisão
        "special_ad_categories": "[]",
        "access_token": token
    }
    res = requests.post(url, data=payload).json()
    return res.get("id")

def create_adset(campaign_id, name):
    url = f"https://graph.facebook.com/v19.0/act_{act_id}/adsets"
    payload = {
        "name": name,
        "campaign_id": campaign_id,
        "daily_budget": 2000, # R$ 20,00 (O FB usa centavos na API)
        "billing_event": "IMPRESSIONS",
        "optimization_goal": "OFFSITE_CONVERSIONS",
        "bid_strategy": "LOWEST_COST_WITHOUT_CAP",
        "status": "PAUSED",
        "targeting": json.dumps({
            "geo_locations": {"countries": ["BR"]},
            "age_min": 25,
            "age_max": 45,
            "genders": [2] # Mulheres
        }),
        # Nota: Para conversão no Meta, geralmente precisamos associar ao Pixel.
        # Aqui assumimos que o Pixel padrão da conta será usado.
        "promoted_object": json.dumps({
            "pixel_id": os.environ.get("FB_PIXEL_ID", "COLOQUE_SEU_PIXEL_AQUI"),
            "custom_event_type": "PURCHASE"
        }),
        "access_token": token
    }
    res = requests.post(url, data=payload).json()
    return res.get("id")

if __name__ == "__main__":
    print("🚀 Iniciando criação da Estrutura ABO (1-3-0)...")
    
    # 1. Criar Campanha
    campaign_id = create_campaign()
    if not campaign_id:
        print("❌ Erro ao criar campanha. Verifique o Token e Ad Account ID.")
        exit()
    print(f"✅ Campanha Criada: {campaign_id}")
    
    # 2. Criar Adsets baseados no Briefing
    adsets = [
        "V1 - Dossiê de Insônia (Dor)",
        "V2 - Mecanismo IA (Tecnológico)",
        "V3 - Relatório Final (Social Proof)"
    ]
    
    for adset_name in adsets:
        adset_id = create_adset(campaign_id, adset_name)
        if adset_id:
            print(f"✅ Adset Criado: {adset_name} | ID: {adset_id}")
        else:
            print(f"⚠️ Falha ao criar adset: {adset_name}")

    print("\n💡 ESTRUTURA PRONTA!")
    print("Próximo passo: No Gerenciador de Anúncios, suba os criativos para cada um dos conjuntos acima.")
    print("Eu criei tudo como 'PAUSADO' para você revisar antes de soltar o orçamento.")
