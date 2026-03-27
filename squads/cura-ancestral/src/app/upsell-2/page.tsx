'use client';

import React, { Suspense } from 'react';
import Image from 'next/image';
import Script from 'next/script';
import { Timer } from '../_components/timer';
import { useLastlink } from '../_hooks/use-lastlink';
import { LASTLINK_CONFIG } from '../../config/lastlink';

function UpsellTwoContent() {
  const { onDeny } = useLastlink(
    LASTLINK_CONFIG.upsells.circulo.acceptRedirect,
    LASTLINK_CONFIG.upsells.circulo.denyRedirect
  );

  return (
    <main className="min-h-screen bg-[#FDFDFB] flex flex-col items-center">
      <Script src={LASTLINK_CONFIG.scripts.upsell} strategy="afterInteractive" />

      <div className="bg-gold w-full text-black text-center py-2 px-4 text-xs md:text-sm font-black uppercase tracking-widest">
        PASSO FINAL: Seu acesso à elite da Cura Ancestral
      </div>

      <div className="w-full max-w-3xl px-4 py-8 md:py-12 text-center">
        <header className="mb-10">
          <h1 className="text-3xl md:text-5xl font-black text-forest font-heading leading-tight mb-4">
            Você aceita ser acompanhado(a) de perto pelos Mestres?
          </h1>
          <p className="text-lg md:text-xl text-gray-600 font-medium">
            Não caminhe sozinho(a). Entre para o nosso grupo de elite e acelere seus resultados.
          </p>
        </header>

        <div className="mb-8">
          <Timer durationInMinutes={5} />
        </div>

        <section className="bg-white p-8 md:p-12 rounded-2xl shadow-2xl border-4 border-gold relative overflow-hidden">
          {/* Elemento Decorativo Premium */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-gold/10 rounded-full -mr-20 -mt-20 blur-2xl" />
          
          <h2 className="text-2xl md:text-3xl font-black text-forest font-heading mb-6">
            O Círculo Secreto dos Mestres da Sinergia
          </h2>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Você já tem o conhecimento. Agora, imagine ter o <strong>suporte direto</strong> para tirar dúvidas, compartilhar experiências e receber novos protocolos todos os meses.
          </p>

          <div className="relative w-full max-w-[500px] mx-auto mb-8 shadow-2xl rounded-2xl overflow-hidden border-2 border-gold/20">
            <Image 
              src="/imagem/circulo-secreto-dos-mestres.webp" 
              alt="Mockup Comunidade VIP Círculo Secreto dos Mestres" 
              width={800} 
              height={800} 
              className="w-full h-auto"
            />
          </div>

          <div className="bg-gold/5 p-8 rounded-xl border-l-8 border-gold text-left mb-10 shadow-inner">
            <strong className="text-forest block mb-4 text-xl">No Círculo Secreto, você terá acesso a:</strong>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-800 font-medium">
                <span className="text-gold text-xl font-bold">✓</span> Lives mensais de tira-dúvidas com Dirce Helena.
              </li>
              <li className="flex items-center gap-3 text-gray-800 font-medium">
                <span className="text-gold text-xl font-bold">✓</span> Comunidade fechada para troca de receitas e conquistas.
              </li>
              <li className="flex items-center gap-3 text-gray-800 font-medium">
                <span className="text-gold text-xl font-bold">✓</span> Atualizações constantes de novos protocolos SAB.
              </li>
            </ul>
          </div>

          <div className="mb-10">
            <span className="block text-4xl md:text-5xl font-black text-forest tracking-tight">12x de R$ 29,70</span>
            <p className="text-gray-500 font-bold mt-2 italic text-lg">(Ou R$ 297,00 à vista - Menos de R$ 1,00 por dia)</p>
          </div>

          <div className="space-y-6 flex flex-col items-center">
            <button 
              id={LASTLINK_CONFIG.upsells.circulo.id}
              className="bg-amber-cta text-white text-xl md:text-2xl font-black py-6 px-10 rounded-full w-full shadow-lg transition-all duration-200 hover:scale-[1.02] active:translate-y-1 active:shadow-sm uppercase tracking-tight"
            >
              Sim! Quero entrar para o Círculo Secreto ➱
            </button>

            <button 
              onClick={onDeny}
              className="text-gray-400 underline text-sm md:text-base font-medium hover:text-gray-600 transition-colors"
            >
              Não, obrigado. Prefiro seguir sozinho(a) sem o suporte da comunidade.
            </button>
          </div>
        </section>

        <footer className="mt-12 text-gray-400 text-xs md:text-sm">
          &copy; 2026 Cura Ancestral. O acesso ao Círculo é renovado anualmente.
        </footer>
      </div>
    </main>
  );
}

export default function UpsellTwoPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#FDFDFB] flex items-center justify-center">Carregando oferta...</div>}>
      <UpsellTwoContent />
    </Suspense>
  );
}

