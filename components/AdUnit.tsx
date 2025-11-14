'use client'

import { useEffect } from 'react'
import Script from 'next/script'

interface AdUnitProps {
  slot: string
  format?: string
  responsive?: boolean
  className?: string
}

export default function AdUnit({ slot, format = 'auto', responsive = true, className = '' }: AdUnitProps) {
  useEffect(() => {
    // Load AdSense script only when ad unit is rendered
    const loadAdSense = () => {
      const script = document.createElement('script')
      script.async = true
      script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8120935387035949'
      script.crossOrigin = 'anonymous'
      document.head.appendChild(script)
      
      script.onload = () => {
        try {
          (window.adsbygoogle = window.adsbygoogle || []).push({})
        } catch (error) {
          console.error('AdSense error:', error)
        }
      }
    }

    if (typeof window !== 'undefined' && !window.adsbygoogle) {
      loadAdSense()
    } else if (window.adsbygoogle) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({})
      } catch (error) {
        console.error('AdSense error:', error)
      }
    }
  }, [])

  return (
    <div className={`ad-unit ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-8120935387035949"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? 'true' : 'false'}
      />
    </div>
  )
}