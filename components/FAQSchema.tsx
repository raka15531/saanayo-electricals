'use client'

import { useEffect } from 'react'

const faqData = [
  {
    question: "What types of earthing electrodes do you manufacture?",
    answer: "We manufacture copper earthing electrodes, GI earthing electrodes, and chemical earthing electrodes for various industrial and residential applications."
  },
  {
    question: "Are your copper bonded rods corrosion resistant?",
    answer: "Yes, our copper bonded rods feature 250-micron copper coating that provides excellent corrosion resistance and long-lasting performance."
  },
  {
    question: "Do you provide lightning protection systems?",
    answer: "Yes, we manufacture and supply complete lightning protection systems including lightning arresters, conductors, and grounding equipment."
  },
  {
    question: "What is the delivery time for electrical safety products?",
    answer: "Standard products are delivered within 7-10 days across India. Custom solutions may take 2-3 weeks depending on requirements."
  },
  {
    question: "Do you offer installation services for earthing systems?",
    answer: "We provide technical guidance and support for installation. For complex projects, we can recommend certified installation partners."
  }
]

export default function FAQSchema() {
  useEffect(() => {
    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqData.map(faq => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer
        }
      }))
    }

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(faqSchema)
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return null
}