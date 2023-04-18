import { MdPix } from 'react-icons/md'
import { BsFillCreditCard2BackFill, BsCheck } from 'react-icons/bs'
import * as PrimitiveCheckBox from '@radix-ui/react-checkbox'
import { useTheme } from 'styled-components'

import { CheckBoxRoot, Container } from './styles'
import { useState } from 'react'

export function PaymentsMethods() {
  const { colors } = useTheme()
  const [paymentOption, setPaymentOption] = useState<'PIX' | 'CREDIT' | null>(
    null,
  )

  return (
    <Container>
      <header>
        <div className={paymentOption === 'PIX' ? 'active' : ''}>
          <MdPix size={36} color={colors.green[500]} />
          <span>Pagamento Instantâneo (PIX)</span>
          <CheckBoxRoot
            onCheckedChange={(isChecked) =>
              setPaymentOption(isChecked ? 'PIX' : null)
            }
            checked={paymentOption === 'PIX'}
          >
            <PrimitiveCheckBox.Indicator>
              <BsCheck size={30} color={colors.blue[500]} />
            </PrimitiveCheckBox.Indicator>
          </CheckBoxRoot>
        </div>
        <div className={paymentOption === 'CREDIT' ? 'active' : ''}>
          <BsFillCreditCard2BackFill size={36} />
          <span>Cartão de credito</span>
          <CheckBoxRoot
            onCheckedChange={(isChecked) =>
              setPaymentOption(isChecked ? 'CREDIT' : null)
            }
            checked={paymentOption === 'CREDIT'}
          >
            <PrimitiveCheckBox.Indicator>
              <BsCheck size={26} color={colors.blue[500]} />
            </PrimitiveCheckBox.Indicator>
          </CheckBoxRoot>
        </div>
      </header>
    </Container>
  )
}
