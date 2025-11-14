import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Chemical Earthing Price 2024 | Complete Cost Guide & Installation',
  description: '✅ Chemical earthing price 2024: Complete cost breakdown for home, industry. Get actual prices for chemical earthing systems with installation.',
  keywords: 'chemical earthing price, chemical earthing cost, chemical earthing system price, chemical earthing electrode price, maintenance free earthing price',
}

export default function ChemicalEarthingPricePage() {
  return (
    <div className="pt-20">
      <section className="section-padding bg-gradient-to-br from-teal-600 to-blue-600 text-white">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Chemical Earthing Price 2024
          </h1>
          <p className="text-xl text-center mb-8 max-w-3xl mx-auto">
            ✅ Complete price guide for chemical earthing systems with actual installation costs
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          {/* Price Table */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
            <div className="bg-teal-600 text-white p-6">
              <h2 className="text-2xl font-bold">Chemical Earthing Price Breakdown</h2>
            </div>
            
            <div className="divide-y">
              {[
                { type: 'Residential (2-3 Story Building)', price: '₹3,500 - ₹6,000', includes: ['Copper electrode', '25kg backfill compound', 'Installation'] },
                { type: 'Commercial Building', price: '₹5,000 - ₹8,000', includes: ['Heavy-duty electrode', '35kg backfill', 'Professional installation'] },
                { type: 'Industrial Plant', price: '₹7,000 - ₹12,000', includes: ['Industrial electrode', '50kg backfill', 'Testing & certification'] },
                { type: 'High-Rise Building', price: '₹8,000 - ₹15,000', includes: ['Multiple electrodes', 'Advanced backfill', 'Complete system'] },
              ].map((item, index) => (
                <div key={index} className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-gray-900">{item.type}</h3>
                    <span className="text-teal-600 font-bold text-xl">{item.price}</span>
                  </div>
                  <ul className="space-y-1 text-gray-600">
                    {item.includes.map((include, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="text-green-500 mr-2">•</span>
                        {include}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-blue-50 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Factors Affecting Price</h3>
              <ul className="space-y-2 text-gray-700">
                {[
                  'Soil condition and resistivity',
                  'Electrode material (Copper/GI)',
                  'Backfill compound quantity',
                  'Installation depth required',
                  'Project location',
                  'Additional accessories needed',
                ].map((factor, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-500 mr-2">⚡</span>
                    {factor}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-green-50 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Choose Chemical Earthing?</h3>
              <ul className="space-y-2 text-gray-700">
                {[
                  'Maintenance-free operation',
                  '15+ years warranty',
                  'Stable resistance in all seasons',
                  'Suitable for all soil types',
                  'No watering required',
                  'Enhanced safety',
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Get Exact Pricing</h3>
              <p className="text-gray-700 mb-6">
                Contact us for exact chemical earthing price based on your specific requirements. We provide free site inspection and detailed quotation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+919667846784" className="bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors">
                  📞 Call for Quote
                </a>
                <Link href="/contact" className="border-2 border-teal-600 text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-teal-600 hover:text-white transition-colors">
                  📝 Get Free Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}