'use client'

import { useEffect } from 'react'

export default function InlineAd() {
  useEffect(() => {
    try {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (err) {
      console.error('AdSense error:', err)
    }
  }, [])

  return (
    <div className="my-8">
      {/* Blog Inline Display */}
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-8120935387035949"
        data-ad-slot="5907818869"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  )
}