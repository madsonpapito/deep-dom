import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { z } from "zod";

export const contentRouter = createTRPCRouter({
  getWeekWorkouts: publicProcedure
    .input(z.object({ weekNumber: z.number().min(1) }))
    .query(async ({ ctx, input }) => {
      const programWeek = await ctx.db.programWeek.findUnique({
        where: {
          weekNumber: input.weekNumber,
        },
        include: {
          workouts: true, // Inclui todos os treinos associados
        },
      });

      if (!programWeek) {
        throw new Error("Semana do programa não encontrada.");
      }

      return programWeek;
    }),

  getWorkoutById: publicProcedure
    .input(z.object({ workoutId: z.string().cuid() }))
    .query(async ({ ctx, input }) => {
      const workout = await ctx.db.workout.findUnique({
        where: {
          id: input.workoutId,
        },
      });

      if (!workout) {
        throw new Error("Treino não encontrado.");
      }

      return workout;
    }),
});
