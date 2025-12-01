import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head>
        <meta name="description" content="Documentation for Atom Design React Native UI components - Input, Buttons, Search, Calendar, and more" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Atom Design" />
        <meta name="twitter:card" content="summary_large_image" />
        
        {/* Google Fonts - Roboto & Saira Stencil One */}
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&family=Saira+Stencil+One&family=Fira+Code:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
