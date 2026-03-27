import React from 'react';
import Image from 'next/image';

export function StructuredTestimonial() {
  return (
    <section className="bg-[#fdfaf6] p-8 md:p-12 rounded-[40px] border-2 border-[#e9dcc9] my-16 shadow-lg">
      <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
        <div className="relative w-32 h-32 md:w-40 md:h-32 rounded-full border-4 border-white shadow-2xl overflow-hidden shrink-0">
          <Image 
            src="/imagem/avatares/female-4.png" 
            alt="Maria Geralda" 
            fill
            className="object-cover"
          />
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-4xl font-black text-black font-heading mb-2 leading-tight">
            Minha Vitória: De Refém a Soberana
          </h2>
          <p className="text-forest font-black uppercase tracking-widest text-sm md:text-base">Maria Geralda, 58 anos</p>
        </div>
      </div>

      <p className="text-lg md:text-xl text-gray-800 font-serif italic mb-10 leading-relaxed text-center md:text-left">
        &quot;Em apenas 14 dias seguindo o SAB, senti meu corpo <strong className="text-forest underline">desenferrujar</strong>. Subir escadas sem estalos nos joelhos e acordar com as mãos leves, sem o peso da inflamação crônica.&quot;
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-red-50 border border-red-100 rounded-2xl">
          <strong className="block text-blood uppercase tracking-widest text-xs font-black mb-3">ANTES:</strong>
          <p className="text-gray-700 font-medium">Mesa de cabeceira cheia de frascos, estômago destruído e sensação de rigidez constante.</p>
        </div>
        <div className="p-6 bg-green-50 border border-green-100 rounded-2xl">
          <strong className="block text-forest uppercase tracking-widest text-xs font-black mb-3">DEPOIS:</strong>
          <p className="text-gray-700 font-medium">Cozinha transformada em laboratório de cura, corpo lubrificado e alforria financeira.</p>
        </div>
      </div>

      <div className="mt-12 text-center">
        <a href="#oferta" className="inline-block bg-amber-cta text-white font-black py-5 px-10 rounded-2xl shadow-lg hover:scale-105 transition-transform uppercase text-lg tracking-tight">
          Quero ter esse mesmo resultado ➱
        </a>
      </div>
    </section>
  );
}
