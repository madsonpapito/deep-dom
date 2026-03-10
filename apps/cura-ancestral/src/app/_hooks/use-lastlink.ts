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
    // Definir o redirecionamento global para aceites (comprado com 1 clique)
    const baseUrl = window.location.origin;
    window.upsellRedirect = `${baseUrl}${acceptRedirect}?${searchParams.toString()}`;
  }, [acceptRedirect, searchParams]);

  const onDeny = useCallback(() => {
    // Redirecionar para o downsell ou próxima etapa mantendo UTMs
    const nextUrl = `${denyRedirect}?${searchParams.toString()}`;
    router.push(nextUrl);
  }, [denyRedirect, router, searchParams]);

  return { onDeny };
}
