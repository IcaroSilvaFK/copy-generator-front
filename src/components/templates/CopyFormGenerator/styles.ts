import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 12px;
  padding: 20px;

  display: flex;
  flex-direction: column;
  gap: 22px;

  header {
    h3 {
      font-size: 1.5rem;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 22px;

    button {
      background: ${({ theme }) => theme.colors.black};
      color: ${({ theme }) => theme.colors.white};
      padding: 10px;
      border-radius: 8px;
      align-self: flex-end;
    }
  }
`

export const Col = styled.div`
  display: flex;
  flex-direction: column;

  gap: 8px;

  label {
    font-weight: 500;
  }

  > input {
    border: 1px solid ${({ theme }) => theme.colors.gray[100]};
    border-radius: 4px;

    height: 38px;
    padding: 12px;
    font-family: inherit;

    &:focus {
      outline: 1px solid ${({ theme }) => theme.colors.black};
    }
  }

  textarea {
    resize: none;

    height: 250px;
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.colors.gray[100]};
    padding: 12px;
    font-family: inherit;

    &:focus {
      outline: 1px solid ${({ theme }) => theme.colors.black};
    }
  }
`
