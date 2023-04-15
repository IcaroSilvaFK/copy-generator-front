import Document, {
  Html,
  Head,
  NextScript,
  Main,
  DocumentContext,
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default function _document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

_document.getInitialProps = async (ctx: DocumentContext) => {
  const sheet = new ServerStyleSheet()
  const originalPageRender = ctx.renderPage

  try {
    ctx.renderPage = () =>
      originalPageRender({
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
      })
    const initialProps = await Document.getInitialProps(ctx)

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {sheet.getStyleElement()}
        </>
      ),
    }
  } finally {
    sheet.seal()
  }
}
