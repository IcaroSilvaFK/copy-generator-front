import { describe, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import { NavBar } from '.'

import { theme } from '../../../styles/theme'

vi.mock('next/router', () => ({
  useRouter: () => ({
    pathname: '/copy',
  }),
}))

describe('<NavBar />', () => {
  it('Should a render navbar component', () => {
    render(
      <ThemeProvider theme={theme}>
        <NavBar />
      </ThemeProvider>,
    )

    expect(screen.getByText(/Lorem ipsum dolor sit amet/i)).toBeInTheDocument()
  })
})
