'use client'

import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, Instagram, Twitter, Facebook } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const handleCall = (phoneNumber: string) => {
    window.open(`tel:${phoneNumber}`, '_self')
  }

  const handleWhatsApp = () => {
    const message = "Hi, I'm interested in your electrical safety products. Please provide more information."
    window.open(`https://wa.me/919667846784?text=${encodeURIComponent(message)}`, '_blank')
  }

  const handleEmail = (email: string) => {
    window.open(`mailto:${email}`, '_self')
  }

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">SE</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Saanayo Electricals</h3>
                  <p className="text-gray-300">Powering Safety. Grounding Reliability.</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Leading manufacturer and supplier of premium earthing and electrical safety solutions 
                in Faridabad, India. Trusted by industries and homes nationwide.
              </p>
              
              {/* Social Media Links */}
              <div className="flex space-x-4 mb-6">
                <a
                  href="https://www.instagram.com/kasakuelectricalspvtltd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-pink-600 text-white p-2 rounded-lg transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://x.com/KasakuPvt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-blue-400 text-white p-2 rounded-lg transition-colors duration-300"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="https://www.facebook.com/people/Kasaku-Electricals-Pvt-Ltd/100086154097375/"
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
                  'Earthing Electrodes',
                  'Copper Bonded Rods',
                  'GI Earthing Pipes',
                  'Chemical Earthing',
                  'Lightning Arresters',
                  'Electrical Panels',
                  'Surge Protection',
                  'Grounding Accessories'
                ].map((product) => (
                  <li key={product}>
                    <Link 
                      href="/products" 
                      className="hover:text-primary-400 transition-colors"
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
                  <MapPin className="w-5 h-5 mt-0.5 text-primary-400" />
                  <div>
                    <a 
                      href="https://maps.app.goo.gl/fSXcH9JaTYWkbDdY7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors cursor-pointer block"
                    >
                      <p>SCF-112, Sector 28</p>
                      <p>Faridabad, Haryana - 121002</p>
                      <p>India</p>
                      <p className="text-blue-400 text-sm mt-1 flex items-center space-x-1">
                        <span>📍</span>
                        <span>View on Google Maps</span>
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
                      <p>+91 9667846784</p>
                      <p>+91 7838756681</p>
                      <p>+91 8010628458</p>
                    </div>
                  </button>
                </div>
                
                <div className="space-y-2">
                  <button 
                    onClick={() => handleEmail('saanayoelectricindustries@gmail.com')}
                    className="flex items-center space-x-3 hover:text-white transition-colors cursor-pointer w-full text-left"
                  >
                    <Mail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                    <span>saanayoelectricindustries@gmail.com</span>
                  </button>
                  <button 
                    onClick={() => handleEmail('support@kasakuelectricals.com')}
                    className="flex items-center space-x-3 hover:text-white transition-colors cursor-pointer w-full text-left"
                  >
                    <Mail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                    <span>support@kasakuelectricals.com</span>
                  </button>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-primary-400" />
                  <div>
                    <p>Mon-Fri: 9:00 AM - 6:00 PM</p>
                    <p>Sat: 9:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Saanayo Electricals Pvt Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}