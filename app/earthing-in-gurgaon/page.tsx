import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Earthing Electrodes Supplier in Gurgaon | Chemical Earthing Systems',
  description: '✅ Premium earthing electrodes supplier in Gurgaon. Chemical earthing, gel earthing for DLF, Sohna Road, Cyber City. Free installation service.',
  keywords: 'earthing in gurgaon, earthing electrodes gurgaon, chemical earthing gurgaon, gel earthing gurgaon, earthing supplier gurgaon',
}

export default function EarthingGurgaonPage() {
  return (
    <div className="pt-20">
      <section className="section-padding bg-gradient-to-br from-green-600 to-green-800 text-white">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Earthing Solutions in Gurgaon
          </h1>
          <p className="text-xl text-center mb-8 max-w-3xl mx-auto">
            ✅ Premium earthing systems for Gurgaon's corporate offices, industries, and residential complexes
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Gurgaon Earthing Services</h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Corporate & IT Park Solutions</h3>
                    <p className="text-gray-600">Special earthing for Cyber City, DLF, Udyog Vihar</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">24x7 Emergency Service</h3>
                    <p className="text-gray-600">Quick response for Gurgaon industries</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Gurgaon Soil Specialists</h3>
                    <p className="text-gray-600">Expert solutions for local soil conditions</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">🏙️ Gurgaon Coverage Areas</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {['DLF Phase 1-5', 'Cyber City', 'Sohna Road', 'MG Road', 'Sector 14-57', 'Udyog Vihar', 'Manesar', 'Pataudi Road', 'All Corporate Parks'].map((area) => (
                    <div key={area} className="flex items-center">
                      <span className="text-green-500 mr-2">•</span>
                      {area}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Gurgaon Earthing Products</h3>
              <div className="space-y-4">
                {[
                  { name: 'Chemical Earthing for IT Parks', price: '₹4,000 - ₹10,000' },
                  { name: 'Gel Earthing Systems', price: '₹4,500 - ₹11,000' },
                  { name: 'Copper Bonded Rods', price: '₹900 - ₹3,000' },
                  { name: 'Surge Protection Devices', price: '₹1,500 - ₹8,000' },
                ].map((product, index) => (
                  <div key={index} className="flex justify-between items-center border-b pb-3">
                    <span className="font-semibold text-gray-900">{product.name}</span>
                    <span className="text-green-600 font-semibold">{product.price}</span>
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