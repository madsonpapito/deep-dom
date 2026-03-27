# Task: Configurar Arquitetura de Trackeamento de DR

**Objetivo:** Garantir que 100% dos eventos de conversão sejam enviados para o GA4 e para a Meta CAPI com parâmetros UTM robustos, minimizando perdas de dados.

**Responsável:** @dev (com supervisão de @meta-ads-analyst-agent)

## Pré-requisitos

- Conta Stape.io configurada
- Container GTM Web existente
- Pixel Meta ativo
- Propriedade GA4 configurada
- UTMify (ou ferramenta similar) disponível

## Passos

### 1. Configurar Stape.io (GTM Server-Side)

1. Crie um novo container de GTM Server-Side no Stape.io
2. Configure o endpoint do servidor para receber dados do GTM Web
3. Implemente as tags de cliente necessárias para processar os dados recebidos
4. Configure domínio customizado para o endpoint (ex: `track.seudominio.com`)

### 2. Configurar GTM Web (Client-Side)

1. Instale a tag de configuração do GA4 enviando dados para o endpoint do Stape.io (GTM Server-Side)
2. Crie tags para os eventos padrão de e-commerce:
   - `view_item` — Visualização de página de vendas/VSL
   - `add_to_cart` — Clique no botão de compra
   - `begin_checkout` — Chegou ao checkout
   - `purchase` — Compra confirmada
3. Configure a tag da **Meta CAPI** para disparar a partir do GTM Server-Side
4. Isso garante envio servidor-para-servidor, aumentando precisão e resiliência

### 3. Padronização com UTMify

Utilize o UTMify para gerar **TODOS** os links de anúncios com consistência:

**Padrão Obrigatório de UTMs:**

| Parâmetro | Valor | Exemplo |
|-----------|-------|---------|
| `utm_source` | Plataforma de tráfego | `meta` |
| `utm_medium` | Tipo de mídia | `cpc` |
| `utm_campaign` | Nome/ID da campanha | `{{campaign.name}}` |
| `utm_content` | Nome/ID do conjunto | `{{adset.name}}` |
| `utm_term` | Nome/ID do anúncio | `{{ad.name}}` |
| `utm_id` | ID do produto/oferta | `oferta-escudo-luz` |

### 4. Validação Rigorosa

- [ ] Usar modo de depuração do GTM (Web e Server) para inspecionar fluxo
- [ ] Usar "Test Events" da Meta para confirmar eventos `purchase` recebidos (Browser + Server)
- [ ] Verificar desduplicação correta pela Meta (event_id matching)
- [ ] Verificar integridade dos dados no GA4 (Relatórios em Tempo Real + DebugView)
- [ ] Confirmar que UTMs aparecem corretamente nos relatórios do GA4

## Entregável

Um relatório confirmando trackeamento 100% funcional e desduplicado, com screenshots dos eventos de teste em ambas as plataformas.

## Referências

- [Stape.io Documentation](https://stape.io/docs)
- [Meta CAPI Setup Guide](https://developers.facebook.com/docs/marketing-api/conversions-api)
- [GA4 Server-Side Tagging](https://developers.google.com/analytics/devguides/collection/ga4/tag-setup)

---
*Task created by @aios-master (Orion) for DR Squad*
