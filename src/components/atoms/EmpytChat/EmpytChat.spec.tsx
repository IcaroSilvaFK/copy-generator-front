import { describe, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import { EmptyChat } from '.'

import { theme } from '../../../styles/theme'

describe('<EmptyChat />', () => {
  it('Should a render component EmptyChat', () => {
    render(
      <ThemeProvider theme={theme}>
        <EmptyChat message="Copy 1" />
      </ThemeProvider>,
    )

    expect(screen.getByText(/Copy 1/i)).toBeInTheDocument()
  })
})
