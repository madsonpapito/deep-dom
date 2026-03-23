import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
});

const DELAY_SECONDS = 900; // 15:00 based on transcript

export default function DeepDomainsLP() {
  const [timeLeft, setTimeLeft] = useState(DELAY_SECONDS);
  const [showOffer, setShowOffer] = useState(false);

  useEffect(() => {
    if (timeLeft <= 0) {
      setShowOffer(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className={`min-h-screen bg-white font-sans text-gray-900 ${roboto.className}`}>
      <Head>
        <title>Deep Domains - $7 Tiny Vending Machines</title>
        <meta name="description" content="Discover how to profit from $7 tiny online vending machines." />
        {/* Preload para carregamento otimizado */}
        <link rel="preconnect" href="https://play.tynk.ai" />
        <link rel="dns-prefetch" href="https://play.tynk.ai" />
        <link rel="prerender" href="https://play.tynk.ai/p/6ba52da4-633c-400d-a6c2-a2e82fead85c" />
      </Head>

      {/* Warning Bar */}
      <div className="bg-[#1b1464] text-white py-3 px-4 text-center font-bold text-xs sm:text-sm tracking-wide uppercase sticky top-0 z-50 shadow-md">
        ⚠️ DO NOT CLOSE THIS PAGE. YOUR OPPORTUNITY EXPIRES SOON.
      </div>

      <main className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        {/* Header Section */}
        <div className="text-center mb-10 md:mb-16">
           <p className="text-red-600 font-bold uppercase tracking-[0.2em] text-[10px] sm:text-xs mb-4 md:mb-6 px-4 py-1.5 bg-red-50 inline-block rounded-full border border-red-100 italic">
             Exclusive Insider Video Presentation
           </p>
           <h1 className="text-3xl md:text-5xl font-black leading-tight text-gray-900 mb-6 drop-shadow-sm px-2">
             Simple AI Tool Finds <span className="text-[#1b1464] border-b-4 border-yellow-400">"Hidden Gems"</span> That Generate $400-$700 Per Day On Autopilot
           </h1>
           <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto font-medium px-4">
              Find out how ordinary people are buying $7 domains and flipping them for thousands in days.
           </p>
        </div>

        {/* VSL Section - Clean Elite Layout */}
        <div className="mb-14 relative flex justify-center">
          
          <div className="relative w-full max-w-[450px] aspect-[9/16] bg-black rounded-3xl overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.4)] border border-gray-200/5 group">
            <iframe
              src="https://play.tynk.ai/p/6ba52da4-633c-400d-a6c2-a2e82fead85c"
              className="absolute inset-0 w-full h-full border-0 z-10"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            
            {/* Fluxo de Transmissão (Hidden on small mobile) */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 hidden sm:block">
               <div className="inline-flex items-center gap-2 text-white/50 font-bold text-[10px] uppercase tracking-widest bg-black/60 backdrop-blur-xl px-4 py-1.5 rounded-full border border-white/10">
                  <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.8)]"></span>
                  Official HD Stream
               </div>
            </div>
          </div>
        </div>


        {/* Offer Reveal Section */}
        {showOffer && (
          <div className="animate-in fade-in slide-in-from-bottom-10 duration-1000">
            {/* Bonus Box */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border-4 border-dashed border-yellow-400 rounded-3xl p-6 md:p-10 mb-12 text-center shadow-lg relative">
               <div className="bg-yellow-400 text-white font-black px-6 py-1.5 rounded-full text-[10px] absolute -top-4 left-1/2 -translate-x-1/2 shadow-lg">RESERVED FOR YOU</div>
               <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4 uppercase mt-2">🎁 Your $200 Gift is Here</h2>
               <p className="text-gray-600 mb-8 text-base md:text-lg font-medium leading-relaxed">
                  As promised, here is your gift for watching. We said $200, but this verified domain below is independently valued at over <span className="font-bold text-gray-900">$15,000</span>.
               </p>
               <div className="bg-white p-6 md:p-8 rounded-2xl border-2 border-yellow-300 shadow-sm inline-block w-full max-w-md relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-2 bg-green-100 text-green-700 text-[10px] font-black rounded-bl-xl uppercase">Verified</div>
                  <span className="block text-[10px] text-gray-400 uppercase font-black mb-3 tracking-widest">Reserved Domain:</span>
                  <span className="text-2xl md:text-3xl font-mono font-black text-[#1b1464] tracking-tighter group-hover:scale-105 transition-transform block">drews.it.com</span>
                  <div className="mt-6 flex flex-col gap-2">
                     <div className="text-gray-600 text-sm font-bold">ESTIMATED VALUATION: <span className="text-green-600">$15,900.00</span></div>
                     <div className="text-[9px] text-gray-400 uppercase tracking-tight">Values based on Sedo/GoDaddy automated metrics.</div>
                  </div>
               </div>
               <p className="mt-8 text-gray-400 text-xs font-medium">Instructions on how to claim this for $7 are included in the package below.</p>
            </div>

            {/* Main Offer Card */}
            <div className="bg-white rounded-[2rem] shadow-[0_30px_100px_rgba(0,0,0,0.15)] border border-gray-100 overflow-hidden mb-16">
              <div className="bg-[#1b1464] p-10 text-center relative">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">GET LIFETIME ACCESS TO<br/>DEEP DOMAINS SYSTEM</h2>
                <div className="inline-block bg-yellow-400 text-[#1b1464] px-4 py-1 rounded font-black text-sm uppercase tracking-widest shadow-lg">Special Launch Pricing</div>
              </div>

              <div className="p-8 md:p-14">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-gray-900 border-l-4 border-[#1b1464] pl-4">What's included:</h3>
                    <ul className="space-y-4">
                      {[
                        { t: "LIFETIME unlimited access to our members area" },
                        { t: "200+ new nested domains added every day", d: "each valued between $3,000 and $20,000" },
                        { t: "67-page ‘$0–$100,000 Fast-Track’ Blueprint", d: "a step-by-step, easy-to-follow guide to reaching your first $100,000 profit" },
                        { t: "LIFETIME updates and access to all upcoming products" },
                        { t: "Professional, fast-response client support" },
                        { t: "Locked-in savings", d: "others will soon pay monthly, but you’ll keep full access for life with no recurring fees. That’s a $240/year savings!" }
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-4">
                          <div className="mt-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shrink-0">
                             <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                          </div>
                          <div>
                             <strong className="block text-gray-900">{item.t}</strong>
                             <p className="text-sm text-gray-500">{item.d}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-center bg-gray-50 p-10 rounded-3xl border border-gray-100 relative shadow-inner">
                     <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[10px] font-black px-4 py-1 rounded-full shadow-lg">LIMITED SLOTS LEFT</div>
                     <div className="text-gray-400 line-through text-lg mb-1 font-bold">Value: $497</div>
                     <div className="text-7xl font-black text-gray-900 mb-1">$67</div>
                     <div className="text-[10px] font-black text-[#1b1464] uppercase tracking-widest mb-10 bg-blue-50 py-1 rounded">One-Time Final Payment</div>
                     
                     <a 
                      href="https://pay.mycheckoutt.com/01985d25-baa2-7213-9f1c-a96b491b23d8?ref=" 
                      className="group block w-full bg-green-500 hover:bg-green-600 text-white py-6 rounded-2xl text-2xl font-black transition-all shadow-[0_10px_20px_rgba(34,197,94,0.3)] hover:-translate-y-1 active:scale-95 uppercase tracking-tighter"
                     >
                       Join Now!
                       <span className="block text-xs font-medium opacity-80 group-hover:opacity-100 mt-1">(no subscriptions, no rebills — saves you $240/year)</span>
                     </a>
                     
                     <div className="mt-8 flex justify-center gap-4 grayscale opacity-50">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" className="h-4" alt="PayPal" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" className="h-4" alt="Visa" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-4" alt="Mastercard" />
                     </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Guarantee Section */}
            <div className="bg-gray-900 rounded-3xl p-10 md:p-16 text-center text-white relative shadow-2xl">
              <div className="max-w-3xl mx-auto">
                 <div className="inline-block w-24 h-24 mb-8 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                    <span className="text-5xl">🛡️</span>
                 </div>
                 <h3 className="text-2xl font-black mb-6 tracking-wide uppercase">180-Day Money Back Guarantee</h3>
                 <p className="text-xl text-gray-300 mb-10 leading-relaxed font-light italic">
                    "If for ANY reason you are not happy with your purchase, simply email us within 180 days for a full, no questions asked, refund of your money."
                 </p>
                 <div className="font-bold text-white mb-2">ROBIN</div>
                 <div className="text-xs text-blue-400 font-bold uppercase tracking-widest">CREATOR, DEEP DOMAINS</div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 border-t border-gray-200 py-16 px-4 mt-20">
        <div className="max-w-4xl mx-auto text-center text-[10px] sm:text-xs text-gray-400">
           <div className="mb-8 flex justify-center gap-8 font-bold uppercase tracking-widest list-none">
             <a href="#" className="hover:text-gray-900 transition-colors">Terms of Service</a>
             <a href="#" className="hover:text-gray-900 transition-colors">Privacy</a>
           </div>
           <div className="border border-gray-200 p-8 rounded-2xl mb-10 bg-white/50">
             <p className="mb-4 uppercase tracking-tighter font-black text-gray-300">Important Earnings Disclaimer</p>
             <p className="max-w-3xl mx-auto leading-relaxed italic">
               The examples used are exceptional results, which do not apply to the average person and are not intended to represent or guarantee that anyone will achieve the same or similar results. Each individual’s success depends on his or her background, dedication, desire, and motivation. We cannot guarantee you will make money or that you will achieve the same results as those presented in our marketing materials.
             </p>
           </div>
           <p className="mt-8 font-bold opacity-30">DEEP DOMAINS © {new Date().getFullYear()} — POWERED BY AI TECHNOLOGY</p>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-in-from-bottom {
          from { transform: translateY(2.5rem); }
          to { transform: translateY(0); }
        }
        .animate-in {
          animation: fade-in 1s ease-out forwards, slide-in-from-bottom 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
