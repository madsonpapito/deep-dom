import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { STAGES } from '@/lib/lessons';

const premiumMaterials = [
  {
    id: "manual",
    title: "Manual da Cura Ancestral",
    description: "Protocolo V.I.T.A.L. de 21 dias completo.",
    image: "/imagem/manual-da-cura-acenstral.webp",
    link: "/imagem/pdf/manual-principal.pdf",
    type: "PRINCIPAL",
    download: true
  },
  {
    id: "cofre",
    title: "Cofre das Ervas Raras",
    description: "Protocolo de regeneração avançada e plantas mestras.",
    image: "/imagem/cofre-das-ervas-raras.webp",
    link: "/painel/cofre",
    type: "UPSELL"
  },
  {
    id: "sos",
    title: "Protocolo SOS",
    description: "Ações de emergência para dores e crises agudas.",
    image: "/imagem/protocolo-sos.webp",
    link: "/painel/sos",
    type: "DOWNSELL"
  },
  {
    id: "cozinha",
    title: "Farmácia na Cozinha",
    description: "Guia digital de consulta rápida e substituições.",
    image: "/imagem/guia-digital-farmacia-na-cozinha.webp",
    link: "/painel/cozinha",
    type: "DOWNSELL"
  }
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-crema pb-20">
      <nav className="bg-forest text-white py-4 px-6 flex justify-between items-center shadow-lg sticky top-0 z-50">
        <div className="font-heading text-xl font-bold">🌿 Cura Ancestral</div>
        <div className="flex items-center gap-3">
          <span className="text-sm hidden md:inline">Olá, <strong>Dirce Helena</strong></span>
          <div className="w-10 h-10 bg-white text-forest rounded-full flex items-center justify-center font-black">D</div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
        <header className="bg-white p-8 rounded-2xl shadow-sm border-l-8 border-forest mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex-1">
            <h1 className="text-2xl md:text-3xl font-black text-forest font-heading mb-2">
              Que bom ter você aqui de novo, Dirce!
            </h1>
            <p className="text-gray-600 italic">&quot;A saúde é o silêncio dos órgãos.&quot; — Vamos continuar sua jornada?</p>
            
            <div className="mt-6">
              <div className="flex justify-between text-xs font-bold text-forest uppercase mb-2">
                <span>Seu Progresso Total</span>
                <span>15% concluído</span>
              </div>
              <div className="w-full bg-gray-100 h-3 rounded-full overflow-hidden">
                <div className="bg-forest h-full w-[15%] transition-all duration-1000" />
              </div>
            </div>
          </div>
          
          <div className="bg-gold/5 border-2 border-gold/20 p-6 rounded-2xl md:max-w-xs text-center">
            <div className="relative w-16 h-16 mx-auto mb-3">
              <Image src="/imagem/circulo-secreto-dos-mestres.webp" alt="Ícone Círculo Secreto" width={64} height={64} className="rounded-full shadow-md" />
            </div>
            <h4 className="font-heading font-black text-forest text-sm uppercase">Círculo Secreto</h4>
            <Link href="/painel/circulo" className="mt-2 block text-xs font-black bg-gold text-white py-2 px-4 rounded-lg shadow-sm hover:scale-[1.05] transition-transform">
              ACESSAR COMUNIDADE ➱
            </Link>
          </div>
        </header>

        {/* Módulos de Estudo */}
        <section className="space-y-12">
          {STAGES.map((stage, idx) => (
            <div key={idx} className="space-y-4">
              <h2 className="text-xl md:text-2xl font-black text-gray-800 font-heading px-2">{stage.title}</h2>
              <div className="flex overflow-x-auto gap-4 pb-4 px-2 no-scrollbar scroll-smooth">
                {stage.lessons.map((lesson) => (
                  <Link key={lesson.id} href={`/aula/${lesson.id}`} className="min-w-[240px] md:min-w-[280px] group">
                    <div className="bg-white rounded-xl overflow-hidden shadow-md group-hover:shadow-xl transition-all border border-gray-100 group-hover:border-forest/30 group-hover:-translate-y-1">
                      <div className="aspect-video bg-forest/10 flex items-center justify-center text-5xl group-hover:scale-110 transition-transform">
                        {lesson.icon}
                      </div>
                      <div className="p-4">
                        <span className="text-xs font-bold text-sage uppercase tracking-wider">Aula Disponível</span>
                        <h3 className="font-bold text-gray-900 mt-1 leading-tight group-hover:text-forest">
                          {lesson.title}
                        </h3>
                        <button className="mt-4 text-xs font-black text-white bg-forest px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity uppercase">
                          Assistir agora
                        </button>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Materiais Premium e Extras */}
        <section className="mt-16 space-y-6">
          <h2 className="text-2xl md:text-3xl font-black text-forest font-heading px-2 flex items-center gap-3">
            💎 Seus Materiais Especiais
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {premiumMaterials.map((item) => (
              item.download ? (
                <a key={item.id} href={item.link} download className="group">
                  <div className="bg-white p-4 rounded-2xl shadow-md border border-gray-100 group-hover:border-forest/30 group-hover:shadow-xl transition-all flex items-center gap-4 h-full">
                    <div className="relative w-16 h-16 flex-shrink-0 rounded-xl overflow-hidden shadow-sm">
                      <Image src={item.image} alt={item.title} layout="fill" objectFit="cover" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-black py-0.5 px-2 rounded-full bg-forest text-white uppercase">
                          {item.type}
                        </span>
                        <span className="text-[9px] font-bold text-sage uppercase tracking-tighter">Acesso Liberado</span>
                      </div>
                      <h3 className="font-bold text-gray-900 leading-tight text-sm">{item.title}</h3>
                      <p className="text-[10px] text-gray-500 mt-1 line-clamp-1 leading-tight">{item.description}</p>
                    </div>
                  </div>
                </a>
              ) : (
                <Link key={item.id} href={item.link} className="group">
                  <div className="bg-white p-4 rounded-2xl shadow-md border border-gray-100 group-hover:border-forest/30 group-hover:shadow-xl transition-all flex items-center gap-4 h-full relative overflow-hidden">
                    <div className="relative w-16 h-16 flex-shrink-0 rounded-xl overflow-hidden shadow-sm opacity-80 group-hover:opacity-100 transition-opacity">
                      <Image src={item.image} alt={item.title} layout="fill" objectFit="cover" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-[10px] font-black py-0.5 px-2 rounded-full ${item.type === 'UPSELL' ? 'bg-gold/10 text-gold' : 'bg-blood/10 text-blood'} uppercase`}>
                          {item.type}
                        </span>
                        <span className="text-[9px] font-bold text-gray-400 uppercase tracking-tighter">🔒 Premium</span>
                      </div>
                      <h3 className="font-bold text-gray-900 leading-tight text-sm group-hover:text-forest">{item.title}</h3>
                      <p className="text-[10px] text-gray-500 mt-1 line-clamp-1 leading-tight">{item.description}</p>
                    </div>
                  </div>
                </Link>
              )
            ))}
          </div>
        </section>

        <section className="mt-20 bg-[#25D366] p-8 rounded-2xl text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-black mb-2">Precisa de ajuda ou quer compartilhar um chá?</h3>
            <p className="font-medium opacity-90">Nossa comunidade no WhatsApp está esperando por você!</p>
          </div>
          <button className="bg-white text-[#25D366] font-black py-4 px-8 rounded-full shadow-lg hover:scale-[1.05] transition-transform active:translate-y-1 uppercase tracking-tight">
            Entrar no Grupo da Família
          </button>
        </section>
      </div>

      <footer className="py-12 text-center text-gray-400 text-sm border-t border-gray-200 mt-12">
        &copy; 2026 Manual da Cura Ancestral. Feito com carinho para sua saúde.
      </footer>
    </main>
  );
}
