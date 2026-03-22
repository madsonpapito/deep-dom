import Head from 'next/head';

export default function ThanksPage() {
  const domains = [
    { name: 'pala.it.com', valUrl: 'https://humbleworth.com/valuation/pala.it.com' },
    { name: 'serum.it.com', valUrl: 'https://humbleworth.com/valuation/serum.it.com' },
    { name: 'zen.it.com', valUrl: 'https://humbleworth.com/valuation/zen.it.com' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 border-t-8 border-[#1b1464]">
      <Head>
        <title>Thank You! - Nested Domains</title>
      </Head>

      <main className="max-w-4xl mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-12">
           <h1 className="text-4xl md:text-5xl font-black text-[#1b1464] mb-4">THANK YOU FOR YOUR PURCHASE!</h1>
           <p className="text-xl text-gray-600 font-medium">Welcome aboard—and congratulations on joining Nested Domains!</p>
        </div>

        <section className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12 border border-gray-100">
          <div className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-12 items-start">
               <div className="w-full md:w-1/2">
                 <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                   <span className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm">✓</span>
                   Next Steps
                 </h2>
                 <p className="text-gray-600 mb-6 leading-relaxed">
                   Below you will find an extensive list of Nested Domains. We update the list every day between 3 PM EST and 5 PM EST.
                 </p>
                 <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
                   <p className="text-blue-900 text-sm italic font-medium">
                     "Your credit card statement will show a charge from CLICKBANK."
                   </p>
                   <p className="mt-2 text-blue-800 text-sm">
                     Support: support@fastwealth.io
                   </p>
                 </div>
               </div>

               <div className="w-full md:w-1/2">
                 <h3 className="text-lg font-bold mb-4 text-gray-400 uppercase tracking-tighter">Watch This First</h3>
                 <div className="aspect-video w-full bg-black rounded-xl flex items-center justify-center text-white italic text-center p-4">
                    Tutorial Video: Getting Started with Nested Domains
                 </div>
               </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 md:p-12 border-t border-gray-100">
             <h2 className="text-2xl font-bold mb-8 text-[#1b1464]">Your Initial Nested Domains</h2>
             <div className="grid gap-6">
                {domains.map((d) => (
                  <div key={d.name} className="flex items-center justify-between bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                    <span className="text-xl font-bold text-gray-800">{d.name}</span>
                    <a href={d.valUrl} className="font-bold text-blue-600 hover:text-blue-800 underline underline-offset-4">
                      Check Valuation
                    </a>
                  </div>
                ))}
             </div>
          </div>
        </section>

        <div className="text-center text-gray-500 text-xs">
          <p className="mb-4 italic">Please check your spam folder, as emails sometimes end up there.</p>
          <p>Deep Domains – All rights reserved</p>
        </div>
      </main>
    </div>
  );
}
