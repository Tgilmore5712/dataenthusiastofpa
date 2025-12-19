import '../styles/globals.css'
import Nav from '../components/Nav'
import Script from 'next/script'

export default function App({ Component, pageProps }){
  return (
    <>
      {/* Analytics: replace GA_TRACKING_ID in environment if used */}
      {process.env.NEXT_PUBLIC_GA_ID && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} strategy="afterInteractive" />
          <Script id="ga" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');`}
          </Script>
        </>
      )}
      <Nav />
      <main className="px-4">
        <Component {...pageProps} />
      </main>
    </>
  )
}
