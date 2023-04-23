interface ICreateCopyReaderStreamProps {
  copy: string
  title: string
  platform: string
  selectedCopyType: string
}

export async function createCopyReaderStream(
  props: ICreateCopyReaderStreamProps,
) {
  const { copy, platform, selectedCopyType, title } = props

  const payload = {
    prompt: copy,
    title,
    maxToken: selectedCopyType === 'long' ? 500 : 300,
    platform,
  }

  const response = await fetch('/api/generate/copy', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    throw new Error(response.statusText)
  }
  const data = response.body

  if (!data) {
    throw new Error('Error on create copy')
  }

  return data
}
