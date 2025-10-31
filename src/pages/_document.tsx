import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { ColorModeScript } from '@chakra-ui/react'
import { config } from '@config/config'
import { env } from '@config/browser.env'
import { ReactElement } from 'react'

class Document extends NextDocument {
  render(): ReactElement {
    return (
      <Html lang="en">
        <Head>
          {/* DNS Prefetch for performance */}
          <link rel="dns-prefetch" href="//fonts.googleapis.com" />
          <link rel="dns-prefetch" href="//www.google-analytics.com" />

          {/* Preconnect for critical resources */}
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

          {/* Canonical URL for homepage */}
          <link rel="canonical" href="https://ashanwithana.com/" />

          {/* Additional SEO Meta Tags */}
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <meta name="apple-mobile-web-app-title" content="Ashan Withana" />

          {/* Security Headers */}
          <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
          <meta httpEquiv="X-Frame-Options" content="DENY" />
          <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />

          {/* Performance */}
          <meta httpEquiv="x-dns-prefetch-control" content="on" />
        </Head>
        <body>
          <ColorModeScript />
          <Main />
          <NextScript />
          {config.isDev && (
            <script
              defer
              src='https://static.cloudflareinsights.com/beacon.min.js'
              data-cf-beacon={`{"token": "${env.NEXT_PUBLIC_CLOUDFLARE_TOKEN}"}`}
            />
          )}
        </body>
      </Html>
    )
  }
}

export default Document
