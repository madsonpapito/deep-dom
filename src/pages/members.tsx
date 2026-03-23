import React from 'react';
import Head from 'next/head';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
});

const domains = [
  { name: 'isiba.co.uk', valUrl: 'https://humbleworth.com/valuation/single?domain=isiba.co.uk' },
  { name: 'orese.co.uk', valUrl: 'https://humbleworth.com/valuation/single?domain=orese.co.uk' },
  { name: 'abiya.co.uk', valUrl: 'https://humbleworth.com/valuation/single?domain=abiya.co.uk' },
  { name: 'ecaco.co.uk', valUrl: 'https://humbleworth.com/valuation/single?domain=ecaco.co.uk' },
  { name: 'elari.co.uk', valUrl: 'https://humbleworth.com/valuation/single?domain=elari.co.uk' },
];

const gems = [
  { name: 'kalua.it.com', valUrl: 'https://humbleworth.com/valuation/single?domain=kalua.it.com' },
  { name: 'coneo.it.com', valUrl: 'https://humbleworth.com/valuation/single?domain=coneo.it.com' },
  { name: 'tiana.it.com', valUrl: 'https://humbleworth.com/valuation/single?domain=tiana.it.com' },
  { name: 'vizio.it.com', valUrl: 'https://humbleworth.com/valuation/single?domain=vizio.it.com' },
];

