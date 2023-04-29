import { useSession } from 'next-auth/react'
import { Button } from '../../../atoms/Button'
import { Container } from './styles'
import { FormEvent } from 'react'

export function PixMethodPayment() {
  const { data } = useSession()

  async function handlePixMethodPayment(ev: FormEvent) {
    try {
      ev.preventDefault()
      await fetch('/api/payments/pix', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          paymentOption: 'PIX',
          userEmail: data?.user?.email,
        }),
      })
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Container onSubmit={handlePixMethodPayment}>
      <input placeholder="Nome completo" />
      <input placeholder="CPF" type="number" />
      <Button variant="solid">Efetuar pagamenmto</Button>
    </Container>
  )
}
