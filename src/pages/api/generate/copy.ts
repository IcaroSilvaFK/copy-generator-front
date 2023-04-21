import { z } from 'zod'

import { OpenAIStream } from '../../../utils/openAiStream'

if (!process.env.NEXT_PUBLIC_API_TOKEN) {
  throw new Error('Missing env var from OpenAI')
}

const schema = z.object({
  prompt: z.string(),
  title: z.string(),
  maxToken: z.number(),
  platform: z.string(),
})

export const config = {
  runtime: 'experimental-edge',
}

export default async function handler(req: Request) {
  try {
    if (req.method !== 'POST') {
      return new Response('Method is not allowed', { status: 405 })
    }

    const { maxToken, platform, prompt, title } = schema.parse(await req.json())

    const payload = {
      model: 'gpt-3.5-turbo-0301',
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
      stream: true,
      n: 1,
    }

    const stream = await OpenAIStream(payload)

    return new Response(stream, { status: 200 })

    // const { data } = await axios.post<IResponseFromOpenApiRequest>(
    //   'https://api.openai.com/v1/chat/completions',
    //   payload,
    //   {
    //     headers: {
    //       'Content-Type': 'application/json',
    //       Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN ?? ''}`,
    //     },
    //   },
    // )

    // const objectFromResponse = data?.choices?.map((choice) => ({
    //   role: choice.message.role,
    //   finish_reason: choice.finish_reason,
    //   copy: {
    //     title: choice.message.content?.split('\n')[0],
    //     description: choice.message.content?.split('\n')[2],
    //     createdAt: new Date(),
    //   },
    // }))

    // res.status(200).json({ data: {} })
  } catch (err) {
    console.log(err)

    return new Response(err as null)
  }
}
