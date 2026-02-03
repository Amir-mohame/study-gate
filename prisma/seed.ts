import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const alice = await prisma.user.upsert({
    where: { email: 'alice@example.com' },
    update: {},
    create: { email: 'alice@example.com', name: 'Alice' },
  })

  await prisma.plan.createMany({
    data: [
      { title: 'ممارسة المشي 30 دقيقة', notes: 'يوميًا بعد الإفطار', userId: alice.id },
      { title: 'نوم 7-8 ساعات', notes: 'اذهب إلى الفراش قبل 11 مساءً', userId: alice.id },
    ],
  })

  console.log('Seed completed')
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect())
