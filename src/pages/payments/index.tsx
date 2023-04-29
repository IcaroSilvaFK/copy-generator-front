import { useState } from 'react'
import { Layout } from '../../layout'
import { PaymentsMethods } from '../../components/templates/PaymentsMethods'
import * as S from '../../styles/pages/payments.styles'

type TabOpenProps = 'history' | 'plans' | 'payment'

export default function Page() {
  const [tabOpen, setTabOpen] = useState<TabOpenProps>('payment')

  return (
    <Layout isLowGrid>
      <S.Container>
        <header>
          <h2>Faturas</h2>
          <p>Aqui você encontra seus pagamentos anteriores e os futuros</p>
          <nav>
            <ul>
              <li
                className={`${tabOpen === 'history' ? 'active' : ''}`}
                onClick={() => setTabOpen('history')}
              >
                Histórico de pagamentos
              </li>
              <li
                className={`${tabOpen === 'plans' ? 'active' : ''}`}
                onClick={() => setTabOpen('plans')}
              >
                Plano de assinatura
              </li>
              <li
                className={`${tabOpen === 'payment' ? 'active' : ''}`}
                onClick={() => setTabOpen('payment')}
              >
                Forma de pagamento
              </li>
            </ul>
          </nav>
        </header>
        {tabOpen === 'payment' && <PaymentsMethods />}
      </S.Container>
    </Layout>
  )
}
