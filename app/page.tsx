'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Shield, Zap, Award, Clock } from 'lucide-react'
import ParticlesBackground from '../components/ParticlesBackground'
import FAQSchema from '../components/FAQSchema'
<<<<<<< HEAD
=======
import Image from 'next/image'
>>>>>>> d683034 (Initial commit: Add existing website project)

const products = [
  {
    id: 1,
<<<<<<< HEAD
    name: 'Earthing Electrodes',
    description: 'High-performance electrodes for optimal grounding systems with excellent conductivity',
    features: ['High conductivity', 'Corrosion resistant', 'Long lifespan', 'Easy installation'],
    image: '/images/earthing-electrodes.jpg',
    specs: ['Material: Copper/GI', 'Size: 16mm-40mm', 'Length: 1m-3m']
  },
  {
    id: 2,
    name: 'Copper Bonded Rods',
    description: 'Premium copper bonded rods ensuring superior earthing with 99.9% pure copper coating',
    features: ['99.9% pure copper', 'Uniform coating', 'Excellent conductivity', 'Corrosion proof'],
    image: '/images/copper-rods.jpg',
    specs: ['Coating: 250 microns', 'Size: 14mm-25mm', 'Standards: IS 3043']
  },
  {
    id: 3,
    name: 'Chemical Earthing',
    description: 'Advanced chemical earthing systems for enhanced performance and maintenance-free operation',
    features: ['Low resistance', 'Maintenance-free', 'Long durability', 'Stable performance'],
    image: '/images/chemical-earthing.jpg',
    specs: ['Resistance: <1 ohm', 'Backfill: 25kg', 'Life: 15+ years']
=======
    name: 'Chemical Earthing Systems',
    description: 'Premium chemical earthing systems with maintenance-free operation and stable ground resistance for optimal electrical safety',
    features: ['Low resistance <1 ohm', 'Maintenance-free operation', 'Long 15+ years durability', 'Stable performance in all seasons'],
    image: '/images/chemical-earthing-systems.jpg',
    specs: ['Resistance: <1 ohm', 'Backfill Compound: 25kg', 'System Life: 15+ years', 'Installation: Earth pit construction']
  },
  {
    id: 2,
    name: 'Copper Bonded Earthing Rods',
    description: 'High-quality copper bonded rods with 250-micron coating for superior conductivity and corrosion resistance',
    features: ['250-micron copper coating', 'Excellent conductivity', 'Corrosion proof', 'Long operational life'],
    image: '/images/copper-bonded-rods.jpg',
    specs: ['Coating: 250 microns', 'Diameter: 14mm-25mm', 'Standards: IS 3043', 'Material: Electrode earthing']
  },
  {
    id: 3,
    name: 'GI Earthing Electrodes & Pipes',
    description: 'Galvanized Iron earthing electrodes and pipes for cost-effective and reliable grounding solutions',
    features: ['Cost-effective solution', 'Corrosion resistant', 'Easy installation', 'Rust proof'],
    image: '/images/earthing-electrodes.jpg',
    specs: ['Material: GI Pipe', 'Diameter: 40mm-80mm', 'Coating: Hot-dip galvanized', 'Application: Pipe earthing']
  },
  {
    id: 4,
    name: 'Lightning Arresters & Protection',
    description: 'Advanced lightning arresters and surge protection devices for complete electrical system safety',
    features: ['Quick response <25ns', 'High discharge capacity', 'Multiple voltage ratings', 'Weatherproof design'],
    image: '/images/lightning-arresters.jpg',
    specs: ['Voltage: 11kV-33kV', 'Discharge: 10kA-40kA', 'Response: <25ns', 'Type: Station class']
  },
  {
    id: 5,
    name: 'Electrical Distribution Panels',
    description: 'Custom electrical panels with advanced safety features for industrial and commercial applications',
    features: ['ISI certified components', 'Custom designs', 'Safety compliant', 'Modular construction'],
    image: '/images/electrical-panels.jpg',
    specs: ['IP54 Rating', 'Copper Busbar', 'Modular Design', 'MCB/MCCB Protection']
  },
  {
    id: 6,
    name: 'Earthing Accessories & Kits',
    description: 'Complete earthing accessories kit including clamps, connectors, and backfill compounds',
    features: ['Complete installation kit', 'All necessary components', 'Easy to install', 'Durable materials'],
    image: '/images/grounding-accessories.jpg',
    specs: ['Clamps: Copper/Brass', 'Connectors: Exothermic', 'Backfill: Chemical compound', 'Conductor: 25-185mm²']
>>>>>>> d683034 (Initial commit: Add existing website project)
  }
]

