import { Container } from './styles'

export function CreditPaymentMethod() {
  return (
    <Container>
      <header>
        <input placeholder="Numero do cartão" type="number" />
        <div>
          <input placeholder="CVV" type="number" />
          <input placeholder="Validade" type="number" />
        </div>
      </header>
      <input placeholder="Nome do titular do cartão" />
      <input placeholder="CPF do titular do cartão" type="number" />
    </Container>
  )
}
