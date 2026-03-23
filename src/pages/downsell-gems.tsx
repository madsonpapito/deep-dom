import Head from 'next/head';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['400', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
});

export default function DownsellGems() {
  // TODO: Substituir por links de checkout e página de recusa final
  const downsellLink = "https://seu.checkout.com/downsell-gems";
  const finalNoLink = "/thanks"; // Redireciona para a página de obrigado

  return (
    <div className={`min-h-screen bg-gray-100 text-gray-900 font-sans ${roboto.className}`}>
      <Head>
        <title>Wait! A Special Offer Just For You...</title>
      </Head>
      <div className="max-w-3xl mx-auto py-12 px-4 text-center">
        <h1 className="text-4xl font-black text-gray-800 mb-4">Are You Absolutely Sure?</h1>
        <p className="text-lg text-gray-600 mb-8">You just passed on an opportunity to get the most profitable domains delivered to you weekly. We know it's a big decision, so we want to make it a complete no-brainer.</p>

        <div className="bg-white border-4 border-dashed border-yellow-400 rounded-2xl p-8 shadow-lg mb-10">
          <h2 className="text-2xl font-bold text-[#1b1464] mb-4">Don't Decide Now. Take A Test Drive.</h2>
          <p className="text-gray-700 mb-6">Get full access to the exclusive GEMS List for the next <strong className="text-gray-900">7 days</strong> and see the quality of the domains for yourself. If you don't see the massive potential, simply cancel anytime.</p>

          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
            <a href={downsellLink} className="group block w-full bg-green-500 hover:bg-green-600 text-white py-5 rounded-xl text-2xl font-black transition-all shadow-lg hover:-translate-y-1 active:scale-95 uppercase">
              Yes! Start My 7-Day Trial!
              <span className="block text-sm font-medium opacity-80 mt-1">For Just $7</span>
            </a>
          </div>
        </div>

        <a href={finalNoLink} className="text-gray-400 hover:text-gray-600 transition-colors underline text-sm">
           No thanks, I understand I will never see this offer again.
        </a>
      </div>
    </div>
  );
}