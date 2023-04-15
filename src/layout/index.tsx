import { ReactNode } from 'react'
import { NavBar } from '../components/NavBar'
import { Container, Nav } from './styles'

interface ILayoutProps {
  children: ReactNode
}

export function Layout(props: ILayoutProps) {
  const { children } = props

  return (
    <Container>
      <Nav>
        <NavBar />
      </Nav>
      {children}
    </Container>
  )
}
