import React from 'react';
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
    <main className="min-h-screen bg-gray-50 flex flex-col items-center">
      <TopUrgency />
      
      <div className="w-full max-w-5xl px-4 py-8 md:py-12">
        <header className="text-center mb-10">
          <div className="flex justify-center mb-4 text-forest">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h1 className="text-2xl md:text-3xl font-black text-forest font-heading">
            Finalize seu Pedido com Segurança
          </h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Coluna Esquerda: Dados e Bumps */}
          <div className="lg:col-span-2 space-y-6">
            <section className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-forest font-heading border-b pb-4 mb-6">1. Dados de Pagamento</h2>
              <div className="bg-gray-50 border-2 border-dashed border-gray-200 rounded-lg h-48 flex items-center justify-center text-gray-400 italic">
                [Formulário de Checkout Lastlink Integrado]
              </div>
            </section>

            <section className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-blood font-heading mb-2">OFERTA ESPECIAL: Complete sua Proteção</h2>
              <p className="text-gray-600 text-sm mb-6 font-medium">Selecione os guias abaixo para potencializar seus resultados:</p>
              
              <div className="space-y-4">
                {orderBumps.map((bump) => (
                  <label key={bump.id} className="flex items-center gap-4 bg-amber-50/50 border-2 border-dashed border-amber-200 p-4 rounded-xl cursor-pointer hover:bg-amber-100/50 transition-colors group">
                    <input type="checkbox" className="w-6 h-6 rounded border-amber-300 text-forest focus:ring-forest" />
                    <div className="flex-shrink-0 text-3xl hidden md:block">{bump.icon}</div>
                    <div className="flex-grow">
                      <span className="block font-bold text-blood text-sm md:text-base group-hover:underline">
                        {bump.title}
                      </span>
                      <p className="text-xs md:text-sm text-gray-600 mt-1">{bump.description}</p>
                      <span className="block mt-1 font-black text-forest">{bump.price}</span>
                    </div>
                  </label>
                ))}
              </div>
            </section>
          </div>

          {/* Coluna Direita: Resumo */}
          <div className="space-y-6">
            <section className="bg-white p-6 md:p-8 rounded-xl shadow-lg border-2 border-forest sticky top-24">
              <h2 className="text-xl font-bold text-forest font-heading mb-6">Resumo do Pedido</h2>
              
              <div className="space-y-4 text-sm md:text-base border-b border-gray-100 pb-6 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Manual da Cura Ancestral</span>
                  <span className="font-bold text-gray-900">R$ 147,00</span>
                </div>
                <div className="flex justify-between text-forest font-medium italic">
                  <span>+ Sistema SAB & Protocolo V.I.T.A.L.</span>
                  <span>Grátis</span>
                </div>
              </div>

              <div className="flex justify-between items-center mb-8">
                <span className="text-xl font-bold text-gray-900">TOTAL</span>
                <span className="text-3xl font-black text-forest tracking-tighter">R$ 147,00</span>
              </div>

              <button className="w-full bg-[#27AE60] text-white font-black py-5 rounded-xl shadow-lg hover:bg-[#219150] transition-all active:translate-y-1 active:shadow-sm uppercase text-lg">
                Finalizar Compra Agora
              </button>

              <div className="mt-8 flex justify-center gap-4 opacity-60 filter grayscale hover:grayscale-0 transition-all duration-500">
                <img src="https://img.icons8.com/color/48/ssl.png" width="30" alt="SSL" />
                <img src="https://img.icons8.com/color/48/visa.png" width="30" alt="Visa" />
                <img src="https://img.icons8.com/color/48/mastercard.png" width="30" alt="Mastercard" />
                <img src="https://img.icons8.com/color/48/pix.png" width="30" alt="Pix" />
              </div>
              
              <p className="text-[10px] text-center text-gray-400 mt-6 uppercase font-bold tracking-widest">
                🔒 Dados 100% seguros e criptografados
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
