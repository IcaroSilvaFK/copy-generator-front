import { formatDistanceToNow } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'

import { Container } from './styles'
import { writeTextToClipboard } from '../../../utils/copyToClipBoard'
import { useToast } from '../../../hooks/useToast'

interface ICopyMessageWaveProps {
  copy: string
  createdAt?: string
}

export function CopyChatMessageWave(props: ICopyMessageWaveProps) {
  const { copy, createdAt } = props
  const { toastSuccess, toastError } = useToast()

  async function copyToClipboard() {
    try {
      await writeTextToClipboard(copy)
      toastSuccess('Copy copiada com sucesso')
    } catch (err) {
      console.error(err)

      toastError('Problemas ao copiar o texto por favor tente novamente.')
    }
  }

  return (
    <Container onClick={copyToClipboard}>
      <header>
        {createdAt && (
          <span>
            {formatDistanceToNow(new Date(createdAt), {
              locale: ptBr,
              addSuffix: true,
            })}
          </span>
        )}
      </header>
      <p>{copy}</p>
    </Container>
  )
}
