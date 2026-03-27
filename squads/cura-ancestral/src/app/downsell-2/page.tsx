'use client';

import React, { Suspense } from 'react';
import Image from 'next/image';
import Script from 'next/script';
import { useLastlink } from '../_hooks/use-lastlink';
import { LASTLINK_CONFIG } from '../../config/lastlink';

function DownsellTwoContent() {
  const { onDeny } = useLastlink(
    LASTLINK_CONFIG.upsells.cozinha.acceptRedirect,
    LASTLINK_CONFIG.upsells.cozinha.denyRedirect
  );

  return (
    <main className="min-h-screen bg-crema flex flex-col items-center">
      <Script src={LASTLINK_CONFIG.scripts.upsell} strategy="afterInteractive" />

      <div className="bg-amber-500 w-full text-white text-center py-3 px-4 text-xs md:text-sm font-black uppercase tracking-widest">
        OFERTA DE ENCERRAMENTO: Disponível apenas agora.
      </div>

      <div className="w-full max-w-3xl px-4 py-8 md:py-12 text-center">
        <header className="mb-10">
          <h1 className="text-2xl md:text-4xl font-black text-forest font-heading leading-tight mb-4">
            Eu entendo que o acompanhamento VIP pode não ser o que você busca hoje...
          </h1>
          <p className="text-lg md:text-xl text-gray-700 font-medium italic">
            Mas você não pode sair sem o nosso <strong>Guia de Consulta Rápida</strong> para o dia a dia.
          </p>
        </header>

        <section className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100 relative">
          <h2 className="text-2xl md:text-3xl font-black text-forest font-heading mb-6">
            Guia Digital: Farmácia na Cozinha
          </h2>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Tenha na palma da mão a lista completa de substituições naturais para os sintomas mais comuns do dia a dia (azia, insônia, má digestão e gripes).
          </p>

          <div className="relative w-full max-w-[320px] mx-auto mb-8 shadow-xl rounded-lg overflow-hidden border border-gray-100">
            <Image 
              src="/imagem/guia-digital-farmacia-na-cozinha.webp" 
              alt="Mockup Guia Digital Farmácia na Cozinha" 
              width={500} 
              height={500} 
              className="w-full h-auto"
            />
          </div>

          <div className="bg-blue-50 p-6 rounded-xl text-left border-l-4 border-blue-500 mb-10">
            <strong className="text-blue-900 block mb-3">O que você leva no Guia:</strong>
            <ul className="space-y-2 text-blue-800">
              <li className="flex items-center gap-2">✓ Tabela de substituição: Químico vs. Natural.</li>
              <li className="flex items-center gap-2">✓ Guia de compras inteligente na feira.</li>
              <li className="flex items-center gap-2">✓ Protocolos de preparo rápido (menos de 5 min).</li>
            </ul>
          </div>

          <div className="mb-10">
            <span className="block text-4xl md:text-5xl font-black text-forest tracking-tight">Por apenas R$ 27,00</span>
            <p className="text-gray-500 text-sm mt-2 uppercase font-bold">(Pagamento único - Acesso imediato)</p>
          </div>

          <div className="space-y-6 flex flex-col items-center">
            <button 
              id={LASTLINK_CONFIG.upsells.cozinha.id}
              className="bg-amber-cta text-white text-xl md:text-2xl font-black py-6 px-10 rounded-full w-full shadow-lg transition-all duration-200 hover:scale-[1.02] active:translate-y-1 active:shadow-sm uppercase tracking-tight"
            >
              Sim! Comprar agora ➱
            </button>

            <button 
              onClick={onDeny}
              className="text-gray-400 underline text-sm md:text-base font-medium hover:text-gray-600 transition-colors"
            >
              Não, obrigado. Prefiro ir direto para a minha área de membros.
            </button>
          </div>
        </section>

        <footer className="mt-12 text-gray-400 text-xs md:text-sm">
          &copy; 2026 Cura Ancestral. Direitos reservados.
        </footer>
      </div>
    </main>
  );
}

export default function DownsellTwoPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-crema flex items-center justify-center">Carregando oferta...</div>}>
      <DownsellTwoContent />
    </Suspense>
  );
}

