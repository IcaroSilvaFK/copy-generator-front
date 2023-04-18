import { IoIosCopy } from 'react-icons/io'

import { CopyChatMessageWave } from '../../CopyChatMessageWave'

import { Container } from './styles'
import { historyCopyAtom } from '../../../atoms/requestedCopyAtom'
import { useAtom } from 'jotai'

export function HistoryChatCopy() {
  const [copys] = useAtom(historyCopyAtom)

  return (
    <Container>
      <ul>
        {copys.map((cp) => (
          <CopyChatMessageWave
            key={cp.createdAt}
            copy={cp.description}
            title={cp.title}
            createdAt={cp.createdAt}
          />
        ))}
      </ul>
      <footer>
        <IoIosCopy size={22} />
        <span>
          Dica: Clique em cima da copy ou texto gerado para poder copiá-lo.
        </span>
      </footer>
    </Container>
  )
}
