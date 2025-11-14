import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Earthing Electrodes Supplier in Delhi | Chemical Earthing Systems',
  description: '✅ Top earthing electrodes supplier in Delhi. Chemical earthing, gel earthing for all Delhi areas. Free installation consultation.',
  keywords: 'earthing in delhi, earthing electrodes delhi, chemical earthing delhi, gel earthing delhi, earthing supplier delhi',
}

export default function EarthingDelhiPage() {
  return (
    <div className="pt-20">
      <section className="section-padding bg-gradient-to-br from-purple-600 to-purple-800 text-white">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Earthing Solutions in Delhi
          </h1>
          <p className="text-xl text-center mb-8 max-w-3xl mx-auto">
            ✅ Premium earthing systems for Delhi homes, industries, and commercial establishments
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Delhi Earthing Services</h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">All Delhi Areas Covered</h3>
                    <p className="text-gray-600">South Delhi, North Delhi, West Delhi, East Delhi</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Same Day Installation</h3>
                    <p className="text-gray-600">Quick service across Delhi NCR</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Delhi MCD Approved</h3>
                    <p className="text-gray-600">All installations meet Delhi government standards</p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">🏛️ Delhi Coverage Areas</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {['South Delhi', 'North Delhi', 'West Delhi', 'East Delhi', 'Central Delhi', 'New Delhi', 'Dwarka', 'Rohini', 'All Industrial Areas'].map((area) => (
                    <div key={area} className="flex items-center">
                      <span className="text-purple-500 mr-2">•</span>
                      {area}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Delhi Earthing Products</h3>
              <div className="space-y-4">
                {[
                  { name: 'Chemical Earthing System', price: '₹3,500 - ₹8,000' },
                  { name: 'Gel Earthing for Homes', price: '₹4,000 - ₹9,000' },
                  { name: 'Copper Bonded Rods', price: '₹800 - ₹2,500' },
                  { name: 'Lightning Protection', price: '₹1,200 - ₹5,000' },
                ].map((product, index) => (
                  <div key={index} className="flex justify-between items-center border-b pb-3">
                    <span className="font-semibold text-gray-900">{product.name}</span>
                    <span className="text-purple-600 font-semibold">{product.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}