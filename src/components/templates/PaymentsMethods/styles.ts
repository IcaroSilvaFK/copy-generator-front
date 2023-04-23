import styled from 'styled-components'
import { Root } from '@radix-ui/react-checkbox'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  header {
    display: flex;
    align-items: center;
    gap: 22px;
    margin-top: 12px;

    > div {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px 22px;
      border: 1px solid ${({ theme }) => theme.colors.gray[100]};
      border-radius: 8px;

      &.active {
        background: ${({ theme }) => theme.colors.blue[500]};
        color: ${({ theme }) => theme.colors.white};
      }
    }
  }
`

export const CheckBoxRoot = styled(Root)`
  width: 26px;
  height: 26px;
  background: ${({ theme }) => theme.colors.gray[100]};
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  &[data-state='checked'] {
    background: ${({ theme }) => theme.colors.white};
  }
`

export const ContainerPaymentDetails = styled.div`
  margin-top: 12px;
  padding: 12px;
  border: 1px solid ${({ theme }) => theme.colors.gray[100]};
  border-radius: 8px;
`
