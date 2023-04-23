import { ReactNode } from 'react'

import { MobileNav } from './MobileNav'
import { NavBar } from '../components/atoms/NavBar'

import { Container, Nav } from './styles'

interface ILayoutProps {
  children: ReactNode
  isLowGrid?: boolean
}

export function Layout(props: ILayoutProps) {
  const { children, isLowGrid } = props

  return (
    <Container isLowGrid={isLowGrid} data-testid="container">
      <Nav>
        <NavBar />
      </Nav>
      <MobileNav />
      {children}
    </Container>
  )
}
