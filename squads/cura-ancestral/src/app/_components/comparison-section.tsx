import React from 'react';

export function ComparisonSection() {
  return (
    <section className="bg-gray-50 border border-gray-200 p-8 md:p-12 rounded-[40px] my-16 shadow-inner">
      <h2 className="text-2xl md:text-4xl font-black text-center mb-12 font-heading leading-tight">
        Um Investimento que se Paga em 15 Dias
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-3xl mx-auto">
        <div className="text-center p-8 bg-white rounded-3xl shadow-sm border border-red-50">
          <p className="text-gray-500 font-bold uppercase tracking-widest text-sm mb-2">Custo da Farmácia</p>
          <strong className="text-4xl md:text-5xl font-black text-blood block mb-2 font-serif">R$ 4.800,00</strong>
          <p className="text-xs text-gray-400 font-medium">(Média anual em remédios e exames)</p>
        </div>
        
        <div className="text-center p-8 bg-white rounded-3xl shadow-lg border-2 border-forest relative overflow-hidden">
          <div className="absolute top-0 left-0 bg-forest text-white text-[10px] font-black px-3 py-1 uppercase tracking-tighter">Sua Escolha Hoje</div>
          <p className="text-gray-500 font-bold uppercase tracking-widest text-sm mb-2">Manual Cura Ancestral</p>
          <strong className="text-4xl md:text-5xl font-black text-forest block mb-2 font-serif">R$ 67,00</strong>
          <p className="text-xs text-gray-400 font-medium">(Pagamento único, alforria vitalícia)</p>
        </div>
      </div>
      
      <p className="text-center mt-12 font-black text-forest text-xl md:text-2xl font-heading animate-bounce">
        Você economiza R$ 4.733,00 já no primeiro ano.
      </p>
    </section>
  );
}
