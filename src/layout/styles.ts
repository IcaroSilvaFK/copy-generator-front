import styled, { css } from 'styled-components'

type IContainerProps = {
  isLowGrid?: boolean
}

export const Container = styled.div<IContainerProps>`
  display: grid;
  grid-template-columns: 250px 1fr 1fr;
  width: 100%;
  height: 100%;

  max-width: 1260px;
  margin: 0 auto;

  ${({ isLowGrid }) =>
    isLowGrid &&
    css`
      grid-template-columns: 250px 1fr;
    `}

  @media screen and (max-width: 1100px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`

export const Nav = styled.nav`
  padding: 20px;

  border-right: 1px solid ${({ theme }) => theme.colors.gray[100]};

  @media screen and (max-width: 1100px) {
    display: none;
  }
`
