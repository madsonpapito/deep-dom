"use client";

import { api } from "~/trpc/react";
import Link from "next/link";

export default function DashboardPage() {
  // Por enquanto, vamos buscar os dados da semana 1 como padrão
  const { data: programWeek, isLoading, error } = api.content.getWeekWorkouts.useQuery({ weekNumber: 1 });

  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#2e026d] to-[#15162c] p-8 text-white">
      <div className="container mx-auto">
        <h1 className="mb-8 text-4xl font-bold">Minha Semana de Treinos</h1>
        
        {isLoading && <p>Carregando treinos...</p>}
        
        {error && <p className="text-red-400">Erro ao buscar treinos: {error.message}</p>}
        
        {(!programWeek && !isLoading) && (
            <div className="rounded-lg border-2 border-dashed border-gray-600 p-8 text-center">
                <p className="text-gray-400">Nenhum treino encontrado para esta semana.</p>
                <p className="text-sm text-gray-500 mt-2">O banco de dados pode estar vazio. Execute o script 'seed' para adicionar dados de teste.</p>
            </div>
        )}

        {programWeek && (
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold">{programWeek.title}</h2>
            <p className="text-lg text-gray-300">{programWeek.description}</p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {programWeek.workouts.map((workout) => (
                <div key={workout.id} className="flex flex-col rounded-lg bg-white/10 p-6 transition hover:bg-white/20">
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold">{workout.title}</h3>
                    <div className="mt-2 space-x-2">
                      <span className="rounded-full bg-pink-500/80 px-3 py-1 text-xs font-semibold">
                        {workout.level}
                      </span>
                      <span className="rounded-full bg-purple-500/80 px-3 py-1 text-xs font-semibold">
                        {workout.focus}
                      </span>
                    </div>
                  </div>
                   <Link href={`/dashboard/workout/${workout.id}`} className="mt-4 w-full rounded-full bg-white px-4 py-2 text-center font-semibold text-gray-900 no-underline transition hover:bg-gray-200">
                    Assistir Aula
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
