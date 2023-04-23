import styled from 'styled-components'

export const Container = styled.form`
  display: flex;
  flex-direction: column;

  gap: 12px;
  margin-top: 12px;

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
