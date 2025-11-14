import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Gel Earthing Benefits: Advantages Over Traditional Earthing Systems',
  description: '✅ Complete guide to gel earthing benefits: Maintenance-free operation, superior performance, 20+ years lifespan. Why choose gel earthing over chemical earthing.',
  keywords: 'gel earthing benefits, advantages of gel earthing, gel earthing vs chemical earthing, maintenance free earthing, gel earthing system',
}

export default function GelEarthingBenefitsPage() {
  return (
    <div className="pt-20">
      <section className="section-padding bg-gradient-to-br from-purple-600 to-pink-600 text-white">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Gel Earthing Benefits
          </h1>
          <p className="text-xl text-center mb-8 max-w-3xl mx-auto">
            ✅ Discover why gel earthing is the superior choice for modern electrical safety
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-6xl">
          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: '🛡️',
                title: 'Maintenance-Free',
                description: 'No watering or maintenance required ever'
              },
              {
                icon: '⚡',
                title: 'Superior Conductivity',
                description: 'Advanced gel ensures consistent performance'
              },
              {
                icon: '🌧️',
                title: 'All Weather Performance',
                description: 'Works perfectly in dry and rainy seasons'
              },
              {
                icon: '⏳',
                title: '20+ Years Lifespan',
                description: 'Longest lasting earthing solution available'
              },
              {
                icon: '💰',
                title: 'Cost-Effective',
                description: 'Lower lifetime cost than traditional systems'
              },
              {
                icon: '🌱',
                title: 'Environment Friendly',
                description: 'Non-toxic and safe for soil and groundwater'
              },
            ].map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* Comparison Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Gel Earthing vs Traditional Earthing</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-purple-600 mb-4">Gel Earthing Advantages</h3>
                <ul className="space-y-3">
                  {[
                    'Zero maintenance required',
                    '20+ years operational life',
                    'Consistent performance in all soils',
                    'No soil dependency',
                    'Environmentally safe',
                    'Quick installation',
                  ].map((advantage, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <span>{advantage}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-600 mb-4">Traditional Earthing Limitations</h3>
                <ul className="space-y-3">
                  {[
                    'Regular maintenance needed',
                    '5-10 years lifespan',
                    'Performance varies with soil',
                    'Watering required in dry seasons',
                    'Soil contamination risk',
                    'Frequent replacements',
                  ].map((limitation, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-red-500 mr-2 mt-1">✗</span>
                      <span>{limitation}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Applications */}
          <div className="bg-purple-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Where to Use Gel Earthing?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Ideal Applications</h3>
                <ul className="space-y-2 text-gray-700">
                  {[
                    'High-rise residential buildings',
                    'Corporate offices and IT parks',
                    'Hospitals and healthcare facilities',
                    'Data centers and server rooms',
                    'Industrial plants and factories',
                    'Telecommunication towers',
                  ].map((application, index) => (
                    <li key={index} className="flex items-center">
                      <span className="text-purple-500 mr-2">•</span>
                      {application}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Soil Conditions</h3>
                <ul className="space-y-2 text-gray-700">
                  {[
                    'Rocky and dry soils',
                    'Sandy soil conditions',
                    'High resistivity areas',
                    'Water-scarce regions',
                    'All types of soil conditions',
                  ].map((condition, index) => (
                    <li key={index} className="flex items-center">
                      <span className="text-purple-500 mr-2">•</span>
                      {condition}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}