# Estratégia de Funil de Vendas: Cura Ancestral (Integrado Lastlink)

Este documento detalha o fluxo de vendas completo para o infoproduto **Manual da Cura Ancestral**, atualizado com a estrutura de páginas e integração Lastlink.

## 🛒 Produto Principal: Manual da Cura Ancestral (`index.html`)
- **Preço**: R$ 147,00 (ou 12x de R$ 14,67).
- **Entregáveis**: Manual Principal SAB + Bônus (Faxina Hepática, Mercado de Ouro, Cozinha Alquímica e Comunidade VIP).
- **Checkout**: `https://lastlink.com/p/CE3FF59AF/checkout-payment`

---

## 🚀 Fluxo de Upsells & Downsells (One-Click Buy)

### 1. Upsell 1: O Cofre das Ervas Raras (`upsell-1.html`)
- **Oferta**: Protocolo de regeneração avançada para reversão de danos metabólicos profundos.
- **Preço**: R$ 197,00.
- **Fluxo**:
    - **SIM**: Direciona para `upsell-2.html`.
    - **NÃO**: Direciona para `downsell-1.html`.

### 2. Downsell 1: Protocolo SOS: Alívio Imediato (`downsell-1.html`)
- **Oferta**: Plano de emergência para dores agudas, artrite e artrose.
- **Preço**: R$ 47,00.
- **Fluxo**:
    - **SIM/NÃO**: Direciona para `upsell-2.html`.

### 3. Upsell 2: Círculo Secreto dos Mestres (`upsell-2.html`)
- **Oferta**: Acesso anual à comunidade VIP com lives mensais de tira-dúvidas.
- **Preço**: R$ 297,00 (Anual) ou 12x R$ 29,70.
- **Fluxo**:
    - **SIM**: Direciona para a Área de Membros (`dashboardV2`).
    - **NÃO**: Direciona para `downsell-2.html`.

### 4. Downsell 2: Guia Farmácia na Cozinha (`downsell-2.html`)
- **Oferta**: Guia de consulta rápida para substituições naturais do dia a dia.
- **Preço**: R$ 27,00.
- **Fluxo**:
    - **SIM/NÃO**: Direciona para a Área de Membros (`dashboardV2`).

---

## 🔗 Estrutura de Redirecionamento Final
- **Destino**: `https://lastlink.com/app/member/dashboardV2`

## 🧪 Gatilhos & Prova Social (Implementados)
- **A Janela de Erosão Gástrica**: Alerta no topo das páginas sobre o custo da espera.
- **Sinergia Térmico-Enzimática (SAB)**: O mecanismo único que diferencia o produto.
- **Garantia 'Ou você cura ou eu pago'**: 30 dias de teste com risco zero para o cliente.
