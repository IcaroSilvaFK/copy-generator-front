import { describe, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import userEvent from '@testing-library/user-event'

import { MobileNav } from '.'

import { theme } from '../../styles/theme'

vi.mock('next/router', () => ({
  useRouter: () => ({
    pathname: '',
  }),
}))

beforeEach(() => {
  render(
    <ThemeProvider theme={theme}>
      <MobileNav />
    </ThemeProvider>,
  )
})

describe('<MobileNav />', () => {
  it('Should render a mobile nav', async () => {
    const element = screen.getByRole('button')

    await userEvent.click(element)

    expect(screen.getByTestId('mobile-nav')).toBeInTheDocument()
  })

  it('Should close mobile nav', async () => {
    const element = screen.getByRole('button')

    await userEvent.click(element)
    await userEvent.click(element)
    const nav = screen.queryByTestId('mobile-nav')

    expect(nav).toBeNull()
  })
})
