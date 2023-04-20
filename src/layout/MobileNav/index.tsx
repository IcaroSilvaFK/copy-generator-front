import { TbFileText } from 'react-icons/tb'
import { FaHistory } from 'react-icons/fa'
import { HiMenuAlt1 } from 'react-icons/hi'

import { Link } from '../../components/ActiveLink'

import { Container, TouchButton, Nav, Indicator } from './styles'
import { useRef, useState, useEffect } from 'react'

export function MobileNav() {
  const [isOpenNav, setIsOpenNav] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    window.addEventListener('click', handleObserverClickInToNavContextMenu)

    return () => {
      window.removeEventListener('click', handleObserverClickInToNavContextMenu)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function handleObserverClickInToNavContextMenu(e: MouseEvent) {
    if (!isOpenNav) return
    if (
      containerRef.current &&
      !containerRef.current.contains(e.target as Node)
    ) {
      setIsOpenNav(false)
    }
  }

  return (
    <Container ref={containerRef}>
      <TouchButton onClick={() => setIsOpenNav((prev) => !prev)}>
        <HiMenuAlt1 size={22} />
      </TouchButton>
      {isOpenNav && (
        <Nav>
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
      )}
    </Container>
  )
}
