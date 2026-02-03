import { PrismaAdapter } from '@next-auth/prisma-adapter'
import CredentialsProvider from 'next-auth/providers/credentials'
import { prisma } from './prisma'

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: 'Email',
      credentials: { email: { label: 'Email', type: 'text' } },
      async authorize(credentials) {
        if (!credentials?.email) return null
        const email = credentials.email
        const user = await prisma.user.upsert({
          where: { email },
          update: {},
          create: { email },
        })
        return { id: user.id, email: user.email, name: user.name }
      },
    }),
  ],
  session: { strategy: 'jwt' },
  secret: process.env.NEXTAUTH_SECRET,
}
