export function injectAdsIntoContent(content: string): string {
  const paragraphs = content.split('</p>')
  
  // Remove empty paragraphs
  const cleanParagraphs = paragraphs.filter(p => p.trim().length > 0)
  
  let injectedContent: string[] = []
  
  for (let i = 0; i < cleanParagraphs.length; i++) {
    // Add the paragraph
    injectedContent.push(cleanParagraphs[i] + '</p>')
    
    // Inject in-article ad after 2nd paragraph (index 1)
    if (i === 1) {
      injectedContent.push(`
        <div class="ad-container my-8 text-center" data-ad-type="in-article">
          <!-- In-Article Ad will be injected here -->
        </div>
      `)
    }
    
    // Inject inline ad after 5th paragraph (index 4)
    if (i === 4) {
      injectedContent.push(`
        <div class="ad-container my-8" data-ad-type="inline">
          <!-- Inline Ad will be injected here -->
        </div>
      `)
    }
    
    // Inject another inline ad after 8th paragraph (index 7) if content is long enough
    if (i === 7 && cleanParagraphs.length > 8) {
      injectedContent.push(`
        <div class="ad-container my-8" data-ad-type="inline">
          <!-- Inline Ad will be injected here -->
        </div>
      `)
    }
  }
  
  return injectedContent.join('')
}

// Alternative function for more control
export function injectAdsAtPositions(content: string, positions: number[]): string {
  const paragraphs = content.split('</p>').filter(p => p.trim().length > 0)
  let injectedContent: string[] = []
  
  for (let i = 0; i < paragraphs.length; i++) {
    injectedContent.push(paragraphs[i] + '</p>')
    
    // Check if current position should have an ad
    if (positions.includes(i)) {
      const adType = i === 1 ? 'in-article' : 'inline' // 2nd paragraph gets in-article, others get inline
      
      injectedContent.push(`
        <div class="ad-container my-8 ${adType === 'in-article' ? 'text-center' : ''}" data-ad-type="${adType}">
          <!-- ${adType === 'in-article' ? 'In-Article' : 'Inline'} Ad will be injected here -->
        </div>
      `)
    }
  }
  
  return injectedContent.join('')
}