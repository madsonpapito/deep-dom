import React from 'react';
import Link from 'next/link';
import { STAGES, type Lesson } from '@/lib/lessons';

type Props = {
  params: Promise<{ id: string }>;
};

export default async function LessonPage({ params }: Props) {
  const { id } = await params;

  // Encontrar a lição atual em todos os estágios
  let currentLesson: Lesson | undefined;
  let currentStageTitle = "";

  for (const stage of STAGES) {
    const found = stage.lessons.find(l => l.id === id);
    if (found) {
      currentLesson = found;
      currentStageTitle = stage.title;
      break;
    }
  }

  // Fallback caso ID não exista
  if (!currentLesson) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-crema p-4 text-center">
        <h1 className="text-2xl font-black text-forest mb-4">Lição não encontrada</h1>
        <Link href="/painel" className="bg-forest text-white py-3 px-6 rounded-xl font-bold">Voltar ao Painel</Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      <nav className="bg-forest text-white py-4 px-6 flex items-center gap-6 shadow-lg sticky top-0 z-50">
        <Link href="/painel" className="text-sm font-bold flex items-center gap-2 hover:opacity-80 transition-opacity">
          ⬅ Painel
        </Link>
        <div className="h-6 w-px bg-white/20" />
        <div className="font-heading font-bold text-sm md:text-base truncate">
          {currentStageTitle}: {currentLesson.title}
        </div>
      </nav>

      <div className="max-w-7xl mx-auto w-full px-0 md:px-4 py-0 md:py-8 lg:py-12 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Área do Vídeo e Conteúdo */}
          <div className="lg:col-span-3 space-y-6">
            <div className="aspect-video bg-black shadow-2xl relative overflow-hidden md:rounded-2xl border-b md:border-b-0 border-gray-200 group">
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-12 text-center gap-4 bg-gradient-to-b from-transparent to-black/40">
                <div className="w-20 h-20 bg-forest rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-xl">
                  <span className="text-4xl pl-1">▶</span>
                </div>
                <p className="font-black text-lg uppercase tracking-widest opacity-80 group-hover:opacity-100 transition-opacity">Conteúdo em Vídeo Placeholder</p>
              </div>
            </div>

            <div className="px-6 md:px-0">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">{currentLesson.icon}</span>
                <h1 className="text-2xl md:text-4xl font-black text-forest font-heading leading-tight">
                  {currentLesson.title}
                </h1>
              </div>
              
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 mb-8">
                <h3 className="text-sm font-black text-sage uppercase tracking-[2px] mb-4">Sobre esta lição</h3>
                <p className="text-gray-700 text-lg leading-relaxed font-serif italic">
                  &quot;{currentLesson.description}&quot;
                </p>
              </div>

              {currentLesson.pdfLink && (
                <div className="bg-sage/5 border-4 border-double border-forest/20 p-8 rounded-3xl my-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 text-6xl opacity-5">📚</div>
                  <h3 className="text-xl font-bold text-forest font-heading mb-4 flex items-center gap-3">
                    📚 Material de Apoio Vital
                  </h3>
                  <p className="text-gray-600 mb-6 font-medium max-w-lg">Baixe o seu Guia Visual desta aula para imprimir e deixar na bancada da sua cozinha durante os preparos.</p>
                  <a 
                    href={currentLesson.pdfLink} 
                    download
                    className="inline-flex bg-forest text-white font-black py-4 px-10 rounded-2xl shadow-xl hover:scale-[1.02] transition-transform active:translate-y-1 items-center gap-3 uppercase tracking-tight"
                  >
                    <span>⬇</span> BAIXAR MEU GUIA (PDF)
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Lista de Aulas Lateral */}
          <aside className="hidden lg:block lg:col-span-1 space-y-6 sticky top-24 h-fit max-h-[80vh] overflow-y-auto pr-2 no-scrollbar">
            {STAGES.map((stage, sIdx) => (
              <div key={sIdx} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="bg-gray-50 p-4 border-b border-gray-100 font-black text-xs text-gray-500 uppercase tracking-widest">
                  {stage.title}
                </div>
                <div className="divide-y divide-gray-50">
                  {stage.lessons.map((lesson) => (
                    <Link 
                      key={lesson.id} 
                      href={`/aula/${lesson.id}`} 
                      className={`p-4 block transition-all ${id === lesson.id ? 'bg-forest/5 border-l-4 border-forest' : 'hover:bg-gray-50 opacity-70 hover:opacity-100'}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{lesson.icon}</span>
                        <div className={`text-xs font-bold ${id === lesson.id ? 'text-forest' : 'text-gray-900'}`}>
                          {lesson.title}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </aside>

        </div>
      </div>

      <footer className="py-12 text-center text-gray-400 text-xs uppercase tracking-widest font-bold border-t border-gray-200 bg-white">
        &copy; 2026 Manual da Cura Ancestral. Suporte via WhatsApp disponível de Seg a Sex.
      </footer>
    </main>
  );
}
