import React from 'react';

export function MechanismSAB() {
  return (
    <section className="py-16 md:py-24 px-4 max-w-4xl mx-auto">
      <div className="bg-forest text-white p-8 md:p-12 rounded-3xl border-2 border-gold relative overflow-hidden shadow-2xl">
        <div className="relative z-10">
          <h2 className="text-2xl md:text-4xl font-black mb-8 border-b border-white/20 pb-6 font-serif tracking-tight text-white">
            🔬 O Mecanismo SAB: A &quot;Chave&quot; que Liberta a Cura
          </h2>
          
          <div className="space-y-6 text-lg md:text-xl leading-relaxed text-white/90 font-serif">
            <p>
              O fracasso das &quot;receitinhas de internet&quot; não é culpa da planta, mas da <strong className="text-gold">Inércia Térmica</strong>. 
              Sem a ativação correta, o fitoterápico é apenas &quot;tempero passivo&quot; que o seu estômago destrói antes de chegar ao sangue.
            </p>
            
            <p className="bg-white/10 p-6 rounded-xl border-l-4 border-gold italic">
              O <strong className="text-gold">Sistema de Ativação Bio-Molecular (SAB)</strong> utiliza o choque térmico controlado e veículos lipídicos para romper a &quot;armadura celular&quot; da erva.
            </p>
            
            <p>
              Isso libera os ativos de cura diretamente na sua corrente sanguínea com até <strong className="text-gold text-2xl">20x mais potência</strong> que os métodos tradicionais.
            </p>
          </div>

          <div className="mt-10 text-center">
            <a href="#oferta" className="inline-block bg-white text-forest font-black py-4 px-8 rounded-2xl shadow-xl hover:scale-105 transition-transform uppercase text-sm tracking-tight">
              Quero conhecer o método completo ➱
            </a>
          </div>
        </div>
        
        {/* Decoração sutil de DNA ou Molécula pode ser adicionada via CSS/SVG aqui */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl pointer-events-none" />
      </div>
    </section>
  );
}
