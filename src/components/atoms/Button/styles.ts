import styled, { css } from 'styled-components'
import { ButtonVariants } from './Variants'
import { darken, transparentize } from 'polished'

type ContainerProps = { variant: ButtonVariants }

export const Container = styled.button<ContainerProps>`
  padding: 8px 16px;
  font-family: ${({ theme }) => theme.fonts.inter};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  border-radius: ${({ theme }) => theme.radii.base};

  ${({ theme, variant }) =>
    variant === 'solid' &&
    css`
      background-color: ${theme.colors.blue[500]};
      color: ${theme.colors.white};
      transition: background 0.3s linear;

      &:hover {
        background-color: ${darken(0.1, theme.colors.blue[500])};
      }
    `}

  ${({ theme, variant }) =>
    variant === 'ghost' &&
    css`
      background-color: transparent;
      color: ${theme.colors.blue[500]};
      transition: background 0.3s linear;

      &:hover {
        background-color: ${transparentize(0.9, theme.colors.blue[500])};
      }
    `}

    ${({ theme, variant }) =>
    variant === 'link' &&
    css`
      background-color: transparent;
      color: ${theme.colors.blue[500]};
      text-decoration: underline;
      text-decoration-thickness: 2px;

      &:hover {
        color: ${darken(0.1, theme.colors.blue[500])};
      }
    `}

    ${({ theme, variant }) =>
    variant === 'outline' &&
    css`
      background-color: transparent;
      color: ${theme.colors.blue[500]};
      outline: 1px solid ${theme.colors.blue[500]};

      &:hover {
        background-color: ${theme.colors.blue[500]};
        color: ${theme.colors.white};
      }
    `}
`
