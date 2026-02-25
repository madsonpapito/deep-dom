# Renova 30 - Product Requirements Document (PRD)

## 1. Metas e Contexto

### 1.1. Metas
- Promover a perda de peso (até 1kg/semana) e a tonificação muscular.
- Reduzir sintomas da menopausa (calorões, cansaço, dores).
- Oferecer um programa acessível de Pilates em casa (10 min/dia).
- Fornecer um plano alimentar focado no equilíbrio hormonal.
- Criar uma comunidade de apoio para as alunas.

### 1.2. Contexto
O projeto atende mulheres na menopausa que sofrem com ganho de peso, perda de massa muscular e instabilidade emocional devido à baixa hormonal. O "Renova 30" se posiciona como uma solução natural, rápida e de baixo impacto para restaurar o equilíbrio do corpo e a qualidade de vida.

### 1.3. Histórico de Alterações
| Data | Versão | Descrição | Autor |
| :--- | :--- | :--- | :--- |
| 2026-02-25 | 1.0 | Versão inicial do PRD. | Morgan (@pm) |

---

## 2. Requisitos

### 2.1. Requisitos Funcionais (FR)
1.  **FR1:** O sistema deve apresentar uma página de vendas pública com checkout.
2.  **FR2:** O sistema deve permitir a compra de produtos adicionais (order bumps).
3.  **FR3:** O sistema deve cadastrar a usuária e enviar acesso após a compra.
4.  **FR4:** O sistema deve apresentar um quiz de onboarding e gerar um PDF personalizado.
5.  **FR5:** O sistema deve fornecer uma área de membros segura para alunas logadas.
6.  **FR6:** O sistema deve exibir uma biblioteca de vídeos de treino organizados.
7.  **FR7:** O sistema deve permitir o acesso a bônus em PDF e áudio.
8.  **FR8:** O sistema deve permitir que a usuária registre seu progresso.

### 2.2. Requisitos Não-Funcionais (NFR)
1.  **NFR1:** A página de vendas deve carregar em menos de 2.5s.
2.  **NFR2:** A aplicação deve ser totalmente responsiva (desktop e mobile).
3.  **NFR3:** O acesso aos dados das alunas deve ser estritamente seguro e privado.
4.  **NFR4:** A arquitetura deve ser escalável para suportar picos de acesso.

---

## 3. Metas de Design (UI/UX)

- **Visão Geral da UX:** A experiência deve ser acolhedora, calma e encorajadora, com uma interface limpa, intuitiva e que transmita confiança.
- **Telas Principais:** Página de Vendas, Dashboard, Biblioteca de Treinos, Player de Vídeo, Plano Alimentar, Bônus, Acompanhamento de Progresso.
- **Acessibilidade:** Seguir o padrão **WCAG 2.1 AA**.
- **Plataformas:** **Web Responsivo**, com foco principal em smartphones.
- **Branding:** A ser definido, com aparência profissional, saudável e premium.

---

## 4. Premissas Técnicas

- **Estrutura:** Monorepo com **Turborepo**.
- **Arquitetura:** Serverless na **Vercel**.
- **Testes:** Pirâmide de Testes Completa (Unidade, Integração, E2E).
- **Base:** Iniciado com o template **T3 Stack**.
- **Infraestrutura de Dados:** Gerenciada pelo **Supabase**.

---

## 5. Lista de Épicos

- **Épico 1: Fundação e Onboarding da Aluna:** Permitir que uma nova aluna compre, se cadastre e veja seu protocolo personalizado.
- **Épico 2: Biblioteca de Conteúdo e Consumo de Treinos:** Implementar a funcionalidade de navegar e assistir aos vídeos de treino.
- **Épico 3: Conteúdos Adicionais e Engajamento:** Disponibilizar o plano alimentar, bônus e acesso à comunidade.
- **Épico 4: Acompanhamento de Progresso:** Implementar as ferramentas para registro e visualização do progresso.

