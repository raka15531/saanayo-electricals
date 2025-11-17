'use client'

import { useEffect } from 'react'

export default function InArticleAd() {
  useEffect(() => {
    try {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (err) {
      console.error('AdSense error:', err)
    }
  }, [])

  return (
    <div className="my-8 text-center">
      {/* In-Article Ad */}
      <ins
        className="adsbygoogle"
        style={{ display: 'block', textAlign: 'center' }}
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client="ca-pub-8120935387035949"
        data-ad-slot="6494034429"
      ></ins>
    </div>
  )
}