const fs = require('fs');
const path = require('path');

// Read .env
const envPath = path.resolve(__dirname, '.env');
let META_ACCESS_TOKEN, AD_ACCOUNT_ID;
fs.readFileSync(envPath, 'utf8').split('\n').forEach(line => {
    const [key, ...values] = line.split('=');
    if (key && values.length > 0) {
        const value = values.join('=').trim().replace(/^["'](.*?)["']$/, '$1');
        if (key.trim() === 'META_ACCESS_TOKEN') META_ACCESS_TOKEN = value;
        if (key.trim() === 'AD_ACCOUNT_ID') AD_ACCOUNT_ID = value;
    }
});

const CAMPAIGN_ID = '52523607479292';
const SINCE = '2026-03-04';
const UNTIL = '2026-03-12';

async function fetchJSON(url) {
    const r = await fetch(url);
    const json = await r.json();
    if (json.error) {
        console.error('API Error:', json.error.message);
    }
    return json;
}

async function fetchAllPages(url) {
    let all = [];
    let next = url;
    while (next) {
        const json = await fetchJSON(next);
        if (json.error) return all;
        all = all.concat(json.data || []);
        next = (json.paging && json.paging.next) ? json.paging.next : null;
    }
    return all;
}

async function main() {
    console.log(`🚀 Buscando dados da campanha ${CAMPAIGN_ID} de ${SINCE} até ${UNTIL}...`);
    const results = {};

    // 1. Campaign Info
    results.info = await fetchJSON(`https://graph.facebook.com/v19.0/${CAMPAIGN_ID}?fields=id,name,status,daily_budget,lifetime_budget,objective,bid_strategy&access_token=${META_ACCESS_TOKEN}`);

    // 2. Daily Insights
    console.log('📉 Buscando insights diários...');
    results.daily = await fetchAllPages(`https://graph.facebook.com/v19.0/${CAMPAIGN_ID}/insights?time_range={"since":"${SINCE}","until":"${UNTIL}"}&time_increment=1&fields=campaign_name,spend,impressions,clicks,ctr,cpc,cpm,reach,actions,cost_per_action_type&access_token=${META_ACCESS_TOKEN}`);

    // 3. Adset Insights (aggregated)
    console.log('📦 Buscando insights por AdSet...');
    results.adsets = await fetchAllPages(`https://graph.facebook.com/v19.0/${CAMPAIGN_ID}/insights?time_range={"since":"${SINCE}","until":"${UNTIL}"}&level=adset&fields=adset_id,adset_name,spend,impressions,clicks,ctr,cpc,actions,cost_per_action_type&access_token=${META_ACCESS_TOKEN}`);

    // 4. Ad Insights (daily breakdown for creative analysis)
    console.log('🎯 Buscando insights por Anúncio (diário)...');
    results.ads_daily = await fetchAllPages(`https://graph.facebook.com/v19.0/${CAMPAIGN_ID}/insights?time_range={"since":"${SINCE}","until":"${UNTIL}"}&time_increment=1&level=ad&fields=ad_id,ad_name,adset_name,spend,impressions,clicks,ctr,cpc,actions,cost_per_action_type&access_token=${META_ACCESS_TOKEN}`);

    // 5. Ad Insights (aggregated for summary)
    console.log('📊 Buscando insights por Anúncio (total)...');
    results.ads_total = await fetchAllPages(`https://graph.facebook.com/v19.0/${CAMPAIGN_ID}/insights?time_range={"since":"${SINCE}","until":"${UNTIL}"}&level=ad&fields=ad_id,ad_name,adset_name,spend,impressions,clicks,ctr,cpc,actions,cost_per_action_type&access_token=${META_ACCESS_TOKEN}`);

    fs.writeFileSync('campaign_analysis_data.json', JSON.stringify(results, null, 2));
    console.log('✅ Dados salvos em campaign_analysis_data.json');
}

main().catch(console.error);
