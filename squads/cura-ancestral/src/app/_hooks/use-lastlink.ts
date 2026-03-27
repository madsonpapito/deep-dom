'use client';

import { useEffect, useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

declare global {
  interface Window {
    upsellRedirect?: string;
  }
}

export function useLastlink(acceptRedirect: string, denyRedirect: string) {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Capturar UTMs atuais e mesclar com as salvas no localStorage
    const currentParams = new URLSearchParams(searchParams.toString());
    const savedUtms = localStorage.getItem('cura_ancestral_utms');
    
    if (searchParams.toString()) {
      localStorage.setItem('cura_ancestral_utms', searchParams.toString());
    } else if (savedUtms) {
      // Se não há parâmetros na URL agora, mas existem salvos, use os salvos
      const paramsToUse = new URLSearchParams(savedUtms);
      paramsToUse.forEach((value, key) => {
        if (!currentParams.has(key)) currentParams.append(key, value);
      });
    }

    const finalQuery = currentParams.toString() ? `?${currentParams.toString()}` : '';
    const baseUrl = window.location.origin;
    
    // Definir o redirecionamento global para aceites (comprado com 1 clique)
    window.upsellRedirect = `${baseUrl}${acceptRedirect}${finalQuery}`;
  }, [acceptRedirect, searchParams]);

  const onDeny = useCallback(() => {
    const savedUtms = localStorage.getItem('cura_ancestral_utms');
    const finalQuery = savedUtms ? `?${savedUtms}` : '';
    const nextUrl = `${denyRedirect}${finalQuery}`;
    router.push(nextUrl);
  }, [denyRedirect, router]);

  return { onDeny };
}

