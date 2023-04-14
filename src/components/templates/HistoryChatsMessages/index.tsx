import { IoIosCopy } from 'react-icons/io'

import { copy } from '../../../mocks/copy-chat-messages'
import { CopyChatMessageWave } from '../../CopyChatMessageWave'

import { Container, EmptyCopyContainer } from './styles'

export function CopyResponse() {
  return (
    <Container>
      {/* <EmptyCopyContainer>
        <img src="/assets/empty-copy.svg" />
        <div>
          <span>&quot;Preencha as informações do lado para gerarmos sua copy&quot;</span>
        </div>
      </EmptyCopyContainer> */}
      <ul>
        {copy.map((cp) => (
          <CopyChatMessageWave key={cp.titulo} copy={cp.descricao} title={cp.titulo} />
        ))}
      </ul>
      <footer>
        <IoIosCopy size={22} />
        <span>Dica: Clique em cima da copy ou texto gerado para poder copiá-lo.</span>
      </footer>
    </Container>
  )
}
