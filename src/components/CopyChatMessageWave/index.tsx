import { Container } from './styles'

interface ICopyMessageWaveProps {
  title: string
  copy: string
}

export function CopyChatMessageWave(props: ICopyMessageWaveProps) {
  const { copy, title } = props

  return (
    <Container>
      <header>
        <strong>{title}</strong>
      </header>
      <p>{copy}</p>
    </Container>
  )
}
