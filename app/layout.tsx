import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ClientLayout from './ClientLayout'
import AdSense from '@/components/AdSense'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

// Primary keywords for Saanayo Electricals
const primaryKeywords = [
  'earthing electrodes',
  'earthing system', 
  'chemical earthing',
  'copper bonded rods',
  'gi earthing pipes',
  'lightning protection',
  'grounding system',
  'earthing manufacturer India',
  'electrical earthing',
  'earthing solutions',
  'earthing electrodes manufacturer',
  'copper earthing rods',
  'gi earthing electrodes',
  'chemical earthing system',
  'lightning arresters',
  'electrical panels',
  'surge protection devices',
  'grounding accessories',
  'electrical safety solutions',
  'earthing system manufacturer India',
  'lightning protection system',
  'electrical safety equipment',
  'industrial earthing solutions',
  'electrical grounding system'
].join(', ')

// ✅ UPDATE METADATA HERE:
export const metadata: Metadata = {
  title: {
    default: 'Earthing Electrodes Manufacturer in Faridabad | Chemical & Gel Earthing Systems',
    template: '%s | Saanayo Electricals - Premium Earthing Solutions'
  },
  description: 'Leading earthing electrodes manufacturer in Faridabad. Premium chemical earthing, gel earthing, copper bonded rods & grounding systems. Get best prices with 15+ years warranty.',
  keywords: primaryKeywords,
  authors: [{ name: 'Saanayo Electricals' }],
  creator: 'Saanayo Electricals',
  publisher: 'Saanayo Electricals',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://saanayoelectricals.com'),
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
    url: 'https://saanayoelectricals.com',
    siteName: 'Saanayo Electricals',
    title: 'Earthing Electrodes Manufacturer in Faridabad | Chemical & Gel Earthing',
    description: 'Premium earthing electrodes, chemical earthing systems, copper bonded rods manufacturer in Faridabad.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Saanayo Electricals - Earthing Electrodes Manufacturer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Saanayo Electricals - Earthing Electrodes Manufacturer',
    description: 'Premium electrical safety solutions in Faridabad',
    images: ['/og-image.jpg'],
    creator: '@saanayoelectricals',
  },
  verification: {
    google: 'YOUR_GOOGLE_SEARCH_CONSOLE_CODE',
  },
  category: 'Industrial & Electrical Equipment',
}

// ✅ UPDATE JSON-LD SCHEMA HERE:
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ElectricalBusiness',
  name: 'Saanayo Electricals - Earthing Electrodes Manufacturer',
  description: 'Leading manufacturer of earthing electrodes, copper bonded rods, and chemical earthing systems in Faridabad, India',
  url: 'https://saanayoelectricals.com',
  telephone: '+91-9667846784',
  email: 'saanayoelectricindustries@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'SCF-112, Sector 28',
    addressLocality: 'Faridabad',
    addressRegion: 'Haryana',
    postalCode: '121002',
    addressCountry: 'IN'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '28.4069',
    longitude: '77.3180'
  },
  openingHours: [
    'Mo-Fr 09:00-18:00',
    'Sa 09:00-16:00'
  ],
  priceRange: '₹₹',
  areaServed: 'India',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Earthing and Electrical Safety Products',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: 'Earthing Electrodes',
          description: 'GI and Copper Earthing Electrodes for electrical grounding systems'
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
          name: 'Chemical Earthing Systems',
          description: 'Maintenance-free chemical earthing systems for all soil conditions'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: 'GI Earthing Pipes',
          description: 'Heavy-duty GI earthing pipes for industrial applications'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: 'Lightning Arresters',
          description: 'Lightning protection systems and surge protection devices'
        }
      }
    ]
  },
  sameAs: [
    'https://www.instagram.com/kasakuelectricalspvtltd/',
    'https://x.com/KasakuPvt',
    'https://www.facebook.com/people/Kasaku-Electricals-Pvt-Ltd/100086154097375/'
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* ✅ GOOGLE ADSENSE META TAG */}
        <meta name="google-adsense-account" content="ca-pub-8120935387035949" />
        
        {/* ✅ JSON-LD STRUCTURED DATA - This stays in the head */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="canonical" href="https://saanayoelectricals.com" />
        <meta name="google-site-verification" content="YOUR_GOOGLE_SEARCH_CONSOLE_CODE" />
        <meta name="geo.region" content="IN-HR" />
        <meta name="geo.placename" content="Faridabad" />
        <meta name="geo.position" content="28.40689987576518;77.3154119753337" />
        <meta name="ICBM" content="28.40689987576518, 77.3154119753337" />
        <meta name="theme-color" content="#2563eb" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Preload critical resources for better performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        {/* ✅ ADSENSE COMPONENT */}
        <AdSense />
      </head>
      <body className={inter.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}