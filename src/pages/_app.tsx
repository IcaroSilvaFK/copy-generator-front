import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { ToastContainer } from 'react-toastify'
import { SessionProvider } from 'next-auth/react'

import 'react-toastify/dist/ReactToastify.css'
import { theme } from '../styles/theme/index'
import { GlobalStyle } from '../styles/global'

function MyApp({ Component, pageProps }: AppProps) {
  const { session, ...restProps } = pageProps

  return (
    <SessionProvider session={session}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...restProps} />
        <ToastContainer />
      </ThemeProvider>
    </SessionProvider>
  )
}

export default MyApp
