import { describe, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import userEvent from '@testing-library/user-event'

import { CopyFormGenerator } from '.'

import { theme } from '../../../styles/theme'

const useFormMock = vi.spyOn(
  {
    useForm: () => ({
      register: vi.fn(),
      handleSubmit: vi.fn(),
      formState: { errors: false },
      reset: vi.fn(),
    }),
  },
  'useForm',
)

describe('<CopyFormGenerator />', () => {
  it('should render a copy form', () => {
    render(
      <ThemeProvider theme={theme}>
        <CopyFormGenerator />
      </ThemeProvider>,
    )

    expect(
      screen.getByText(/Que tal produzirmos uma copy persuasiva?/i),
    ).toBeInTheDocument()
    expect(screen.getByRole('form')).toBeInTheDocument()
  })

  it('should not submit form invalid', async () => {
    render(
      <ThemeProvider theme={theme}>
        <CopyFormGenerator />
      </ThemeProvider>,
    )

    const element = screen.getByText(/Gerar minha copy/i)

    await userEvent.click(element)

    expect(useFormMock).not.toBeCalled()
  })
})
