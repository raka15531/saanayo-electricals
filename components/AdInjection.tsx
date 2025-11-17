'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    adsbygoogle: any[]
  }
}

export default function AdInjection() {
  useEffect(() => {
    // Wait a bit for the content to render
    const timer = setTimeout(() => {
      try {
        // Find all ad containers
        const adContainers = document.querySelectorAll('[data-ad-type]')
        
        adContainers.forEach((container, index) => {
          const adType = container.getAttribute('data-ad-type')
          
          if (adType === 'in-article') {
            // Create in-article ad
            const adHtml = `
              <ins class="adsbygoogle"
                   style="display:block; text-align:center;"
                   data-ad-layout="in-article"
                   data-ad-format="fluid"
                   data-ad-client="ca-pub-8120935387035949"
                   data-ad-slot="6494034429"></ins>
            `
            container.innerHTML = adHtml
          } else if (adType === 'inline') {
            // Create inline ad
            const adHtml = `
              <ins class="adsbygoogle"
                   style="display:block"
                   data-ad-client="ca-pub-8120935387035949"
                   data-ad-slot="5907818869"
                   data-ad-format="auto"
                   data-full-width-responsive="true"></ins>
            `
            container.innerHTML = adHtml
          }
          
          // Push to adsbygoogle
          ;(window.adsbygoogle = window.adsbygoogle || []).push({})
        })
        
      } catch (err) {
        console.error('Ad injection error:', err)
      }
    }, 100) // Small delay to ensure DOM is ready
    
    return () => clearTimeout(timer)
  }, [])

  return null // This component doesn't render anything visible
}