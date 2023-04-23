import { describe, it, vi } from 'vitest'
import { ThemeProvider } from 'styled-components'
import { render, screen } from '@testing-library/react'

import { Link } from '.'

import { theme } from '../../../styles/theme'

vi.mock('next/router', async () => ({
  useRouter() {
    return {
      pathname: '/test',
    }
  },
}))

describe('<ActiveLink />', () => {
  it('Should a render component', () => {
    render(
      <ThemeProvider theme={theme}>
        <Link href="/">test</Link>
      </ThemeProvider>,
    )
    expect(screen.getByText(/test/i)).toBeInTheDocument()
  })

  it('Should have an active class on the link route', () => {
    render(
      <ThemeProvider theme={theme}>
        <Link href="/test">test</Link>
      </ThemeProvider>,
    )

    const anchor = screen.getByRole('link')

    expect(anchor).toHaveClass('active')
  })
})
