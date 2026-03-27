import React from 'react';

export function QualificationList() {
  const points = [
    "Você acorda sentindo que seu corpo está \"enferrujado\" e pesado.",
    "Seu estômago não aguenta mais o peso dos anti-inflamatórios.",
    "Você sente revolta ao ver sua aposentadoria ficando no balcão da farmácia.",
    "Você tem medo de perder a liberdade de caminhar e brincar com seus netos."
  ];

  return (
    <section className="bg-white p-8 md:p-12 rounded-[32px] border-2 border-gray-100 my-16 shadow-xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-blood/5 rounded-full -mr-16 -mt-16 blur-2xl" />
      
      <h2 className="text-2xl md:text-3xl font-black text-blood text-center mb-10 font-heading uppercase tracking-tight">
        Isso é para você se...
      </h2>
      
      <ul className="space-y-6 max-w-2xl mx-auto">
        {points.map((point, index) => (
          <li key={index} className="flex items-start gap-4 text-lg md:text-xl text-gray-700 font-serif leading-relaxed">
            <span className="text-blood shrink-0 text-2xl">❌</span>
            <strong>{point}</strong>
          </li>
        ))}
      </ul>
      
      <p className="text-center font-black text-forest mt-12 text-xl md:text-2xl font-heading">
        Se você respondeu &quot;SIM&quot; para uma dessas frases, o Manual é sua Alforria.
      </p>
    </section>
  );
}
