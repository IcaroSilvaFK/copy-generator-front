import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 22px;
  }

  header {
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: center;
    justify-content: center;

    div {
      display: flex;
      align-items: center;
      flex-direction: column;

      gap: 4px;

      h3 {
        font-size: 2rem;
        color: ${({ theme }) => theme.colors.blue[500]};
      }
    }

    span {
      color: ${({ theme }) => theme.colors.blue[500]};
      font-size: 1.625rem;
    }
  }
`
