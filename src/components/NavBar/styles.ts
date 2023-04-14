import styled from 'styled-components'
import { darken } from 'polished'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  margin-top: 12px;

  gap: 32px;

  header {
    display: flex;
    align-items: center;
    gap: 6px;

    h1 {
      color: ${({ theme }) => theme.colors.blue[500]};
    }
  }

  ul {
    flex: 1;
  }

  footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    padding-bottom: 32px;

    b {
      color: ${({ theme }) => theme.colors.blue[500]};
    }

    button {
      background: transparent;
      border: 1px solid ${({ theme }) => theme.colors.gray[100]};
      padding: 12px;
      border-radius: 4px;
      margin-top: 6px;
      transition: all linear 0.3s;

      &:hover {
        background: ${({ theme }) => darken(0.1, theme.colors.gray[100])};
      }
    }
  }
`
