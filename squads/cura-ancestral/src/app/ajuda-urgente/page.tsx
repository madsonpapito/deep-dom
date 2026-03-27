'use client';

import React, { Suspense } from 'react';
import Image from 'next/image';
import Script from 'next/script';
import { useLastlink } from '../_hooks/use-lastlink';
import { LASTLINK_CONFIG } from '../../config/lastlink';

function DownsellOneContent() {
  const { onDeny } = useLastlink(
    LASTLINK_CONFIG.upsells.sos.acceptRedirect,
    LASTLINK_CONFIG.upsells.sos.denyRedirect
  );

  return (
    <main className="min-h-screen bg-crema flex flex-col items-center">
      <Script src={LASTLINK_CONFIG.scripts.upsell} strategy="afterInteractive" />

      <div className="bg-[#27ae60] w-full text-white text-center py-3 px-4 text-xs md:text-sm font-black uppercase tracking-widest">
        75% DE DESCONTO APLICADO: Uma última oportunidade...
      </div>

      <div className="w-full max-w-3xl px-4 py-8 md:py-12 text-center">
        <header className="mb-10">
          <h1 className="text-2xl md:text-4xl font-black text-forest font-heading leading-tight mb-4">
            Eu entendo. O &quot;Cofre das Ervas Raras&quot; é um investimento completo...
          </h1>
          <p className="text-lg md:text-xl text-gray-700 font-medium italic">
            Mas eu não quero que você saia daqui sem uma solução para o que mais dói <u className="decoration-amber-cta decoration-2">agora</u>.
          </p>
        </header>

        <section className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border-2 border-dashed border-forest relative">
          <h2 className="text-2xl md:text-3xl font-black text-forest font-heading mb-6">
            Protocolo SOS: Alívio Imediato das Dores Articulares
          </h2>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Este é o meu &quot;plano de emergência&quot; para quando o joelho trava, as costas queimam ou os dedos incham.
          </p>

          <div className="relative w-full max-w-[400px] mx-auto mb-8 shadow-2xl rounded-xl overflow-hidden group">
            <Image 
              src="/imagem/protocolo-sos.webp" 
              alt="Mockup Protocolo SOS" 
              width={600} 
              height={600} 
              className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>

          <div className="space-y-4 text-left max-w-md mx-auto mb-10">
            <div className="flex items-start gap-4">
              <span className="text-forest font-bold text-xl leading-none">✓</span>
              <p className="text-gray-700 font-medium text-base md:text-lg"><strong>Compressas Bio-Ativas:</strong> Como fazer o ativo atravessar a pele em 15 minutos.</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-forest font-bold text-xl leading-none">✓</span>
              <p className="text-gray-700 font-medium text-base md:text-lg"><strong>O Elixir do Joelho Destravado:</strong> Uma bebida matinal para lubrificação natural.</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-forest font-bold text-xl leading-none">✓</span>
              <p className="text-gray-700 font-medium text-base md:text-lg"><strong>Manual SOS:</strong> O que fazer em crises agudas sem correr para o hospital.</p>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl mb-10">
            <span className="block text-gray-400 line-through text-lg">De R$ 147,00</span>
            <span className="block text-4xl md:text-5xl font-black text-forest tracking-tight">Por apenas R$ 47,00</span>
            <p className="text-gray-500 text-xs mt-2 uppercase font-bold">(Pagamento único, sem mensalidades)</p>
          </div>

          <div className="space-y-6 flex flex-col items-center">
            <button 
              id={LASTLINK_CONFIG.upsells.sos.id}
              className="bg-amber-cta text-white text-xl md:text-2xl font-black py-6 px-10 rounded-full w-full shadow-lg transition-all duration-200 hover:scale-[1.02] active:translate-y-1 active:shadow-sm uppercase tracking-tight"
            >
              SIM! QUERO O ALÍVIO IMEDIATO ➱
            </button>

            <button 
              onClick={onDeny}
              className="text-gray-400 underline text-sm md:text-base font-medium hover:text-gray-600 transition-colors"
            >
              Não, obrigado. Prefiro continuar lidando com as dores agudas sozinho(a).
            </button>
          </div>
        </section>

        <footer className="mt-12 text-gray-400 text-xs md:text-sm">
          &copy; 2026 Cura Ancestral. Promoção válida apenas para esta página.
        </footer>
      </div>
    </main>
  );
}

export default function DownsellOnePage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-crema flex items-center justify-center">Carregando oferta...</div>}>
      <DownsellOneContent />
    </Suspense>
  );
}

