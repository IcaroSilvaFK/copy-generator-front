import { FaHistory, FaHashtag } from 'react-icons/fa'
import { TbFileText } from 'react-icons/tb'
import { IoImagesOutline } from 'react-icons/io5'
import { useSession, signOut, signIn } from 'next-auth/react'
import { GoSignIn } from 'react-icons/go'

import { Link } from '../ActiveLink'
import { Container } from './styles'
import { Button } from '../Button'

export function NavBar() {
  const { data, status } = useSession()
  const user = data?.user

  return (
    <Container>
      <header>
        <img src="/assets/logo.svg" alt="Logo" />
        <h1>Lorem ipsum dolor sit amet</h1>
      </header>
      <ul>
        <li>
          <Link href="/copy">
            <TbFileText size={22} />
            <span>Gerador de copy</span>
          </Link>
        </li>
        <li>
          <Link href="/legend">
            <IoImagesOutline size={22} />
            <span>Gerador de legenda</span>
          </Link>
        </li>
        <li>
          <Link href="/hashtag">
            <FaHashtag size={22} />
            <span>Gerador de Hashtag</span>
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
        {status === 'authenticated' && (
          <>
            <b>{user?.name}</b>
            <span>{user?.email}</span>
            <button onClick={() => signOut()} className="signOut--button">
              <img src="/assets/signOut.svg" alt="sair" />
            </button>
          </>
        )}
        {status === 'unauthenticated' && (
          <Button variant="solid" onClick={() => signIn('auth0')}>
            <GoSignIn size={22} />
            <span>Entrar</span>
          </Button>
        )}
      </footer>
    </Container>
  )
}
