import React from 'react';

export function HeroSection() {
  return (
    <header className="text-center py-10 md:py-16 border-b-2 border-double border-gray-200 mb-10 px-4">
      <span className="block text-forest font-bold text-xs md:text-sm tracking-[2px] uppercase mb-4">
        ALFORRIA FARMACÊUTICA | MÉTODO SAB
      </span>
      
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-black leading-tight mb-6 max-w-4xl mx-auto tracking-tight">
        Recupere sua mobilidade e dê adeus à &quot;coleira da farmácia&quot; sem sair da sua cozinha.
      </h1>
      
      <p className="text-lg md:text-2xl italic text-gray-700 mb-10 max-w-2xl mx-auto leading-relaxed">
        Descubra como a <strong>Ativação Térmico-Enzimática</strong> transmuta temperos de R$ 2,00 em ativos de cura 20x mais potentes que anti-inflamatórios sintéticos.
      </p>
      
      <div className="flex items-center justify-center gap-4 mb-8">
        <div className="w-14 h-14 md:w-20 md:h-14 rounded-full bg-gray-200 border-2 border-forest relative overflow-hidden">
          {/* Placeholder para a imagem da Dirce */}
          <div className="absolute inset-0 bg-slate-300 flex items-center justify-center text-forest font-bold">DH</div>
        </div>
        <div className="text-left">
          <p className="text-sm md:text-base text-gray-600">
            Por <strong className="text-black">Dirce Helena</strong> | Professora Aposentada & Matriarca da Cura
          </p>
          <p className="text-xs text-gray-400">Publicado em: {new Date().toLocaleDateString('pt-BR')}</p>
        </div>
      </div>

      <div className="relative w-full max-w-2xl mx-auto rounded-lg overflow-hidden shadow-2xl mt-12 group transition-all duration-500">
        <div className="aspect-[4/3] bg-gray-100 flex items-center justify-center text-gray-400 italic p-12 text-center">
          [Imagem Principal: Manual da Cura Ancestral]
          <br />
          (Pronto para receber o ativo visual de imagem/Manual Principal.png)
        </div>
      </div>
    </header>
  );
}
