import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ClientLayout from './ClientLayout'
import AdSense from '@/components/AdSense'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

// Primary keywords for Sanaayo Electric Industries
const primaryKeywords = [
  'earthing electrodes',
  'chemical earthing',
  'green earth electrodes', 
  'copper bonded rods',
  'gi earthing pipes',
  'lightning protection',
  'grounding system',
  'earthing manufacturer India',
  'electrical earthing',
  'earthing solutions',
  'conductive concrete granules',
  'maintenance free earthing',
  'earthing system Faridabad',
  'electrical safety solutions',
  'industrial earthing',
  'residential earthing',
  'earthing installation',
  'earth pit construction',
  'earthing testing',
  'lightning arresters',
  'surge protection devices'
].join(', ')

export const metadata: Metadata = {
  title: {
    default: 'Sanaayo Electric Industries - Green Earth Electrodes & Chemical Earthing Systems',
    template: '%s | Sanaayo Electric Industries'
  },
  description: 'Leading manufacturer of green earth electrodes with conductive concrete technology. Chemical earthing, maintenance-free systems with 10-year warranty, 50+ years lifespan. Serving Faridabad and Delhi NCR.',
  keywords: primaryKeywords,
  authors: [{ name: 'Sanaayo Electric Industries' }],
  creator: 'Sanaayo Electric Industries',
  publisher: 'Sanaayo Electric Industries',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://sanaayoelectric.com'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://sanaayoelectric.com',
    siteName: 'Sanaayo Electric Industries',
    title: 'Sanaayo Electric Industries - Green Earth Electrodes & Chemical Earthing',
    description: 'Premium green earth electrodes with conductive concrete technology. 10-year warranty, 50+ years lifespan.',
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'Sanaayo Electric Industries - Earthing Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sanaayo Electric Industries - Premium Earthing Solutions',
    description: 'Green earth electrodes with conductive concrete technology. 10-year warranty.',
    images: ['/images/logo.png'],
  },
  verification: {
    // google: 'YOUR_GOOGLE_SEARCH_CONSOLE_CODE',
  },
  category: 'Industrial & Electrical Equipment',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Corporation',
  name: 'Sanaayo Electric Industries Pvt Ltd',
  description: 'Leading manufacturer of green earth electrodes with conductive concrete technology for earthing and grounding systems',
  url: 'https://sanaayoelectric.com',
  telephone: '+91-9667846784',
  email: 'saanayoelectricindustries@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Plot No. 5B/7, 2nd Floor, Railway Road, NIT-5',
    addressLocality: 'Faridabad',
    addressRegion: 'Haryana',
    postalCode: '121001',
    addressCountry: 'IN'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '28.377589',
    longitude: '77.319722'
  },
  openingHours: [
    'Mo-Fr 09:00-18:00',
    'Sa 09:00-16:00'
  ],
  foundingDate: '2025-01-17',
  legalName: 'Sanaayo Electric Industries Private Limited',
  taxID: '06ABPCS0518J1Z5',
  knowsAbout: [
    'Earthing Systems',
    'Electrical Safety',
    'Grounding Solutions',
    'Chemical Earthing',
    'Lightning Protection'
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Earthing and Electrical Safety Products',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: 'Green Earth Electrodes',
          description: 'Advanced earthing electrodes with conductive concrete granule technology'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: 'Chemical Earthing Systems',
          description: 'Maintenance-free chemical earthing systems for all soil conditions'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: 'Copper Bonded Rods',
          description: 'Premium copper bonded earthing rods with 250-micron coating'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: 'GI Earthing Electrodes',
          description: 'Heavy-duty GI earthing electrodes for industrial applications'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Earthing Installation',
          description: 'Professional earthing system installation and testing services'
        }
      }
    ]
  },
  areaServed: 'India',
  brand: {
    '@type': 'Brand',
    name: 'Sanaayo Electric',
    slogan: 'Powering Safety. Grounding Reliability.'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google AdSense Meta Tag */}
        <meta name="google-adsense-account" content="ca-pub-8120935387035949" />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        {/* Favicon Links - FIXED THE TYPO */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        
        {/* Additional Meta Tags */}
        <link rel="canonical" href="https://sanaayoelectric.com" />
        <meta name="geo.region" content="IN-HR" />
        <meta name="geo.placename" content="Faridabad" />
        <meta name="geo.position" content="28.377589;77.319722" />
        <meta name="ICBM" content="28.377589, 77.319722" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Company Information */}
        <meta name="company" content="Sanaayo Electric Industries Pvt Ltd" />
        <meta name="incorporation-date" content="2025-01-17" />
        <meta name="cin" content="U43219HR2025PTC127630" />
        <meta name="gstin" content="06ABPCS0518J1Z5" />
        
        {/* Preload critical resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        {/* AdSense Component */}
        <AdSense />
      </head>
      <body className={inter.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}