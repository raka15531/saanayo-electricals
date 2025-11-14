import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Complete Guide to Earthing System Installation | Types, Standards & Procedure',
  description: 'Complete guide to earthing system installation. Learn about types of earthing, IS 3043 standards, installation procedure, and maintenance tips.',
}

export default function EarthingGuide() {
  return (
    <div className="pt-20">
      <article className="container-custom max-w-4xl py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Complete Guide to Earthing System Installation
        </h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 mb-8">
            Learn everything about earthing system installation, types of earthing electrodes, 
            IS 3043 standards, and best practices for electrical safety.
          </p>
          
          <h2>Types of Earthing Systems</h2>
          <p>There are several types of earthing systems used in electrical installations...</p>
          
          <h2>Earthing Electrodes Specifications</h2>
          <p>As per IS 3043 standards, earthing electrodes must meet specific requirements...</p>
          
          <h2>Installation Procedure</h2>
          <p>Step-by-step guide to proper earthing system installation...</p>
        </div>
      </article>
    </div>
  )
}