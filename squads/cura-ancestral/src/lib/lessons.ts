export interface Lesson {
  id: string;
  title: string;
  icon: string;
  description: string;
  pdfLink?: string;
}

export interface Stage {
  title: string;
  lessons: Lesson[];
}

export const STAGES: Stage[] = [
  {
    title: "Módulo 0: Boas-Vindas",
    lessons: [
      { 
        id: "0-1", 
        title: "O Início da sua Alforria", 
        icon: "🏠",
        description: "Seja bem-vinda à sua nova vida. Aqui você entenderá como Dirce Helena saiu da 'coleira da farmácia' e como você fará o mesmo nos próximos 21 dias.",
        pdfLink: "/imagem/pdf/manual-principal.pdf"
      },
      { 
        id: "0-2", 
        title: "Como navegar no portal", 
        icon: "🧭",
        description: "Um tour rápido pelas ferramentas, materiais de apoio e como garantir que você não perca nenhuma atualização vital.",
      },
      { 
        id: "0-3", 
        title: "Segurança em Primeiro Lugar", 
        icon: "🛡️",
        description: "Orientações fundamentais sobre a interação entre ervas e remédios químicos. Sua segurança é nossa prioridade absoluta.",
        pdfLink: "/imagem/pdf/escudo-interacoes.pdf"
      }
    ]
  },
  {
    title: "Etapa 1: Desafio Despensa Blindada",
    lessons: [
      { 
        id: "1-1", 
        title: "Dia 1: Auditoria da Farmácia", 
        icon: "📋",
        description: "Hoje vamos abrir sua caixa de remédios e identificar os vilões que estão corroendo sua saúde gástrica silenciosamente.",
        pdfLink: "/imagem/pdf/guia-dia-1-auditoria.pdf"
      },
      { 
        id: "1-2", 
        title: "Dia 2: O Despertar da Planta", 
        icon: "🌡️",
        description: "Aprenda a romper a inércia térmica. O segredo não está na planta, mas em como você acorda o ativo de cura nela.",
        pdfLink: "/imagem/pdf/guia-dia-2-sab.pdf"
      },
      { 
        id: "1-3", 
        title: "Dia 3: O Elixir do Estômago", 
        icon: "🛡️",
        description: "O protocolo exato para criar uma camada de proteção na sua mucosa gástrica usando sinergia enzimática.",
        pdfLink: "/imagem/pdf/guia-dia-3-elixir.pdf"
      },
      { 
        id: "1-4", 
        title: "Dia 4: O Protocolo das Juntas", 
        icon: "🦵",
        description: "Como lubrificar articulações 'enferrujadas' através de compressas e ingestão de óleos essenciais naturais.",
        pdfLink: "/imagem/pdf/guia-dia-4-juntas.pdf"
      },
      { 
        id: "1-5", 
        title: "Dia 5: O Mapa da Independência", 
        icon: "🗺️",
        description: "Consolidação da primeira fase. Você agora sabe como substituir os primeiros 3 remédios da sua rotina.",
        pdfLink: "/imagem/pdf/guia-dia-5-independencia.pdf"
      }
    ]
  },
  {
    title: "Etapa 2: Sistema SAB (Ciência)",
    lessons: [
      { 
        id: "2-1", 
        title: "A Ciência do Calor", 
        icon: "🧪",
        description: "Entenda por que ferver água da maneira errada mata a cura. A precisão molecular do método SAB.",
        pdfLink: "/imagem/pdf/protocolo-ativacao-termica.pdf"
      },
      { 
        id: "2-2", 
        title: "Rompendo a Parede Celular", 
        icon: "🧬",
        description: "Como a sinergia entre ativos permite que a cura atravse a barreira intestinal e chegue onde dói.",
      },
      { 
        id: "2-3", 
        title: "Veículos Lipídicos", 
        icon: "🚚",
        description: "O papel fundamental das gorduras boas (azeite, coco) como transportadores de ativos fitoterápicos.",
        pdfLink: "/imagem/pdf/guia-veiculos-lipidicos.pdf"
      }
    ]
  }
];
