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
`

export const EmptyCopyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

  gap: 12px;

  img {
    max-width: 44px;
  }

  div {
    background: ${({ theme }) => theme.colors.yellow[500]};
    border-radius: 4px;
    padding: 2px 12px;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`
