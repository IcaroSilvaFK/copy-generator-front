import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const { id } = req.query as { id: string }

    return res.status(200).json({
      messages: id,
    })
  } catch (err) {
    return res.status(500).json({
      err,
    })
  }
}
