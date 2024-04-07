import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      {`<!-- Cloudflare Web Analytics -->`}<script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "197a6a106f2044acbd272f6662016c75"}'></script>{`<!-- End Cloudflare Web Analytics -->`}
      <Analytics />
    </>
  )
}
