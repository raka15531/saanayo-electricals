import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Industrial Earthing Requirements: Complete Guide for Factories & Plants',
  description: '✅ Complete guide: Industrial earthing requirements for factories, manufacturing plants, industries. Standards, specifications, and compliance requirements.',
  keywords: 'industrial earthing requirements, factory earthing, plant earthing system, industrial electrical safety, earthing standards for industries',
}

export default function IndustrialEarthingRequirementsPage() {
  return (
    <div className="pt-20">
      <section className="section-padding bg-gradient-to-br from-red-600 to-orange-600 text-white">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Industrial Earthing Requirements
          </h1>
          <p className="text-xl text-center mb-8 max-w-3xl mx-auto">
            ✅ Complete guide to industrial earthing standards and specifications
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-6xl">
          {/* Standards & Compliance */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Industrial Earthing Standards</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-red-600 mb-4">Indian Standards (IS)</h3>
                <ul className="space-y-3">
                  {[
                    'IS 3043: Code of practice for earthing',
                    'IS 2309: Protection against lightning',
                    'IS 732: Code of practice for electrical wiring',
                    'IS 5216: Guide for safety in electrical testing',
                  ].map((standard, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-red-500 mr-2 mt-1">📋</span>
                      <span>{standard}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-red-600 mb-4">International Standards</h3>
                <ul className="space-y-3">
                  {[
                    'IEC 60364: Electrical installations',
                    'IEEE 80: Guide for safety in AC substations',
                    'NFPA 70: National Electrical Code',
                    'BS 7430: Code of practice for earthing',
                  ].map((standard, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-red-500 mr-2 mt-1">🌍</span>
                      <span>{standard}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Industrial Requirements */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-red-50 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Technical Requirements</h3>
              <ul className="space-y-3">
                {[
                  'Earth resistance: <1 ohm',
                  'Multiple electrode system',
                  'Regular testing & maintenance',
                  'Lightning protection integration',
                  'Surge protection devices',
                  'Ground fault protection',
                ].map((requirement, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">⚡</span>
                    <span>{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-orange-50 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Safety Requirements</h3>
              <ul className="space-y-3">
                {[
                  'Step & touch voltage protection',
                  'Equipment grounding',
                  'Personnel safety measures',
                  'Emergency shutdown systems',
                  'Regular safety audits',
                  'Documentation & records',
                ].map((requirement, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-orange-500 mr-2 mt-1">🛡️</span>
                    <span>{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Industry Specific Requirements */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Industry-Specific Requirements</h2>
            <div className="space-y-6">
              {[
                {
                  industry: 'Manufacturing Plants',
                  requirements: ['Heavy machinery grounding', 'Multiple earthing points', 'Regular resistance testing', 'Lightning protection']
                },
                {
                  industry: 'Chemical & Pharmaceutical',
                  requirements: ['Explosion-proof systems', 'Corrosion-resistant materials', 'Hazardous area classification', 'Emergency systems']
                },
                {
                  industry: 'Power Plants & Substations',
                  requirements: ['Grid earthing systems', 'Step potential control', 'Lightning protection towers', 'Regular compliance checks']
                },
                {
                  industry: 'IT Parks & Data Centers',
                  requirements: ['UPS system grounding', 'Server rack earthing', 'Surge protection', '24/7 monitoring']
                },
              ].map((item, index) => (
                <div key={index} className="border-b pb-6 last:border-0 last:pb-0">
                  <h3 className="text-xl font-semibold text-red-600 mb-3">{item.industry}</h3>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {item.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-center text-gray-700">
                        <span className="text-red-500 mr-2">•</span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Services */}
          <div className="text-center">
            <div className="bg-red-50 border border-red-200 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Industrial Earthing Solutions</h3>
              <p className="text-gray-700 mb-6">
                We provide complete industrial earthing solutions including design, installation, testing, and certification as per international standards.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+919667846784" className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                  📞 Industrial Solutions
                </a>
                <Link href="/contact" className="border-2 border-red-600 text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-colors">
                  🏭 Site Assessment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}