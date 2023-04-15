import { darken, transparentize } from 'polished'
import styled, { css } from 'styled-components'

type ButtonCopyProps = {
  isActive: boolean
}

export const Container = styled.div`
  padding: 32px;

  box-shadow: 5px 0 10px rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;
  gap: 22px;

  header {
    h3 {
      font-size: 1.5rem;
      color: ${({ theme }) => theme.colors.blue[500]};
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 22px;

    > button {
      background: ${({ theme }) => theme.colors.blue[500]};
      color: ${({ theme }) => theme.colors.white};
      padding: 10px;
      border-radius: 8px;
      align-self: flex-end;
      transition: all linear 0.3s;

      &:hover {
        background: ${({ theme }) =>
          transparentize(0.1, theme.colors.blue[500])};
      }

      &:disabled {
        cursor: not-allowed;
        opacity: 0.6;
      }
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

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ButtonCopy = styled.div<ButtonCopyProps>`
  display: flex;
  align-items: center;
  gap: 18px;

  padding: 10px 22px;
  background: transparent;
  cursor: pointer;

  outline: 1px solid ${({ theme }) => theme.colors.blue[500]};
  color: ${({ theme }) => theme.colors.blue[500]};
  font-weight: 600;
  border-radius: 8px;
  transition: background 0.3s linear;

  &:hover {
    background: ${({ theme }) => transparentize(0.9, theme.colors.blue[500])};
  }

  ${({ theme, isActive }) =>
    isActive &&
    css`
      background: ${theme.colors.blue[500]};
      color: ${({ theme }) => theme.colors.white};
      svg {
        stroke: ${({ theme }) => theme.colors.white};
      }

      &:hover {
        background: ${({ theme }) => darken(0.1, theme.colors.blue[500])};
      }
    `}
`
