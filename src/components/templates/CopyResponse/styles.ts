import styled from 'styled-components'

export const Container = styled.div``

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
    background: ${({ theme }) => theme.colors.gray[100]};
    border-radius: 4px;
    padding: 2px 12px;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`
