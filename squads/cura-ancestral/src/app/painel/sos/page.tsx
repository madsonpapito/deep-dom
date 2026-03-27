'use client';

import React from 'react';
import Link from 'next/link';
import { ContentGate } from '../../_components/content-gate';

export default function SOSPage() {
  return (
    <main className="min-h-screen bg-crema pb-20">
      <nav className="bg-forest text-white py-4 px-6 flex items-center gap-4 shadow-lg sticky top-0 z-50">
        <Link href="/painel" className="hover:opacity-80">← Voltar</Link>
        <h1 className="font-heading font-bold">Protocolo SOS: Alívio Imediato</h1>
      </nav>

      <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        <ContentGate productSlug="sos">
          <div className="bg-white p-8 rounded-2xl shadow-xl border-l-8 border-blood">
            <div className="bg-blood/10 text-blood font-black py-1 px-4 rounded-full inline-block text-xs mb-4 uppercase">
              Acesso de Emergência
            </div>
            <h2 className="text-3xl font-black text-forest font-heading mb-6">Protocolo SOS: Alívio Imediato</h2>
            
            <div className="prose prose-forest max-w-none text-gray-700 space-y-6">
              <p className="text-lg font-medium italic text-left">
                Este é o seu plano de ação rápida para quando as dores articulares travam seu dia.
              </p>

              <div className="bg-sage/5 p-6 rounded-xl border border-forest/20 text-left">
                <h3 className="text-xl font-bold text-forest mb-4">🧪 A Receita da Compressa SAB</h3>
                <p>Misture 1 pedaço de Gengibre ralado, 1 colher de Açafrão e 3 colheres de Azeite. Amorne em banho-maria por 3 minutos e aplique na região da dor por 20 minutos.</p>
              </div>

              <div className="mt-10 p-8 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 text-center">
                <h3 className="text-xl font-bold text-forest mb-4">📄 Versão para Impressão</h3>
                <p className="mb-6">Baixe o PDF diagramado para imprimir e fixar na sua geladeira.</p>
                <a 
                  href="/imagem/pdf/guia-dia-4-juntas.pdf" 
                  download 
                  className="bg-forest text-white font-black py-4 px-8 rounded-xl shadow-lg hover:scale-105 transition-transform inline-flex items-center gap-3 uppercase"
                >
                  <span>⬇</span> BAIXAR PROTOCOLO SOS (PDF)
                </a>
              </div>
            </div>
          </div>
        </ContentGate>
      </div>
    </main>
  );
}

