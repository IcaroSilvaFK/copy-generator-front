import { IoIosCopy } from 'react-icons/io'
import { useAtom } from 'jotai'
import { useAutoAnimate } from '@formkit/auto-animate/react'

import { CopyChatMessageWave } from '../../CopyChatMessageWave'

import { Container, EmptyCopyContainer, LoadingCopy } from './styles'
import {
  createdCopy,
  requestedCopyAtom,
} from '../../../atoms/requestedCopyAtom'
import { loadingRequestCopy } from '../../../atoms/loadingRequestCopy'

export function CopyResponse() {
  const [copys] = useAtom(requestedCopyAtom)
  const [isLoadingRequestCopy] = useAtom(loadingRequestCopy)
  const [parentRef] = useAutoAnimate<HTMLDivElement>()
  const [dateCopyCreated] = useAtom(createdCopy)

  return (
    <Container ref={parentRef}>
      {isLoadingRequestCopy && (
        <LoadingCopy>
          <img src="/assets/loading.svg" alt="Loading" />
          <span>Gerando copy...</span>
        </LoadingCopy>
      )}
      {!isLoadingRequestCopy && !copys.length && (
        <EmptyCopyContainer>
          <img src="/assets/empty-copy.svg" alt="Empty copy" />
          <div>
            <span>
              &quot;Preencha as informações do lado para gerarmos sua copy&quot;
            </span>
          </div>
        </EmptyCopyContainer>
      )}
      {copys.length > 0 && (
        <>
          <ul>
            <CopyChatMessageWave
              key={copys}
              copy={copys}
              createdAt={dateCopyCreated?.toString()}
            />
          </ul>
          <footer>
            <IoIosCopy size={22} />
            <span>
              Dica: Clique em cima da copy ou texto gerado para poder copiá-lo.
            </span>
          </footer>
        </>
      )}
    </Container>
  )
}
