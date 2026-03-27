import React from 'react';
import Image from 'next/image';
import { LASTLINK_CONFIG } from '../../config/lastlink';
import { ShieldCheck } from 'lucide-react';

export function OfferCard() {
  return (
    <section id="oferta" className="my-24">
      {/* Aviso de Dicas Grátis */}
      <div className="bg-white border-l-8 border-amber-cta p-8 md:p-10 mb-16 shadow-xl rounded-r-3xl">
        <h3 className="text-xl md:text-2xl font-black text-amber-cta font-heading mb-4 uppercase tracking-tight">
          ⚠️ Cuidado com as &quot;Dicas Grátis&quot; da Internet
        </h3>
        <div className="space-y-4 text-lg text-gray-700 font-serif leading-relaxed">
          <p>Talvez você já tenha tentado tomar açafrão, gengibre ou suco de limão e não sentiu nada. <strong>Isso não foi culpa da planta.</strong></p>
          <p>Receitas soltas são palpites perigosos. Sem a sinergia correta e a ativação térmica do SAB, você está apenas desperdiçando dinheiro. O Manual entrega o <strong>Método Validado</strong>: a dosagem exata para corpos 50+.</p>
        </div>
      </div>

      <div className="bg-white border-4 border-forest rounded-[40px] p-8 md:p-16 shadow-2xl text-center relative overflow-hidden">
        <div className="bg-blood text-white text-xs md:text-sm font-black py-2 px-8 uppercase tracking-[3px] inline-block rounded-full mb-8 shadow-sm">
          Oferta de Alforria: Lote Promocional
        </div>
        
        <h2 className="text-3xl md:text-5xl font-black text-black mb-6 font-heading leading-tight tracking-tight">
          Tenha a Cura na sua Despensa Agora
        </h2>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto font-serif italic">
          Economize até R$ 450,00 mensais em remédios e recupere sua dignidade.
        </p>

        {/* Imagem do Kit Completo */}
        <div className="relative w-full max-w-2xl mx-auto mb-12 transform hover:scale-[1.02] transition-transform duration-500">
          <Image 
            src="/imagem/kit completo.png" 
            alt="Kit Completo Cura Ancestral" 
            width={800} 
            height={600} 
            className="w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.2)]"
          />
        </div>

        {/* Value Stack */}
        <div className="bg-gray-50 border-2 border-gray-100 rounded-[32px] p-8 md:p-10 text-left mb-12 space-y-5 font-medium shadow-inner">
          <div className="flex justify-between border-b border-gray-200 pb-3">
            <span className="text-gray-700">✅ Manual Principal SAB (Protocolo V.I.T.A.L.)</span>
            <strong className="text-forest shrink-0 ml-4">R$ 297,00</strong>
          </div>
          <div className="flex justify-between border-b border-gray-200 pb-3">
            <span className="text-gray-700">🎁 BÔNUS: Guia &apos;Mercado de Ouro&apos;</span>
            <strong className="text-forest shrink-0 ml-4">R$ 67,00</strong>
          </div>
          <div className="flex justify-between border-b border-gray-200 pb-3">
            <span className="text-gray-700">🎁 BÔNUS: Faxina Hepática (Resíduos Químicos)</span>
            <strong className="text-forest shrink-0 ml-4">R$ 147,00</strong>
          </div>
          <div className="flex justify-between border-b border-gray-200 pb-3">
            <span className="text-gray-700">🎁 BÔNUS: Masterclass &apos;Cozinha Alquímica&apos;</span>
            <strong className="text-forest shrink-0 ml-4">R$ 197,00</strong>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-700">🎁 BÔNUS: Comunidade VIP &apos;Mestres da Sinergia&apos;</span>
            <strong className="text-forest shrink-0 ml-4">R$ 497,00</strong>
          </div>
        </div>

        <div className="mb-10">
          <p className="text-gray-400 line-through text-xl mb-1">Valor Total: R$ 1.205,00</p>
          <div className="bg-green-100 text-forest font-black py-2 px-6 rounded-full inline-block text-sm uppercase tracking-wider">
            VOCÊ ECONOMIZA R$ 1.138,00 HOJE
          </div>
        </div>
        
        <div className="mb-12">
          <span className="block text-6xl md:text-7xl font-black text-forest tracking-tighter leading-none mb-2 font-heading">
            12x de R$ 6,73
          </span>
          <p className="text-gray-600 font-black text-xl italic font-serif">ou R$ 67,00 à vista no PIX</p>
        </div>

        <a href={LASTLINK_CONFIG.checkout.manual} className="group block">
          <button className="bg-amber-cta text-white text-2xl md:text-3xl font-black py-8 px-12 rounded-full w-full shadow-[0_15px_40px_rgba(242,140,40,0.4)] transition-all duration-300 hover:scale-[1.03] active:translate-y-1 active:shadow-sm uppercase tracking-tight animate-pulse">
            Quero minha alforria agora ➱
          </button>
        </a>

        <div className="mt-12 flex flex-col md:flex-row items-center gap-8 bg-sage/5 p-8 rounded-3xl border border-sage/20 text-left">
          <div className="bg-forest/10 p-4 rounded-2xl shrink-0">
            <ShieldCheck className="w-12 h-12 text-forest" />
          </div>
          <div>
            <strong className="text-forest block mb-2 text-lg uppercase tracking-tight font-black">GARANTIA &quot;OU VOCÊ CURA OU EU PAGO&quot;</strong>
            <p className="text-base text-gray-700 leading-relaxed font-serif italic">
              30 dias de teste. Se não economizar na farmácia ou não sentir seu corpo &quot;desenferrujar&quot;, eu devolvo 100% do seu dinheiro. O risco é <strong className="text-forest">TODO meu</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