const features = [
  {
    icon: Shield,
    title: 'Quality Certified',
<<<<<<< HEAD
    description: 'All products meet international quality standards and certifications'
=======
    description: 'All chemical earthing materials meet IS 3043 standards with proper earth pit testing'
>>>>>>> d683034 (Initial commit: Add existing website project)
  },
  {
    icon: Zap,
    title: 'High Performance',
<<<<<<< HEAD
    description: 'Engineered for maximum safety and optimal electrical conductivity'
=======
    description: 'Engineered chemical earthing systems ensure <1 ohm resistance for maximum safety'
>>>>>>> d683034 (Initial commit: Add existing website project)
  },
  {
    icon: Award,
    title: 'Industry Expertise',
<<<<<<< HEAD
    description: 'Years of experience in manufacturing electrical safety solutions'
=======
    description: '15+ years experience in chemical earthing installation and earth pit construction'
>>>>>>> d683034 (Initial commit: Add existing website project)
  },
  {
    icon: Clock,
    title: 'Quick Delivery',
<<<<<<< HEAD
    description: 'Fast and reliable delivery across India and international markets'
=======
    description: 'Fast delivery of chemical earthing rods and materials across India'
>>>>>>> d683034 (Initial commit: Add existing website project)
  }
]

const faqData = [
  {
<<<<<<< HEAD
    question: "What is chemical earthing and how does it work?",
    answer: "Chemical earthing is an advanced earthing system that uses conductive chemical compounds around the electrode to maintain low soil resistance. The chemical compound absorbs moisture from the atmosphere and retains it, ensuring consistent conductivity regardless of weather conditions."
  },
  {
    question: "What are the advantages of copper bonded rods?",
    answer: "Copper bonded rods offer superior corrosion resistance, excellent electrical conductivity, and long lifespan. The 250-micron copper coating ensures uniform protection, making them ideal for harsh soil conditions and providing reliable earthing performance for years."
  },
  {
    question: "How do I choose the right earthing system for my project?",
    answer: "The choice depends on soil resistivity, project requirements, and budget. Chemical earthing is ideal for areas with high soil resistance, while copper bonded rods work well in normal conditions. Our experts can conduct soil testing and recommend the best solution for your specific needs."
  },
  {
    question: "What maintenance is required for earthing systems?",
    answer: "Chemical earthing systems are virtually maintenance-free. Traditional earthing may require periodic checking of resistance levels. We recommend annual inspections to ensure optimal performance and early detection of any issues."
  },
  {
    question: "Do you provide installation services?",
    answer: "Yes, we offer complete installation services along with product supply. Our experienced technicians ensure proper installation according to industry standards and provide comprehensive testing and certification."
  },
  {
    question: "What is your delivery timeline?",
    answer: "Standard products are typically delivered within 3-5 days. Custom solutions may take 7-10 days. We offer expedited shipping for urgent requirements and ensure timely delivery across India."
=======
    question: "What is chemical earthing and how does the chemical earthing procedure work?",
    answer: "Chemical earthing is an advanced earthing system that uses special conductive chemical compounds around the electrode to maintain low soil resistance. The chemical earthing procedure involves digging an earth pit, installing the electrode with backfill compound, and proper earth pit testing to ensure <1 ohm resistance. This chemical earth pit system provides maintenance-free operation with stable performance."
  },
  {
    question: "What is the chemical earthing price and cost of earthing a house in India?",
    answer: "The chemical earthing price varies based on system type and project requirements. For a standard house earthing in India, the chemical earthing cost typically ranges from ₹3,500 to ₹8,000 including materials and installation. We provide detailed chemical earthing price quotes based on soil conditions and specific requirements after site inspection."
  },
  {
    question: "What materials are used in chemical earthing and pipe earthing systems?",
    answer: "Chemical earthing material includes copper/GI electrodes, special backfill compound, and chemical earth pit components. Pipe earthing material list typically includes GI pipes, charcoal, salt, and earthing pits. We provide complete chemical earthing material list and pipe earthing details for all project types."
  },
  {
    question: "What are the different types of earthing systems available?",
    answer: "We provide various types of chemical earthing including conventional chemical earthing, maintenance-free chemical earthing systems, and advanced gel earthing. Other different types of earthing include pipe earthing, plate earthing, and strip earthing. Each system has specific chemical earthing specifications for different applications."
  },
  {
    question: "Do you provide complete earth pit installation services?",
    answer: "Yes, we offer complete earth pit installation services including site inspection, earth pit construction, chemical earthing procedure implementation, and final earth pit testing. Our earth pit installation process follows IS standards and includes proper chemical earthing diagram documentation."
  },
  {
    question: "What maintenance is required for chemical earthing systems?",
    answer: "Chemical earthing systems are virtually maintenance-free due to the special backfill compound. We recommend annual earth pit testing to check resistance levels. The chemical earthing process ensures long-term stability without the need for regular watering or maintenance unlike traditional earthing methods."
>>>>>>> d683034 (Initial commit: Add existing website project)
  }
]

