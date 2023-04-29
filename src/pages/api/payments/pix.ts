import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../infra/db/prisma'
import { z } from 'zod'
import { PlainSelectedUser } from '@prisma/client'

const schema = z.object({
  userEmail: z.string(),
  paymentOption: z.string(),
})

export default async function handler(
  req: NextApiRequest,
  resp: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return resp.status(404).json({ message: 'Method not allowed' })
  }

  const body = schema.parse(req.body)

  const existsUser = await prisma.plainSelectedUser.findFirst({
    where: {
      userEmail: body.userEmail,
    },
  })

  let plain: PlainSelectedUser

  if (!existsUser) {
    plain = await prisma.plainSelectedUser.create({
      data: {
        userEmail: body.userEmail,
        rateLimit: 5,
        plain: 'FREE',
      },
    })
  } else {
    plain = await prisma.plainSelectedUser.update({
      where: {
        userEmail: body.userEmail,
      },
      data: {
        rateLimit: 5,
        plain: 'FREE',
      },
    })
  }

  return resp.json(plain)
}
