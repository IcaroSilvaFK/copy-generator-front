import { describe, it, vi, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import userEvent from '@testing-library/user-event'

import { CopyChatMessageWave } from '.'

import { theme } from '../../../styles/theme'

vi.mock('../../../hooks/useToast', () => ({
  useToast: () => ({
    toastSuccess: vi.fn(),
    toastError: vi.fn(),
  }),
}))

vi.mock('navigator.clipboard', () => ({
  writeText: vi.fn(),
}))

beforeEach(() => {
  const mockClipboard = {
    writeText: vi.fn(),
  }

  // @ts-expect-error
  global.navigator.clipboard = mockClipboard
})

describe('<CopyChatMessageWave />', () => {
  it('Should a render component copy chat message wave', () => {
    render(
      <ThemeProvider theme={theme}>
        <CopyChatMessageWave copy="Copy 1" />
      </ThemeProvider>,
    )

    expect(screen.getByText(/Copy 1/i)).toBeInTheDocument()
  })

  it('Should a render component copy chat message wave', async () => {
    render(
      <ThemeProvider theme={theme}>
        <CopyChatMessageWave copy="Copy 1" />
      </ThemeProvider>,
    )

    const element = screen.getByText(/Copy 1/i)

    await userEvent.click(element)

    expect(navigator.clipboard.writeText).toHaveBeenCalled()
  })
})
