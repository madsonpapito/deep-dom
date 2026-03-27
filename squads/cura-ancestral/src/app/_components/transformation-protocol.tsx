import React from 'react';

const phases = [
  {
    phase: 'VINCULAR',
    days: 'Dias 1-3',
    desc: 'Criamos as tríades de ervas que anulam a dor residual no sangue.'
  },
  {
    phase: 'INCENDIAR',
    days: 'Dias 4-7',
    desc: 'Usamos o calor milimétrico para destravar a parede das plantas.'
  },
  {
    phase: 'TRANSMUTAR',
    days: 'Dias 8-14',
    desc: 'Ativamos os lipídios que levam a cura até a inflamação.'
  },
  {
    phase: 'ALIMENTAR',
    days: 'Dias 15-20',
    desc: 'Ingestão cronometrada nas janelas enzimáticas de pico de absorção.'
  },
  {
    phase: 'LIBERTAR',
    days: 'Dia 21+',
    desc: 'Consolidação da autonomia e desmame natural da farmácia.'
  }
];

export function TransformationProtocol() {
  return (
    <section className="py-20 px-4 bg-sage/10 rounded-[40px] max-w-5xl mx-auto my-16">
      <div className="text-center mb-16 px-4">
        <h2 className="text-3xl md:text-5xl font-black text-forest font-serif mb-6 leading-tight">
          Os 21 Dias da sua Transformação
        </h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
          O Protocolo V.I.T.A.L não é uma dieta, é um <strong className="text-forest underline">mapa de ativação celular</strong> desenhado para corpos maduros.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {phases.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border-b-8 border-forest hover:translate-y-[-8px] transition-transform duration-300">
            <span className="block text-forest font-black text-sm uppercase mb-2 tracking-widest">{item.phase}</span>
            <strong className="block text-blood text-xl font-serif mb-4">{item.days}</strong>
            <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      <p className="text-center mt-12 italic text-gray-500 font-serif text-lg">
        &quot;Se você sabe ferver água para um café, você tem toda a habilidade necessária para o SAB.&quot;
      </p>
    </section>
  );
}
