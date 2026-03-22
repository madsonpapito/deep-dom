import Head from 'next/head';

export default function GemsPage() {
  const gems = [
    { name: 'kalua.it.com', valUrl: 'https://humbleworth.com/valuation/kalua.it.com' },
    { name: 'coneo.it.com', valUrl: 'https://humbleworth.com/valuation/coneo.it.com' },
    { name: 'viva.it.com', valUrl: 'https://humbleworth.com/valuation/viva.it.com' },
    { name: 'aura.it.com', valUrl: 'https://humbleworth.com/valuation/aura.it.com' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      <Head>
        <title>Nested Gems - Members Area</title>
      </Head>

      <header className="bg-white border-b border-gray-200 py-6">
        <div className="max-w-4xl mx-auto px-4 flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-tight text-[#1b1464]">MEMBERS AREA</h1>
          <nav className="flex gap-4 text-sm font-medium text-gray-500">
             <span>Support: support@fastwealth.io</span>
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <section className="bg-white rounded-xl shadow-sm p-8 mb-8 border border-gray-100">
          <h2 className="text-2xl font-bold mb-4">Nested Gems</h2>
          <p className="text-gray-600 mb-8 italic">
            Below you will find a list of Nested Gems. These are the rarest of domains. We update this list every day of the week.
          </p>

          <div className="mb-12">
            <h3 className="text-lg font-bold mb-4 uppercase tracking-wider text-gray-400">Tutorial Video</h3>
            <div className="aspect-video w-full bg-black rounded-lg overflow-hidden shadow-lg mb-4">
               {/* Placeholder for tutorial video */}
               <div className="w-full h-full flex items-center justify-center text-white text-lg italic">
                  Tutorial Video: Registering & Listing a Nested Domain/Gem
               </div>
            </div>
            <div className="flex flex-wrap gap-4 mt-6">
               <a href="#" className="bg-blue-50 text-blue-700 px-4 py-2 rounded text-sm font-bold border border-blue-200 hover:bg-blue-100 transition-colors">
                 How to Register (Namecheap)
               </a>
               <a href="#" className="bg-blue-50 text-blue-700 px-4 py-2 rounded text-sm font-bold border border-blue-200 hover:bg-blue-100 transition-colors">
                 How to List for Sale (Sedo)
               </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold mb-4 text-[#1b1464]">Current Nested Gems List</h3>
            <div className="grid gap-4">
              {gems.map((gem) => (
                <div key={gem.name} className="flex flex-col sm:flex-row justify-between items-center p-6 bg-gray-50 rounded-lg border border-gray-100 hover:border-blue-200 transition-all">
                  <span className="text-xl font-bold mb-4 sm:mb-0">{gem.name}</span>
                  <a 
                    href={gem.valUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-8 py-2 rounded font-bold hover:bg-blue-700 transition-colors shadow-sm"
                  >
                    VALUATION
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="bg-[#4c3b99] text-white p-8 rounded-xl text-center shadow-lg">
           <h3 className="text-xl font-bold mb-2">Exclusive Free Training</h3>
           <p className="mb-6 opacity-90">Discover how to potentially double—or even triple—your passive income.</p>
           <a href="https://freedomescapexcelerator.com/5k-daily-4" className="inline-block bg-white text-[#4c3b99] px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-transform active:scale-95">
             Watch Now
           </a>
        </div>
      </main>

      <footer className="py-12 text-center text-gray-400 text-sm">
        Deep Domains © 2024
      </footer>
    </div>
  );
}
