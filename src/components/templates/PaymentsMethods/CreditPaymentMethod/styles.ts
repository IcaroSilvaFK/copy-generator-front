import styled from 'styled-components'

export const Container = styled.form`
  margin-top: 12px;

  display: flex;
  flex-direction: column;
  gap: 12px;

  header {
    display: flex;
    gap: 6px;
    input {
      flex: 1;
    }

    div {
      border: 0;
      max-width: 300px;
      padding: 0;
    }
  }

  input {
    width: 100%;
    padding: 8px;
    border: 1px solid ${({ theme }) => theme.colors.gray[100]};
    border-radius: 4px;
    font-size: 1rem;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`
