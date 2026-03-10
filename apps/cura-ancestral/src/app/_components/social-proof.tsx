import React from 'react';

const comments = [
  {
    name: "Maria Auxiliadora S.",
    text: "Finalmente alguém explicou por que os chás que eu fazia não funcionavam! Estou no dia 4 do Elixir e a queimação sumiu. Gratidão Dirce! 🙏",
    time: "4 min",
    avatar: "MA"
  },
  {
    name: "Lourdes Rocha",
    text: "Eu não acreditava que o açafrão com óleo de coco faria o que o remédio de R$ 120 não fez. Minha vida mudou, não sinto mais aquela queimação chata!",
    time: "22 min",
    avatar: "LR"
  }
];

export function SocialProof() {
  return (
    <section className="py-12 border-t border-gray-100">
      {/* Depoimento em Destaque: Maria Geralda */}
      <div className="bg-[#fdfaf6] p-8 rounded-2xl border border-[#e9dcc9] mb-12 shadow-sm">
        <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
          <div className="w-24 h-24 rounded-full bg-slate-200 border-4 border-white shadow-md overflow-hidden flex items-center justify-center text-forest font-bold text-2xl">
            MG
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-heading font-black text-black leading-tight">Minha Vitória: De Refém a Soberana</h3>
            <p className="text-forest font-bold font-body text-lg">Maria Geralda, 58 anos</p>
          </div>
        </div>
        <p className="text-xl text-gray-800 leading-relaxed italic mb-6">
          &quot;Em apenas 14 dias seguindo o SAB, senti meu corpo <strong className="text-forest underline">&apos;desenferrujar&apos;</strong>. Subir escadas sem estalos nos joelhos e acordar com as mãos leves, sem o peso da inflamação crônica.&quot;
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-red-50 p-4 rounded-lg border border-red-100 text-sm md:text-base">
            <strong className="text-red-700 block mb-1 font-bold">ANTES:</strong> Mesa de cabeceira cheia de frascos, estômago destruído e rigidez constante.
          </div>
          <div className="bg-green-50 p-4 rounded-lg border border-green-100 text-sm md:text-base">
            <strong className="text-green-700 block mb-1 font-bold">DEPOIS:</strong> Cozinha transformada em laboratório de cura, corpo lubrificado e alforria financeira.
          </div>
        </div>
      </div>

      {/* Depoimento Cético: Jorge Mendes */}
      <div className="flex items-start gap-6 bg-white p-6 rounded-xl border border-gray-100 shadow-sm mb-12">
        <div className="w-16 h-16 rounded-full bg-forest flex-shrink-0 flex items-center justify-center text-white font-bold text-xl border-2 border-forest">
          JM
        </div>
        <div>
          <strong className="text-lg text-black font-bold">Jorge Mendes, 68 anos</strong>
          <p className="text-lg text-gray-700 italic mt-2 leading-relaxed">
            &quot;Eu sou engenheiro aposentado e sempre fui cético. Mas em 10 dias, os estalos no meu joelho pararam e eu voltei a caminhar meus 4km por dia. Melhor decisão que tomei.&quot;
          </p>
        </div>
      </div>

      {/* Comentários estilo Facebook */}
      <div className="space-y-6">
        <h4 className="text-xl font-bold text-gray-900 border-b pb-4">Comentários em destaque</h4>
        {comments.map((comment, index) => (
          <div key={index} className="space-y-2">
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center font-bold text-gray-500">
                {comment.avatar}
              </div>
              <div className="bg-[#f0f2f5] p-4 rounded-[20px] max-w-[90%]">
                <span className="block font-bold text-sm text-black">{comment.name}</span>
                <p className="text-sm text-gray-900 mt-1 leading-snug">{comment.text}</p>
              </div>
            </div>
            <div className="ml-14 flex gap-4 text-xs font-bold text-gray-500">
              <span className="hover:underline cursor-pointer">Curtir</span>
              <span className="hover:underline cursor-pointer">Responder</span>
              <span>{comment.time}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
