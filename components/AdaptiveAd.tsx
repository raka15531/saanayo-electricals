'use client'

import { useEffect } from 'react'

interface AdaptiveAdProps {
  type: 'inline' | 'in-article'
}

export default function AdaptiveAd({ type }: AdaptiveAdProps) {
  useEffect(() => {
    try {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (err) {
      console.error('AdSense error:', err)
    }
  }, [])

  if (type === 'inline') {
    return (
      <div className="my-8">
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

  return (
    <div className="my-8 text-center">
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