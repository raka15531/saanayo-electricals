import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Earthing Electrodes Manufacturer | GI & Copper Earthing Electrodes India',
  description: 'Premium earthing electrodes manufacturer in Faridabad. GI earthing electrodes, copper bonded rods, chemical earthing systems. Get best prices +91 9667846784',
  keywords: 'earthing electrodes, gi earthing electrodes, copper earthing electrodes, earthing rods, grounding electrodes, earthing electrode price',
}

export default function EarthingElectrodes() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Earthing Electrodes Manufacturer
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Premium Quality GI & Copper Earthing Electrodes for Industrial, Commercial & Residential Applications
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding">
        <div className="container-custom max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Premium Earthing Electrodes for Maximum Safety
              </h2>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-6">
                  <strong>Saanayo Electricals</strong> is a leading manufacturer of high-quality earthing electrodes in India. 
                  Our earthing electrodes are designed to provide reliable grounding solutions for various electrical systems.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">Types of Earthing Electrodes:</h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span><strong>GI Earthing Electrodes</strong> - Galvanized Iron electrodes for general applications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span><strong>Copper Bonded Electrodes</strong> - 250-micron copper coating for superior conductivity</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span><strong>Chemical Earthing Electrodes</strong> - Maintenance-free systems for all soil conditions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span><strong>Copper Earthing Electrodes</strong> - Pure copper electrodes for critical applications</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">Applications:</h3>
                <div className="grid grid-cols-2 gap-2 mb-8">
                  {[
                    'Industrial Plants', 'Commercial Buildings', 'Residential Complexes',
                    'Power Substations', 'Telecom Towers', 'Hospital Buildings',
                    'Data Centers', 'Lightning Protection', 'Railway Systems',
                    'Solar Power Plants'
                  ].map((app, index) => (
                    <div key={index} className="flex items-center">
                      <span className="text-blue-500 mr-2">•</span>
                      <span className="text-gray-700">{app}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Inquiry</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                  <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input type="tel" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Requirements</label>
                  <textarea rows={4} className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"></textarea>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors">
                  Get Earthing Electrodes Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Technical Specifications
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'GI Earthing Electrodes',
                specs: ['Material: Galvanized Iron', 'Diameter: 16mm - 40mm', 'Length: 1.5m - 3m', 'Coating: Hot-dip galvanized', 'Standards: IS 3043']
              },
              {
                title: 'Copper Bonded Electrodes',
                specs: ['Core: High-tensile steel', 'Coating: 250 microns', 'Diameter: 14mm - 25mm', 'Conductivity: 99.9%', 'Standards: UL 467']
              },
              {
                title: 'Chemical Earthing',
                specs: ['Electrode: Copper/GI', 'Backfill: Conductive compound', 'Resistance: < 1 ohm', 'Life: 15+ years', 'Maintenance: Free']
              }
            ].map((type, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{type.title}</h3>
                <ul className="space-y-2">
                  {type.specs.map((spec, idx) => (
                    <li key={idx} className="text-gray-700 border-b border-gray-100 pb-2 last:border-0">
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}