---

## 6. Detalhamento dos Épicos

### Épico 1: Fundação e Onboarding da Aluna
**Meta:** Estabelecer a infraestrutura, autenticação e permitir que uma nova aluna compre, se cadastre e acesse a área de membros, criando a primeira fatia de valor ponta-a-ponta do produto.

- **História 1.1: Configuração do Ambiente:** Configurar o projeto monorepo com CI/CD e Supabase.
- **História 1.2: Construção da Página de Vendas:** Criar a UI estática e responsiva da página de vendas.
- **História 1.3: Integração do Checkout:** Conectar o botão de compra a um gateway de pagamento e configurar o webhook.
- **História 1.4: Criação de Conta Pós-Compra:** A API deve receber o webhook e criar o usuário no Supabase Auth.
- **História 1.5: Acesso à Área de Membros:** Permitir que a nova aluna faça login via link mágico e acesse um dashboard protegido.

### Épico 2: Biblioteca de Conteúdo e Consumo de Treinos
**Meta:** Implementar a funcionalidade principal do produto, permitindo que a aluna navegue pela biblioteca de treinos, filtre por categoria e assista aos vídeos.

- **História 2.1: API para Conteúdo de Treinos:** Criar os procedimentos tRPC para buscar semanas de programa e listas de treinos do banco de dados.
- **História 2.2: UI da Biblioteca de Treinos:** Desenvolver a página que exibe as semanas e os treinos disponíveis, com filtros por nível e foco.
- **História 2.3: UI do Player de Vídeo:** Criar a página que exibe um treino específico com o player de vídeo incorporado.

### Épico 3: Conteúdos Adicionais e Engajamento
**Meta:** Entregar o valor adicional do produto, disponibilizando o plano alimentar, as receitas e os bônus em PDF/áudio, além de integrar o link para a comunidade.

- **História 3.1: API para Conteúdo Adicional:** Criar os procedimentos tRPC para buscar os bônus e planos alimentares.
- **História 3.2: UI do Plano Alimentar:** Desenvolver a página para exibir os cardápios semanais e as receitas.
- **História 3.3: UI da Página de Bônus:** Desenvolver a página para listar e permitir o download dos materiais bônus.
- **História 3.4: Exibição do Link da Comunidade:** Adicionar uma seção ou página na área de membros com o link para o grupo de Telegram/Facebook.

### Épico 4: Acompanhamento de Progresso
**Meta:** Aumentar o engajamento e a retenção da aluna, implementando as ferramentas para que ela possa registrar e visualizar seu progresso semanalmente.

- **História 4.1: API para Progresso:** Criar os procedimentos tRPC para salvar e buscar os dados de progresso do `UserProfile`.
- **História 4.2: UI do Formulário de Progresso:** Desenvolver o formulário onde a aluna pode inserir seu peso, medidas e sintomas da semana.
- **História 4.3: UI da Visualização de Progresso:** Criar a página que exibe um gráfico ou tabela com a evolução do progresso da aluna ao longo do tempo.

---

## 7. Resultados do Checklist

- **Status:** Pendente. A ser executado após a aprovação deste PRD.

---

## 8. Próximos Passos (Handoff)

Com este PRD concluído, os seguintes despachos podem ser enviados:

- **Para o @ux-designer:** "Com base no PRD em `docs/prd.md`, por favor inicie o design da experiência do usuário e a criação dos wireframes, conforme a seção 'Metas de Design (UI/UX)'."
- **Para o @architect:** "Com base no PRD finalizado em `docs/prd.md`, por favor revise o documento de arquitetura em `docs/architecture.md` para garantir que ele atende a todos os requisitos funcionais e não-funcionais listados."
- **Para o @dev-fullstack (via @aios-master):** "O backlog inicial e a arquitetura estão definidos. Iniciar a implementação da História 1.1: Configuração do Ambiente."
