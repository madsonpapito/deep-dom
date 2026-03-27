import React from 'react';
import Image from 'next/image';

const comments = [
  {
    name: "Maria Auxiliadora S.",
    text: "Finalmente alguém explicou por que os chás que eu fazia não funcionavam! Estou no dia 4 do Elixir e a queimação sumiu. Gratidão Dirce! 🙏",
    time: "4 min",
    avatar: "/imagem/avatares/female-5.png"
  },
  {
    name: "Lourdes Rocha",
    text: "Eu não acreditava que o açafrão com óleo de coco faria o que o remédio de R$ 120 não fez. Minha vida mudou, não sinto mais aquela queimação chata!",
    time: "22 min",
    avatar: "/imagem/avatares/female-6.jpg"
  }
];

export function SocialProof() {
  return (
    <section className="py-12 border-t border-gray-100">
      <h3 className="text-2xl font-heading font-black text-forest mb-8 uppercase tracking-tight">O que dizem nossas Matriarcas</h3>

      {/* Depoimento Cético: Jorge Mendes */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 bg-[#fdfaf6] p-8 rounded-[32px] border border-[#eee] shadow-sm mb-12">
        <div className="relative w-20 h-20 rounded-full border-2 border-forest flex-shrink-0 overflow-hidden shadow-lg">
          <Image src="/imagem/avatares/male-1.png" alt="Jorge Mendes" fill className="object-cover" />
        </div>
        <div className="text-center md:text-left">
          <strong className="text-xl text-black font-bold font-heading">Jorge Mendes, 68 anos</strong>
          <p className="text-lg md:text-xl text-gray-700 italic mt-2 leading-relaxed font-serif">
            &quot;Eu sou engenheiro aposentado e sempre fui cético. Mas em 10 dias, os estalos no meu joelho pararam e eu voltei a caminhar meus 4km por dia. Melhor decisão que tomei.&quot;
          </p>
        </div>
      </div>

      {/* Comentários estilo Facebook */}
      <div className="space-y-8 bg-white p-6 md:p-10 rounded-[32px] shadow-inner border border-gray-100">
        <h4 className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-6 mb-6">Comentários Recentes</h4>
        {comments.map((comment, index) => (
          <div key={index} className="space-y-2">
            <div className="flex gap-4">
              <div className="relative w-12 h-12 rounded-full flex-shrink-0 overflow-hidden shadow-sm">
                <Image src={comment.avatar} alt={comment.name} fill className="object-cover" />
              </div>
              <div className="bg-[#f0f2f5] p-5 rounded-[24px] max-w-[85%] md:max-w-[70%]">
                <span className="block font-black text-sm text-[#050505] mb-1">{comment.name}</span>
                <p className="text-base text-[#050505] leading-tight font-medium">{comment.text}</p>
              </div>
            </div>
            <div className="ml-16 flex gap-6 text-[11px] font-black text-[#65676b] uppercase tracking-wider">
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
