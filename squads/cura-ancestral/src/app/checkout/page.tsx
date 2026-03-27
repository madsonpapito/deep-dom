import React from 'react';
import Image from 'next/image';
import { TopUrgency } from '../_components/top-urgency';

const orderBumps = [
  {
    id: 'bump-codice',
    title: 'SIM! Adicionar o Códice da Potencialização Máxima',
    description: 'Aumente a eficácia das ervas em até 500% com técnicas avançadas.',
    price: 'R$ 47,00',
    icon: '📜'
  },
  {
    id: 'bump-escudo',
    title: 'SIM! Adicionar o Escudo de Interações',
    description: 'Aprenda a combinar remédios naturais e químicos com 100% de segurança.',
    price: 'R$ 47,00',
    icon: '🛡️'
  },
  {
    id: 'bump-mapa',
    title: 'SIM! Adicionar o Mapa de Consulta Rápida',
    description: 'Identifique ervas e dosagens instantaneamente sem precisar folhear o manual.',
    price: 'R$ 47,00',
    icon: '🎯'
  }
];

export default function CheckoutPage() {
  return (
    <main className="min-h-screen bg-crema flex flex-col items-center">
      <TopUrgency />
      
      <div className="w-full max-w-5xl px-4 py-8 md:py-16">
        <header className="text-center mb-12 border-b-2 border-double border-gray-200 pb-8">
          <div className="flex justify-center mb-6">
            <div className="bg-forest p-4 rounded-full shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-black font-heading leading-tight">
            Finalize sua Alforria Farmacêutica
          </h1>
          <p className="text-gray-600 mt-2 font-serif italic text-lg">Ambiente 100% Seguro e Criptografado</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Coluna Esquerda: Dados e Bumps */}
          <div className="lg:col-span-2 space-y-8">
            <section className="bg-white p-6 md:p-10 rounded-2xl shadow-xl border border-gray-100">
              <h2 className="text-xl font-black text-forest font-heading border-b-2 border-forest/10 pb-4 mb-8 uppercase tracking-tight">
                1. Informações de Acesso
              </h2>
              <div className="bg-sage/5 border-2 border-dashed border-sage/20 rounded-2xl h-56 flex flex-col items-center justify-center text-gray-500 italic p-6 text-center">
                <p className="mb-2">O formulário oficial do Lastlink será carregado aqui.</p>
                <small className="text-xs opacity-60">Seu acesso será enviado para o e-mail cadastrado instantaneamente após a aprovação.</small>
              </div>
            </section>

            <section className="bg-white p-6 md:p-10 rounded-2xl shadow-xl border-t-8 border-blood relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blood/5 rounded-full -mr-16 -mt-16 blur-2xl" />
              
              <h2 className="text-2xl font-black text-blood font-heading mb-2">COMPLETE SUA PROTEÇÃO</h2>
              <p className="text-gray-700 text-base mb-8 font-serif italic">Selecione os guias exclusivos da Dirce Helena para acelerar seus resultados:</p>
              
              <div className="space-y-4">
                {orderBumps.map((bump) => (
                  <label key={bump.id} className="flex items-center gap-4 bg-amber-50/30 border-2 border-dashed border-amber-200 p-5 rounded-2xl cursor-pointer hover:bg-amber-100/50 transition-all group">
                    <input type="checkbox" className="w-6 h-6 rounded-full border-amber-400 text-forest focus:ring-forest" />
                    <div className="flex-shrink-0 text-3xl hidden md:block grayscale group-hover:grayscale-0 transition-all">{bump.icon}</div>
                    <div className="flex-grow">
                      <span className="block font-black text-blood text-sm md:text-base group-hover:underline decoration-blood/30">
                        {bump.title}
                      </span>
                      <p className="text-xs md:text-sm text-gray-600 mt-1 font-medium">{bump.description}</p>
                      <span className="block mt-2 font-black text-forest text-lg">{bump.price}</span>
                    </div>
                  </label>
                ))}
              </div>
            </section>
          </div>

          {/* Coluna Direita: Resumo */}
          <div className="space-y-8">
            <section className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl border-4 border-forest sticky top-24">
              <h2 className="text-xl font-black text-forest font-heading mb-8 uppercase tracking-widest text-center">Resumo do Pedido</h2>
              
              <div className="space-y-5 text-sm md:text-base border-b-2 border-gray-100 pb-8 mb-8 font-serif">
                <div className="flex justify-between items-start gap-4">
                  <span className="text-gray-700 font-medium">Manual da Cura Ancestral (Digital)</span>
                  <span className="font-bold text-gray-900 shrink-0">R$ 67,00</span>
                </div>
                <div className="flex justify-between text-forest font-bold italic bg-forest/5 p-3 rounded-xl border border-forest/10">
                  <span>+ Sistema SAB & Protocolo V.I.T.A.L.</span>
                  <span className="uppercase text-xs tracking-widest">Grátis</span>
                </div>
              </div>

              <div className="flex justify-between items-center mb-10">
                <span className="text-xl font-black text-black font-heading uppercase">Total</span>
                <div className="text-right">
                  <span className="block text-4xl font-black text-forest tracking-tighter">R$ 67,00</span>
                  <span className="text-xs text-gray-400 font-bold uppercase tracking-tighter">Pagamento Único</span>
                </div>
              </div>

              <button className="w-full bg-amber-cta text-white font-black py-6 rounded-2xl shadow-[0_10px_30px_rgba(242,140,40,0.4)] hover:scale-[1.03] transition-all active:translate-y-1 active:shadow-sm uppercase text-xl tracking-tight animate-pulse">
                FINALIZAR AGORA ➱
              </button>

              <div className="mt-10 flex flex-wrap justify-center gap-4 opacity-40 filter grayscale hover:grayscale-0 transition-all duration-700">
                <Image src="https://img.icons8.com/color/48/ssl.png" width={32} height={32} alt="SSL" />
                <Image src="https://img.icons8.com/color/48/visa.png" width={32} height={32} alt="Visa" />
                <Image src="https://img.icons8.com/color/48/mastercard.png" width={32} height={32} alt="Mastercard" />
                <Image src="https://img.icons8.com/color/48/pix.png" width={32} height={32} alt="Pix" />
              </div>
              
              <p className="text-[10px] text-center text-gray-400 mt-8 uppercase font-black tracking-[2px] leading-relaxed">
                🔒 SEUS DADOS ESTÃO PROTEGIDOS POR CRIPTOGRAFIA DE NÍVEL MILITAR
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

