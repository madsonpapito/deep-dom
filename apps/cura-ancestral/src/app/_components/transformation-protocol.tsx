import React from 'react';

const phases = [
  {
    id: 1,
    title: 'VINCULAR',
    days: 'Dias 1 ao 3',
    description: 'Criamos as tríades de ervas sinérgicas que anulam a dor residual no sangue e preparam seu estômago.',
    color: 'border-sage',
    numBg: 'bg-sage'
  },
  {
    id: 2,
    title: 'INCENDIAR',
    days: 'Dias 4 ao 7',
    description: 'Usamos o calor milimétrico para destravar a parede das plantas e liberar os ativos anti-inflamatórios potentes.',
    color: 'border-amber-cta',
    numBg: 'bg-amber-cta'
  },
  {
    id: 3,
    title: 'TRANSMUTAR',
    days: 'Dias 8 ao 14',
    description: 'Ativamos os lipídios naturais que levam a cura até o foco da inflamação (joelhos, juntas e coluna).',
    color: 'border-forest',
    numBg: 'bg-forest'
  },
  {
    id: 4,
    title: 'ALIMENTAR',
    days: 'Dias 15 ao 20',
    description: 'Ingestão cronometrada nas janelas enzimáticas para absorção celular máxima dos fitonutrientes.',
    color: 'border-forest',
    numBg: 'bg-forest'
  },
  {
    id: 5,
    title: 'LIBERTAR',
    days: 'Dia 21 em diante',
    description: 'Consolidação da sua autonomia, desmame natural da farmácia e o resgate total da sua liberdade física.',
    color: 'border-gold',
    numBg: 'bg-gold'
  }
];

export function TransformationProtocol() {
  return (
    <section className="bg-sage/5 p-8 md:p-12 rounded-xl my-12 border border-sage/20">
      <h2 className="text-3xl md:text-4xl text-center font-black mb-4 font-heading text-forest">
        Os 21 Dias da sua Transformação
      </h2>
      <p className="text-center text-lg md:text-xl text-gray-600 mb-12 max-w-xl mx-auto italic">
        O Protocolo V.I.T.A.L não é uma dieta, é um mapa de ativação celular passo a passo:
      </p>
      
      <div className="flex flex-col gap-8 max-w-2xl mx-auto relative">
        {/* Linha conectora central para desktop */}
        <div className="absolute left-[1.2rem] top-10 bottom-10 w-0.5 bg-gray-200 hidden md:block" />
        
        {phases.map((phase) => (
          <div key={phase.id} className={`relative pl-12 border-l-4 ${phase.color} bg-white p-6 rounded-r-lg shadow-md transition-transform hover:-translate-y-1`}>
            <div className={`absolute -left-[1.4rem] top-6 w-10 h-10 ${phase.numBg} rounded-full flex items-center justify-center text-white font-bold text-xl border-4 border-white shadow-sm`}>
              {phase.id}
            </div>
            <h3 className="text-2xl font-black text-forest font-heading uppercase tracking-tight">
              Fase {phase.id}: {phase.title}
            </h3>
            <span className="inline-block bg-gray-100 text-gray-600 text-sm font-bold px-3 py-1 rounded-full my-2">
              {phase.days}
            </span>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed mt-2">
              {phase.description}
            </p>
          </div>
        ))}
      </div>
      
      <p className="text-center mt-12 text-xl font-bold italic text-forest">
        "Se você sabe ferver água para um café, você tem toda a habilidade necessária para o SAB."
      </p>
    </section>
  );
}
