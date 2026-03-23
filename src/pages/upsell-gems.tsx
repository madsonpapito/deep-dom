import Head from 'next/head';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['400', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
});

export default function UpsellGems() {
  // TODO: Substituir por links de checkout e downsell reais
  const upsellLink = "https://seu.checkout.com/upsell-gems";
  const downsellLink = "/downsell-gems";

  return (
    <div className={`min-h-screen bg-gray-900 text-white font-sans ${roboto.className}`}>
      <Head>
        <title>WAIT! Upgrade Your Order!</title>
      </Head>
      <div className="max-w-4xl mx-auto py-12 px-4 text-center">
        <p className="text-xl text-yellow-400 font-bold mb-2 animate-pulse">WAIT! YOUR ORDER IS NOT COMPLETE...</p>
        <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
          Add The "Gems" List To Your Order & Get The <span className="text-yellow-400">Most Valuable</span> Domains Handed To You Weekly!
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
          You've secured the system... but the biggest profits are in finding the RAREST domains. We do the hard work for you. Every week, my team and I find the absolute best "deep domains" and we want to hand them to you.
        </p>

        <div className="bg-white text-gray-900 rounded-2xl p-8 shadow-2xl mb-10">
           <h2 className="text-3xl font-black text-[#1b1464] mb-6">Get Access To The Exclusive GEMS List</h2>
           <ul className="text-left space-y-4 max-w-lg mx-auto mb-8">
            <li className="flex items-start gap-4">
              <span className="text-green-500 font-bold text-2xl">✓</span>
              <div><strong className="block">The Rarest Domains:</strong> We filter millions to find the top 0.01% of profitable domains. These are gems you won't find anywhere else.</div>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-green-500 font-bold text-2xl">✓</span>
              <div><strong className="block">Updated Weekly:</strong> Get a fresh list of high-value, unregistered domains delivered to your members' area every single week.</div>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-green-500 font-bold text-2xl">✓</span>
              <div><strong className="block">Massive Time Saver:</strong> Stop searching and start profiting. We do the most time-consuming part for you, so you can focus on flipping.</div>
            </li>
          </ul>

          <div className="bg-gray-100 p-6 rounded-lg border border-gray-200">
            <a href={upsellLink} className="group block w-full bg-green-500 hover:bg-green-600 text-white py-5 rounded-xl text-2xl font-black transition-all shadow-lg hover:-translate-y-1 active:scale-95 uppercase">
              Yes! Add The GEMS List To My Order!
              <span className="block text-sm font-medium opacity-80 mt-1">Only $47 One-Time</span>
            </a>
          </div>

        </div>

        <a href={downsellLink} className="text-gray-400 hover:text-white transition-colors underline text-sm">
          No thanks, I'll pass on this incredible opportunity to get the most profitable domains handed to me.
        </a>

      </div>
    </div>
  );
}