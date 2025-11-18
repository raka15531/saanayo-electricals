'use client'

import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, Instagram, Twitter, Facebook, Shield, Calendar } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const handleCall = (phoneNumber: string) => {
    window.open(`tel:${phoneNumber}`, '_self')
  }

  const handleWhatsApp = () => {
    const message = "Hi, I'm interested in Sanaayo Electric's earthing solutions. Please provide more information."
    window.open(`https://wa.me/919667846784?text=${encodeURIComponent(message)}`, '_blank')
  }

  const handleEmail = (email: string) => {
    window.open(`mailto:${email}`, '_self')
  }

  return (
    <footer className="bg-gray-900 text-white">
      {/* Company Credentials Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-green-600 py-4">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
            <div className="flex items-center justify-center space-x-2">
              <Shield className="w-4 h-4" />
              <span>10 Years Warranty</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>50+ Years Lifespan</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <span className="text-lg">🏢</span>
              <span>Private Limited</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <span className="text-lg">📅</span>
              <span>Est. 2025</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">SEI</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Sanaayo Electric Industries</h3>
                  <p className="text-gray-300">Powering Safety. Grounding Reliability.</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Leading manufacturer and supplier of premium green earth electrode systems 
                with conductive concrete technology. Trusted by industries and homes across India.
              </p>
              
              {/* Company Credentials */}
              <div className="bg-gray-800 rounded-lg p-4 mb-6">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-400">CIN</p>
                    <p className="text-white">U43219HR2025PTC127630</p>
                  </div>
                  <div>
                    <p className="text-gray-400">GSTIN</p>
                    <p className="text-white">06ABPCS0518J1Z5</p>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="flex space-x-4 mb-6">
                <a
                  href="https://www.instagram.com/sanaayoelectric/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-pink-600 text-white p-2 rounded-lg transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://x.com/sanaayoelectric"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-blue-400 text-white p-2 rounded-lg transition-colors duration-300"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="https://www.facebook.com/sanaayoelectric/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-blue-600 text-white p-2 rounded-lg transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                
                {/* WhatsApp Button in Footer */}
                <button
                  onClick={handleWhatsApp}
                  className="bg-gray-800 hover:bg-green-600 text-white p-2 rounded-lg transition-colors duration-300 cursor-pointer"
                  aria-label="WhatsApp"
                >
                  <span className="text-lg">💬</span>
                </button>
              </div>

              <div className="flex items-center space-x-4 text-gray-300">
                <button 
                  onClick={() => handleCall('+919667846784')}
                  className="flex items-center space-x-2 hover:text-white transition-colors cursor-pointer"
                >
                  <Phone className="w-4 h-4" />
                  <span>+91 9667846784</span>
                </button>
                <button 
                  onClick={() => handleEmail('saanayoelectricindustries@gmail.com')}
                  className="flex items-center space-x-2 hover:text-white transition-colors cursor-pointer"
                >
                  <Mail className="w-4 h-4" />
                  <span>saanayoelectricindustries@gmail.com</span>
                </button>
              </div>
            </div>

            {/* Products */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Our Products</h4>
              <ul className="space-y-3 text-gray-300">
                {[
                  'Green Earth Electrodes',
                  'Chemical Earthing Systems',
                  'Copper Bonded Rods',
                  'GI Earthing Electrodes',
                  'Maintenance-Free Earthing',
                  'Lightning Protection',
                  'Surge Protection Devices',
                  'Earthing Accessories'
                ].map((product) => (
                  <li key={product}>
                    <Link 
                      href="/products" 
                      className="hover:text-primary-400 transition-colors block py-1"
                    >
                      {product}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Support */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 mt-0.5 text-primary-400 flex-shrink-0" />
                  <div>
                    <a 
                      href="https://maps.google.com/maps?q=28.37758887579035,77.31972237533266&z=17"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors cursor-pointer block"
                    >
                      <p>Plot No. 5B/7, 2nd Floor</p>
                      <p>Railway Road, NIT-5</p>
                      <p>Faridabad, Haryana - 121001</p>
                      <p>India</p>
                      <p className="text-blue-400 text-sm mt-1 flex items-center space-x-1">
                        <span>📍</span>
                        <span>Get Directions</span>
                      </p>
                    </a>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <button 
                    onClick={() => handleCall('+919667846784')}
                    className="flex items-center space-x-3 hover:text-white transition-colors cursor-pointer w-full text-left"
                  >
                    <Phone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">+91 9667846784</p>
                      <p className="text-sm text-gray-400">Primary Contact</p>
                    </div>
                  </button>
                </div>
                
                <div className="space-y-2">
                  <button 
                    onClick={() => handleEmail('saanayoelectricindustries@gmail.com')}
                    className="flex items-center space-x-3 hover:text-white transition-colors cursor-pointer w-full text-left"
                  >
                    <Mail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                    <div>
                      <span>saanayoelectricindustries@gmail.com</span>
                      <p className="text-sm text-gray-400">Primary Email</p>
                    </div>
                  </button>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 9:00 AM - 4:00 PM</p>
                    <p className="text-sm text-gray-400">Sunday: Closed</p>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="pt-4 space-y-2">
                  <button
                    onClick={handleWhatsApp}
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
                  >
                    <span>💬</span>
                    <span>Chat on WhatsApp</span>
                  </button>
                  <button
                    onClick={() => handleCall('+919667846784')}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
                  >
                    <span>📞</span>
                    <span>Call Now</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Quick Links */}
      <div className="border-t border-gray-800 py-8">
        <div className="container-custom">
          <h4 className="text-lg font-semibold mb-6 text-center">Our Services</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { name: 'Earthing Installation', icon: '🔧' },
              { name: 'Site Survey', icon: '📊' },
              { name: 'Testing & Certification', icon: '✅' },
              { name: 'Maintenance', icon: '🛠️' }
            ].map((service, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors">
                <div className="text-2xl mb-2">{service.icon}</div>
                <p className="text-sm font-medium">{service.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © {currentYear} Sanaayo Electric Industries Pvt Ltd. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                CIN: U43219HR2025PTC127630 | GSTIN: 06ABPCS0518J1Z5
              </p>
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}