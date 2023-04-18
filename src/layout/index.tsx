import { ReactNode } from 'react'
import { NavBar } from '../components/NavBar'
import { Container, Nav } from './styles'

interface ILayoutProps {
  children: ReactNode
  isLowGrid?: boolean
}

export function Layout(props: ILayoutProps) {
  const { children, isLowGrid } = props

  return (
    <Container isLowGrid={isLowGrid}>
      <Nav>
        <NavBar />
      </Nav>
      {children}
    </Container>
  )
}
