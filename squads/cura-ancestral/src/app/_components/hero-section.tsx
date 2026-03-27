import React from 'react';
import Image from 'next/image';

export function HeroSection() {
  return (
    <header className="text-center py-10 md:py-16 border-b-2 border-double border-gray-200 mb-10 px-4 bg-white/50">
      <div className="max-w-4xl mx-auto">
        <span className="block text-forest font-black text-xs md:text-sm tracking-[3px] uppercase mb-4 font-sans">
          ALFORRIA FARMACÊUTICA | MÉTODO SAB
        </span>
        
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-black leading-tight mb-8 tracking-tight font-serif">
          Recupere sua mobilidade e dê adeus à &quot;coleira da farmácia&quot; sem sair da sua cozinha.
        </h1>
        
        <p className="text-xl md:text-2xl italic text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed font-serif">
          Descubra como a <strong className="text-forest underline decoration-amber-cta decoration-2">Ativação Térmico-Enzimática</strong> transmuta temperos de R$ 2,00 em ativos de cura 20x mais potentes que anti-inflamatórios sintéticos.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
          <div className="relative w-20 h-20 rounded-full border-4 border-forest shadow-lg overflow-hidden shrink-0">
            <Image 
              src="/imagem/avatares/female-1.png" 
              alt="Dirce Helena" 
              fill
              className="object-cover"
            />
          </div>
          <div className="text-center md:text-left">
            <p className="text-base md:text-lg text-gray-800 font-medium">
              Por <strong className="text-forest">Dirce Helena</strong> | Professora Aposentada & Matriarca da Cura
            </p>
            <p className="text-sm text-gray-500 font-sans uppercase tracking-tighter">
              Publicado em: {new Date().toLocaleDateString('pt-BR')}
            </p>
          </div>
        </div>

        <div className="relative w-full max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] mt-12 group">
          <Image 
            src="/imagem/Manual Principal.png" 
            alt="Manual da Cura Ancestral - Mockup 3D" 
            width={800} 
            height={600}
            className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest/20 to-transparent pointer-events-none"></div>
        </div>
      </div>
    </header>
  );
}

