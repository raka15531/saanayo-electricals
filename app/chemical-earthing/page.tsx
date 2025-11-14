import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Chemical Earthing System Price | Maintenance Free Earthing Manufacturer',
  description: 'Best chemical earthing system price in India. Maintenance-free chemical earthing electrodes for home & industry. 15+ years warranty. Get free consultation.',
  keywords: 'chemical earthing, chemical earthing price, maintenance free earthing, chemical earthing electrode, gel earthing vs chemical earthing, chemical earthing installation',
}

export default function ChemicalEarthingPage() {
  return (
    <div className="pt-20">
      <section className="section-padding bg-gradient-to-br from-primary-50 to-blue-100">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Chemical Earthing Systems
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Maintenance-free chemical earthing solutions with 15+ years warranty. 
              Perfect for all soil conditions including rocky and dry areas.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What is Chemical Earthing?
              </h2>
              <p className="text-gray-600 mb-6">
                Chemical earthing is an advanced grounding system that uses special conductive compounds 
                to maintain low soil resistance. The chemical compound absorbs atmospheric moisture and 
                retains it, ensuring consistent conductivity in all weather conditions.
              </p>
              
              <div className="space-y-4 mb-8">
                <h3 className="text-2xl font-semibold text-gray-900">Key Benefits:</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>✅ Maintenance-free operation</li>
                  <li>✅ Stable ground resistance (&lt;1 Ohm)</li>
                  <li>✅ Suitable for all soil types</li>
                  <li>✅ Long service life (15+ years)</li>
                  <li>✅ No watering required</li>
                  <li>✅ Enhanced safety for sensitive equipment</li>
                </ul>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Chemical Earthing Price</h3>
                <p className="text-gray-600 mb-4">
                  Competitive pricing starting from ₹3,500 per system. Bulk discounts available for 
                  industrial projects. Contact for exact pricing based on your requirements.
                </p>
                <Link href="/contact" className="btn-primary">
                  Get Exact Pricing
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Specifications</h3>
              <div className="space-y-4">
                <div className="flex justify-between border-b pb-2">
                  <span className="font-semibold">Electrode Material</span>
                  <span>Copper / GI</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-semibold">Backfill Compound</span>
                  <span>Special conductive mixture</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-semibold">Resistance Value</span>
                  <span>&lt; 1 Ohm</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-semibold">System Life</span>
                  <span>15+ years</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-semibold">Installation Depth</span>
                  <span>3-4 meters</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Maintenance</span>
                  <span>Zero maintenance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}