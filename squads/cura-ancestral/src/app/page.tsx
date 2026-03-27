import React from 'react';
import { TopUrgency } from './_components/top-urgency';
import { HeroSection } from './_components/hero-section';
import { MechanismSAB } from './_components/mechanism-sab';
import { TransformationProtocol } from './_components/transformation-protocol';
import { SocialProof } from './_components/social-proof';
import { OfferCard } from './_components/offer-card';
import { FaqSection } from './_components/faq-section';
import { QualificationList } from './_components/qualification-list';
import { ComparisonSection } from './_components/comparison-section';
import { StructuredTestimonial } from './_components/structured-testimonial';

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-crema">
      <TopUrgency />
      
      <div className="container max-w-4xl mx-auto bg-white shadow-2xl my-4 md:my-8 rounded-sm overflow-hidden border border-gray-100">
        <HeroSection />
        
        <div className="px-6 md:px-12 py-8 font-serif text-lg md:text-xl text-gray-800 leading-relaxed">
          {/* SEÇÃO 1: IDENTIFICAÇÃO E DOR (FUSÃO) */}
          <QualificationList />

          {/* SEÇÃO 2: A SOLUÇÃO TÉCNICA */}
          <MechanismSAB />

          {/* SEÇÃO 3: O QUE É O PRODUTO (21 DIAS) */}
          <TransformationProtocol />

          {/* SEÇÃO 4: PROVA SOCIAL DE IMPACTO */}
          <StructuredTestimonial />
          
          {/* SEÇÃO 5: O PITCH (ANTECIPADO) */}
          <OfferCard />

          {/* SEÇÃO 6: MEDO E URGÊNCIA (INIMIGO + CUSTO) */}
          <div className="space-y-12 my-24">
            <div className="bg-blood/5 border-l-8 border-blood p-8 rounded-r-2xl">
              <h3 className="text-xl md:text-2xl font-black text-blood font-sans uppercase mb-4 tracking-tight">
                ⚠️ O Inimigo que lucra com a sua dor
              </h3>
              <p className="text-gray-700 italic">
                A <strong>Indústria da Manutenção Crônica</strong> fatura bilhões vendendo alívios temporários. Eles não querem que você se cure; eles querem que você seja um &quot;cliente fiel&quot; da farmácia, pagando mensalidades para continuar <u className="decoration-blood/30">confortavelmente doente</u>.
              </p>
            </div>

            <div className="bg-blood/5 border-2 border-blood/20 p-8 rounded-3xl text-center shadow-lg relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-blood opacity-50" />
              <h2 className="text-2xl md:text-3xl font-black text-blood mb-6 font-heading uppercase tracking-tighter">
                ⚠️ O Custo Oculto da sua Espera
              </h2>
              <div className="space-y-4 text-lg md:text-xl text-gray-800 leading-relaxed italic">
                <p>Estudos mostram que o uso contínuo de anti-inflamatórios pode corroer até 12% da sua mucosa estomacal por mês. Não é apenas dor no joelho; é o risco de uma úlcera ou de perder a capacidade de absorver nutrientes vitais.</p>
              </div>
              <div className="mt-8 bg-blood text-white py-4 px-6 rounded-xl font-black uppercase tracking-widest text-sm shadow-md">
                O tempo não cura... ele corrói se você não agir na causa.
              </div>
            </div>
          </div>

          {/* SEÇÃO 7: LÓGICA FINANCEIRA */}
          <ComparisonSection />
          
          {/* SEÇÃO 8: PROVA SOCIAL SECUNDÁRIA (COMUNIDADE) */}
          <SocialProof />
          
          {/* SEÇÃO 9: CTA FINAL (REPETIÇÃO DA OFERTA) */}
          <div className="text-center py-16 bg-sage/5 rounded-[40px] my-12 border-2 border-dashed border-forest/20">
             <h3 className="text-2xl font-black text-forest mb-6 font-heading">Sua Alforria está a um clique de distância.</h3>
             <a href="#oferta" className="inline-block bg-amber-cta text-white font-black py-6 px-12 rounded-full shadow-2xl hover:scale-105 transition-transform uppercase text-xl animate-pulse">
                SIM! QUERO MINHA ALFORRIA AGORA ➱
             </a>
          </div>

          <FaqSection />

          <div className="references-section py-12 text-xs text-gray-400 border-t border-gray-100 font-sans">
            <strong className="block mb-2 text-gray-500 uppercase tracking-widest font-black">Notas e Referências:</strong>
            <ul className="space-y-1">
              <li>[1] Estudo sobre Sinergia Térmico-Enzimática em fitoterapia sênior (2023).</li>
              <li>[2] Análise de biodisponibilidade de gingeróis e curcuminoides via SAB.</li>
              <li>[3] Relatório de custos farmacêuticos e impacto na renda de aposentados brasileiros.</li>
              <li>[4] Dados baseados em mais de 1.200 alunos ativos na comunidade &#39;Mestres da Sinergia&#39;.</li>
            </ul>
          </div>
        </div>
      </div>
      
      <footer className="w-full py-16 text-center text-gray-500 text-sm border-t border-gray-200 mt-auto bg-white font-sans">
        <p className="font-black text-forest mb-4 uppercase tracking-[3px]">Manual da Cura Ancestral &copy; 2026</p>
        <p className="font-medium">Políticas de Privacidade | Termos de Uso | Contato</p>
        <div className="max-w-2xl mx-auto mt-8 opacity-40 text-[10px] px-4 leading-relaxed uppercase font-bold">
          AVISO: Este site não faz parte do Facebook ou Google. Além disso, este site NÃO é endossado pelo Facebook ou Google de nenhuma maneira. Os resultados podem variar de pessoa para pessoa.
        </div>
      </footer>
    </main>
  );
}
