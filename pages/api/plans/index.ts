import type { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../../lib/auth'
import { prisma } from '../../../lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req, res, authOptions)
  if (!session) return res.status(401).json({ error: 'Not authenticated' })
  const user = await prisma.user.findUnique({ where: { email: session.user?.email } })
  if (!user) return res.status(404).json({ error: 'User not found' })

  if (req.method === 'GET') {
    const plans = await prisma.plan.findMany({ where: { userId: user.id }, orderBy: { createdAt: 'desc' } })
    return res.json(plans)
  }

  if (req.method === 'POST') {
    const { title, notes } = req.body
    const plan = await prisma.plan.create({ data: { title, notes, userId: user.id } })
    return res.status(201).json(plan)
  }

  res.setHeader('Allow', ['GET', 'POST'])
  res.status(405).end(`Method ${req.method} Not Allowed`)
}
