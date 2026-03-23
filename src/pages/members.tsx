import React from 'react';
import Head from 'next/head';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
});

const domains = [
  { name: 'pala.it.com', valUrl: 'https://humbleworth.com/valuation/pala.it.com' },
  { name: 'serum.it.com', valUrl: 'https://humbleworth.com/valuation/serum.it.com' },
  { name: 'zen.it.com', valUrl: 'https://humbleworth.com/valuation/zen.it.com' },
];

const gems = [
  { name: 'kalua.it.com', valUrl: 'https://humbleworth.com/valuation/kalua.it.com' },
  { name: 'coneo.it.com', valUrl: 'https://humbleworth.com/valuation/coneo.it.com' },
  { name: 'viva.it.com', valUrl: 'https://humbleworth.com/valuation/viva.it.com' },
  { name: 'aura.it.com', valUrl: 'https://humbleworth.com/valuation/aura.it.com' },
];

export default function MembersPortal() {
  return (
    <div className={`min-h-screen bg-gray-50 font-sans text-gray-900 ${roboto.className}`}>
      <Head>
        <title>Members Area - Deep Domains Portal</title>
      </Head>

      {/* Header */}
      <header className="bg-[#1b1464] text-white py-6 shadow-lg border-b-4 border-yellow-400">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div>
            <h1 className="text-2xl font-black tracking-tighter uppercase">Members Area</h1>
            <p className="text-xs text-blue-200 font-bold uppercase tracking-widest">Deep Domains & Gems Elite</p>
          </div>
          <div className="bg-white/10 px-4 py-2 rounded-lg border border-white/20 text-sm">
             Support: <a href="mailto:support@fastwealth.io" className="underline font-bold">support@fastwealth.io</a>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-10 md:py-16">
        
        {/* Welcome Section */}
        <div className="mb-12 text-center md:text-left bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row items-center gap-8">
           <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center shrink-0">
              <span className="text-4xl">🚀</span>
           </div>
           <div>
              <h2 className="text-3xl font-black text-[#1b1464] mb-2 uppercase">Welcome to the Inner Circle!</h2>
              <p className="text-gray-600 font-medium leading-relaxed">
                Congratulations on securing your access. Your credit card statement will show a charge from <strong>CLICKBANK</strong>. 
                Below you will find everything you need to start profiting from deep domains.
              </p>
           </div>
        </div>

        {/* Free Training Banner */}
        <section className="bg-gradient-to-r from-[#1b1464] to-[#4c3b99] rounded-3xl p-8 mb-16 text-white relative overflow-hidden shadow-2xl group">
           <div className="absolute top-0 right-0 p-4 opacity-10 font-black text-9xl">5K</div>
           <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="max-w-2xl">
                 <div className="inline-block bg-yellow-400 text-[#1b1464] px-4 py-1 rounded-full font-black text-[10px] uppercase mb-4 shadow">VIP ACCESS</div>
                 <h3 className="text-3xl font-black mb-4 leading-tight">EXCLUSIVE FREE TRAINING: SCALE TO $5,000/DAY</h3>
                 <p className="text-blue-100 mb-6 font-medium italic">"Discover how to potentially double—or even triple—your passive income with this automated system."</p>
                 <a href="https://freedomescapexcelerator.com/5k-daily-4" className="inline-block bg-white text-[#1b1464] px-10 py-4 rounded-xl font-black hover:bg-yellow-400 transition-all hover:scale-105 shadow-xl uppercase">
                    Register Yours Spots Free
                 </a>
              </div>
              <div className="w-full md:w-80 aspect-video bg-black rounded-xl border border-white/20 flex items-center justify-center text-xs italic opacity-80 overflow-hidden shadow-inner">
                 <div className="text-center p-4">
                    <span className="block text-2xl mb-2">▶️</span>
                    Watch Intro Video
                 </div>
              </div>
           </div>
        </section>

        <div className="grid lg:grid-cols-12 gap-12">
           
           {/* Sidebar: Tutorials & Guides */}
           <aside className="lg:col-span-4 space-y-8">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                 <div className="bg-gray-50 border-b border-gray-100 p-6 flex items-center gap-3">
                    <span className="text-2xl">📖</span>
                    <h3 className="font-black text-gray-900 uppercase">Training Hub</h3>
                 </div>
                 <div className="p-6 space-y-6">
                    <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center text-white text-[10px] italic p-4 text-center">
                       Video Tutorial: How to profit from your domains
                    </div>
                    <div className="space-y-3">
                       <p className="text-xs font-black text-gray-400 uppercase tracking-widest px-1">Step-by-step Guides</p>
                       <a href="https://fastwealth.io/registernamecheap/" className="block p-3 rounded-lg hover:bg-blue-50 text-sm font-bold border border-transparent hover:border-blue-100 transition-all">
                          &gt; How to Register (Namecheap)
                       </a>
                       <a href="https://fastwealth.io/godaddy" className="block p-3 rounded-lg hover:bg-blue-50 text-sm font-bold border border-transparent hover:border-blue-100 transition-all">
                          &gt; How to Register (GoDaddy)
                       </a>
                       <a href="https://fastwealth.io/listsedo/" className="block p-3 rounded-lg hover:bg-blue-50 text-sm font-bold border border-transparent hover:border-blue-100 transition-all">
                          &gt; How to List for Sale (Sedo)
                       </a>
                       <a href="https://fastwealth.io/afternic" className="block p-3 rounded-lg hover:bg-blue-50 text-sm font-bold border border-transparent hover:border-blue-100 transition-all">
                          &gt; How to List on Afternic
                       </a>
                    </div>
                 </div>
              </div>

              <div className="bg-yellow-50 rounded-2xl p-6 border-2 border-dashed border-yellow-200">
                 <h4 className="font-bold text-yellow-800 mb-2 flex items-center gap-2">
                    <span>⚠️</span> Important Notice
                 </h4>
                 <p className="text-xs text-yellow-700 leading-relaxed font-medium">
                    We update our domain lists every single day between <strong>3 PM EST and 5 PM EST</strong>. If you don't see new domains, check back in an hour!
                 </p>
              </div>
           </aside>

           {/* Main Content: Domain Lists */}
           <div className="lg:col-span-8 space-y-12">
              
              {/* Nested Gems List */}
              <section id="gems">
                 <div className="flex items-center gap-4 mb-6">
                    <div className="h-10 w-2 bg-yellow-400 rounded-full"></div>
                    <div>
                       <h3 className="text-2xl font-black text-[#1b1464] uppercase tracking-tighter">Nested Gems Elite</h3>
                       <p className="text-sm text-gray-500 font-bold italic">Top 0.01% Ultra-Premium Domains</p>
                    </div>
                 </div>
                 <div className="grid gap-4">
                    {gems.map((gem, idx) => (
                       <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex justify-between items-center group hover:border-[#1b1464] transition-all">
                          <div className="font-mono text-xl font-black text-gray-800 tracking-tighter group-hover:text-[#1b1464] transition-colors">{gem.name}</div>
                          <a href={gem.valUrl} target="_blank" rel="noopener" className="bg-[#1b1464] text-white px-6 py-2 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-yellow-400 hover:text-[#1b1464] transition-all shadow-md active:scale-95">
                             VALUATION
                          </a>
                       </div>
                    ))}
                 </div>
              </section>

              {/* Nested Domains List */}
              <section id="domains">
                 <div className="flex items-center gap-4 mb-6">
                    <div className="h-10 w-2 bg-blue-400 rounded-full"></div>
                    <div>
                       <h3 className="text-2xl font-black text-[#1b1464] uppercase tracking-tighter">Your Active Domains</h3>
                       <p className="text-sm text-gray-500 font-bold italic">High-Potential Weekly Picks</p>
                    </div>
                 </div>
                 <div className="grid gap-4">
                    {domains.map((domain, idx) => (
                       <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex justify-between items-center group border-l-8 border-l-blue-100 hover:border-l-blue-400 transition-all">
                          <div className="font-mono text-xl font-black text-gray-800 tracking-tighter">{domain.name}</div>
                          <a href={domain.valUrl} target="_blank" rel="noopener" className="text-blue-600 font-black text-xs uppercase tracking-widest border-b-2 border-transparent hover:border-blue-600 transition-all">
                             Check Value
                          </a>
                       </div>
                    ))}
                 </div>
              </section>

              {/* Disclaimer */}
              <footer className="text-[10px] text-gray-400 text-center py-8 px-10 border-t border-gray-100">
                 <p className="uppercase font-bold mb-4 tracking-widest">Legal Disclaimer</p>
                 <p className="leading-relaxed italic">
                    We are not affiliated, associated, or endorsed by any domain valuation website linked or referenced in this members area. All valuations are generated by third-party platforms, and we make no guarantees regarding their accuracy or reliability. IN ORDER TO CONTINUE, YOU NEED TO READ AND AGREE TO <a href="https://fastwealth.io/release" className="underline">THESE TERMS</a>.
                 </p>
                 <p className="mt-8 opacity-50 font-bold">DEEP DOMAINS — POWERED BY AI TECHNOLOGY</p>
              </footer>

           </div>
        </div>
      </main>

      <style jsx global>{`
        body { background-color: #f9fafb; }
      `}</style>
    </div>
  );
}
