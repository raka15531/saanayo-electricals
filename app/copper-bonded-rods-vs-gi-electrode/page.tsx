import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Copper Bonded Rods vs GI Electrodes: Which is Better? 2024 Guide',
  description: '✅ Complete comparison: Copper bonded rods vs GI earthing electrodes. Pros, cons, prices, lifespan, and which to choose for your project.',
  keywords: 'copper bonded rods vs gi electrodes, gi earthing electrodes, copper bonded rods, earthing electrode comparison, which earthing is better',
}

export default function CopperVsGIPage() {
  return (
    <div className="pt-20">
      <section className="section-padding bg-gradient-to-br from-orange-500 to-red-600 text-white">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Copper Bonded Rods vs GI Electrodes
          </h1>
          <p className="text-xl text-center mb-8 max-w-3xl mx-auto">
            ✅ Complete 2024 comparison guide to help you choose the right earthing solution
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-6xl">
          {/* Comparison Table */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 border-b">
              <div className="bg-gray-50 p-6 font-semibold">Feature</div>
              <div className="bg-blue-50 p-6 font-semibold text-blue-900">Copper Bonded Rods</div>
              <div className="bg-gray-100 p-6 font-semibold text-gray-900">GI Electrodes</div>
            </div>
            
            {[
              { feature: 'Material', copper: 'Steel core with 250µ copper coating', gi: 'Galvanized Iron' },
              { feature: 'Lifespan', copper: '15+ years', gi: '8-10 years' },
              { feature: 'Conductivity', copper: 'Excellent (99.9% pure copper)', gi: 'Good' },
              { feature: 'Corrosion Resistance', copper: 'Superior', gi: 'Good' },
              { feature: 'Price Range', copper: '₹800 - ₹2,500', gi: '₹450 - ₹1,200' },
              { feature: 'Maintenance', copper: 'Low', gi: 'Moderate' },
              { feature: 'Best For', copper: 'Critical applications, industries', gi: 'Budget projects, temporary setups' },
            ].map((row, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-3 border-b last:border-0">
                <div className="p-6 bg-gray-50 font-medium">{row.feature}</div>
                <div className="p-6 bg-blue-50">{row.copper}</div>
                <div className="p-6 bg-gray-100">{row.gi}</div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">When to Choose Copper Bonded Rods?</h2>
              <div className="space-y-4">
                {[
                  'Industrial plants and factories',
                  'Critical power installations',
                  'Telecommunication towers',
                  'Data centers and IT parks',
                  'Hospital buildings',
                  'Long-term projects (15+ years)',
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <span className="text-green-500 text-xl mt-1">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">When to Choose GI Electrodes?</h2>
              <div className="space-y-4">
                {[
                  'Budget-conscious projects',
                  'Temporary installations',
                  'Small residential buildings',
                  'Short-term requirements',
                  'Non-critical applications',
                  'Rural electrification',
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <span className="text-blue-500 text-xl mt-1">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 bg-yellow-50 border border-yellow-200 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Still Confused? Get Expert Advice</h3>
            <p className="text-gray-700 mb-6">
              Our technical experts can visit your site and recommend the best earthing solution based on your specific requirements, soil conditions, and budget.
            </p>
            <Link href="/contact" className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
              🎯 Get Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}