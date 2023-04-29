import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 32px;
  gap: 12px;

  b {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.blue[500]};
  }
  svg {
    color: ${({ theme }) => theme.colors.blue[500]};
    animation: ${rotate} 2.5s linear infinite;
  }
`
