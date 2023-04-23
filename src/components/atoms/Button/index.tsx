import { ButtonHTMLAttributes, ReactNode } from 'react'

import { ButtonVariants } from './Variants'

import * as C from './styles'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant: ButtonVariants
}

export function Button(props: IButtonProps) {
  const { children, ...rest } = props

  return <C.Container {...rest}>{children}</C.Container>
}
