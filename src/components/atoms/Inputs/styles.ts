import styled from 'styled-components'

export const Container = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.gray[100]};
  border-radius: 4px;

  height: 38px;
  padding: 12px;
  font-family: inherit;

  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.black};
  }

  &[type='number']::-webkit-outer-spin-button,
  &[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 8px;
`

export const InputLabel = styled.label`
  font-weight: 500;
`

export const Textarea = styled.textarea`
  resize: none;

  height: 250px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.gray[100]};
  padding: 12px;
  font-family: inherit;

  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.black};
  }
`
