import Link from "next/link";

// A simple component for a feature/benefit item
function Feature({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white/10 p-6 rounded-lg">
      <h3 className="text-2xl font-bold text-pink-300">{title}</h3>
      <p className="mt-2 text-lg text-white/80">{description}</p>
    </div>
  );
}

// A component for the Bonus items
function Bonus({ title, description }: { title: string; description: string }) {
    return (
        <div className="border border-pink-300/50 p-6 rounded-lg bg-white/5">
            <h4 className="text-xl font-bold text-white">{title}</h4>
            <p className="mt-2 text-md text-white/70">{description}</p>
        </div>
    );
}

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container mx-auto flex flex-col items-center gap-12 px-4 py-16">

        {/* Hero Section */}
        <header className="text-center">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem] text-white">
            Renova <span className="text-[hsl(280,100%,70%)]">30</span>
          </h1>
          <p className="mt-4 text-2xl text-white/80">
            O Programa de Reposição Hormonal Natural com Pilates em Casa que te fará sentir 15 anos mais jovem.
          </p>
        </header>

        {/* Call to Action Button */}
        <div className="w-full max-w-md">
            <Link
              href="https://pay.kiwify.com/tMxkqds" // Placeholder link for the checkout section/page
              className="block w-full text-center rounded-full bg-pink-500 px-10 py-4 font-semibold no-underline transition hover:bg-pink-600"
            >
              QUERO TRANSFORMAR MEU CORPO POR R$67
            </Link>
            <p className="text-center text-sm mt-2 text-white/50">Garantia de 7 dias &quot;feliz ou seu dinheiro de volta&quot;.</p>
        </div>


        {/* Benefits Section */}
        <section className="w-full max-w-5xl">
            <h2 className="text-4xl font-bold text-center mb-8">Sua Transformação em 30 Dias</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
                <Feature title="Perca até 1kg/semana" description="Acelere seu metabolismo e queime gordura de forma natural e sustentável." />
                <Feature title="Tonifique seu corpo" description="Reduza a flacidez e a barriga da menopausa com apenas 10 minutos por dia." />
                <Feature title="Sinta-se mais jovem" description="Melhore sintomas como calorões, irritabilidade, cansaço e dores." />
            </div>
        </section>

        {/* What You Get Section */}
        <section className="w-full max-w-5xl text-center">
            <h2 className="text-4xl font-bold text-center mb-8">O que você recebe</h2>
            <div className="bg-white/5 rounded-xl p-8">
                <p className="text-xl text-white/80">
                    Acesso completo de **12 meses** ao programa **Renova 30**. Treinos de Pilates em casa, sem impacto, usando apenas o peso corporal. E mais...
                </p>
            </div>
        </section>

        {/* Bonuses Section */}
        <section className="w-full max-w-5xl">
            <h2 className="text-4xl font-bold text-center mb-8">E ainda leva 2 Bônus Exclusivos!</h2>
            <div className="flex flex-col gap-6">
                <Bonus 
                    title="Bônus 1: Guia Caça ao Tesouro Hormonal"
                    description="Encontre os alimentos que resetam seus hormônios e te ajudam a emagrecer até 1kg por semana. Inclui listas de compras e dicas para economizar."
                />
                <Bonus 
                    title="Bônus 2: Quebre o Ciclo – Controle Emocional"
                    description="Aprenda a controlar o comer emocional com técnicas práticas, áudios guiados e um journal de 21 dias. Nunca mais coma por ansiedade ou frustração."
                />
            </div>
        </section>
        
        {/* Final Call to Action */}
        <div className="w-full max-w-md mt-8">
            <Link
              href="https://pay.kiwify.com/tMxkqds" // Placeholder link
              className="block w-full text-center rounded-full bg-pink-500 px-10 py-4 font-semibold no-underline transition hover:bg-pink-600"
            >
              SIM, QUERO COMEÇAR AGORA!
            </Link>
             <p className="text-center text-sm mt-2 text-white/50">Acesso por apenas R$67. Risco zero.</p>
        </div>

      </div>
    </main>
  );
}
