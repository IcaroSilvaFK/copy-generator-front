import { Container, EmptyCopyContainer } from './styles'

export function CopyResponse() {
  return (
    <Container>
      <EmptyCopyContainer>
        <img src="/assets/empty-copy.svg" />
        <div>
          <span>&quot;Preencha as informações do lado para gerarmos sua copy&quot;</span>
        </div>
      </EmptyCopyContainer>
    </Container>
  )
}
