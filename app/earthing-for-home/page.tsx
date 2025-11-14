import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Earthing for Home: Complete Guide for House Earthing System 2024',
  description: '✅ Complete guide: Earthing for home - Which earthing system to choose, costs, benefits, and installation process for residential buildings.',
  keywords: 'earthing for home, house earthing system, residential earthing, home earthing cost, which earthing is best for home',
}

export default function EarthingForHomePage() {
  return (
    <div className="pt-20">
      <section className="section-padding bg-gradient-to-br from-green-600 to-teal-600 text-white">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Earthing for Home
          </h1>
          <p className="text-xl text-center mb-8 max-w-3xl mx-auto">
            ✅ Complete guide to choosing and installing the right earthing system for your home
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-6xl">
          {/* Why Home Earthing is Important */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Your Home Needs Proper Earthing?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-green-600 mb-4">Safety Benefits</h3>
                <ul className="space-y-3">
                  {[
                    'Protects from electric shocks',
                    'Prevents electrical fires',
                    'Safeguards expensive appliances',
                    'Lightning protection',
                    'Voltage surge protection',
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">🛡️</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-green-600 mb-4">Practical Benefits</h3>
                <ul className="space-y-3">
                  {[
                    'Stable voltage supply',
                    'Reduces electricity bills',
                    'Longer appliance life',
                    'Compliance with building codes',
                    'Increased property value',
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">💰</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Home Earthing Options */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: 'Chemical Earthing',
                price: '₹3,500 - ₹6,000',
                bestFor: 'Modern homes, long-term use',
                features: ['Maintenance-free', '15+ years life', 'All soil types'],
                recommended: true
              },
              {
                title: 'Gel Earthing',
                price: '₹4,000 - ₹7,000',
                bestFor: 'Premium homes, dry areas',
                features: ['Zero maintenance', '20+ years life', 'Superior performance'],
                recommended: true
              },
              {
                title: 'Pipe Earthing',
                price: '₹2,000 - ₹4,000',
                bestFor: 'Budget homes, temporary',
                features: ['Traditional method', '5-8 years life', 'Regular maintenance'],
                recommended: false
              },
            ].map((option, index) => (
              <div key={index} className={`bg-white rounded-2xl shadow-lg p-6 border-2 ${option.recommended ? 'border-green-500' : 'border-gray-200'}`}>
                {option.recommended && (
                  <div className="bg-green-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                    ✅ RECOMMENDED
                  </div>
                )}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{option.title}</h3>
                <div className="text-2xl font-bold text-green-600 mb-4">{option.price}</div>
                <div className="mb-4">
                  <span className="font-semibold text-gray-700">Best for:</span>
                  <p className="text-gray-600">{option.bestFor}</p>
                </div>
                <ul className="space-y-2 mb-6">
                  {option.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="block w-full bg-green-600 text-white text-center py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                  Get Quote
                </Link>
              </div>
            ))}
          </div>

          {/* Home Size Guide */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Which Earthing for Your Home Size?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Small Home (1-2 BHK)</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Chemical Earthing: ₹3,500 - ₹4,500</li>
                  <li>• Single electrode sufficient</li>
                  <li>• Quick installation (2-3 hours)</li>
                  <li>• Ideal for apartments</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Large Home (3+ BHK/Villa)</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Gel Earthing: ₹5,000 - ₹7,000</li>
                  <li>• Multiple electrodes recommended</li>
                  <li>• Comprehensive protection</li>
                  <li>• Best for independent houses</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-green-50 border border-green-200 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Get Free Home Earthing Consultation</h3>
              <p className="text-gray-700 mb-6">
                Our experts will visit your home, assess your requirements, and recommend the perfect earthing solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+919667846784" className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                  📞 Call Home Expert
                </a>
                <Link href="/contact" className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-colors">
                  🏠 Home Visit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}