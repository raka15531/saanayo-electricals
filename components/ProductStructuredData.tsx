'use client'

import { useEffect } from 'react'

interface Product {
  name: string
  description: string
  image: string
  features: string[]
  specs: string[]
}

interface ProductStructuredDataProps {
  product: Product
}

export default function ProductStructuredData({ product }: ProductStructuredDataProps) {
  useEffect(() => {
    const productSchema = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: product.name,
      description: product.description,
      image: `https://sanaayoelectricals.in${product.image}`,
      brand: {
        '@type': 'Brand',
        name: 'Saanayo Electricals'
      },
      offers: {
        '@type': 'Offer',
        url: `https://sanaayoelectricals.in/products`,
        priceCurrency: 'INR',
        availability: 'https://schema.org/InStock'
      },
      manufacturer: {
        '@type': 'Organization',
        name: 'Saanayo Electricals Pvt Ltd',
        url: 'https://sanaayoelectricals.in'
      }
    }

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(productSchema)
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [product])

  return null
}