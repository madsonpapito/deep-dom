import React from 'react';

export function MechanismSAB() {
  return (
    <section className="bg-forest text-white p-8 md:p-12 rounded-xl my-12 border-2 border-gold shadow-2xl relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />
      <h2 className="text-2xl md:text-4xl font-black mb-6 border-b border-white/20 pb-4 leading-tight font-heading">
        🔬 O Mecanismo SAB: A "Chave" que Liberta a Cura
      </h2>
      <div className="space-y-6 text-lg md:text-xl leading-relaxed text-crema/90">
        <p>
          O fracasso das "receitinhas de internet" não é culpa da planta, mas da <strong>Inércia Térmica</strong>. Sem a ativação correta, o fitoterápico é apenas 'tempero passivo' que o seu estômago destrói antes de chegar ao sangue.
        </p>
        <p>
          O <strong>Sistema de Ativação Bio-Molecular (SAB)</strong> utiliza o choque térmico controlado e veículos lipídicos para romper a "armadura celular" da erva, liberando os ativos de cura diretamente na sua corrente sanguínea com até <strong>20x mais potência</strong>.
        </p>
      </div>
    </section>
  );
}
