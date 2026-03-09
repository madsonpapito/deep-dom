import { PrismaClient } from '../generated/client'

const prisma = new PrismaClient()

async function main() {
  console.log(`Start seeding ...`)

  // Semana 1: Despertar Hormonal
  const week1 = await prisma.programWeek.create({
    data: {
      weekNumber: 1,
      title: 'Despertar Hormonal',
      description: 'Foco em mobilidade e ativação suave para preparar seu corpo.',
      workouts: {
        create: [
          {
            title: 'Mobilidade Essencial da Manhã',
            videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // Placeholder
            level: 'Iniciante',
            focus: 'Relaxamento Noturno'
          },
          {
            title: 'Ativação do Core para Iniciantes',
            videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // Placeholder
            level: 'Iniciante',
            focus: 'Barriga Plana'
          }
        ]
      }
    }
  });

  // Semana 2: Queima da Barriga
  const week2 = await prisma.programWeek.create({
    data: {
      weekNumber: 2,
      title: 'Queima da Barriga',
      description: 'Intensificando o trabalho no core para queimar a gordura abdominal.',
      workouts: {
        create: [
          {
            title: 'Pilates para um Abdômen Forte',
            videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // Placeholder
            level: 'Iniciante',
            focus: 'Barriga Plana'
          },
          {
            title: 'Circuito Queima-Gordura',
            videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // Placeholder
            level: 'Iniciante',
            focus: 'Energia Total'
          }
        ]
      }
    }
  });


  console.log(`Seeding finished.`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
