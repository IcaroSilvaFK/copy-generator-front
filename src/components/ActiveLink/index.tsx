import { useRouter } from 'next/router'
import NextLink from 'next/link'

import { Container } from './styles'
import { ReactNode } from 'react'

interface ILinkProps {
  href: string
  children: ReactNode
}

export function Link(props: ILinkProps) {
  const { href, children } = props
  const { pathname } = useRouter()
  const isActive = href === pathname

  return (
    <NextLink href={href}>
      <Container isActive={isActive}>{children}</Container>
    </NextLink>
  )
}
