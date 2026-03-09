"use client";

import { useParams } from "next/navigation";
import { api } from "~/trpc/react";
import Link from "next/link";

export default function WorkoutPage() {
  const params = useParams();
  const workoutId = params.workoutId as string;

  const { data: workout, isLoading, error } = api.content.getWorkoutById.useQuery({ workoutId });

  // Simple function to extract YouTube video ID from URL
  const getYouTubeVideoId = (url: string) => {
    try {
      const urlObj = new URL(url);
      return urlObj.searchParams.get("v");
    } catch (e) {
      return null;
    }
  };

  const videoId = workout?.videoUrl ? getYouTubeVideoId(workout.videoUrl) : null;

  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#15162c] to-[#0d0e1a] p-8 text-white">
      <div className="container mx-auto">
        <div className="mb-6">
          <Link href="/dashboard" className="text-pink-400 hover:underline">
            &larr; Voltar para a semana
          </Link>
        </div>

        {isLoading && <p>Carregando treino...</p>}
        {error && <p className="text-red-400">Erro ao carregar o treino: {error.message}</p>}
        
        {(!workout && !isLoading) && (
             <div className="rounded-lg border-2 border-dashed border-gray-600 p-8 text-center">
                <p className="text-gray-400">Treino não encontrado.</p>
            </div>
        )}

        {workout && (
          <div className="space-y-6">
            <h1 className="text-4xl font-bold">{workout.title}</h1>
            
            {/* Video Player */}
            <div className="aspect-video w-full overflow-hidden rounded-lg bg-black">
              {videoId ? (
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title={workout.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                ></iframe>
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-gray-800">
                    <p>Vídeo indisponível.</p>
                </div>
              )}
            </div>

            <div className="flex items-center gap-4">
                <span className="rounded-full bg-pink-500/80 px-4 py-2 text-sm font-semibold">
                    Nível: {workout.level}
                </span>
                <span className="rounded-full bg-purple-500/80 px-4 py-2 text-sm font-semibold">
                    Foco: {workout.focus}
                </span>
            </div>

            {/* Placeholder for description if available in the model */}
            {/* <p className="text-lg text-gray-300">
                Descrição detalhada do exercício, com pontos de atenção e dicas de execução.
            </p> */}

          </div>
        )}
      </div>
    </main>
  );
}
