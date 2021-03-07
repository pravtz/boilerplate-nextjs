import type { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyled from '@/styles/global'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Boilerplate nextjs | Pravtz</title>
        <link rel="shortcut icon" href="favicon.svg" type="image/x-icon" />
        <link rel="apple-touch-icon" href="favicon.svg" />
        <meta
          name="descriprion"
          content="A simple boilerplate to work with typescript, react, NextJs and Styled Components"
        />
        {/* font Montserrat - google fonts */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyled />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
