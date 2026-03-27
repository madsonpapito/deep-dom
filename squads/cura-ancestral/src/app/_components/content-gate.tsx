'use client';

import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';

interface ContentGateProps {
  children: React.ReactNode;
  productSlug: string; // 'cofre', 'sos', 'cozinha', 'circulo'
}

export function ContentGate({ children, productSlug }: ContentGateProps) {
  const [hasAccess, setHasAccess] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function checkAccess() {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        setHasAccess(false);
        setLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from('enrollments')
        .select('*')
        .eq('user_id', user.id)
        .eq('product_slug', productSlug)
        .eq('status', 'active')
        .single();

      if (data && !error) {
        setHasAccess(true);
      } else {
        setHasAccess(false);
      }
      setLoading(false);
    }

    checkAccess();
  }, [productSlug]);

  if (loading) {
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-forest"></div>
      </div>
    );
  }

  if (!hasAccess) {
    return (
      <div className="bg-white p-8 md:p-16 rounded-[40px] shadow-2xl border-2 border-dashed border-gold text-center max-w-2xl mx-auto my-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 text-4xl opacity-20">🔒</div>
        <h2 className="text-2xl md:text-3xl font-black text-forest font-heading mb-4 uppercase">
          Acesso Restrito
        </h2>
        <p className="text-gray-600 mb-8 font-serif italic text-lg leading-relaxed">
          Ops! Parece que você ainda não liberou este portal especial na sua jornada de cura.
        </p>
        
        <div className="bg-gold/5 p-6 rounded-2xl mb-10 border border-gold/20 text-left">
          <strong className="text-forest block mb-2">Por que não tenho acesso?</strong>
          <p className="text-sm text-gray-700">
            Este conteúdo faz parte dos protocolos avançados da Cura Ancestral. Você pode adquiri-lo separadamente para acelerar seus resultados.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <Link 
            href="/#oferta" 
            className="bg-amber-cta text-white font-black py-5 px-8 rounded-2xl shadow-lg hover:scale-[1.02] transition-transform uppercase tracking-tight"
          >
            QUERO LIBERAR MEU ACESSO AGORA ➱
          </Link>
          <Link href="/painel" className="text-gray-400 underline text-sm font-medium hover:text-forest transition-colors">
            Voltar para o Painel Principal
          </Link>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
