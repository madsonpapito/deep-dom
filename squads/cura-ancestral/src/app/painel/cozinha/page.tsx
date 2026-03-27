'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ContentGate } from '../../_components/content-gate';

export default function CozinhaPage() {
  return (
    <main className="min-h-screen bg-crema pb-20">
      <nav className="bg-amber-cta text-white py-4 px-6 flex items-center gap-4 shadow-lg sticky top-0 z-50 font-bold">
        <Link href="/painel" className="hover:opacity-80">← Voltar</Link>
        <h1 className="font-heading">Farmácia na Cozinha</h1>
      </nav>

      <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        <ContentGate productSlug="cozinha">
          <div className="bg-white p-8 rounded-2xl shadow-xl border-l-8 border-amber-cta text-left">
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              <div className="relative w-full max-w-[300px] shadow-xl rounded-2xl overflow-hidden">
                 <Image src="/imagem/guia-digital-farmacia-na-cozinha.webp" alt="Farmácia na Cozinha" width={400} height={400} className="w-full h-auto" />
              </div>
              
              <div className="flex-1 space-y-6">
                <h2 className="text-3xl font-black text-forest font-heading">Sua Guia de Consulta Rápida</h2>
                <p className="text-gray-700 leading-relaxed">
                  Tudo o que você precisa saber para substituir remédios químicos por soluções naturais no dia a dia, de forma segura e rápida.
                </p>

                <div className="bg-amber-50 p-6 rounded-xl border-l-4 border-amber-cta text-left">
                  <p className="font-medium italic text-gray-800">&quot;Sua cozinha não é apenas um lugar de comer, é seu laboratório de vida.&quot;</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                  <div className="p-6 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 text-center">
                    <h3 className="text-lg font-bold text-forest mb-2">📄 Escudo de Interações</h3>
                    <p className="text-xs text-gray-500 mb-4 font-medium">Segurança entre remédios e ervas.</p>
                    <a 
                      href="/imagem/pdf/escudo-interacoes.pdf" 
                      download 
                      className="bg-amber-cta text-white font-black py-3 px-6 rounded-xl shadow-md hover:scale-105 transition-transform inline-flex items-center gap-2 text-sm uppercase tracking-tight"
                    >
                      <span>⬇</span> BAIXAR ESCUDO
                    </a>
                  </div>

                  <div className="p-6 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 text-center">
                    <h3 className="text-lg font-bold text-forest mb-2">🎯 Mapa de Consulta</h3>
                    <p className="text-xs text-gray-500 mb-4 font-medium">Guia rápido para sua geladeira.</p>
                    <a 
                      href="/imagem/pdf/mapa-consulta-rapida.pdf" 
                      download 
                      className="bg-forest text-white font-black py-3 px-6 rounded-xl shadow-md hover:scale-105 transition-transform inline-flex items-center gap-2 text-sm uppercase tracking-tight"
                    >
                      <span>⬇</span> BAIXAR MAPA
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ContentGate>
      </div>
    </main>
  );
}