export default function MembersElitePortal() {
  const currentDate = new Date().toLocaleDateString('pt-BR');
  const nextDate = new Date(Date.now() + 86400000).toLocaleDateString('pt-BR');

  return (
    <div className={`min-h-screen bg-[#f8fafc] font-sans text-slate-900 ${roboto.className} selection:bg-yellow-100 selection:text-yellow-900`}>
      <Head>
        <title>Elite Members Portal | Deep Domains</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      {/* Top Value Bar */}
      <div className="bg-[#1b1464] text-white py-2 text-[10px] uppercase font-bold tracking-[0.2em] text-center border-b border-white/10">
        Official Deep Domains Elite Access Portal
      </div>

      <header className="bg-white border-b border-slate-200 sticky top-0 z-40 backdrop-blur-md bg-white/80">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 bg-[#1b1464] rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200">
                <span className="text-xl">💎</span>
             </div>
             <div>
                <h1 className="font-black text-xl tracking-tighter uppercase leading-none">Members Area</h1>
                <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest mt-0.5">Deep Domains & Gems Elite</p>
             </div>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
             <div className="text-right">
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-0.5">Support Center</p>
                <a href="mailto:support@fastwealth.io" className="text-sm font-black text-[#1b1464] hover:underline">support@fastwealth.io</a>
             </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Welcome Section */}
        <section className="mb-12">
          <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm flex flex-col md:flex-row items-center gap-10">
             <div className="w-24 h-24 bg-indigo-50 rounded-full flex items-center justify-center shrink-0 border border-indigo-100">
                <span className="text-5xl">👑</span>
             </div>
             <div className="text-center md:text-left">
                <h2 className="text-4xl font-black text-[#1b1464] mb-3 uppercase tracking-tighter">Welcome to the Inner Circle!</h2>
                <p className="text-slate-500 font-medium leading-relaxed max-w-2xl">
                  Congratulations on securing your elite access. Below you will find your premium domains and the strategic training to flip them for maximum profit.
                </p>
             </div>
          </div>
        </section>

        {/* Purchase & Gmail Notice */}
        <section className="mb-12 grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex items-start gap-5">
             <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl shrink-0">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor font-bold"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
             </div>
             <div>
                <h4 className="font-black text-sm uppercase mb-1">Billing Confirmation</h4>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">
                  Your credit card statement will show a charge from <strong>CLICKBANK</strong>. Keep this for your records.
                </p>
             </div>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex items-start gap-5">
             <div className="p-3 bg-orange-50 text-orange-600 rounded-2xl shrink-0">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor font-bold"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
             </div>
             <div>
                <h4 className="font-black text-sm uppercase mb-1">Spam & Gmail Notice</h4>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">
                  Check your <strong>Spam</strong> folder and <strong>Promotions tab</strong> if you don't receive access emails within 5 minutes.
                </p>
             </div>
          </div>
        </section>

        <div className="grid lg:grid-cols-12 gap-10">
          
          {/* Main Area: 8 Columns */}
          <div className="lg:col-span-8 space-y-12">
             
             {/* Tutorial Video Section */}
             <section className="bg-white rounded-[2rem] p-8 border border-slate-200 shadow-xl overflow-hidden mb-12">
                <div className="flex items-center gap-4 mb-6">
                   <div className="w-1.5 h-8 bg-[#1b1464] rounded-full"></div>
                   <div>
                      <h3 className="text-2xl font-black tracking-tighter uppercase text-slate-900 leading-none">Tutorial Video</h3>
                      <p className="text-slate-500 text-sm font-medium mt-1">Complete strategy in 10 minutes.</p>
                   </div>
                </div>
                
                <div className="aspect-video w-full rounded-2xl overflow-hidden bg-slate-900 shadow-2xl mb-6">
                   <iframe
                     src="https://play.tynk.ai/p/c18ea35a-6ae6-43c1-bcf1-3b296546331b"
                     width="100%"
                     height="100%"
                     style={{ border: 'none' }}
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                     allowFullScreen
                   ></iframe>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                   <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Mastering the Strategy</span>
                   <div className="flex items-center gap-2 text-[#1b1464] font-black text-xs uppercase hover:text-indigo-600 transition-colors">
                      <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full animate-pulse"></span>
                      Watch Now
                   </div>
                </div>
             </section>

             {/* Dynamic Update Info */}
             <div className="bg-slate-900 rounded-[2rem] p-8 text-white relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                   <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                </div>
                <div className="relative z-10">
                   <div className="inline-flex items-center gap-2 bg-yellow-400 text-slate-900 px-3 py-1 rounded-lg text-[10px] font-black uppercase mb-4 shadow-lg shadow-yellow-400/20">
                      <span className="w-2 h-2 bg-slate-900 rounded-full animate-ping"></span>
                      List Status: Live
                   </div>
                   <h2 className="text-3xl font-black mb-4 tracking-tighter italic">Official Domain Lists</h2>
                   <p className="text-slate-400 text-sm leading-relaxed max-w-xl mb-8">
                      We update the list every day between <strong>3 PM EST and 5 PM EST</strong> (sometimes earlier) with brand new Nested Domains.
                   </p>
                   <div className="flex gap-4 border-t border-white/10 pt-6">
                      <div className="bg-white/5 px-4 py-2 rounded-xl backdrop-blur-sm border border-white/10">
                         <span className="block text-[10px] uppercase text-slate-500 font-bold tracking-widest">Last Update</span>
                         <span className="font-mono text-sm font-bold">{currentDate}</span>
                      </div>
                      <div className="bg-white/5 px-4 py-2 rounded-xl backdrop-blur-sm border border-white/10">
                         <span className="block text-[10px] uppercase text-slate-500 font-bold tracking-widest">Next Batch</span>
                         <span className="font-mono text-sm font-bold">{nextDate}</span>
                      </div>
                   </div>
                </div>
             </div>

             {/* Exclusive Bonus Section */}
             <section className="bg-gradient-to-br from-indigo-50 to-white rounded-[2rem] p-10 border border-indigo-100 shadow-xl relative overflow-hidden">
                <div className="bg-red-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full absolute top-6 right-6 shadow-xl animate-bounce">URGENT: SPOTS LIMITED</div>
                <div className="max-w-xl">
                   <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase">🚀 EXCLUSIVE FREE TRAINING: SCALE TO $5,000/DAY</h3>
                   <p className="text-slate-600 mb-8 font-medium italic text-lg leading-relaxed">
                      "Inside, you’ll discover how to potentially double—or even triple—your passive income with our automated scale system."
                   </p>
                   
                   <div className="aspect-video bg-slate-900 rounded-3xl mb-8 flex items-center justify-center text-white/20 group relative overflow-hidden cursor-pointer shadow-2xl">
                      <div className="absolute inset-0 bg-[url('/images/thumb_11zon.webp')] opacity-80 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"></div>
                      <div className="relative z-10 flex flex-col items-center gap-4 transition-transform group-hover:scale-110">
                         <div className="w-20 h-20 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/30 shadow-2xl">
                            <span className="text-3xl translate-x-1">▶️</span>
                         </div>
                         <span className="text-xs font-black uppercase tracking-[0.3em] text-white">Watch 1 Min Intro</span>
                      </div>
                   </div>

                   <a href="https://freedomescapexcelerator.com/5k-daily-4" target="_blank" className="block w-full text-center bg-[#1b1464] text-white py-5 rounded-2xl font-black text-xl hover:bg-yellow-400 hover:text-slate-900 transition-all shadow-[0_15px_30px_rgba(27,20,100,0.3)] uppercase tracking-tighter active:scale-95">
                      Register My Spot Free &gt;&gt;
                   </a>
                </div>
             </section>

             {/* Digital Bonuses Section */}
             <section className="pt-8 mb-12">
                <div className="flex items-center gap-4 mb-8">
                   <div className="w-1.5 h-10 bg-[#1b1464] rounded-full"></div>
                   <h3 className="text-3xl font-black tracking-tighter uppercase text-slate-900">Digital Bonuses & Downloads</h3>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-8">
                   {/* Bonus 1 */}
                   <div className="bg-white rounded-[2.5rem] border border-slate-200 overflow-hidden shadow-sm hover:shadow-2xl transition-all group">
                      <div className="aspect-[16/10] bg-slate-100 relative overflow-hidden border-b border-slate-100">
                         <img src="/bonuses/0-to-100k-Fast-Track.webp" alt="0 to 100k Fast Track" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                         <div className="absolute inset-0 bg-[#1b1464]/10 group-hover:bg-transparent transition-colors"></div>
                      </div>
                      <div className="p-8">
                         <h4 className="font-black text-xl mb-4 leading-tight uppercase tracking-tighter text-[#1b1464]">0 to $100,000 Fast-Track Blueprint</h4>
                         <a href="/bonuses/0-to-100k-Fast-Track.pdf" target="_blank" className="block w-full text-center bg-[#1b1464] text-white py-4 rounded-2xl font-black text-sm uppercase hover:bg-yellow-400 hover:text-slate-900 transition-all shadow-xl active:scale-95">Download PDF Guide</a>
                      </div>
                   </div>

                   {/* Bonus 2 */}
                   <div className="bg-white rounded-[2.5rem] border border-slate-200 overflow-hidden shadow-sm hover:shadow-2xl transition-all group">
                      <div className="aspect-[16/10] bg-slate-100 relative overflow-hidden border-b border-slate-100">
                         <img src="/bonuses/the-science-of-creating-wealth-1.webp" alt="The Science of Creating Wealth" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                         <div className="absolute inset-0 bg-[#1b1464]/10 group-hover:bg-transparent transition-colors"></div>
                      </div>
                      <div className="p-8">
                         <h4 className="font-black text-xl mb-4 leading-tight uppercase tracking-tighter text-[#1b1464]">The Science of Creating Wealth</h4>
                         <a href="/bonuses/the-science-of-creating-wealth-1.pdf" target="_blank" className="block w-full text-center bg-[#1b1464] text-white py-4 rounded-2xl font-black text-sm uppercase hover:bg-yellow-400 hover:text-slate-900 transition-all shadow-xl active:scale-95">Download PDF Guide</a>
                      </div>
                   </div>
                </div>
             </section>

             {/* Deliverables: Gems & Domains */}
             <div className="space-y-16 pt-8">
               
               {/* Gems Elite */}
               <section id="gems">
                 <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                       <div className="w-1.5 h-10 bg-yellow-400 rounded-full"></div>
                       <h3 className="text-3xl font-black tracking-tighter uppercase text-slate-900">Nested Gems Elite</h3>
                    </div>
                    <span className="hidden sm:inline-block text-[10px] font-black text-yellow-600 bg-yellow-50 px-3 py-1 rounded-full uppercase tracking-widest border border-yellow-200">Rarest Domains Found</span>
                 </div>
                 
                 <div className="grid gap-6">
                    {gems.map((gem, i) => (
                       <div key={i} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-indigo-100 transition-all group flex flex-col sm:flex-row justify-between items-center gap-6">
                          <div className="flex items-center gap-5">
                             <div className="w-12 h-12 bg-slate-50 flex items-center justify-center rounded-2xl font-black text-slate-300 text-lg">{i+1}</div>
                             <div className="font-mono text-2xl font-black text-slate-800 tracking-tighter group-hover:text-indigo-600 transition-colors uppercase">{gem.name}</div>
                          </div>
                          <a 
                            href={gem.valUrl} 
                            target="_blank" 
                            className="w-full sm:w-auto text-center bg-slate-900 text-white px-8 py-3 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-yellow-400 hover:text-slate-900 transition-all shadow-lg active:scale-95"
                          >
                            VALUATION
                          </a>
                       </div>
                    ))}
                 </div>
               </section>

               {/* Standard Domains */}
               <section id="domains">
                 <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                       <div className="w-1.5 h-10 bg-indigo-200 rounded-full"></div>
                       <h3 className="text-3xl font-black tracking-tighter uppercase text-slate-900">Nested Domains List</h3>
                    </div>
                    <span className="hidden sm:inline-block text-[10px] font-black text-slate-400 bg-slate-50 px-3 py-1 rounded-full uppercase tracking-widest">High Potential Only</span>
                 </div>
                 
                 <div className="grid gap-4">
                    {domains.map((domain, i) => (
                       <div key={i} className="bg-white/50 p-6 rounded-3xl border border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4 group hover:bg-white transition-all">
                          <div className="font-mono text-xl font-black text-slate-600 group-hover:text-slate-900 tracking-tighter">{domain.name}</div>
                          <a 
                            href={domain.valUrl} 
                            target="_blank" 
                            className="text-indigo-500 font-black text-[10px] uppercase tracking-[0.2em] border-b-2 border-transparent hover:border-indigo-500 transition-all flex items-center gap-2"
                          >
                            Check Real-time Value &gt;
                          </a>
                       </div>
                    ))}
                 </div>
               </section>

             </div>

             {/* Important Disclaimers & Terms */}
             <section className="bg-slate-100 rounded-[2.5rem] p-10 mt-10">
                <h4 className="font-black text-xs uppercase tracking-[0.3em] mb-8 text-center text-slate-400">Important Instructions & Disclaimers</h4>
                <ol className="space-y-6 text-sm text-slate-600 font-medium">
                   {[
                      "Please click the ‘Valuation’ button below each nested domain. You’ll be taken directly to a third-party website.",
                      "We add brand new list of Nested Domains every day of the week between 3 pm est and 5 pm est.",
                      "All domains shown were available at the time of update. If one is taken, another member beat you to it—just move to the next.",
                      "IN ORDER TO CONTINUE, YOU NEED TO READ AND AGREE TO THESE TERMS. CLICK HERE.",
                      "We make no guarantees regarding valuation accuracy. These third-party tools are provided solely for your convenience."
                   ].map((item, i) => (
                      <li key={i} className="flex gap-4">
                         <span className="font-black text-slate-900 shrink-0">{i+1}.</span>
                         <span>{i === 3 ? (
                           <span>IN ORDER TO CONTINUE, YOU NEED TO READ AND AGREE TO <a href="https://fastwealth.io/release" className="underline font-black text-slate-900">THESE TERMS. CLICK HERE.</a></span>
                         ) : item}</span>
                      </li>
                   ))}
                </ol>
                <div className="mt-10 p-6 bg-slate-200/50 rounded-2xl italic text-[11px] text-slate-500 text-center border border-slate-200">
                   NOTE: If the first 10-20 names are taken, keep scrolling! We randomize the list daily, so valuable domains are waiting throughout the entire list.
                </div>
             </section>

          </div>

          {/* Sidebar Area: 4 Columns */}
          <aside className="lg:col-span-4 space-y-8 order-first lg:order-last">
             
             {/* Tutorial Portal */}
             <div className="bg-white rounded-[2rem] border border-slate-200 shadow-xl overflow-hidden sticky top-32">
                <div className="bg-[#1b1464] p-6 text-white text-center">
                   <h4 className="font-black text-sm uppercase tracking-widest flex items-center justify-center gap-2">
                      <span className="text-xl">🏆</span> Tutorial Center
                   </h4>
                </div>
                <div className="p-8 space-y-10">
                   
                   {/* Step 1 */}
                   <div>
                      <div className="flex items-center gap-3 mb-6">
                         <div className="w-8 h-8 bg-indigo-600 text-white rounded-lg flex items-center justify-center font-black text-xs italic">S1</div>
                         <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Registering Domains</p>
                      </div>
                      <div className="space-y-4">
                         <a href="https://fastwealth.io/registernamecheap/" target="_blank" className="flex items-center justify-between p-4 rounded-2xl hover:bg-slate-50 border border-slate-100 group transition-all">
                            <span className="text-xs font-black text-slate-900">Namecheap Guide</span>
                            <span className="opacity-0 group-hover:opacity-100 transition-opacity">🚀</span>
                         </a>
                         <a href="https://fastwealth.io/godaddy" target="_blank" className="flex items-center justify-between p-4 rounded-2xl hover:bg-slate-50 border border-slate-100 group transition-all">
                            <span className="text-xs font-black text-slate-900">GoDaddy Guide</span>
                            <span className="opacity-0 group-hover:opacity-100 transition-opacity">🚀</span>
                         </a>
                      </div>
                   </div>

                   {/* Step 2 */}
                   <div>
                      <div className="flex items-center gap-3 mb-6">
                         <div className="w-8 h-8 bg-green-600 text-white rounded-lg flex items-center justify-center font-black text-xs italic">S2</div>
                         <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Listing For Sale</p>
                      </div>
                      <div className="space-y-px">
                         {[
                            { n: "How to List (Sedo)", l: "https://fastwealth.io/listsedo/" },
                            { n: "Afternic (via GoDaddy)", l: "https://fastwealth.io/afternic" },
                            { n: "Afternic (via Namecheap)", l: "https://fastwealth.io/afternic-namecheap" },
                         ].map((item, i) => (
                            <a key={i} href={item.l} target="_blank" className="flex items-center justify-between py-4 border-b border-slate-50 hover:px-2 transition-all group">
                               <span className="text-xs font-bold text-slate-600 group-hover:text-[#1b1464] transition-colors">{item.n}</span>
                               <span className="text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">&gt; Guide</span>
                            </a>
                         ))}
                      </div>
                   </div>

                   <div className="pt-6">
                      <div className="bg-indigo-50 rounded-2xl p-6 border border-indigo-100 flex flex-col items-center text-center">
                         <span className="text-3xl mb-4">📹</span>
                         <h5 className="font-black text-xs uppercase text-indigo-900 mb-2">Tutorial Video</h5>
                         <p className="text-[10px] text-indigo-600 font-bold mb-4">Complete strategy in 10 minutes.</p>
                         <button className="bg-indigo-600 text-white w-full py-3 rounded-xl font-black text-[10px] uppercase shadow-lg shadow-indigo-600/20 active:scale-95 transition-all">Watch Now</button>
                      </div>
                   </div>

                </div>
             </div>
          </aside>

        </div>
      </main>

      <footer className="bg-white border-t border-slate-200 py-16 px-6 mt-20">
         <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
            <div className="flex gap-8 mb-8">
               <a href="#" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-[#1b1464] transition-colors">Terms</a>
               <a href="#" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-[#1b1464] transition-colors">Privacy</a>
               <a href="#" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-[#1b1464] transition-colors">Contact</a>
            </div>
            <p className="text-[10px] text-slate-300 font-black uppercase tracking-[0.4em]">DEEP DOMAINS ELITE PORTAL © 2026</p>
         </div>
      </footer>

      <style jsx global>{`
        ::selection { background: #fee2e2; color: #991b1b; }
        body { background-color: #f8fafc; }
      `}</style>
    </div>
  );
}
