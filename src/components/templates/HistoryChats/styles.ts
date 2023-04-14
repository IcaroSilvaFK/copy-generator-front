import { transparentize } from 'polished'
import styled from 'styled-components'

export const Container = styled.div`
  padding-top: 32px;

  max-height: 100vh;
  overflow-y: auto;

  &::-webkit-scrollbar {
    background: transparent;
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => transparentize(0.6, theme.colors.blue[500])};
    border-radius: 12px;
  }

  > header {
    padding-bottom: 12px;
    padding-left: 22px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray[100]};

    h3 {
      color: ${({ theme }) => theme.colors.blue[500]};
      font-size: 1.5rem;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    padding: 12px;

    li {
      padding: 12px 4px;

      display: flex;
      flex-direction: column;
      gap: 6px;
      cursor: pointer;

      &:hover {
        background: ${({ theme }) => theme.colors.gray[100]};
        transition: background 0.3s linear;
      }

      header {
        display: flex;
        justify-content: space-between;

        b {
          max-width: 400px;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        span {
          color: ${({ theme }) => theme.colors.gray[200]};
        }
      }
      p {
        max-width: 100%;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        text-overflow: ellipsis;
        color: ${({ theme }) => theme.colors.gray[200]};
      }
    }

    li:not(:last-child) {
      border-bottom: 1px solid ${({ theme }) => theme.colors.gray[100]};
    }
  }
`
