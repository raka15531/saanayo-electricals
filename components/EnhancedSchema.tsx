import Script from 'next/script'

export default function EnhancedSchema() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ElectricalSupplyStore",
    "name": "Saanayo Electricals Pvt Ltd",
    "description": "Premium earthing electrodes manufacturer and supplier in Faridabad",
    "url": "https://saanayoelectricals.com",
    "telephone": "+919667846784",
    "email": "saanayoelectricindustries@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "SCF-112, Sector 28",
      "addressLocality": "Faridabad",
      "addressRegion": "Haryana",
      "postalCode": "121002",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "28.40689987576518",
      "longitude": "77.3154119753337"
    },
    "openingHours": [
      "Mo-Fr 09:00-18:00",
      "Sa 09:00-16:00"
    ],
    "priceRange": "₹₹",
    "areaServed": ["Faridabad", "Delhi", "Gurgaon", "Noida", "Ghaziabad"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Earthing Products",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Chemical Earthing System"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Gel Earthing System"
          }
        }
      ]
    }
  }

  return (
    <Script
      id="enhanced-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
    />
  )
}