# TOL - The Obedience Language (Sales Page)

## User Story
Como produtor digital, 
Eu quero uma nova página de vendas (Sales Page) para o meu produto "The Obedience Language" baseada no conteúdo e copy validados pelo mercado, 
Para que eu possa iniciar o remarketing e campanhas de aquisição escaláveis com altas taxas de conversão.

## Contexto e Escopo (Context & Scope)
O projeto inicial consiste no desenvolvimento completo da Landing Page/Sales Page principal do produto. 
A análise da copy da página original (que inclui dor, solução em 6 pilares, pacote de bônus, e ancoragem de preço de $635 por $47) já foi realizada.
O estilo visual deve seguir os padrões de alta conversão, sendo rápido, focado em responsividade mobile (90% do tráfego) e usando elementos de autoridade e escassez quando apropriado.

## Acceptance Criteria
- [ ] O design da página deve ser criado em Next.js (arquitetura semelhante aos projetos anteriores como o Deep Domains).
- [ ] A copy extraída pelo Analyst deve estar integralmente mapeada nas seções da página.
- [ ] Seções obrigatórias:
  - Hero (Headline + Subheadline + CTA Primário + VSL ou Imagem forte dependendo da estratégia).
  - Identificação de Dores (Agitação do problema das mães).
  - Apresentação da Solução / Método de 6 pilares.
  - Grade de Bônus (5 bônus empilhados).
  - Apresentação da Oferta ($635 ancorado, preço real $47).
  - Garantia de 30 dias.
  - Footer com links legais e e-mail de suporte.
- [ ] Layout mobile-first com imagens e elementos visuais de alta fidelidade e profissionalismo.
- [ ] Tracking e links de checkout devem estar preparados para futura integração.

## Notas do @sm (Scrum Master)
- **Status da Sprint (Dia 1):** Projeto TOL iniciado com sucesso! Extraímos com êxito a copy estruturada e implementamos 4 rotas críticas: Main Sales Page (/tol), VSL Delay (/tol/vsl), Upsell (/tol/upsell) e Downsell (/tol/downsell).
- **Ativos Visuais:** Todos os mockups de produtos, capas de e-books, depoimentos e fotos emocionais da autora (Michelle Bottrel) e de dores maternas foram capturados, salvos em `public/tol/media` e já integrados na versão ilustrada da Main Sales Page.
- **Ações para Amanhã (Dia 2):** 
  - Conferir pessoalmente a navegação local levantada em `localhost:3000`.
  - Revisar com o usuário se a tipografia e cores atendem perfeitamente.
  - Finalizar com deploy em Produção (Vercel) e validação dos links de checkout definitivos.

## Tarefas (Tasks)
- [x] Configuração inicial do repositório/branch para a página TOL.
- [x] Extração de mídias nativas (mockups e ilustrações) e cópias originais.
- [x] Desenvolvimento dos componentes da Sales Page Institucional em React/Tailwind.
- [x] Desenvolvimento de VSL Hero Page, Upsell e Downsell completos.
- [x] Revisão de código e testes Linter.
- [ ] Revisão UX e responsividade fina com o usuário (Desktop/Mobile).
- [ ] Deploy para Produção (Vercel).
