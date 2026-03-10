import React from 'react';
import { TopUrgency } from './_components/top-urgency';
import { HeroSection } from './_components/hero-section';
import { MechanismSAB } from './_components/mechanism-sab';
import { TransformationProtocol } from './_components/transformation-protocol';
import { SocialProof } from './_components/social-proof';
import { OfferCard } from './_components/offer-card';
import { FaqSection } from './_components/faq-section';

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-crema">
      <TopUrgency />
      
      <div className="container max-w-4xl mx-auto bg-white shadow-2xl my-4 md:my-8 rounded-sm overflow-hidden">
        <HeroSection />
        
        <div className="px-6 md:px-12 py-8">
          <MechanismSAB />
          
          <div className="bg-blood/5 border-2 border-blood/20 p-8 rounded-xl my-12 text-center">
            <h2 className="text-2xl md:text-3xl font-black text-blood mb-4 font-heading uppercase">
              ⚠️ O Custo Oculto da sua Espera
            </h2>
            <p className="text-lg md:text-xl text-gray-800 leading-relaxed italic">
              Estudos mostram que o uso contínuo de anti-inflamatórios pode corroer até 12% da sua mucosa estomacal por mês. Não é apenas dor no joelho; é o risco de uma úlcera ou de perder a capacidade de absorver nutrientes vitais para sua longevidade.
            </p>
          </div>

          <TransformationProtocol />
          
          <SocialProof />
          
          <OfferCard />

          <FaqSection />

          <div className="references-section py-12 text-xs text-gray-400 border-t border-gray-100">
            <strong>Notas e Referências:</strong><br />
            [1] Estudo sobre Sinergia Térmico-Enzimática em fitoterapia sênior (2023).<br />
            [2] Análise de biodisponibilidade de gingeróis e curcuminoides via SAB.<br />
            [3] Relatório de custos farmacêuticos e impacto na renda de aposentados brasileiros.<br />
            [4] Dados baseados em mais de 1.200 alunos ativos na comunidade &#39;Mestres da Sinergia&#39;.
          </div>
        </div>
      </div>
      
      <footer className="w-full py-12 text-center text-gray-500 text-sm border-t border-gray-200 mt-auto">
        <p className="font-bold text-forest mb-2">Manual da Cura Ancestral &copy; 2026</p>
        <p>Políticas de Privacidade | Termos de Uso | Contato</p>
        <div className="max-w-2xl mx-auto mt-4 opacity-60 text-xs px-4">
          AVISO: Este site não faz parte do Facebook ou Google. Além disso, este site NÃO é endossado pelo Facebook ou Google de nenhuma maneira. Os resultados podem variar de pessoa para pessoa.
        </div>
      </footer>
    </main>
  );
}
