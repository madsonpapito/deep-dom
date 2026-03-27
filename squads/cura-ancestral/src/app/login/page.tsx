'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError('E-mail ou senha incorretos. Verifique e tente novamente.');
      setLoading(false);
    } else {
      router.push('/painel');
    }
  };

  return (
    <main className="min-h-screen bg-crema flex items-center justify-center px-4 py-12 font-serif">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <div className="relative w-24 h-24 mx-auto mb-6 rounded-full border-4 border-forest overflow-hidden shadow-xl">
            <Image src="/imagem/avatares/female-1.png" alt="Dirce Helena" fill className="object-cover" />
          </div>
          <h1 className="text-3xl font-black text-forest font-heading mb-2">Portal do Aluno</h1>
          <p className="text-gray-600 italic">Bem-vindo à sua jornada de cura.</p>
        </div>

        <div className="bg-white p-8 md:p-10 rounded-[32px] shadow-2xl border border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-forest" />
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-black text-gray-700 uppercase tracking-widest mb-2 px-1">Seu E-mail</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="exemplo@email.com"
                className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:border-forest focus:ring-4 focus:ring-forest/5 outline-none transition-all text-lg font-sans"
              />
            </div>

            <div>
              <label className="block text-sm font-black text-gray-700 uppercase tracking-widest mb-2 px-1">Sua Senha</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="••••••••"
                className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:border-forest focus:ring-4 focus:ring-forest/5 outline-none transition-all text-lg font-sans"
              />
            </div>

            {error && (
              <div className="p-4 rounded-xl bg-blood/10 border border-blood/20 text-blood text-sm font-medium text-center">
                {error}
              </div>
            )}

            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-forest text-white font-black py-5 rounded-2xl shadow-lg hover:bg-forest/90 transition-all active:translate-y-1 disabled:opacity-50 uppercase tracking-tight text-lg"
            >
              {loading ? 'Entrando...' : 'ACESSAR MEU PORTAL ➱'}
            </button>
          </form>

          <div className="mt-8 text-center border-t border-gray-100 pt-6">
            <p className="text-sm text-gray-500 mb-2">Esqueceu sua senha ou não tem acesso?</p>
            <a href="https://wa.me/seunumerowhatsapp" className="text-forest font-bold hover:underline">Falar com Suporte no WhatsApp</a>
          </div>
        </div>

        <p className="mt-12 text-center text-gray-400 text-xs uppercase tracking-widest font-sans font-bold">
          Manual da Cura Ancestral &copy; 2026
        </p>
      </div>
    </main>
  );
}
