'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function CirculoPage() {
  return (
    <main className="min-h-screen bg-crema pb-20">
      <nav className="bg-gold text-black py-4 px-6 flex items-center gap-4 shadow-lg sticky top-0 z-50 font-bold">
        <Link href="/painel" className="hover:opacity-80">← Voltar</Link>
        <h1 className="font-heading uppercase tracking-tighter">Círculo Secreto dos Mestres</h1>
      </nav>

      <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        <div className="bg-white p-8 rounded-2xl shadow-xl border-t-8 border-gold">
          <div className="text-center mb-12">
            <div className="relative w-32 h-32 mx-auto mb-6 shadow-2xl rounded-full overflow-hidden border-4 border-gold">
               <Image src="/imagem/circulo-secreto-dos-mestres.webp" alt="Círculo Secreto" layout="fill" objectFit="cover" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-forest font-heading mb-4">Bem-vinda à Elite, Matriarca!</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Você agora faz parte do grupo seleto que tem acesso direto às atualizações da Cura Ancestral.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-sage/5 p-8 rounded-2xl border border-forest/10 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-forest mb-4 flex items-center gap-2">
                  <span>💬</span> Comunidade VIP
                </h3>
                <p className="text-gray-600 mb-6">Troque experiências, tire dúvidas e compartilhe suas conquistas com outras alunas e com a Dirce Helena.</p>
              </div>
              <a 
                href="https://chat.whatsapp.com/invite/cura-ancestral-vip" 
                target="_blank"
                className="bg-[#25D366] text-white font-black py-4 px-6 rounded-xl shadow-lg hover:scale-105 transition-transform text-center uppercase"
              >
                Entrar no Grupo VIP
              </a>
            </div>

            <div className="bg-gold/5 p-8 rounded-2xl border border-gold/20 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-forest mb-4 flex items-center gap-2">
                  <span>📜</span> Protocolos do Mestre
                </h3>
                <p className="text-gray-600 mb-6">Baixe o guia avançado de ciência SAB para quem deseja se tornar uma mestre herbalista.</p>
              </div>
              <a 
                href="/imagem/pdf/guia-mestre-ciencia-sab.pdf" 
                download
                className="bg-gold text-black font-black py-4 px-6 rounded-xl shadow-lg hover:scale-105 transition-transform text-center uppercase"
              >
                Baixar Protocolos (PDF)
              </a>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl text-center">
            <h3 className="font-bold text-forest mb-2">Próxima Mentoria ao Vivo</h3>
            <p className="text-gray-500 italic">O link da sala será enviado no grupo do WhatsApp 1 hora antes do início.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
