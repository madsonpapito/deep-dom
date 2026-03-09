import os
from facebook_business.api import FacebookAdsApi
from facebook_business.adobjects.adaccount import AdAccount
import pandas as pd
from dotenv import load_dotenv

load_dotenv()

access_token = os.environ.get('META_ACCESS_TOKEN')
app_secret = "" 
app_id = "" 
id = os.environ.get('AD_ACCOUNT_ID')

FacebookAdsApi.init(access_token=access_token)

try:
    account = AdAccount('act_' + id)
    params = {
        'time_range': {'since': '2024-01-01', 'until': '2025-02-28'}, 
        'level': 'ad',
    }
    fields = [
        'ad_id',
        'ad_name',
        'impressions',
        'clicks',
        'spend',
        'inline_link_clicks',
        'inline_link_click_ctr',
        'cpc',
        'cpm',
        'cost_per_inline_link_click',
        'actions',
        'cost_per_action_type'
    ]

    insights = account.get_insights(fields=fields, params=params)

    data = []
    for insight in insights:
        # Pega as compras e CPA
        purchases = 0
        cpa = 0.0
        
        if 'actions' in insight:
            for action in insight['actions']:
                if action['action_type'] == 'purchase':
                    purchases = float(action['value'])
                    
        if 'cost_per_action_type' in insight:
            for cost in insight['cost_per_action_type']:
                if cost['action_type'] == 'purchase':
                    cpa = float(cost['value'])
                    
        data.append({
            'Ad ID': insight.get('ad_id'),
            'Ad Name': insight.get('ad_name'),
            'Spend ($)': float(insight.get('spend', 0)),
            'Impressions': int(insight.get('impressions', 0)),
            'Link Clicks': int(insight.get('inline_link_clicks', 0)),
            'CTR (%)': round(float(insight.get('inline_link_click_ctr', 0)), 2),
            'CPC ($)': round(float(insight.get('cost_per_inline_link_click', 0)), 2),
            'CPM ($)': round(float(insight.get('cpm', 0)), 2),
            'Purchases': purchases,
            'CPA ($)': round(cpa, 2)
        })

    df = pd.DataFrame(data)
    
    if not df.empty:
      # Sort by spend to find the real money makers/losers
      df = df.sort_values(by=['Spend ($)'], ascending=False)
      pd.set_option('display.max_columns', None)
      pd.set_option('display.width', 1000)
      print("===== AD PERFORMANCE METRICS =====")
      print(df.to_string(index=False))
    else:
      print("No data returned for the selected period.")

except Exception as e:
    print(f"Error accessing Facebook API: {e}")
