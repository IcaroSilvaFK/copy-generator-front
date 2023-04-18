import { NextApiRequest, NextApiResponse } from 'next'
import { prismaClient } from '../../../../infra/services/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const { id } = req.query as { id: string }

    const response = await prismaClient.responseCopy.findMany({
      where: {
        requestedCopyId: id,
      },
      orderBy: {
        createdAt: 'desc',
      },
    })

    return res.status(200).json({
      messages: response,
    })
  } catch (err) {
    return res.status(500).json({
      err,
    })
  }
}
