'use client';

import { useEffect } from 'react';
import Script from 'next/script';
import { useRouter, useSearchParams } from 'next/navigation';

interface LastlinkIntegratorProps {
  redirectUrl: string;
  denyRedirectUrl: string;
}

declare global {
  interface Window {
    upsellRedirect: string;
  }
}

export function LastlinkIntegrator({ redirectUrl, denyRedirectUrl }: LastlinkIntegratorProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Definir o redirecionamento global que o script da Lastlink utiliza após o aceite
    window.upsellRedirect = window.location.origin + redirectUrl + '?' + searchParams.toString();
  }, [redirectUrl, searchParams]);

  const handleDeny = (e: React.MouseEvent) => {
    e.preventDefault();
    // Redirecionar para o downsell ou próxima etapa do funil mantendo os parâmetros (UTMs, etc)
    const nextUrl = denyRedirectUrl + '?' + searchParams.toString();
    router.push(nextUrl);
  };

  return (
    <>
      <Script 
        src="https://cdn.lastlink.com/upsell.min.js" 
        strategy="afterInteractive" 
      />
      {/* 
        Injetamos o manipulador de clique global para botões de recusa (deny) 
        que tenham o ID padrão que usamos no funil
      */}
      <style jsx global>{`
        #denyButton8cdb265 {
          cursor: pointer;
        }
      `}</style>
    </>
  );
}

export { handleDeny };
