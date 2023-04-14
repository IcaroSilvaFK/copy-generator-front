import { IoIosCopy } from 'react-icons/io'

import { copy } from '../../../mocks/copy-chat-messages'
import { CopyChatMessageWave } from '../../CopyChatMessageWave'

import { Container, EmptyCopyContainer } from './styles'
import { requestedCopyAtom } from '../../../atoms/requestedCopyAtom'
import { useAtom } from 'jotai'

export function CopyResponse() {
  const [copys] = useAtom(requestedCopyAtom)

  return (
    <Container>
      {!copys.length && (
        <EmptyCopyContainer>
          <img src="/assets/empty-copy.svg" />
          <div>
            <span>&quot;Preencha as informações do lado para gerarmos sua copy&quot;</span>
          </div>
        </EmptyCopyContainer>
      )}
      {copys.length > 0 && (
        <>
          <ul>
            {copys.map((cp) => (
              <CopyChatMessageWave key={cp.title} copy={cp.description} title={cp.title} />
            ))}
          </ul>
          <footer>
            <IoIosCopy size={22} />
            <span>Dica: Clique em cima da copy ou texto gerado para poder copiá-lo.</span>
          </footer>
        </>
      )}
    </Container>
  )
}
