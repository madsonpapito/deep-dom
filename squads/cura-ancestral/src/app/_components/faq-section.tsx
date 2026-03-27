import React from 'react';

const faqs = [
  {
    q: "Já tem receita grátis na internet, por que pagar?",
    a: "Na internet você encontra palpites. O Manual é um MÉTODO validado para corpos 50+, com dosagens que protegem seu fígado e estômago."
  },
  {
    q: "Vou precisar de ingredientes caros ou raros?",
    a: "Pelo contrário. Sua 'farmácia' será a feira. Usamos alho, alecrim, limão e cúrcuma — itens que custam centavos."
  }
];

export function FaqSection() {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-black text-forest mb-10 font-heading text-center">Dúvidas Frequentes</h2>
      <div className="space-y-4 max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-8 h-8 bg-forest text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">?</div>
              <strong className="text-lg text-forest">{faq.q}</strong>
            </div>
            <p className="text-gray-700 leading-relaxed ml-12">
              {faq.a}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-white border-l-8 border-amber-cta p-8 mt-16 shadow-md rounded-r-xl">
        <h3 className="text-xl font-bold text-amber-cta mb-4 uppercase">⚠️ Cuidado com as &quot;Dicas Grátis&quot; da Internet</h3>
        <p className="text-gray-800 leading-relaxed text-lg">
          Talvez você já tenha tentado tomar açafrão, gengibre ou suco de limão e não sentiu nada. <strong>Isso não foi culpa da planta.</strong>
        </p>
        <p className="text-gray-800 leading-relaxed text-lg mt-4">
          Receitas soltas são palpites perigosos. Sem a sinergia correta e a ativação térmica do SAB, você está apenas desperdiçando dinheiro. O Manual entrega o <strong>Método Validado</strong>: a dosagem exata para corpos 50+.
        </p>
      </div>
    </section>
  );
}
