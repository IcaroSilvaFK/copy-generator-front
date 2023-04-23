import { transparentize } from 'polished'
import styled from 'styled-components'

export const Container = styled.div`
  padding: 32px 12px;
  max-height: 100vh;
  overflow-y: auto;
  scroll-behavior: smooth;

  display: flex;
  align-items: center;
  flex-direction: column;

  &::-webkit-scrollbar {
    background: transparent;
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => transparentize(0.6, theme.colors.blue[500])};
    border-radius: 12px;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  footer {
    margin-top: 12px;
    max-width: 65%;
    padding: 12px;
    border-radius: 20px;

    background: ${({ theme }) => theme.colors.yellow[500]};
  }

  @media screen and (max-width: 800px) {
    overflow-y: visible;
  }
`

export const LoadingCopy = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 12px;
  margin-bottom: 12px;

  img {
    width: 46px;
    height: 46px;
    object-fit: cover;
  }

  span {
    font-weight: 500;
    color: ${({ theme }) => theme.colors.blue[500]};
  }
`
