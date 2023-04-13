import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr 1fr;
  width: 100%;
  height: 100%;

  max-width: 1260px;
  margin: 0 auto;
`

export const Nav = styled.nav`
  padding: 20px;

  border-right: 1px solid ${({ theme }) => theme.colors.gray[100]};
`
