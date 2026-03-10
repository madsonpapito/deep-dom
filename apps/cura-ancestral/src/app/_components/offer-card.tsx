import React from 'react';
import Link from 'next/link';
import { LASTLINK_CONFIG } from '../../config/lastlink';

export function OfferCard() {
  return (
    <section id="oferta" className="my-16">
      <div className="bg-white border-4 border-forest rounded-2xl p-8 md:p-12 shadow-2xl text-center relative overflow-hidden">
        <div className="bg-blood text-white text-xs md:text-sm font-bold py-2 px-6 uppercase tracking-widest inline-block rounded-full mb-6">
          Oferta de Alforria: Lote Promocional
        </div>
        
        <h2 className="text-3xl md:text-4xl font-black text-forest mb-4 font-heading leading-tight">
          Tenha a Cura na sua Despensa Agora
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Economize até R$ 450,00 mensais em remédios e recupere sua dignidade.
        </p>

        {/* Value Stack */}
        <div className="bg-gray-50 border-2 border-gray-100 rounded-xl p-6 text-left mb-8 space-y-4">
          <div className="flex justify-between border-b border-gray-200 pb-2">
            <span className="text-gray-700 font-medium">✅ Manual Principal SAB (Protocolo V.I.T.A.L.)</span>
            <strong className="text-forest">R$ 297,00</strong>
          </div>
          <div className="flex justify-between border-b border-gray-200 pb-2">
            <span className="text-gray-700 font-medium">🎁 BÔNUS: Guia 'Mercado de Ouro'</span>
            <strong className="text-forest">R$ 67,00</strong>
          </div>
          <div className="flex justify-between border-b border-gray-200 pb-2">
            <span className="text-gray-700 font-medium">🎁 BÔNUS: Faxina Hepática</span>
            <strong className="text-forest">R$ 147,00</strong>
          </div>
          <div className="flex justify-between border-b border-gray-200 pb-2">
            <span className="text-gray-700 font-medium">🎁 BÔNUS: Masterclass 'Cozinha Alquímica'</span>
            <strong className="text-forest">R$ 197,00</strong>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-700 font-medium">🎁 BÔNUS: Comunidade VIP 'Mestres da Sinergia'</span>
            <strong className="text-forest">R$ 497,00</strong>
          </div>
        </div>

        <p className="text-gray-400 line-through text-lg">Valor Total: R$ 1.205,00</p>
        <div className="bg-green-100 text-forest font-bold py-1 px-4 rounded-full inline-block text-sm mb-4">
          VOCÊ ECONOMIZA R$ 1.058,00 HOJE
        </div>
        
        <div className="my-6">
          <span className="block text-5xl md:text-6xl font-black text-forest tracking-tighter">
            12x de R$ 14,67
          </span>
          <p className="text-gray-600 font-bold mt-2 italic">ou R$ 147,00 à vista no PIX</p>
        </div>

        <a href={LASTLINK_CONFIG.checkout.manual} className="group block">
          <button className="bg-[#F28C28] text-white text-xl md:text-2xl font-black py-6 px-10 rounded-full w-full shadow-lg transition-all duration-200 hover:scale-[1.02] active:translate-y-1 active:shadow-sm uppercase tracking-tight">
            Quero minha alforria agora ➱
          </button>
        </a>

        <div className="mt-10 flex flex-col md:flex-row items-center gap-6 bg-sage/5 p-6 rounded-xl border border-sage/20 text-left">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-inner flex-shrink-0">
            <span className="text-3xl">🛡️</span>
          </div>
          <div>
            <strong className="text-forest block mb-1">GARANTIA &quot;OU VOCÊ CURA OU EU PAGO&quot;</strong>
            <p className="text-sm text-gray-600 leading-relaxed">
              30 dias de teste. Se não economizar na farmácia ou não sentir seu corpo &quot;desenferrujar&quot;, eu devolvo 100% do seu dinheiro. O risco é TODO meu.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
