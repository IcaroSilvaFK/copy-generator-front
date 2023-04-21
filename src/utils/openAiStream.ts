import {
  ParsedEvent,
  ReconnectInterval,
  createParser,
} from 'eventsource-parser'

interface IPayloadProps {
  model: string
  messages: {
    role: string
    content: string
  }[]
  temperature: number
  top_p: number
  frequency_penalty: number
  presence_penalty: number
  max_tokens: number
  stream: boolean
  n: number
}

export async function OpenAIStream(payload: IPayloadProps) {
  const encoder = new TextEncoder()
  const decoder = new TextDecoder()

  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN ?? ''}`,
    },
    body: JSON.stringify(payload),
  })

  const stream = new ReadableStream({
    async start(controller) {
      function onParse(event: ParsedEvent | ReconnectInterval) {
        if (event.type === 'event') {
          const data = event.data

          if (data === '[DONE]') {
            controller.close()
            return
          }
          try {
            const json = JSON.parse(data)

            const text = json.choices[0].delta?.content || ''

            const queue = encoder.encode(text)
            controller.enqueue(queue)
          } catch (err) {
            console.log(err)
            controller.error(err)
          }
        }
      }

      const parser = createParser(onParse)

      for await (const chunk of res.body as any) {
        parser.feed(decoder.decode(chunk))
      }
    },
  })

  return stream
}
