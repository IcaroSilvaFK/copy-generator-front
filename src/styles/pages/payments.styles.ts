import styled, { keyframes } from 'styled-components'

const navAnimation = keyframes`
  0%{
    width: 0;
  }
  100%{
    width: 100%;
  }
`

export const Container = styled.div`
  padding: 32px;

  > header {
    display: flex;
    flex-direction: column;
    gap: 6px;

    h2 {
      color: ${({ theme }) => theme.colors.blue[500]};
    }
    p {
      color: ${({ theme }) => theme.colors.gray[200]};
    }

    nav {
      padding: 12px 0;
      border-bottom: 1px solid ${({ theme }) => theme.colors.gray[200]};
      ul {
        display: flex;
        gap: 22px;

        li {
          color: ${({ theme }) => theme.colors.gray[200]};
          font-weight: bold;
          cursor: pointer;

          &.active {
            color: ${({ theme }) => theme.colors.blue[500]};
            position: relative;

            &::after {
              content: '';
              display: block;

              width: 100%;
              height: 4px;
              border-radius: 8px;
              background: ${({ theme }) => theme.colors.blue[500]};

              position: absolute;
              bottom: -14px;

              animation: ${navAnimation} 0.4s linear;
            }
          }
        }
      }
    }
  }
`
