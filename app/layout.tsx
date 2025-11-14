import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ClientLayout from './ClientLayout'

const inter = Inter({ subsets: ['latin'] })

// Primary keywords for Saanayo Electricals
const primaryKeywords = [
  'earthing electrodes',
  'copper bonded rods',
  'chemical earthing',
  'lightning arresters',
  'electrical panels',
  'surge protection devices',
  'gi earthing pipes',
  'grounding accessories',
  'electrical safety solutions',
  'earthing system manufacturer India',
  'lightning protection system',
  'electrical safety equipment',
  'industrial earthing solutions',
  'copper earthing rods',
  'electrical grounding system'
].join(', ')

export const metadata: Metadata = {
  title: {
    default: 'Saanayo Electricals Pvt Ltd | Premium Earthing & Electrical Safety Solutions',
    template: '%s | Saanayo Electricals'
  },
  description: 'Leading manufacturer of earthing electrodes, copper bonded rods, chemical earthing systems, lightning arresters, and electrical safety equipment in Faridabad, India. ISO certified quality.',
  keywords: primaryKeywords,
  authors: [{ name: 'Saanayo Electricals Pvt Ltd' }],
  creator: 'Saanayo Electricals Pvt Ltd',
  publisher: 'Saanayo Electricals Pvt Ltd',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://saanayoelectricals.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://saanayoelectricals.com',
    siteName: 'Saanayo Electricals Pvt Ltd',
    title: 'Saanayo Electricals | Premium Electrical Safety Solutions',
    description: 'Manufacturer of earthing electrodes, copper bonded rods, chemical earthing, lightning arresters in Faridabad, India.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Saanayo Electricals - Electrical Safety Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Saanayo Electricals | Electrical Safety Solutions',
    description: 'Premium earthing electrodes, copper bonded rods, and electrical safety equipment manufacturer.',
    images: ['/og-image.jpg'],
    creator: '@saanayoelectricals',
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
  verification: {
    // Add Google Search Console verification here
    // google: 'your-google-verification-code',
  },
  category: 'Industrial & Electrical Equipment',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ElectricalBusiness',
  name: 'Saanayo Electricals Pvt Ltd',
  image: 'https://saanayoelectricals.com/logo.png',
  description: 'Manufacturer and supplier of premium earthing electrodes, copper bonded rods, GI earthing pipes, chemical earthing systems, lightning arresters, electrical panels, surge protection devices and grounding accessories.',
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
    name: 'Electrical Safety Products',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: 'Earthing Electrodes'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: 'Copper Bonded Rods'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: 'Chemical Earthing Systems'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: 'Lightning Arresters'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: 'Electrical Panels'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: 'Surge Protection Devices'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: 'GI Earthing Pipes'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: 'Grounding Accessories'
        }
      }
    ]
  },
  sameAs: [
    // Add social media links here when available
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="canonical" href="https://saanayoelectricals.com" />
        <meta name="geo.region" content="IN-HR" />
        <meta name="geo.placename" content="Faridabad" />
        <meta name="geo.position" content="28.4069;77.3180" />
        <meta name="ICBM" content="28.4069, 77.3180" />
        <meta name="theme-color" content="#2563eb" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={inter.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}