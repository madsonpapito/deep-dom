// A simple component for a feature/benefit item
function Feature({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white/10 p-6 rounded-lg">
      <h3 className="text-2xl font-bold text-pink-300">{title}</h3>
      <p className="mt-2 text-lg text-white/80">{description}</p>
    </div>
  );
}

export function Benefits() {
    return (
        <section className="w-full max-w-5xl">
            <h2 className="text-4xl font-bold text-center mb-8">Sua Transformação em 30 Dias</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
                <Feature title="Perca até 1kg/semana" description="Acelere seu metabolismo e queime gordura de forma natural e sustentável." />
                <Feature title="Tonifique seu corpo" description="Reduza a flacidez e a barriga da menopausa com apenas 10 minutos por dia." />
                <Feature title="Sinta-se mais jovem" description="Melhore sintomas como calorões, irritabilidade, cansaço e dores." />
            </div>
        </section>
    )
}
