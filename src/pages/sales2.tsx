import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
});

export default function SalesPage2() {
  const currentYear = new Date().getFullYear();

  return (
    <div className={`min-h-screen bg-white font-sans text-slate-900 selection:bg-yellow-200 ${roboto.className}`}>
      <Head>
        <title>Deep Domains AI - Exclusive Access</title>
        <meta name="description" content="Discover how to profit from $37 digital assets with Deep Domains AI." />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Head>

      {/* Trust Bar */}
      <div className="bg-slate-50 border-b border-slate-100 py-2.5 px-4 text-center">
        <p className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center justify-center gap-2">
          <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
          Secure 256-bit Encrypted Connection
        </p>
      </div>

      <main>
        {/* Header/Hero Section */}
        <section className="pt-12 pb-16 px-4 max-w-4xl mx-auto text-center">
          <div className="inline-block bg-indigo-50 text-[#1b1464] px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-widest mb-8 border border-indigo-100 italic">
            Limited Invitation Only
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-black leading-[1.1] tracking-tighter mb-8 text-slate-900">
            Simple AI Tool Finds <span className="text-[#1b1464] relative inline-block">
              "Hidden Gems"
              <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 100 8" preserveAspectRatio="none">
                <path d="M0 5h100" stroke="#fbbf24" strokeWidth="8" strokeLinecap="round" />
              </svg>
            </span> That Generate <span className="italic">Daily Profits</span> On Autopilot
          </h1>

          <p className="text-xl sm:text-2xl text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto mb-12">
            While everyone else is fighting for the same "saturated" niches, we use <strong>Deep AI</strong> to uncover $37 digital assets that pay out daily like clockwork.
          </p>

          <div className="bg-slate-50 rounded-3xl p-8 border border-dashed border-slate-200 mb-12">
            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Real-Time Opportunity Found By AI:</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="bg-white px-6 py-4 rounded-2xl shadow-sm border border-slate-100 text-center flex-1 w-full">
                <span className="block text-[10px] text-slate-400 font-black uppercase mb-1">Domain Name</span>
                <span className="font-mono text-xl font-bold text-[#1b1464]">isiba.co.uk</span>
              </div>
              <div className="hidden sm:block text-2xl text-slate-200">➔</div>
              <div className="bg-white px-6 py-4 rounded-2xl shadow-sm border border-slate-100 text-center flex-1 w-full">
                <span className="block text-[10px] text-slate-400 font-black uppercase mb-1">AI Valuation</span>
                <span className="font-mono text-xl font-bold text-green-600">$12,450.00</span>
              </div>
            </div>
          </div>

          <a href="#offer" className="inline-block w-full sm:w-auto bg-[#1b1464] text-white px-12 py-6 rounded-2xl font-black text-xl hover:bg-yellow-400 hover:text-slate-900 transition-all shadow-[0_20px_40px_rgba(27,20,100,0.3)] uppercase tracking-tighter active:scale-95">
            Claim Your Access Today &gt;&gt;
          </a>
        </section>

        {/* The Discovery Section (Pure Text) */}
        <section className="py-20 bg-slate-50 px-4">
          <div className="max-w-3xl mx-auto space-y-8 text-lg sm:text-xl leading-relaxed text-slate-600">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              The $37 Opportunity That 99% Of People Are Missing...
            </h2>
            <p>
              It sounds too good to be true, doesn't it? Finding a domain for $37 and turning it into a consistent passive income stream.
            </p>
            <p>
              But here's what the "gurus" aren't telling you: <strong>The market has changed.</strong>
            </p>
            <p>
              Manual research is dead. If you're spending hours looking for available domains, you've already lost. The big players are using <strong>Advanced Neural Networks</strong> to scan millions of records in milliseconds.
            </p>
            <p className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm italic text-[#1b1464] font-medium">
              "Deep Domains AI acts like a 24/7 digital bloodhound, sniffing out the exact patterns that indicate a domain is about to explode in value BEFORE the rest of the world catches on."
            </p>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-24 px-4 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mb-4">Why Deep Domains AI?</h2>
            <p className="text-slate-500 font-medium">The most powerful domain intelligence platform ever built.</p>
          </div>

          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { t: 'Instant Research', d: 'What used to take 14 hours now takes 1.4 seconds. Get the best domains before anyone else.', i: '⚡' },
              { t: 'Valuation Engine', d: 'Know exactly what a domain is worth before you buy it. Never overpay again.', i: '💰' },
              { t: 'Passive Resale', d: 'Direct connections to Sedo, Afternic, and GoDaddy for hands-free selling.', i: '🤖' },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all text-center">
                <div className="text-4xl mb-6">{item.i}</div>
                <h3 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-tighter">{item.t}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-20 bg-[#1b1464] text-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <div className="flex justify-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map(s => <span key={s} className="text-yellow-400 text-xl">★</span>)}
              </div>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-2 uppercase">Verified Member Results</h2>
              <p className="text-slate-300">Join 2,400+ successful domain investors worldwide.</p>
            </div>

            <div className="grid gap-6">
              {[
                { n: 'Marco S.', r: 'Just sold my first "Hidden Gem" for $1,200. I bought it yesterday for $37. This is insane.', l: 'São Paulo, BR' },
                { n: 'Sarah Jenkins', r: 'Finally, a tool that actually works. The AI valuation is scarily accurate.', l: 'London, UK' },
              ].map((testi, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10">
                  <p className="text-lg italic mb-6 leading-relaxed">"{testi.r}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white/10 rounded-full"></div>
                    <div>
                      <span className="block font-black text-sm uppercase">{testi.n}</span>
                      <span className="block text-[10px] text-slate-400 tracking-widest uppercase">{testi.l}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Offer Stack */}
        <section id="offer" className="py-24 px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-[3rem] border-4 border-[#1b1464] shadow-[0_40px_80px_rgba(27,20,100,0.2)] overflow-hidden">
            <div className="bg-[#1b1464] p-10 text-white text-center">
              <h2 className="text-2xl sm:text-4xl font-black mb-2 uppercase tracking-tighter">Everything You Get Today</h2>
              <p className="text-slate-400 font-bold uppercase tracking-[0.2em] text-xs">Total Value: $2,497.00</p>
            </div>

            <div className="p-8 sm:p-12 space-y-6">
              {[
                { t: 'Deep Domains AI Software Access', v: '$997' },
                { t: 'The "Hidden Gems" Scanning Engine', v: '$497' },
                { t: 'Bonus: Advanced Scaling Fast-Track Blueprint', v: '$497' },
                { t: 'Bonus: Automated Wealth Science', v: '$297' },
                { t: 'Lifetime Platform Updates', v: '$199' },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center border-b border-slate-100 pb-4">
                  <span className="font-bold text-slate-700 flex items-center gap-3">
                    <span className="text-green-500">✓</span> {item.t}
                  </span>
                  <span className="text-slate-400 font-mono text-sm">{item.v}</span>
                </div>
              ))}

              <div className="pt-8 text-center">
                <p className="text-slate-400 line-through text-lg mb-2">Original Price: $2,497</p>
                <div className="text-5xl sm:text-7xl font-black text-slate-900 mb-8 tracking-tighter">
                  Just <span className="text-[#1b1464]">$37 USD</span>
                </div>
                
                <a href="https://pay.mycheckoutt.com/01985d27-e19e-723d-a8ea-9e95012b0e07?ref=" className="flex items-center justify-center gap-4 w-full bg-[#1b1464] text-white py-8 rounded-[2rem] font-black text-2xl sm:text-3xl hover:bg-yellow-400 hover:text-slate-900 transition-all shadow-2xl uppercase tracking-tighter active:scale-95 group">
                  Add To Cart
                  <span className="text-2xl group-hover:translate-x-2 transition-transform">➔</span>
                </a>
                
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 opacity-30 grayscale">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-5" />
                </div>
              </div>
            </div>

            {/* Guarantee */}
            <div className="bg-slate-50 border-t border-slate-100 p-8 sm:p-12 text-center">
              <div className="w-20 h-20 bg-white shadow-xl rounded-full flex items-center justify-center mx-auto mb-6 border border-slate-100">
                <span className="text-3xl">🛡️</span>
              </div>
              <h3 className="text-2xl font-black mb-4 uppercase text-[#1b1464]">100% Risk-Free Guarantee</h3>
              <p className="text-slate-500 text-sm leading-relaxed max-w-xl mx-auto italic">
                Try Deep Domains AI for 7 full days. If you're not absolutely blown away by the "Hidden Gems" our AI finds, simply send a quick email for a full, no-questions-asked refund.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 px-4 max-w-3xl mx-auto">
          <h2 className="text-3xl font-black text-center mb-12 uppercase tracking-tight">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              { q: 'Is this for beginners?', a: 'Yes. 100%. The AI does the heavy lifting. You just select the domains you like.' },
              { q: 'How long until I see results?', a: 'Many members sell their first domain within 48-72 hours of following the blueprint.' },
              { q: 'Are there monthly fees?', a: 'No. When you join today, you lock in lifetime access with NO monthly fees.' },
            ].map((faq, i) => (
              <div key={i} className="p-8 rounded-3xl border border-slate-100 hover:border-indigo-100 transition-all">
                <h4 className="font-black text-lg mb-2 text-[#1b1464]">Q: {faq.q}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-slate-900 pt-20 pb-10 px-4 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-12 mb-16 border-b border-white/10 pb-16">
            <div className="col-span-1 sm:col-span-2">
              <div className="font-black text-2xl tracking-tighter uppercase mb-6 italic">
                Deep<span className="text-[#fbbf24]">Domains</span>
              </div>
              <p className="text-slate-400 text-sm max-w-xs leading-relaxed">
                The world's leading AI-powered domain intelligence engine for digital asset investors.
              </p>
            </div>
            <div>
              <h4 className="font-black uppercase text-xs tracking-widest mb-6">Support</h4>
              <ul className="space-y-4 text-sm text-slate-500 font-bold">
                <li><a href="mailto:support@fastwealth.io" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><Link href="/members" className="hover:text-white transition-colors">Access Portal</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-black uppercase text-xs tracking-widest mb-6">Legal</h4>
              <ul className="space-y-4 text-sm text-slate-500 font-bold">
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-slate-500 text-[10px] font-black uppercase tracking-widest">
            <p>© {currentYear} Deep Domains - All Rights Reserved</p>
            <p>CNPJ: 49.159.132/0001-50</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacidade</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Termos</Link>
            </div>
          </div>

          {/* Legal Disclaimer */}
          <div className="mt-12 p-8 bg-white/5 rounded-3xl border border-white/10 text-[10px] text-slate-500 leading-relaxed text-center font-medium">
            <p className="mb-4 text-slate-400">
              <strong>AVISO IMPORTANTE:</strong> Este conteúdo é estritamente educacional. Os resultados do método podem variar entre os indivíduos e não há garantia de lucros específicos. O sucesso depende da dedicação, implementação e fatores de mercado individuais.
            </p>
            <p className="mb-4">
              <strong>EARNINGS DISCLAIMER:</strong> Every effort has been made to accurately represent this product and its potential. Even though this industry is one of the few where one can write their own check in terms of earnings, there is no guarantee that you will earn any money using the techniques and ideas in these materials. Example results are not to be interpreted as a promise or guarantee of earnings.
            </p>
            <p>
              This site is not a part of the Facebook website or Facebook Inc. Additionally, This site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