export default function Home() {
  return (
    <div>
      {/* Hero Section with Particles */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 relative overflow-hidden">
        <ParticlesBackground />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container-custom text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Premium{' '}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
<<<<<<< HEAD
                Electrical Safety
=======
                Chemical Earthing
>>>>>>> d683034 (Initial commit: Add existing website project)
              </span>{' '}
              Solutions
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
<<<<<<< HEAD
              Leading manufacturer of <strong>earthing electrodes</strong>, <strong>copper bonded rods</strong>, <strong>chemical earthing systems</strong>, and <strong>lightning protection equipment</strong> in Faridabad, India
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products" className="btn-primary inline-flex items-center space-x-2 bg-white text-blue-900 hover:bg-blue-100">
                <span>View Electrical Products</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contact" className="btn-secondary border-white text-white hover:bg-white hover:text-blue-900">
                Get Free Consultation
=======
              Leading <strong>chemical earthing manufacturer</strong> in Faridabad providing <strong>chemical earthing rods</strong>, <strong>earth pit installation</strong>, and complete <strong>earthing solutions</strong> at best <strong>chemical earthing price</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products" className="btn-primary inline-flex items-center space-x-2 bg-white text-blue-900 hover:bg-blue-100">
                <span>View Chemical Earthing Products</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contact" className="btn-secondary border-white text-white hover:bg-white hover:text-blue-900">
                Get Chemical Earthing Price
>>>>>>> d683034 (Initial commit: Add existing website project)
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white dark:bg-gray-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
<<<<<<< HEAD
              Why Choose Saanayo Electricals?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Trusted by industries and homeowners for reliable electrical safety solutions
=======
              Why Choose Our Chemical Earthing Systems?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Expert <strong>chemical earthing installation</strong> with proper <strong>earth pit testing</strong> and guaranteed performance
>>>>>>> d683034 (Initial commit: Add existing website project)
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-gray-50 dark:bg-gray-700 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
<<<<<<< HEAD
              Featured Products
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              High-quality electrical safety products engineered for maximum protection
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
=======
              Chemical Earthing Products & Systems
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Complete range of <strong>chemical earthing materials</strong>, <strong>earthing rods</strong>, and <strong>earth pit components</strong>
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
>>>>>>> d683034 (Initial commit: Add existing website project)
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                {/* Product Image */}
<<<<<<< HEAD
                <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center relative">
                  <div className="text-6xl text-white opacity-80">⚡</div>
=======
                <div className="h-48 bg-gray-100 dark:bg-gray-600 relative overflow-hidden">
                  <Image 
                    src={product.image} 
                    alt={product.name}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      // Fallback to gradient background if image fails to load
                      e.currentTarget.style.display = 'none'
                      e.currentTarget.parentElement.innerHTML = `
                        <div class="w-full h-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                          <div class="text-6xl text-white opacity-80">⚡</div>
                          <div class="absolute bottom-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm">
                            Featured
                          </div>
                        </div>
                      `
                    }}
                  />
>>>>>>> d683034 (Initial commit: Add existing website project)
                  <div className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm">
                    Featured
                  </div>
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
                          className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-1 rounded text-sm"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Specifications */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Specifications:</h4>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      {product.specs.map((spec, idx) => (
                        <li key={idx}>• {spec}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Pricing Section */}
                  <div className="mb-6 p-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-yellow-600 dark:text-yellow-400 font-semibold text-sm">
<<<<<<< HEAD
                        💰 For Pricing Contact for Best Offer
=======
                        💰 Get Chemical Earthing Price Quote
>>>>>>> d683034 (Initial commit: Add existing website project)
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <Link
                      href={`/products/${product.id}`}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg font-semibold transition-colors"
                    >
                      View Details
                    </Link>
                    <button
<<<<<<< HEAD
                    onClick={() => {
                        const message = `Hi, I'm interested in ${product.name}. Please provide more details and pricing.`
                        window.open(`https://wa.me/919667846784?text=${encodeURIComponent(message)}`, '_blank')
                    }}
                    className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-lg transition-colors cursor-pointer"
                    title="Contact on WhatsApp"
                    >
                    💬
