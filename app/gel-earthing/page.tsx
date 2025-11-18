'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { CheckCircle, Shield, Zap, Download, ArrowRight, Star, Droplets } from 'lucide-react'
import Image from 'next/image'

export default function GelEarthing() {
  const features = [
    {
      icon: Droplets,
      title: "Superior Moisture Retention",
      description: "Advanced gel compound maintains optimal moisture levels for consistent performance in all seasons"
    },
    {
      icon: Zap,
      title: "Excellent for Dry Conditions",
      description: "Specifically designed for areas with low rainfall and dry soil conditions"
    },
    {
      icon: CheckCircle,
      title: "Maintenance-Free Operation",
      description: "Zero maintenance required with long-term stable performance and reliability"
    },
    {
      icon: Star,
      title: "Enhanced Conductivity",
      description: "Special conductive gel ensures excellent electrical conductivity and low resistance"
    }
  ]

  const specifications = [
    { name: "Electrode Material", value: "Copper / GI with special corrosion-resistant coating" },
    { name: "Gel Compound", value: "Advanced conductive gel mixture with moisture retention" },
    { name: "Resistance Value", value: "< 1 Ohm guaranteed" },
    { name: "Installation Depth", value: "3-4 meters standard" },
    { name: "System Life", value: "15+ years" },
    { name: "Maintenance", value: "Zero maintenance required" },
    { name: "Soil Conditions", value: "Excellent for dry and rocky soils" },
    { name: "Standards", value: "IS 3043, IEC 62561" }
  ]

  const applications = [
    "Areas with low rainfall and dry climates",
    "Rocky soil conditions",
    "Industrial plants in arid regions",
    "Telecommunication towers",
    "Critical infrastructure projects",
    "Sensitive electronic equipment protection"
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-20">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Advanced <span className="text-blue-600">Gel Earthing</span> Systems
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Premium gel-based earthing solutions with superior moisture retention for dry conditions. 
              Maintenance-free operation with guaranteed performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919667846784"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Get Gel Earthing Price
              </a>
              <Link
                href="/contact"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Free Site Survey
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What is Gel Earthing */}
      <section className="section-padding bg-blue-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What is Gel Earthing?
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                <strong>Gel Earthing</strong> is an advanced earthing system that uses a special conductive gel compound 
                around the electrode. This innovative technology provides superior moisture retention and 
                consistent electrical conductivity, making it ideal for dry and challenging soil conditions.
              </p>
              <p className="text-gray-700 mb-6">
                Unlike traditional earthing methods that require regular maintenance and watering, 
                gel earthing systems are completely maintenance-free and provide stable ground resistance 
                throughout their lifespan.
              </p>
              <div className="bg-white rounded-xl p-6 border border-blue-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Key Advantages:</h3>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>Superior performance in dry and rocky soils</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>No watering or maintenance required</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>Long service life (15+ years)</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl p-4 shadow-lg">
                <div className="h-80 bg-blue-100 rounded-xl relative overflow-hidden">
                  <Image 
                    src="/images/gel-earthing-electrodes.jpg"
                    alt="Gel Earthing Electrodes - Advanced earthing system with conductive gel"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      // Fallback if image doesn't exist
                      e.currentTarget.style.display = 'none'
                      e.currentTarget.parentElement.innerHTML = `
                        <div class="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center">
                          <div class="text-6xl text-white">💧</div>
                        </div>
                      `
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Gel Earthing?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Advanced features that make gel earthing the ideal choice for challenging soil conditions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-blue-50 rounded-2xl p-6 text-center border border-blue-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-700 text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="section-padding bg-blue-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Technical Specifications
              </h2>
              <p className="text-lg text-gray-700">
                Comprehensive specifications for our gel earthing systems
              </p>
            </motion.div>

            <div className="bg-white rounded-2xl p-8 border border-blue-200">
              <div className="grid md:grid-cols-2 gap-6">
                {specifications.map((spec, index) => (
                  <motion.div
                    key={spec.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex justify-between items-center py-3 border-b border-blue-100 last:border-0"
                  >
                    <span className="font-semibold text-gray-900">{spec.name}:</span>
                    <span className="text-gray-700 text-right">{spec.value}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="section-padding bg-blue-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Ideal Applications for Gel Earthing
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {applications.map((app, index) => (
                  <motion.div
                    key={app}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-blue-700 rounded-xl p-6 hover:bg-blue-800 transition-colors"
                  >
                    <div className="text-3xl mb-3">⚡</div>
                    <p className="text-blue-100">{app}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready for Gel Earthing Solutions?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Get the best gel earthing systems for your project with guaranteed performance and competitive pricing
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/919667846784?text=Hi, I'm interested in gel earthing systems. Please provide pricing and specifications."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                💬 WhatsApp for Gel Earthing Price
              </a>
              <a
                href="tel:+919667846784"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                📞 Call: +91 9667846784
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}