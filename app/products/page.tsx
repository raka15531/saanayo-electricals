'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Search } from 'lucide-react'
import { useState } from 'react'

const products = [
  {
    id: 1,
    name: 'Earthing Electrodes',
    description: 'High-performance electrodes for optimal grounding systems with excellent conductivity and corrosion resistance',
    features: ['High conductivity', 'Corrosion resistant', 'Long lifespan', 'Easy installation'],
    applications: ['Industrial Plants', 'Commercial Buildings', 'Residential Complexes'],
    image: '/api/placeholder/400/300'
  },
  {
    id: 2,
    name: 'Copper Bonded Rods',
    description: 'Premium copper bonded rods ensuring superior earthing with 99.9% pure copper coating',
    features: ['99.9% pure copper', 'Uniform coating', 'Excellent conductivity', 'Corrosion proof'],
    applications: ['Power Stations', 'Telecom Towers', 'Lightning Protection'],
    image: '/api/placeholder/400/300'
  },
  {
    id: 3,
    name: 'Chemical Earthing Systems',
    description: 'Advanced chemical earthing for enhanced performance and maintenance-free operation',
    features: ['Low resistance', 'Maintenance-free', 'Long durability', 'Stable performance'],
    applications: ['High-rise Buildings', 'Data Centers', 'Sensitive Equipment'],
    image: '/api/placeholder/400/300'
  },
  {
    id: 4,
    name: 'Lightning Arresters',
    description: 'Reliable protection against lightning strikes and electrical surges',
    features: ['Quick response', 'High durability', 'Easy installation', 'Multiple ratings'],
    applications: ['Buildings', 'Transmission Lines', 'Equipment Protection'],
    image: '/api/placeholder/400/300'
  },
  {
    id: 5,
    name: 'Electrical Panels',
    description: 'Custom electrical panels designed for safety, efficiency, and reliability',
    features: ['ISI certified', 'Custom designs', 'Safety compliant', 'Durable construction'],
    applications: ['Industrial Use', 'Commercial Use', 'Residential Use'],
    image: '/api/placeholder/400/300'
  },
  {
    id: 6,
    name: 'Surge Protection Devices',
    description: 'Advanced devices to protect equipment from voltage spikes and surges',
    features: ['Fast acting', 'Multiple ratings', 'Reliable performance', 'Easy maintenance'],
    applications: ['Electronic Equipment', 'Power Systems', 'Communication Systems'],
    image: '/api/placeholder/400/300'
  },
  {
    id: 7,
    name: 'GI Earthing Pipes',
    description: 'Galvanized Iron earthing pipes for robust and reliable grounding solutions',
    features: ['Heavy duty', 'Rust proof', 'Long lasting', 'Cost effective'],
    applications: ['Industrial Grounding', 'Lightning Protection', 'General Earthing'],
    image: '/api/placeholder/400/300'
  },
  {
    id: 8,
    name: 'Grounding Accessories',
    description: 'Complete range of accessories for comprehensive earthing systems',
    features: ['Complete solution', 'Easy installation', 'Durable materials', 'Various sizes'],
    applications: ['All Earthing Systems', 'Maintenance Kits', 'Replacement Parts'],
    image: '/api/placeholder/400/300'
  }
]

export default function Products() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'Earthing', 'Lightning Protection', 'Panels', 'Accessories']

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === 'All' || 
     (selectedCategory === 'Earthing' && (product.name.includes('Earthing') || product.name.includes('Rod'))) ||
     (selectedCategory === 'Lightning Protection' && product.name.includes('Lightning')) ||
     (selectedCategory === 'Panels' && product.name.includes('Panel')) ||
     (selectedCategory === 'Accessories' && product.name.includes('Accessories')))
  )

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-blue-100 dark:from-gray-900 dark:to-primary-900/20">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Our Products
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Premium quality electrical safety products engineered for maximum protection and durability
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="section-padding bg-white dark:bg-gray-800">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-primary-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-600"
              >
                {/* Product Image */}
                <div className="h-48 bg-gradient-to-br from-primary-500 to-blue-600 flex items-center justify-center">
                  <div className="text-6xl text-white opacity-80">⚡</div>
                </div>

                {/* Product Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-2 py-1 rounded text-sm"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Pricing Section */}
                  <div className="mb-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-yellow-600 dark:text-yellow-400 font-semibold text-sm">
                        💰 For Pricing Contact for Best Offer
                      </span>
                    </div>
                  </div>

                  {/* Applications */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Applications:</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {product.applications.join(', ')}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <Link
                      href={`/products/${product.id}`}
                      className="flex-1 bg-primary-600 hover:bg-primary-700 text-white text-center py-2 px-4 rounded-lg font-semibold transition-colors"
                    >
                      View Details
                    </Link>
                    <button
                    onClick={() => {
                        const message = `Hi, I'm interested in ${product.name}. Please provide more details and pricing.`
                        window.open(`https://wa.me/919667846784?text=${encodeURIComponent(message)}`, '_blank')
                    }}
                    className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-lg transition-colors cursor-pointer"
                    title="Contact on WhatsApp"
                    >
                    💬
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                No products found
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Try adjusting your search or filter criteria
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Need Custom Solutions?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              We provide customized electrical safety solutions tailored to your specific requirements
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary inline-flex items-center space-x-2">
                <span>Get Custom Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a 
                href="tel:+919667846784"
                className="btn-secondary"
              >
                Call: +91 9667846784
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}