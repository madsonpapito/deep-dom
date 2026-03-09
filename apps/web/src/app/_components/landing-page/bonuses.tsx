// A component for the Bonus items
function Bonus({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="border border-pink-300/50 p-6 rounded-lg bg-white/5">
      <h4 className="text-xl font-bold text-white">{title}</h4>
      <p className="mt-2 text-md text-white/70">{description}</p>
    </div>
  );
}

export function Bonuses() {
    return (
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
    )
}
