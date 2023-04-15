import type { NextApiRequest, NextApiResponse } from 'next'
import { z } from 'zod'
import { prismaClient } from '../../../../infra/services/prisma'

if (!process.env.NEXT_PUBLIC_API_TOKEN) {
  throw new Error('Missing env var from OpenAI')
}

const schema = z.object({
  prompt: z.string(),
  title: z.string(),
  maxToken: z.number(),
  platform: z.string(),
})

interface IResponseFromOpenApiRequest {
  name: string
  choices: {
    finish_reason: string
    message: {
      role: string
      content: string
    }
  }[]
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const method = req.method

    if (method !== 'POST') {
      res.status(405).json({
        message: 'METHOD NOT ALLOWED',
      })
    }

    const { prompt, title, maxToken, platform } = schema.parse(req.body)

    const requestCopy = await prismaClient.requestCopy.create({
      data: {
        copyTitle: title,
        description: prompt,
      },
    })

    const payload = {
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content: `
      generate a title and copy with the following title ${title} and the following description ${prompt} and platform from copy ${platform} response in pt-br
    `,
        },
      ],
      temperature: 0.7,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      max_tokens: maxToken,
      n: 1,
    }

    const response: IResponseFromOpenApiRequest = await fetch(
      'https://api.openai.com/v1/chat/completions',
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN ?? ''}`,
        },
        method: 'POST',
        body: JSON.stringify(payload),
      }
    ).then((data) => data.json())

    const objectFromResponse = response?.choices.map((choice) => ({
      role: choice.message.role,
      finish_reason: choice.finish_reason,
      copy: {
        title: choice.message.content?.split('\n')[0],
        description: choice.message.content?.split('\n')[2],
        createdAt: new Date(),
      },
    }))

    await prismaClient.responseCopy.create({
      data: {
        copyTitle: objectFromResponse[0].copy.title,
        generatedCopy: objectFromResponse[0].copy.description,
        requestedCopyId: requestCopy.id,
      },
    })

    res.status(200).json({ data: objectFromResponse[0] })
  } catch (err) {
    console.log(err)

    res.status(500).json({
      error: err,
    })
  }
}
