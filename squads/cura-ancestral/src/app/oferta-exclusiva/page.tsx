'use client';

import React, { Suspense } from 'react';
import Image from 'next/image';
import Script from 'next/script';
import { Timer } from '../_components/timer';
import { useLastlink } from '../_hooks/use-lastlink';
import { LASTLINK_CONFIG } from '../../config/lastlink';

function UpsellOneContent() {
  const { onDeny } = useLastlink(
    LASTLINK_CONFIG.upsells.cofre.acceptRedirect,
    LASTLINK_CONFIG.upsells.cofre.denyRedirect
  );

  return (
    <main className="min-h-screen bg-crema flex flex-col items-center">
      <Script src={LASTLINK_CONFIG.scripts.upsell} strategy="afterInteractive" />
      
      <div className="bg-amber-400 w-full text-black text-center py-2 px-4 text-xs md:text-sm font-black uppercase tracking-widest">
        Passo 2 de 3: Personalizando sua experiência...
      </div>

      <div className="w-full max-w-3xl px-4 py-8 md:py-12 text-center">
        <header className="mb-10">
          <h1 className="text-3xl md:text-5xl font-black text-blood font-heading leading-tight mb-4">
            ESPERA! Sua compra foi aprovada, mas falta algo importante...
          </h1>
          <h2 className="text-xl md:text-2xl font-bold text-forest font-heading">
            Você quer regenerar danos metabólicos que os remédios causaram por anos?
          </h2>
        </header>

        <div className="mb-8">
          <Timer durationInMinutes={10} />
        </div>

        <section className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border-t-8 border-forest relative">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
            Parabéns por garantir o Manual da Cura Ancestral! Você já tem o mapa para a independência.
          </p>
          
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 font-medium italic">
            No entanto, a maioria dos nossos alunos sêniores carrega uma &quot;bagagem&quot; pesada: <strong>anos de inflamação profunda</strong> que as ervas comuns levam tempo para alcançar. São tecidos desgastados por décadas de uso de anti-inflamatórios que &quot;secaram&quot; sua lubrificação natural.
          </p>

          <div className="bg-blood/5 p-8 rounded-2xl border-l-8 border-blood text-left mb-10 shadow-inner">
            <p className="text-blood font-black text-xl leading-snug mb-4 font-serif uppercase tracking-tight">
              ⚠️ Alerta de Degeneração Celular
            </p>
            <p className="text-gray-700 font-medium">
              O Manual básico cura a causa atual, mas o <strong className="text-forest">Cofre das Ervas Raras</strong> é o único que atua na restauração do que foi perdido. Se você sente que seu corpo está &quot;enferrujado&quot; por dentro, você precisa da ativação avançada.
            </p>
          </div>

          <div className="relative w-full max-w-[500px] mx-auto mb-8 shadow-2xl rounded-2xl overflow-hidden group border-4 border-forest/10">
            <Image 
              src="/imagem/cofre-das-ervas-raras.webp" 
              alt="Mockup 3D do Cofre das Ervas Raras" 
              width={800} 
              height={800} 
              className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest/30 to-transparent pointer-events-none"></div>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-10">
            Neste guia exclusivo, você descobrirá as 12 plantas mestras que atuam na reversão de danos metabólicos profundos e na restauração da vitalidade celular.
          </p>

          <div className="mb-10">
            <span className="block text-gray-400 line-through text-lg">De R$ 497,00</span>
            <span className="block text-4xl md:text-5xl font-black text-forest tracking-tight">Por apenas R$ 147,00</span>
            <p className="text-gray-500 text-sm mt-2 uppercase font-bold">(Oferta única e exclusiva pós-compra)</p>
          </div>

          <div className="space-y-6 flex flex-col items-center">
            <button 
              id={LASTLINK_CONFIG.upsells.cofre.id}
              className="bg-amber-cta text-white text-xl md:text-2xl font-black py-6 px-10 rounded-full w-full shadow-lg transition-all duration-200 hover:scale-[1.02] active:translate-y-1 active:shadow-sm uppercase tracking-tight"
            >
              SIM! QUERO REGENERAR MEU CORPO AGORA ➱
            </button>

            <button 
              onClick={onDeny}
              className="text-gray-400 underline text-sm md:text-base font-medium hover:text-gray-600 transition-colors"
            >
              Não, obrigado. Prefiro seguir apenas com o Manual básico e demorar mais para regenerar meus tecidos.
            </button>
          </div>
        </section>

        <footer className="mt-12 text-gray-400 text-xs md:text-sm">
          &copy; 2026 Cura Ancestral. Oferta exclusiva para novos alunos.
        </footer>
      </div>
    </main>
  );
}

export default function UpsellOnePage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-crema flex items-center justify-center">Carregando oferta...</div>}>
      <UpsellOneContent />
    </Suspense>
  );
}