=======
                      onClick={() => {
                          const message = `Hi, I'm interested in ${product.name}. Please provide chemical earthing price and specifications.`
                          window.open(`https://wa.me/919667846784?text=${encodeURIComponent(message)}`, '_blank')
                      }}
                      className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-lg transition-colors cursor-pointer flex items-center justify-center"
                      title="Contact on WhatsApp"
                    >
                      <span className="text-sm">💬</span>
>>>>>>> d683034 (Initial commit: Add existing website project)
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link href="/products" className="btn-primary inline-flex items-center space-x-2">
<<<<<<< HEAD
              <span>View All Products</span>
=======
              <span>View All Chemical Earthing Products</span>
>>>>>>> d683034 (Initial commit: Add existing website project)
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
<<<<<<< HEAD
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Premium Earthing Electrodes Manufacturer in Faridabad
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                <strong>Saanayo Electricals</strong> is a leading <strong>earthing electrodes manufacturer in Faridabad</strong>, 
                providing premium <strong>chemical earthing systems</strong>, <strong>gel earthing electrodes</strong>, and 
                <strong>copper bonded rods</strong> for industrial, commercial, and residential applications.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Why Choose Our Earthing Solutions?
              </h3>
              
              <ul className="text-gray-600 mb-6 space-y-2">
                <li>• <strong>Chemical Earthing:</strong> Maintenance-free operation with stable ground resistance</li>
                <li>• <strong>Gel Earthing:</strong> Advanced conductive gel for superior performance</li>
                <li>• <strong>Copper Bonded Rods:</strong> 250-micron copper coating for excellent conductivity</li>
                <li>• <strong>GI Earthing Electrodes:</strong> Cost-effective solution with corrosion resistance</li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Applications of Our Earthing Systems
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Industrial Applications</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Factories and manufacturing plants</li>
                    <li>• Power substations</li>
                    <li>• Telecommunication towers</li>
                    <li>• Oil and gas industry</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Commercial & Residential</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• High-rise buildings</li>
                    <li>• Housing complexes</li>
                    <li>• Hospitals and institutions</li>
                    <li>• Data centers</li>
=======
            <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              Chemical Earthing Manufacturer in Faridabad | Best Chemical Earthing Price
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6 text-lg">
                <strong>Saanayo Electricals</strong> is a leading <strong>chemical earthing manufacturer in Faridabad</strong> providing premium <strong>chemical earthing systems</strong>, <strong>chemical earthing rods</strong>, and complete <strong>earth pit installation</strong> services. We offer the best <strong>chemical earthing price</strong> for industrial, commercial, and residential applications across India.
              </p>

              <h2 className="text-3xl font-semibold text-gray-900 mb-6 mt-12">
                Complete Chemical Earthing Solutions
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Chemical Earthing Systems</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• <strong>Chemical Earthing Electrode</strong> - Copper/GI electrodes</li>
                    <li>• <strong>Chemical Earth Pit</strong> - Complete installation</li>
                    <li>• <strong>Chemical Earthing Material</strong> - Backfill compounds</li>
                    <li>• <strong>Chemical Earthing Rod</strong> - Various sizes available</li>
                    <li>• <strong>Earth Pit Chemical</strong> - Special conductive mixture</li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Earthing Accessories</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• <strong>Earthing Pipe and Plate</strong> - GI and Copper</li>
                    <li>• <strong>Earthing Kit Price</strong> - Complete packages</li>
                    <li>• <strong>Earth Pit Installation</strong> - Professional services</li>
                    <li>• <strong>Earthing Plate Price</strong> - Competitive rates</li>
                    <li>• <strong>Earthing Chemical</strong> - Maintenance-free</li>
>>>>>>> d683034 (Initial commit: Add existing website project)
                  </ul>
                </div>
              </div>

<<<<<<< HEAD
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Looking for Earthing Electrode Price?
                </h3>
                <p className="text-gray-600 mb-4">
                  Get competitive pricing for <strong>chemical earthing electrode price</strong>, 
                  <strong>gel earthing electrode price</strong>, and <strong>copper bonded rod price</strong>. 
                  We offer the best rates in Faridabad with complete installation services.
                </p>
                <Link href="/contact" className="btn-primary">
                  Get Price Quote
                </Link>
