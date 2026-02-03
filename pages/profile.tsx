import { GetServerSideProps } from 'next'
import { getServerSession } from 'next-auth'
import { authOptions } from '../lib/auth'
import { prisma } from '../lib/prisma'

export default function Profile({ user, plans }: any) {
  return (
    <main style={{padding: 24}}>
      <h1>الملف الشخصي</h1>
      <p>البريد: {user.email}</p>
      <h2>الخطة اليومية</h2>
      <ul>
        {plans.map((p: any) => (
          <li key={p.id}><strong>{p.title}</strong> — {p.notes}</li>
        ))}
      </ul>
    </main>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getServerSession(ctx.req, ctx.res, authOptions)
  if (!session) return { redirect: { destination: '/auth/signin', permanent: false } }
  const user = await prisma.user.findUnique({ where: { email: session.user?.email }, include: { plans: true } })
  return {
    props: {
      user: { id: user?.id, email: user?.email, name: user?.name },
      plans: user?.plans || [],
    },
  }
}
