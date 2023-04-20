import styled from 'styled-components'
import { IoMdArrowDropup } from 'react-icons/io'

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  padding-top: 45px;
`

export const Container = styled.nav`
  position: absolute;
  z-index: 9999;

  @media screen and (min-width: 1100px) {
    display: none;
  }
`

export const TouchButton = styled.button`
  padding: 6px;
  border-bottom-right-radius: 8px;
  background: ${({ theme }) => theme.colors.blue[500]};
  svg {
    fill: ${({ theme }) => theme.colors.white};
  }
`

export const Nav = styled.div`
  position: relative;
  background: ${({ theme }) => theme.colors.white};
  margin-top: 10px;
  margin-left: 10px;
  padding: 12px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  max-width: 300px;

  footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;

    margin-top: 12px;

    button {
      width: 100%;
      padding: 12px;
    }
  }
`

export const Indicator = styled(IoMdArrowDropup)`
  position: absolute;
  top: -20px;
  left: 0;
  fill: ${({ theme }) => theme.colors.white};
`
