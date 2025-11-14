'use client'

import Script from 'next/script'

export default function AdSense() {
  return (
    <Script
      id="adsbygoogle"
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8120935387035949"
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  )
}