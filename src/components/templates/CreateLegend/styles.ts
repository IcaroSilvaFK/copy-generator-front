import styled from 'styled-components'

export const Container = styled.div`
  padding: 32px;
  box-shadow: 4px 0 10px rgba(0, 0, 0, 0.2);

  header {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.blue[500]};
  }

  form {
    margin-top: 18px;

    div {
      display: flex;
      flex-direction: column;
      gap: 12px;

      textarea {
        resize: none;
        height: 250px;
        border: 1px solid ${({ theme }) => theme.colors.gray[200]};
        border-radius: 6px;
        padding: 12px;
        font-family: ${({ theme }) => theme.fonts.inter};
        font-size: 1rem;
      }
    }

    footer {
      display: flex;
      justify-content: flex-end;
      margin-top: 24px;

      button {
        padding: 8px 22px;
        border-radius: 4px;
        background: ${({ theme }) => theme.colors.blue[500]};
        color: ${({ theme }) => theme.colors.white};
      }
    }
  }
`
