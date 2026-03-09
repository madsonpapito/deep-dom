---
name: infoproduct-traffic-monitor
description: Skill para monitoramento automatizado de tráfego de infoprodutos, scraping de anúncios da Meta Ad Library, e identificação de ofertas escaladas.
---

# Infoproduct Traffic Monitor Skill

## Visão Geral

Esta skill automatiza a busca e análise de infoprodutos em escala. Ela combina três estratégias complementares para fornecer uma visão 360° do mercado de infoprodutos:

1. **Meta Ad Library Scraping** — Coleta automatizada de anúncios via Apify
2. **Checkout Reverse Engineering** — Identificação de VSLs/TSLs via análise de referrals
3. **Source Code Intelligence** — Mapeamento de infraestrutura de marketing via PublicWWW

## Componentes

```
infoproduct-traffic-monitor/
├── SKILL.md                          # Este arquivo
├── scripts/
│   ├── run_ads_library_scraper.py    # Scraper Apify para Meta Ad Library
│   └── analyze_traffic.py           # Análise e classificação de dados coletados
├── references/
│   ├── target_urls.txt              # URLs de checkout para monitorar
│   ├── target_keywords.txt          # Keywords de busca para Ad Library
│   ├── source_code_snippets.txt     # Snippets para buscar no PublicWWW
│   └── apify_config.md             # Configuração do Apify API Token
└── output/
    └── (gerado) infoproduct_traffic_data.csv
```

## Pré-requisitos

1. **Python 3.8+** com as dependências: `requests`, `pandas`, `python-dotenv`
2. **APIFY_API_TOKEN** — Token da API Apify configurado no `.env` do projeto
3. Acesso manual a **SimilarWeb/Semrush** (via browser) para análise de tráfego
4. Acesso manual a **PublicWWW.com** (via browser) para busca de código-fonte

## Workflow Completo

### PASSO 1: Coleta de Dados da Meta Ad Library (Diária)

**Comando:** `*scan-ads {keyword}`

1. O script `run_ads_library_scraper.py` é executado com a keyword fornecida
2. Ele chama o Apify Facebook Ads Library Scraper via API
3. Para cada anúncio encontrado, coleta:
   - `ad_id` — ID único do anúncio
   - `page_name` — Nome da página/anunciante
   - `destination_link` — URL de destino (VSL, TSL ou checkout direto)
   - `creative_url` — URL da imagem/vídeo do criativo
   - `impressions_range` — Faixa de impressões estimada
   - `start_date` — Data de início do anúncio
   - `is_active` — Se o anúncio ainda está ativo
4. Os dados são salvos/atualizados no arquivo `output/infoproduct_traffic_data.csv`

**Interpretação dos Dados:**
- Se `destination_link` aponta para um checkout (hotmart, kiwify, etc.) → é um link direto
- Se `destination_link` aponta para outro domínio → provavelmente é uma VSL/TSL (mais valioso!)
- Anúncios ativos por 30+ dias com múltiplos criativos = forte sinal de escala

### PASSO 2: Engenharia Reversa de Checkout (Semanal)

**Comando:** `*reverse-checkout {platform}`

1. O agente deve acessar SimilarWeb ou Semrush via browser
2. Inserir a URL do checkout da plataforma (ex: `pay.hotmart.com`)
3. Navegar até "Top Referrals" ou "Referring Websites"
4. Identificar as VSLs/TSLs que mais enviam tráfego
5. Para cada VSL/TSL encontrada:
   - Verificar se está ativa
   - Estimar volume de tráfego
   - Adicionar à lista de monitoramento (`target_urls.txt`)

**Plataformas de Checkout (ver `references/target_urls.txt`):**
- `pay.hotmart.com`
- `checkout.kiwify.com.br` / `pay.kiwify.com.br`
- `go.perfectpay.com.br`
- `checkout.braip.com`
- `sun.eduzz.com`
- `pay.monetizze.com.br`

### PASSO 3: Espionagem de Código-Fonte (Semanal)

**Comando:** `*scan-source-code {snippet}`

1. O agente deve acessar PublicWWW.com via browser
2. Buscar pelos snippets listados em `references/source_code_snippets.txt`
3. Para cada resultado:
   - Verificar se a página é uma VSL/TSL
   - Registrar quais tecnologias são usadas
   - Cruzar com dados do Apify e SimilarWeb

**Snippets a Buscar (ver `references/source_code_snippets.txt`):**

| Categoria | Snippets |
|-----------|----------|
| Players de Vídeo | `vturb.com`, `player.vimeo.com`, `cdn.panda`, `wistia.com`, `hotmart.com/player` |
| Pixels/Tags | `fbq('init'`, `ttq.load`, `gtag(`, `hotjar`, `clarity.ms` |
| Trackers | `utmify`, `redtrack`, `voluum`, `clickmagick` |

### PASSO 4: Análise e Classificação

**Comando:** `*top-offers` ou `*analyze-funnel {url}`

O script `analyze_traffic.py` processa todos os dados coletados e calcula um **score de escala** para cada oferta:

**Critérios de Score (0-10):**
| Fator | Peso | Pontuação |
|-------|------|-----------|
| Tempo ativo | 25% | 30+ dias = 10pts, 14-30 = 7pts, 7-14 = 4pts, <7 = 1pt |
| Nº de criativos | 20% | 10+ = 10pts, 5-9 = 7pts, 3-4 = 4pts, 1-2 = 1pt |
| Volume de tráfego | 25% | 100k+ = 10pts, 50k-100k = 7pts, 10k-50k = 4pts, <10k = 1pt |
| Stack tecnológico | 15% | 3+ trackers/pixels = 10pts, 2 = 7pts, 1 = 4pts, 0 = 1pt |
| Múltiplas fontes confiram | 15% | 3 fontes = 10pts, 2 = 7pts, 1 = 4pts |

**Classificação:**
- Score 8-10 ⭐⭐⭐ = **Oferta Altamente Escalada** — Investigar a fundo
- Score 5-7 ⭐⭐ = **Oferta em Escala** — Monitorar de perto
- Score 3-4 ⭐ = **Oferta Potencial** — Acompanhar
- Score 1-2 = **Iniciante/Teste** — Ignorar

### PASSO 5: Relatório Consolidado

**Comando:** `*generate-report`

Gera um relatório markdown com:
- Top 10 ofertas escaladas do período
- Tendências de nichos (quais estão crescendo/caindo)
- Novos entrantes relevantes
- Competidores com maior atividade
- Recomendações de ação

## Saída de Dados

O arquivo principal de output é `infoproduct_traffic_data.csv` com as seguintes colunas:

```csv
ad_id,page_name,destination_link,link_type,creative_url,impressions_range,start_date,is_active,days_active,num_creatives,niche,traffic_estimate,tech_stack,scale_score,sources,last_updated
```

## Notas Importantes

- A coleta Apify consome créditos. Monitore o uso no dashboard Apify.
- SimilarWeb e PublicWWW são acessados via browser (não via API por padrão).
- Os dados devem ser cruzados entre as fontes para maior confiabilidade.
- NUNCA copie ou plagie ofertas. Use os insights para entender padrões.
