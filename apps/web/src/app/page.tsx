import { Benefits } from "./_components/landing-page/benefits";
import { Bonuses } from "./_components/landing-page/bonuses";
import { Cta, FinalCta } from "./_components/landing-page/cta";
import { Hero } from "./_components/landing-page/hero";
import { WhatYouGet } from "./_components/landing-page/what-you-get";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container mx-auto flex flex-col items-center gap-12 px-4 py-16">
        <Hero />
        <Cta />
        <Benefits />
        <WhatYouGet />
        <Bonuses />
        <FinalCta />
      </div>
    </main>
  );
}
