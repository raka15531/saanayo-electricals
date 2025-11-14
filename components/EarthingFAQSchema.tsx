import Script from 'next/script'

export default function EarthingFAQSchema() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the difference between chemical earthing and gel earthing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Chemical earthing uses conductive compounds while gel earthing uses advanced conductive gel. Both are maintenance-free but gel earthing offers better performance in extremely dry conditions."
        }
      },
      {
        "@type": "Question",
        "name": "What is the price of chemical earthing system?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Chemical earthing system price starts from ₹3,500 depending on the specifications and project requirements. Contact us for exact pricing."
        }
      },
      {
        "@type": "Question",
        "name": "Which earthing is best for home use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For homes, we recommend chemical earthing or gel earthing as they are maintenance-free and provide stable performance in all weather conditions."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide earthing installation service in Faridabad?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide complete earthing installation services in Faridabad and surrounding areas with professional technicians and quality assurance."
        }
      }
    ]
  }

  return (
    <Script
      id="earthing-faq-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  )
}