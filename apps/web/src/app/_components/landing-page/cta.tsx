import Link from "next/link";
import { Button } from "~/components/ui/button";

export function Cta() {
  return (
    <div className="w-full max-w-md flex flex-col items-center gap-4">
      <Link href="https://pay.kiwify.com/tMxkqds" className="w-full">
        <Button size="lg" className="w-full font-semibold text-lg py-7">
          QUERO TRANSFORMAR MEU CORPO POR R$67
        </Button>
      </Link>
      <p className="text-center text-sm text-white/50">
        Garantia de 7 dias &quot;feliz ou seu dinheiro de volta&quot;.
      </p>
    </div>
  );
}

export function FinalCta() {
    return (
        <div className="w-full max-w-md mt-8 flex flex-col items-center gap-4">
            <Link href="https://pay.kiwify.com/tMxkqds" className="w-full">
                <Button size="lg" className="w-full font-semibold text-lg py-7">
                    SIM, QUERO COMEÇAR AGORA!
                </Button>
            </Link>
             <p className="text-center text-sm mt-2 text-white/50">Acesso por apenas R$67. Risco zero.</p>
        </div>
    )
}
