import { describe, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import { Layout } from '.'

import { theme } from '../styles/theme'

vi.mock('next/router', () => ({
  useRouter: () => ({
    pathname: '',
  }),
}))

describe('<Layout />', () => {
  it('should render children component', () => {
    render(
      <ThemeProvider theme={theme}>
        <Layout>
          <h1>Hello World</h1>
        </Layout>
      </ThemeProvider>,
    )

    expect(screen.getByText(/hello world/i)).toBeInTheDocument()
  })

  it('should change grid layout', () => {
    render(
      <ThemeProvider theme={theme}>
        <Layout isLowGrid>
          <h1>Hello World</h1>
        </Layout>
      </ThemeProvider>,
    )

    expect(screen.getByTestId('container')).toHaveStyle(
      'grid-template-columns: 250px 1fr',
    )
  })
})
