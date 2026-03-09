# Configuração do Apify API Token

## O Que é o Apify?

O Apify é uma plataforma de web scraping que permite rodar "actors" (scripts pré-prontos) para coletar dados de sites. Nesta skill, usamos o actor **Facebook Ads Library Scraper** para coletar anúncios da Meta Ad Library.

## Como Obter o Token

1. Acesse [apify.com](https://apify.com) e crie uma conta (gratuita)
2. Vá em **Settings → Integrations → API Tokens**
3. Clique em **Create new token**
4. Copie o token gerado

## Configurar no Projeto

Adicione a seguinte variável no arquivo `.env` na raiz do projeto AIOS:

```env
APIFY_API_TOKEN=apify_api_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

## Actor Usado

- **Nome:** Facebook Ads Library Scraper
- **URL:** [apify.com/apify/facebook-ads-library](https://apify.com/apify/facebook-ads-library)
- **Custo:** ~$0.25 por 1000 anúncios coletados (varia conforme uso)

## Limites do Plano Gratuito

- 30 dias de teste com $5 de crédito
- Suficiente para ~20.000 anúncios
- Após isso, planos começam em $49/mês

## Dicas de Uso

- Execute scans focados (1-2 keywords por vez) para economizar créditos
- Evite scans muito amplos (ex: buscar por "curso" vai retornar milhões)
- Configure `maxItems` no script para limitar resultados
- Os scans diários com 3-5 keywords consomem ~$1-2/dia
