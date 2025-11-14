import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Earthing Electrodes Supplier in Noida | Chemical & Gel Earthing Systems',
  description: '✅ Top earthing electrodes supplier in Noida. Chemical earthing, gel earthing, copper bonded rods with free installation. Serving Sector 62, 63, 125, 135 and all Noida areas.',
  keywords: 'earthing in noida, earthing electrodes noida, chemical earthing noida, gel earthing noida, earthing supplier noida, copper bonded rods noida',
}

export default function EarthingNoidaPage() {
  return (
    <div className="pt-20">
      <section className="section-padding bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Earthing Electrodes Supplier in Noida
          </h1>
          <p className="text-xl text-center mb-8 max-w-3xl mx-auto">
            ✅ Premium chemical earthing & gel earthing systems in Noida. Free site inspection & installation services across all sectors.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Earthing Solutions for Noida</h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Serving All Noida Sectors</h3>
                    <p className="text-gray-600">Sector 62, 63, 125, 135, 142, 144 and all industrial areas</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Same Day Service</h3>
                    <p className="text-gray-600">Quick installation and emergency services in Noida</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Noida Soil Expertise</h3>
                    <p className="text-gray-600">Special solutions for Noida's soil conditions</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">🏢 Noida Service Areas</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {['Sector 62', 'Sector 63', 'Sector 125', 'Sector 135', 'Sector 142', 'Sector 144', 'Noida Phase 1', 'Noida Phase 2', 'All Industrial Areas'].map((area) => (
                    <div key={area} className="flex items-center">
                      <span className="text-green-500 mr-2">•</span>
                      {area}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Earthing Products in Noida</h3>
              <div className="space-y-4">
                {[
                  { name: 'Chemical Earthing System', price: '₹3,500 - ₹8,000' },
                  { name: 'Gel Earthing Electrodes', price: '₹4,000 - ₹9,000' },
                  { name: 'Copper Bonded Rods', price: '₹800 - ₹2,500' },
                  { name: 'Lightning Arresters', price: '₹1,200 - ₹5,000' },
                ].map((product, index) => (
                  <div key={index} className="flex justify-between items-center border-b pb-3">
                    <span className="font-semibold text-gray-900">{product.name}</span>
                    <span className="text-blue-600 font-semibold">{product.price}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                <p className="text-sm text-yellow-800">
                  💰 <strong>Special Discount:</strong> 10% off for Noida residents and industries
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Need Earthing in Noida?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Get free site inspection and consultation for your Noida property
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919667846784" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              📞 Call Noida Team
            </a>
            <Link href="/contact" className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
              🗺️ Free Site Visit
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}