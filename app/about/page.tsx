'use client'

import { motion } from 'framer-motion'
import { Target, Eye, Star, Users, Factory, Shield } from 'lucide-react'

const values = [
  {
    icon: Shield,
    title: 'Safety First',
    description: 'Every product is engineered to protect people, equipment, and infrastructure from electrical hazards'
  },
  {
    icon: Star,
    title: 'Quality Assurance',
    description: 'Stringent quality control processes ensure consistent performance and long-term durability'
  },
  {
    icon: Users,
    title: 'Customer Focus',
    description: 'We deliver reliable solutions backed by exceptional technical support and service'
  },
  {
    icon: Target,
    title: 'Innovation',
    description: 'Continuous adoption of modern technology for better electrical safety solutions'
  }
]

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-primary-900/20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About Saanayo Electricals
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Trusted manufacturer and supplier of high-performance earthing and electrical safety solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding bg-white dark:bg-gray-800">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  Saanayo Electricals Pvt Ltd is a trusted and rapidly growing manufacturer and supplier 
                  of high-performance earthing and electrical safety solutions based in Faridabad, Haryana.
                </p>
                <p>
                  With a commitment to innovation, reliability, and long-term system protection, we deliver 
                  world-class products designed for industrial, commercial, and residential applications.
                </p>
                <p>
                  For over the years, we have focused on engineering solutions that ensure maximum safety, 
                  stable grounding, and long-term durability in India's toughest electrical environments.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-primary-500 to-blue-600 rounded-2xl p-8 text-white"
            >
              <Factory className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Our Infrastructure</h3>
              <p className="mb-4">
                State-of-the-art manufacturing facility equipped with advanced machinery and 
                quality testing equipment to ensure premium product quality.
              </p>
              <ul className="space-y-2">
                <li>• Modern manufacturing unit</li>
                <li>• Quality testing laboratory</li>
                <li>• R&D department</li>
                <li>• Warehousing facilities</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg"
            >
              <Target className="w-12 h-12 text-primary-600 dark:text-primary-400 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h3>
              <p className="text-gray-600 dark:text-gray-300">
                To deliver high-quality electrical and earthing solutions that enhance safety, 
                prevent electrical hazards, and ensure uninterrupted operations for industries 
                and households across India.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg"
            >
              <Eye className="w-12 h-12 text-primary-600 dark:text-primary-400 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Vision</h3>
              <p className="text-gray-600 dark:text-gray-300">
                To become India's most trusted brand in earthing, grounding, lightning protection, 
                and electrical safety solutions, known for innovation, integrity, and superior engineering.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-white dark:bg-gray-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              The principles that guide everything we do at Saanayo Electricals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start space-x-4 p-6 bg-gray-50 dark:bg-gray-700 rounded-2xl hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                  <value.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Quality Standards
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Every product manufactured or supplied by Saanayo Electricals follows strict quality standards, 
              ensuring excellent conductivity, corrosion resistance, and long operational life.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              {['ISI Standards', 'ISO Certified', 'Quality Tested', 'Warranty Backed'].map((standard, index) => (
                <motion.div
                  key={standard}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4"
                >
                  <div className="text-2xl font-bold mb-2">{standard}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}