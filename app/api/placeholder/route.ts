import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const text = searchParams.get('text') || 'Electrical Safety Product'
  const size = searchParams.get('size') || '512x512'
  
  const [width, height] = size.split('x').map(Number)
  
  // Create a simple SVG placeholder
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#3b82f6;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#1d4ed8;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#grad)"/>
      <text x="50%" y="45%" text-anchor="middle" fill="white" font-family="Arial" font-size="20" font-weight="bold">
        ⚡ Saanayo Electricals
      </text>
      <text x="50%" y="55%" text-anchor="middle" fill="white" font-family="Arial" font-size="14">
        ${text.substring(0, 30)}${text.length > 30 ? '...' : ''}
      </text>
      <text x="50%" y="70%" text-anchor="middle" fill="white" font-family="Arial" font-size="12" opacity="0.8">
        AI Generated Image Preview
      </text>
    </svg>
  `

  return new NextResponse(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=86400',
    },
  })
}