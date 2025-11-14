'use client'

import Link from 'next/link'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

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
              <div className="flex items-center space-x-4 text-gray-300">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+91 9667846784</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>saanayoelectricindustries@gmail.com</span>
                </div>
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
                    <p>SCF-112, Sector 28</p>
                    <p>Faridabad, Haryana - 121002</p>
                    <p>India</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary-400" />
                  <span>+91 9667846784</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary-400" />
                  <span>saanayoelectricindustries@gmail.com</span>
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