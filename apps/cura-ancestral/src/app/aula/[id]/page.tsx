import React from 'react';
import Link from 'next/link';

type Props = {
  params: Promise<{ id: string }>;
};

export default async function LessonPage({ params }: Props) {
  const { id } = await params;

  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="bg-forest text-white py-4 px-6 flex items-center gap-6 shadow-lg">
        <Link href="/painel" className="text-sm font-bold flex items-center gap-2 hover:opacity-80 transition-opacity">
          ⬅ Voltar ao Painel
        </Link>
        <div className="h-6 w-px bg-white/20" />
        <div className="font-heading font-bold text-sm md:text-base truncate">
          Etapa 1: Desafio Despensa Blindada (Aula {id})
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-0 md:px-4 py-0 md:py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Área do Vídeo */}
          <div className="lg:col-span-2 space-y-6">
            <div className="aspect-video bg-black shadow-2xl relative overflow-hidden md:rounded-2xl border-b md:border-b-0 border-gray-200">
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-12 text-center gap-4">
                <div className="w-20 h-20 bg-forest rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-xl">
                  <span className="text-4xl pl-1">▶</span>
                </div>
                <p className="font-bold text-lg">Clique para iniciar o vídeo da lição</p>
              </div>
            </div>

            <div className="px-6 md:px-0">
              <h1 className="text-2xl md:text-3xl font-black text-forest font-heading mb-4 leading-tight">
                Lição: O Despertar da Planta (Ativando o SAB)
              </h1>
              <p className="text-gray-700 text-lg leading-relaxed">
                Nesta aula, você aprenderá a técnica exata para romper a inércia térmica e extrair o poder real das ervas na sua cozinha usando apenas o chiado da água.
              </p>

              <div className="bg-sage/5 border-2 border-dashed border-forest/30 p-8 rounded-2xl my-8">
                <h3 className="text-xl font-bold text-forest font-heading mb-4 flex items-center gap-3">
                  📚 Material de Apoio
                </h3>
                <p className="text-gray-600 mb-6 font-medium">Baixe o seu Guia Visual desta aula para imprimir e deixar na bancada da sua cozinha.</p>
                <button className="bg-forest text-white font-black py-4 px-8 rounded-xl shadow-lg hover:scale-[1.02] transition-transform active:translate-y-1 flex items-center gap-3">
                  <span>⬇</span> BAIXAR MEU GUIA (PDF)
                </button>
              </div>
            </div>
          </div>

          {/* Lista de Aulas Lateral */}
          <aside className="hidden lg:block space-y-4">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-gray-50 p-4 border-b border-gray-100 font-bold text-gray-800 flex items-center gap-2">
                <span>📋</span> Lista de Vídeos
              </div>
              <div className="max-height-[600px] overflow-y-auto">
                {[1, 2, 3, 4, 5].map((day) => (
                  <div key={day} className={`p-4 border-b border-gray-50 cursor-pointer transition-colors flex items-center gap-4 ${id.includes(day.toString()) ? 'bg-sage/10 border-l-4 border-forest' : 'hover:bg-gray-50 opacity-60'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${id.includes(day.toString()) ? 'bg-forest text-white' : 'bg-gray-200 text-gray-500'}`}>
                      {day}
                    </div>
                    <div className="text-sm font-bold text-gray-900">Lição do Dia {day}</div>
                  </div>
                ))}
              </div>
            </div>
          </aside>

        </div>
      </div>

      <footer className="py-12 text-center text-gray-400 text-sm border-t border-gray-200 mt-auto">
        &copy; 2026 Manual da Cura Ancestral. Suporte técnico via WhatsApp.
      </footer>
    </main>
  );
}
