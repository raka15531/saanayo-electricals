import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Earthing Electrode Supplier in Faridabad | Gel & Chemical Earthing Near Me',
  description: 'Top earthing electrode supplier in Faridabad. Gel earthing, chemical earthing, copper bonded rods at best prices. Free installation consultation near you.',
  keywords: 'earthing in faridabad, gel earthing faridabad, chemical earthing faridabad, earthing supplier near me, earthing electrode faridabad, copper bonded rod faridabad, railway road earthing, NIT faridabad earthing',
}

export default function FaridabadEarthingPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Earthing Electrode Supplier in Faridabad
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Premium gel earthing, chemical earthing systems & copper bonded rods in Railway Road, Faridabad. 
            Serving industrial and residential clients across Delhi NCR.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919667846784" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              📞 Call Now: +91 9667846784
            </a>
            <Link href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              🗺️ Get Free Site Visit
            </Link>
          </div>
        </div>
      </section>

      {/* Company Info Banner */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-6">
        <div className="container-custom text-center">
          <div className="grid md:grid-cols-4 gap-4 text-sm">
            <div className="flex items-center justify-center space-x-2">
              <span className="text-lg">🏢</span>
              <span>Private Limited Company</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <span className="text-lg">🛡️</span>
              <span>10 Years Warranty</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <span className="text-lg">⏳</span>
              <span>50+ Years Lifespan</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <span className="text-lg">📅</span>
              <span>Est. 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* Location Map */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Registered Office in Faridabad</h2>
              <div className="space-y-4 text-gray-600">
                <p className="text-lg">
                  <strong>Address:</strong><br />
                  Plot No. 5B/7, 2nd Floor, Railway Road<br />
                  NIT-5, Faridabad, Haryana – 121001<br />
                  India
                </p>
                <p>
                  <strong>Landmark:</strong> Near Railway Road, NIT Area
                </p>
                <p>
                  <strong>Service Areas:</strong> Faridabad, Delhi NCR, Gurgaon, Noida, Ghaziabad, Manesar
                </p>
                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="font-semibold text-blue-900 mb-2">🕒 Business Hours</h3>
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
                <div className="bg-green-50 rounded-xl p-6">
                  <h3 className="font-semibold text-green-900 mb-2">📞 Contact Info</h3>
                  <p>Phone: +91 9667846784</p>
                  <p>Email: saanayoelectricindustries@gmail.com</p>
                  <p>GSTIN: 06ABPCS0518J1Z5</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-100 rounded-2xl p-6">
              <div className="h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-4">📍</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Sanaayo Electric Industries</h3>
                  <p className="text-gray-600">Plot No. 5B/7, Railway Road, Faridabad</p>
                  <a 
                    href="https://maps.google.com/maps?q=28.37758887579035,77.31972237533266&z=17"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Premium Earthing Products Available in Faridabad
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Green Earth Electrodes',
                description: 'Advanced conductive concrete granule technology for superior earthing performance',
                features: ['50+ years lifespan', '10 years warranty', 'Maintenance-free', 'All soil types']
              },
              {
                title: 'Chemical Earthing Systems',
                description: 'Advanced chemical earthing systems for industrial and residential use',
                features: ['Stable resistance', 'Cost-effective', 'Easy installation', 'IS Standards']
              },
              {
                title: 'Copper Bonded Rods',
                description: 'Premium copper bonded earthing rods with 250-micron coating',
                features: ['Superior conductivity', 'Corrosion resistant', 'Long lifespan', 'Best performance']
              }
            ].map((product, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{product.title}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <ul className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Earthing Services in Faridabad
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '🔧',
                title: 'Installation',
                description: 'Professional earthing system installation'
              },
              {
                icon: '📊',
                title: 'Testing',
                description: 'Earth resistance testing & certification'
              },
              {
                icon: '🛠️',
                title: 'Maintenance',
                description: 'Regular maintenance & inspection'
              },
              {
                icon: '🎯',
                title: 'Consultation',
                description: 'Free technical consultation'
              }
            ].map((service, index) => (
              <div key={index} className="text-center p-6 bg-blue-50 rounded-2xl">
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Sanaayo Electric in Faridabad?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {[
                '10-year warranty on all products',
                '50+ years product lifespan guarantee',
                'Free site survey and consultation',
                'Professional installation team',
                'IS standard compliance',
                'After-sales support'
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Coverage Areas in Faridabad</h3>
              <div className="grid grid-cols-2 gap-3 text-sm">
                {[
                  'Sector 28', 'NIT Area', 'Sector 21', 'Sector 16', 
                  'Sector 12', 'Sector 7', 'Old Faridabad', 'Ballabgarh',
                  'Neharpar', 'Greater Faridabad', 'Industrial Area', 'All Sectors'
                ].map((area, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <span className="text-green-500">📍</span>
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-blue-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Need Earthing Solutions in Faridabad?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We provide free site inspection and consultation for all earthing projects in Faridabad and Delhi NCR.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919667846784" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              📞 Call for Free Consultation
            </a>
            <a 
              href="https://wa.me/919667846784?text=Hi, I need earthing solution in Faridabad. Please contact me."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
            >
              💬 WhatsApp Now
            </a>
            <Link href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              🗺️ Free Site Survey
            </Link>
          </div>
          <div className="mt-8 bg-blue-700 rounded-xl p-6 max-w-2xl mx-auto">
            <h3 className="font-semibold mb-2">🏢 Sanaayo Electric Industries Pvt Ltd</h3>
            <p className="text-blue-100 text-sm">
              CIN: U43219HR2025PTC127630 | GSTIN: 06ABPCS0518J1Z5<br />
              Registered Office: Plot No. 5B/7, Railway Road, NIT-5, Faridabad - 121001
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}