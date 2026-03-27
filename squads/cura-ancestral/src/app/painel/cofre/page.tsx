'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ContentGate } from '../../_components/content-gate';

export default function CofrePage() {
  return (
    <main className="min-h-screen bg-crema pb-20">
      <nav className="bg-gold text-black py-4 px-6 flex items-center gap-4 shadow-lg sticky top-0 z-50 font-bold">
        <Link href="/painel" className="hover:opacity-80">← Voltar</Link>
        <h1 className="font-heading">O Cofre das Ervas Raras</h1>
      </nav>

      <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        <ContentGate productSlug="cofre">
          <div className="bg-white p-8 rounded-2xl shadow-xl border-t-8 border-gold">
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              <div className="relative w-full max-w-[300px] shadow-2xl rounded-2xl overflow-hidden text-center">
                 <Image src="/imagem/cofre-das-ervas-raras.webp" alt="Cofre das Ervas Raras" width={400} height={400} className="w-full h-auto mx-auto" />
              </div>
              
              <div className="flex-1 space-y-6">
                <h2 className="text-3xl font-black text-forest font-heading">Sua Biblioteca de Regeneração</h2>
                <p className="text-gray-700 leading-relaxed">
                  Aqui estão os segredos das 12 plantas mestras para a regeneração profunda dos seus tecidos e metabolismo. 
                </p>

                <div className="bg-gold/5 p-6 rounded-xl border-l-4 border-gold text-left">
                  <p className="font-medium italic">&quot;A naturezá não dá saltos, mas ela acelera quando damos as ferramentas certas.&quot;</p>
                </div>

                <div className="p-8 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 text-center">
                  <h3 className="text-xl font-bold text-forest mb-4">⬇ Baixar Guia Premium</h3>
                  <a 
                    href="/imagem/pdf/cofre-ervas-raras.pdf" 
                    download 
                    className="bg-gold text-black font-black py-4 px-8 rounded-xl shadow-lg hover:scale-105 transition-transform inline-flex items-center gap-3 uppercase"
                  >
                    <span>⬇</span> BAIXAR O COFRE (PDF)
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ContentGate>
      </div>
    </main>
  );
}