=======
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Chemical Earthing Price & Cost Analysis
              </h3>
              
              <div className="bg-yellow-50 rounded-xl p-6 mb-8">
                <p className="text-gray-600 mb-4">
                  Understanding the <strong>chemical earthing cost</strong> and <strong>cost of earthing a house in India</strong> is crucial for budget planning. Our <strong>chemical earthing price</strong> includes:
                </p>
                <ul className="text-gray-600 space-y-2 mb-4">
                  <li>• Complete <strong>chemical earthing material</strong> and components</li>
                  <li>• Professional <strong>earth pit installation</strong> services</li>
                  <li>• <strong>Earth pit testing</strong> and certification</li>
                  <li>• <strong>Chemical earthing procedure</strong> documentation</li>
                  <li>• Warranty and after-sales support</li>
                </ul>
                <p className="text-gray-600">
                  Contact us today for detailed <strong>chemical earthing price quotation</strong> based on your specific requirements and project scope.
                </p>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Types of Chemical Earthing Systems
              </h3>
              
              <div className="mb-8">
                <p className="text-gray-600 mb-4">
                  We provide various <strong>types of chemical earthing</strong> systems to meet different requirements:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Industrial Applications</h4>
                    <ul className="text-gray-600 text-sm space-y-2">
                      <li>• <strong>Pipe Earthing</strong> - For factories and plants</li>
                      <li>• <strong>Chemical Earth Pit</strong> - Power substations</li>
                      <li>• <strong>Electrode Earthing</strong> - Telecom towers</li>
                      <li>• <strong>Industrial Earthing</strong> - Manufacturing units</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Commercial & Residential</h4>
                    <ul className="text-gray-600 text-sm space-y-2">
                      <li>• <strong>House Earthing</strong> - Residential buildings</li>
                      <li>• <strong>Earth Pit Construction</strong> - High-rise complexes</li>
                      <li>• <strong>GI Electrode</strong> - Cost-effective solutions</li>
                      <li>• <strong>Earthing Process</strong> - Standardized procedures</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Looking for Chemical Earthing Price in Faridabad?
                </h3>
                <p className="text-gray-600 mb-6">
                  Get competitive <strong>chemical earthing price</strong> for <strong>chemical earthing electrode</strong>, <strong>chemical earthing rod</strong>, and complete <strong>earth pit installation</strong>. We offer the best rates in Faridabad with complete <strong>chemical earthing procedure</strong> and <strong>earth pit testing</strong> services.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="btn-primary text-center">
                    Get Chemical Earthing Price Quote
                  </Link>
                  <a href="tel:+919667846784" className="btn-secondary text-center">
                    Call for Earthing Cost: +91 9667846784
                  </a>
                </div>
>>>>>>> d683034 (Initial commit: Add existing website project)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-blue-600 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
<<<<<<< HEAD
              { number: '500+', label: 'Projects Completed' },
              { number: '5000+', label: 'Happy Clients' },
              { number: '15+', label: 'Years Experience' },
              { number: '24/7', label: 'Support' }
=======
              { number: '5000+', label: 'Chemica/Gel Earthing Projects' },
              { number: '10000+', label: 'Earth Pit Installations' },
              { number: '15+', label: 'Years Expertise' },
              { number: '24/7', label: 'Technical Support' }
>>>>>>> d683034 (Initial commit: Add existing website project)
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white dark:bg-gray-800">
        <div className="container-custom">
          <FAQSchema />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
<<<<<<< HEAD
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Get answers to common questions about our electrical safety products
=======
              Chemical Earthing FAQs
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Common questions about <strong>chemical earthing price</strong>, <strong>installation</strong>, and <strong>maintenance</strong>
>>>>>>> d683034 (Initial commit: Add existing website project)
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
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
<<<<<<< HEAD
              Ready to Secure Your Electrical Systems?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Get expert consultation and premium electrical safety solutions tailored to your needs
=======
              Ready for Professional Chemical Earthing Installation?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Get expert <strong>chemical earthing consultation</strong>, best <strong>chemical earthing price</strong>, and complete <strong>earth pit installation</strong> services
>>>>>>> d683034 (Initial commit: Add existing website project)
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
<<<<<<< HEAD
                Get Free Consultation
=======
                Get Chemical Earthing Price Quote
>>>>>>> d683034 (Initial commit: Add existing website project)
              </Link>
              <a 
                href="tel:+919667846784"
                className="border-2 border-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
              >
<<<<<<< HEAD
                Call Now: +91 9667846784
=======
                Call for Earthing Cost: +91 9667846784
>>>>>>> d683034 (Initial commit: Add existing website project)
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}