import { ReactNode } from 'react'
import { NavBar } from '../components/atoms/NavBar'
import { Container, Nav } from './styles'
import { MobileNav } from './MobileNav'

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
      <MobileNav />
      {children}
    </Container>
  )
}
