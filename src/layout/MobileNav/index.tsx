import { TbFileText } from 'react-icons/tb'
import { FaHistory } from 'react-icons/fa'
import { HiMenuAlt1 } from 'react-icons/hi'
import { MdOutlineClose } from 'react-icons/md'
import { useState } from 'react'

import { Link } from '../../components/atoms/ActiveLink'

import { Container, TouchButton, Nav, Indicator, Overlay } from './styles'

export function MobileNav() {
  const [isOpenNav, setIsOpenNav] = useState(false)

  return (
    <Container>
      <TouchButton onClick={() => setIsOpenNav((prev) => !prev)}>
        {!isOpenNav ? <HiMenuAlt1 size={22} /> : <MdOutlineClose size={22} />}
      </TouchButton>
      {isOpenNav && (
        <Overlay onClick={() => setIsOpenNav(false)}>
          <Nav onClick={(e) => e.stopPropagation()}>
            <Indicator size={32} />
            <ul>
              <li>
                <Link href="/copy">
                  <TbFileText size={22} />
                  <span>Criador de copy</span>
                </Link>
              </li>
              <li>
                <Link href="/history">
                  <FaHistory size={22} />
                  <span>Histórico de copy</span>
                </Link>
              </li>
              <li>
                <Link href="/payments">
                  <img src="/assets/payments.svg" alt="copy" />
                  <span>Faturas</span>
                </Link>
              </li>
              <li>
                <Link href="/profile">
                  <img src="/assets/user.svg" alt="copy" />
                  <span>Perfil</span>
                </Link>
              </li>
            </ul>
            <footer>
              <b>Joao Pedro</b>
              <span>jhon.peter@hotmail.com</span>
              <button>
                <img src="/assets/signOut.svg" alt="sair" />
              </button>
            </footer>
          </Nav>
        </Overlay>
      )}
    </Container>
  )
}
