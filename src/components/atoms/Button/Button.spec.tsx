import { describe, it, vi } from 'vitest'
import { ThemeProvider } from 'styled-components'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Button } from '.'

import { theme } from '../../../styles/theme'

const mockFn = vi.fn()

describe('<Button />', () => {
  it('Should a render component button', () => {
    render(
      <ThemeProvider theme={theme}>
        <Button variant="solid">Button</Button>
      </ThemeProvider>,
    )

    expect(screen.getByText(/button/i)).toBeInTheDocument()
  })

  it('Should a called function on click button', async () => {
    render(
      <ThemeProvider theme={theme}>
        <Button variant="solid" onClick={mockFn}>
          Button
        </Button>
      </ThemeProvider>,
    )

    const element = screen.getByText(/button/i)

    await userEvent.click(element)

    expect(mockFn).toHaveBeenCalled()
  })

  it('Should a called function on click button', async () => {
    render(
      <ThemeProvider theme={theme}>
        <Button variant="solid">Button</Button>
      </ThemeProvider>,
    )

    expect(screen.getByText(/button/i)).toHaveStyle(
      `background: ${theme.colors.blue[500]}`,
    )
  })

  it('Should a called function on click button', async () => {
    render(
      <ThemeProvider theme={theme}>
        <Button variant="ghost">Button</Button>
      </ThemeProvider>,
    )

    expect(screen.getByText(/button/i)).toHaveStyle(
      `color: ${theme.colors.blue[500]}`,
    )
  })
  it('Should a called function on click button', async () => {
    render(
      <ThemeProvider theme={theme}>
        <Button variant="outline">Button</Button>
      </ThemeProvider>,
    )

    expect(screen.getByText(/button/i)).toHaveStyle(
      `outline: 1px solid ${theme.colors.blue[500]}`,
    )
  })
  it('Should a called function on click button', async () => {
    render(
      <ThemeProvider theme={theme}>
        <Button variant="link">Button</Button>
      </ThemeProvider>,
    )

    expect(screen.getByText(/button/i)).toHaveStyle(`text-decoration:underline`)
  })
})
