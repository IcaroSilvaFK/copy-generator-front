import { Link } from '../ActiveLink'
import { Container } from './styles'

export function NavBar() {
  return (
    <Container>
      <header>
        <img src="/assets/logo.svg" alt="Logo" />
        <h1>Lorem ipsum dolor sit amet</h1>
      </header>
      <ul>
        <li>
          <Link href="/copy">
            <img src="/assets/copy-icon.svg" alt="copy" />
            <span>Criador de copy</span>
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
          <img src="/assets/signOut.svg" />
        </button>
      </footer>
    </Container>
  )
}
