import styled, { css, keyframes } from 'styled-components'

type ContainerProps = {
  isActive: boolean
}

const hoverLinkAnimation = keyframes`
  0%{
    width: 0;
  }
  100%{
    width: 100%;
  }
`

export const Container = styled.a<ContainerProps>`
  color: ${({ theme }) => theme.colors.gray[200]};
  text-decoration: none;
  cursor: pointer;
  padding: 10px 12px;
  border-radius: 8px;

  display: flex;
  align-items: center;

  gap: 16px;

  position: relative;

  font-size: 0.875rem;

  ${({ isActive, theme }) =>
    isActive &&
    css`
      background: ${theme.colors.blue[500]};
      color: ${theme.colors.white};
    `}

  ${({ isActive, theme }) =>
    !isActive &&
    css`
      &:hover {
        &::after {
          content: '';

          width: 100%;
          height: 3px;
          border-radius: 8px;

          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          display: block;
          background: ${theme.colors.blue[500]};
          animation: ${hoverLinkAnimation} 0.3s linear;
        }
      }
    `}
`
