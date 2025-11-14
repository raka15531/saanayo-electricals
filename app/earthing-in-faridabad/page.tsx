import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Earthing Electrode Supplier in Faridabad | Gel & Chemical Earthing Near Me',
  description: 'Top earthing electrode supplier in Faridabad Sector 28. Gel earthing, chemical earthing, copper bonded rods at best prices. Free installation consultation near you.',
  keywords: 'earthing in faridabad, gel earthing faridabad, chemical earthing faridabad, earthing supplier near me, earthing electrode faridabad sector 28, copper bonded rod faridabad',
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
            Premium gel earthing, chemical earthing systems & copper bonded rods in Sector 28, Faridabad. 
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

      {/* Location Map */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Location in Faridabad</h2>
              <div className="space-y-4 text-gray-600">
                <p className="text-lg">
                  <strong>Address:</strong><br />
                  SCF-112, Sector 28<br />
                  Faridabad, Haryana - 121002<br />
                  India
                </p>
                <p>
                  <strong>Landmark:</strong> Near Sector 28 Market, Opposite Petrol Pump
                </p>
                <p>
                  <strong>Service Areas:</strong> Faridabad, Delhi NCR, Gurgaon, Noida, Ghaziabad
                </p>
                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="font-semibold text-blue-900 mb-2">🕒 Business Hours</h3>
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-100 rounded-2xl p-6">
              <div className="h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-4">📍</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Saanayo Electricals</h3>
                  <p className="text-gray-600">SCF-112, Sector 28, Faridabad</p>
                  <a 
                    href="https://maps.app.goo.gl/fSXcH9JaTYWkbDdY7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Open in Google Maps
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
            Earthing Products Available in Faridabad
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Gel Earthing Systems',
                description: 'Maintenance-free gel earthing electrodes perfect for Faridabad soil conditions',
                features: ['15+ years warranty', 'No maintenance', 'All soil types']
              },
              {
                title: 'Chemical Earthing',
                description: 'Advanced chemical earthing systems for industrial and residential use',
                features: ['Stable resistance', 'Cost-effective', 'Easy installation']
              },
              {
                title: 'Copper Bonded Rods',
                description: 'Premium copper bonded earthing rods with 250-micron coating',
                features: ['Superior conductivity', 'Corrosion resistant', 'Long lifespan']
              }
            ].map((product, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
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
          </div>
        </div>
      </section>
    </div>
  )
}