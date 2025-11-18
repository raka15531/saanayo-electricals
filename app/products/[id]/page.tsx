'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { ArrowLeft, Check, Star, Truck, Shield, Zap } from 'lucide-react'

const products = [
  {
    id: 1,
    name: 'GI Earthing Electrode',
    category: 'Earthing Electrodes',
    description: 'High-quality Galvanized Iron Earthing Electrodes designed for optimal grounding performance in various electrical systems. These electrodes provide excellent conductivity and corrosion resistance.',
    fullDescription: 'Our GI Earthing Electrodes are manufactured using high-grade galvanized iron with superior corrosion resistance. These electrodes ensure stable grounding and long-term durability in diverse soil conditions. Perfect for industrial, commercial, and residential applications.',
    features: [
      'Superior corrosion resistance',
      'Excellent electrical conductivity',
      'Long service life',
      'Easy installation',
      'Low maintenance',
      'Cost-effective solution'
    ],
    specifications: {
      'Material': 'High-grade Galvanized Iron',
      'Diameter': '16mm, 20mm, 25mm, 32mm, 40mm',
      'Length': '1.5m, 2m, 2.5m, 3m',
      'Coating': 'Hot-dip galvanized',
      'Standards': 'IS 3043, IEC 62561',
      'Soil Resistance': '< 1 Ohm'
    },
    applications: [
      'Industrial plants and factories',
      'Commercial buildings',
      'Residential complexes',
      'Telecommunication towers',
      'Power substations',
      'Lightning protection systems'
    ],
    benefits: [
      'Enhanced safety for electrical systems',
      'Reliable performance in all weather conditions',
      'Reduced maintenance costs',
      'Environmentally friendly',
      'Quick and easy installation'
    ],
    image: '/images/earthing-electrodes.jpg',
    price: '₹ 450 - ₹ 1,200 per piece',
    delivery: '7-10 days',
    warranty: '5 years'
  },
  {
    id: 2,
    name: 'Copper Bonded Earthing Rod',
    category: 'Copper Bonded Rods',
    description: 'Premium Copper Bonded Earthing Rods with 250-micron copper coating for superior conductivity and exceptional corrosion resistance.',
    fullDescription: 'Our Copper Bonded Earthing Rods feature a thick 250-micron copper coating over high-tensile steel core, providing the perfect balance of strength and conductivity. These rods offer excellent performance in all soil conditions and are ideal for critical applications.',
    features: [
      '250-micron copper coating',
      'High tensile strength core',
      'Superior conductivity',
      'Excellent corrosion resistance',
      'Uniform copper bonding',
      'Long operational life'
    ],
    specifications: {
      'Core Material': 'High-tensile steel',
      'Copper Coating': '250 microns minimum',
      'Diameter': '14mm, 16mm, 17.2mm, 20mm',
      'Length': '1.2m, 2.4m, 3.0m',
      'Standards': 'IS 3043, UL 467, BS 7430',
      'Conductivity': '> 99.9% pure copper equivalent'
    },
    applications: [
      'Critical power installations',
      'Telecommunication sites',
      'Data centers',
      'Hospital buildings',
      'Airports and railways',
      'Lightning protection'
    ],
    benefits: [
      'Superior electrical performance',
      'Exceptional durability',
      'Low resistance grounding',
      'Maintenance-free operation',
      'Cost-effective compared to solid copper'
    ],
    image: '/images/copper-bonded-rod.jpg',
    price: '₹ 800 - ₹ 2,500 per piece',
    delivery: '5-7 days',
    warranty: '10 years'
  },
  {
    id: 3,
    name: 'Chemical Earthing System',
    category: 'Chemical Earthing',
    description: 'Advanced Chemical Earthing System with maintenance-free operation and stable ground resistance in all soil conditions.',
    fullDescription: 'Our Chemical Earthing System uses special backfill compounds that maintain low soil resistance and provide stable grounding performance. The system is completely maintenance-free and offers excellent performance in rocky and dry soil conditions.',
    features: [
      'Maintenance-free operation',
      'Stable ground resistance',
      'Suitable for all soil types',
      'Long service life',
      'Easy installation',
      'Environmentally safe'
    ],
    specifications: {
      'Electrode Material': 'Copper / GI',
      'Backfill Compound': 'Special conductive mixture',
      'Resistance Value': '< 1 Ohm',
      'System Life': '15+ years',
      'Installation Depth': '3-4 meters',
      'Maintenance': 'Zero maintenance'
    },
    applications: [
      'Rocky soil areas',
      'Dry soil conditions',
      'High-rise buildings',
      'Industrial plants',
      'Sensitive electronic equipment',
      'Telecom infrastructure'
    ],
    benefits: [
      'Consistent performance in all seasons',
      'No watering required',
      'Reduced installation space',
      'Enhanced safety for sensitive equipment',
      'Lower overall lifecycle cost'
    ],
    image: '/images/chemical-earthing.jpg',
    price: '₹ 3,500 - ₹ 8,000 per system',
    delivery: '10-12 days',
    warranty: '15 years'
  },
  {
    id: 4,
    name: 'Lightning Arrester',
    category: 'Lightning Protection',
    description: 'Advanced Lightning Arresters for reliable protection of electrical systems and equipment against lightning strikes and voltage surges.',
    fullDescription: 'Our Lightning Arresters are designed to protect electrical installations from lightning strikes and transient voltage surges. They quickly divert the high voltage surges to ground, preventing damage to sensitive equipment and ensuring system reliability.',
    features: [
      'Fast response time',
      'High discharge capacity',
      'Durable construction',
      'Easy maintenance',
      'Weatherproof design',
      'Reliable performance'
    ],
    specifications: {
      'Type': 'Station Class, Distribution Class',
      'Voltage Rating': '11kV, 22kV, 33kV',
      'Discharge Capacity': '10kA to 40kA',
      'Response Time': '< 25 nanoseconds',
      'Standards': 'IS 3070, IEC 60099',
      'Housing': 'Polymer / Porcelain'
    },
    applications: [
      'Electrical substations',
      'Power distribution lines',
      'Industrial plants',
      'Commercial buildings',
      'Telecommunication towers',
      'Residential complexes'
    ],
    benefits: [
      'Complete system protection',
      'Reduced downtime',
      'Equipment safety',
      'Compliance with safety standards',
      'Long service life'
    ],
    image: '/images/lightning-arrester.jpg',
    price: '₹ 1,200 - ₹ 5,000 per unit',
    delivery: '7-10 days',
    warranty: '5 years'
  },
  {
    id: 5,
    name: 'Electrical Distribution Panel',
    category: 'Electrical Panels',
    description: 'Custom-designed Electrical Distribution Panels with advanced safety features and reliable performance for various applications.',
    fullDescription: 'Our Electrical Distribution Panels are custom-designed to meet specific requirements with advanced safety features, proper segregation, and reliable components. These panels ensure safe power distribution and easy maintenance.',
    features: [
      'Custom design available',
      'Advanced safety features',
      'Modular construction',
      'Easy maintenance',
      'Proper cable management',
      'ISI certified components'
    ],
    specifications: {
      'Type': 'LT Distribution Panel',
      'Incomer': 'MCB/MCCB 63A to 800A',
      'Outgoing': '6-way to 48-way',
      'Enclosure': 'IP54, CRCA sheet',
      'Busbar': 'Copper/Aluminum',
      'Standards': 'IS 8623, IEC 61439'
    },
    applications: [
      'Industrial plants',
      'Commercial buildings',
      'Residential complexes',
      'Hospitals',
      'Shopping malls',
      'Educational institutions'
    ],
    benefits: [
      'Enhanced electrical safety',
      'Customized solutions',
      'Easy troubleshooting',
      'Space-efficient design',
      'Future expansion capability'
    ],
    image: '/images/electrical-panel.jpg',
    price: '₹ 8,000 - ₹ 50,000 per panel',
    delivery: '15-20 days',
    warranty: '2 years'
  },
  {
    id: 6,
    name: 'Surge Protection Device',
    category: 'Surge Protection',
    description: 'Advanced Surge Protection Devices to safeguard sensitive electronic equipment from voltage spikes and transient surges.',
    fullDescription: 'Our Surge Protection Devices provide comprehensive protection against voltage spikes, lightning-induced surges, and switching transients. They are essential for protecting sensitive electronic equipment in modern electrical installations.',
    features: [
      'Fast response time',
      'High energy absorption',
      'Visual status indication',
      'Easy replacement',
      'Thermal protection',
      'Remote signaling capability'
    ],
    specifications: {
      'Type': 'Type 1, Type 2, Type 3',
      'Voltage': '230V, 415V AC',
      'Nominal Current': '20A to 125A',
      'Protection Level': '1.5kV to 4kV',
      'Response Time': '< 25ns',
      'Standards': 'IEC 61643, IS 15099'
    },
    applications: [
      'Home appliances protection',
      'Industrial automation',
      'Telecom equipment',
      'Medical equipment',
      'Security systems',
      'Data centers'
    ],
    benefits: [
      'Equipment protection',
      'Data loss prevention',
      'Reduced downtime',
      'Fire hazard prevention',
      'Cost-effective protection'
    ],
    image: '/images/surge-protection.jpg',
    price: '₹ 1,500 - ₹ 8,000 per unit',
    delivery: '5-7 days',
    warranty: '3 years'
  },
  {
    id: 7,
    name: 'GI Earthing Pipe',
    category: 'GI Earthing Pipes',
    description: 'Heavy-duty GI Earthing Pipes for robust and reliable grounding solutions in industrial and commercial applications.',
    fullDescription: 'Our GI Earthing Pipes are manufactured from high-quality galvanized iron with superior mechanical strength and corrosion resistance. These pipes are ideal for heavy-duty applications requiring reliable and durable grounding solutions.',
    features: [
      'Heavy-duty construction',
      'Excellent corrosion resistance',
      'High mechanical strength',
      'Easy installation',
      'Long service life',
      'Cost-effective'
    ],
    specifications: {
      'Material': 'Heavy GI',
      'Diameter': '40mm, 50mm, 65mm, 80mm',
      'Length': '2m, 2.5m, 3m',
      'Thickness': '3mm to 5mm',
      'Coating': 'Hot-dip galvanized',
      'Standards': 'IS 1239, IS 3043'
    },
    applications: [
      'Heavy industrial plants',
      'Power generation stations',
      'Railway electrification',
      'Mining applications',
      'Oil and gas industry',
      'Large commercial projects'
    ],
    benefits: [
      'Robust construction',
      'Suitable for harsh environments',
      'Low maintenance',
      'Reliable performance',
      'Economic solution'
    ],
    image: '/images/gi-earthing-pipe.jpg',
    price: '₹ 600 - ₹ 2,000 per piece',
    delivery: '7-10 days',
    warranty: '7 years'
  },
  {
    id: 8,
    name: 'Grounding Accessories Kit',
    category: 'Grounding Accessories',
    description: 'Complete Grounding Accessories Kit including clamps, connectors, and conductors for comprehensive earthing system installation.',
    fullDescription: 'Our Grounding Accessories Kit provides all necessary components for a complete earthing system installation. The kit includes high-quality clamps, connectors, and conductors designed for reliable performance and easy installation.',
    features: [
      'Complete installation kit',
      'High-quality materials',
      'Corrosion resistant',
      'Easy to install',
      'Compatible with all systems',
      'Durable construction'
    ],
    specifications: {
      'Clamp Material': 'Copper/Brass',
      'Connector Type': 'Exothermic/Mechanical',
      'Conductor Size': '25mm² to 185mm²',
      'Coating': 'Electro-tin plated',
      'Temperature Rating': '-40°C to 120°C',
      'Standards': 'IS 3043, UL 467'
    },
    applications: [
      'New earthing installations',
      'System maintenance',
      'Retrofit projects',
      'Industrial applications',
      'Commercial buildings',
      'Residential projects'
    ],
    benefits: [
      'Complete solution',
      'Time-saving installation',
      'Consistent performance',
      'Reduced inventory',
      'Cost-effective package'
    ],
    image: '/images/grounding-accessories.jpg',
    price: '₹ 2,000 - ₹ 8,000 per kit',
    delivery: '3-5 days',
    warranty: '2 years'
  }
]

export default function ProductDetail() {
  const params = useParams()
  const productId = parseInt(params.id as string)
  const product = products.find(p => p.id === productId)

  if (!product) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Product Not Found</h1>
          <Link href="/products" className="btn-primary inline-flex items-center space-x-2">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Products</span>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <section className="bg-gray-50 dark:bg-gray-800 py-4 border-b border-gray-200 dark:border-gray-700">
        <div className="container-custom">
          <nav className="flex space-x-2 text-sm text-gray-600 dark:text-gray-400">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <span>›</span>
            <Link href="/products" className="hover:text-blue-600 transition-colors">Products</Link>
            <span>›</span>
            <span className="text-gray-900 dark:text-white">{product.name}</span>
          </nav>
        </div>
      </section>

      {/* Product Header */}
      <section className="section-padding bg-white dark:bg-gray-800">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-4"
            >
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl h-80 flex items-center justify-center shadow-xl">
                <div className="text-8xl text-white opacity-90">⚡</div>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="bg-gray-100 dark:bg-gray-700 rounded-lg h-20 flex items-center justify-center cursor-pointer hover:border-2 hover:border-blue-500 transition-all">
                    <div className="text-2xl text-gray-400">⚡</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div>
                <span className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium mb-3">
                  {product.category}
                </span>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  {product.name}
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Key Features */}
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center space-x-2">
                  <Zap className="w-5 h-5 text-blue-600" />
                  <span>Key Features</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing Contact Banner */}
              <div className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-xl p-4 text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <span className="text-white font-bold text-lg">🏷️ Contact for Best Pricing</span>
                </div>
                <p className="text-white text-sm opacity-90">
                  Competitive pricing based on quantity and project requirements
                </p>
                <div className="flex justify-center space-x-4 mt-3">
                  <div className="bg-white/20 rounded-lg px-3 py-1">
                    <span className="text-white text-sm">Bulk Discounts Available</span>
                  </div>
                  <div className="bg-white/20 rounded-lg px-3 py-1">
                    <span className="text-white text-sm">Custom Quotes</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                onClick={() => {
                    const message = `Hi, I'm interested in ${product.name}. Please provide detailed specifications and pricing.`
                    window.open(`https://wa.me/919667846784?text=${encodeURIComponent(message)}`, '_blank')
                }}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white text-center py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2 cursor-pointer"
                >
                <span>💬</span>
                <span>Get Quote on WhatsApp</span>
                </button>
                <a
                  href="tel:+919667846784"
                  className="bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-3"
                >
                  <span className="text-lg">📞</span>
                  <span>Call Now</span>
                </a>
              </div>

              {/* Trust Badges */}
              <div className="flex items-center justify-center space-x-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                  <Truck className="w-4 h-4" />
                  <span>Free Shipping</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                  <Shield className="w-4 h-4" />
                  <span>{product.warranty} Warranty</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Information */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-custom max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Specifications */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="lg:col-span-2 space-y-8"
            >
              {/* Full Description */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Product Description</h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {product.fullDescription}
                </p>
              </div>

              {/* Specifications */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Technical Specifications</h2>
                <div className="grid gap-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700 last:border-0">
                      <span className="font-medium text-gray-700 dark:text-gray-300">{key}</span>
                      <span className="text-gray-600 dark:text-gray-400 text-right">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Applications */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Applications</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {product.applications.map((app, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-600 dark:text-gray-300">{app}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Benefits & Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              {/* Benefits */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Key Benefits</h3>
                <div className="space-y-3">
                  {product.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Star className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Card */}
              <div className="bg-blue-600 text-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Need Help?</h3>
                <p className="text-blue-100 mb-4">Our technical experts are ready to assist you with product selection and installation guidance.</p>
                <div className="space-y-3">
                  <a
                    href="tel:+919667846784"
                    className="flex items-center space-x-3 bg-white text-blue-600 py-3 px-4 rounded-lg font-semibold transition-all hover:bg-blue-50"
                  >
                    <span>📞</span>
                    <span>+91 9667846784</span>
                  </a>
                  <a
                    href="mailto:saanayoelectricindustries@gmail.com"
                    className="flex items-center space-x-3 bg-white text-blue-600 py-3 px-4 rounded-lg font-semibold transition-all hover:bg-blue-50"
                  >
                    <span>✉️</span>
                    <span>Email Us</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="section-padding bg-white dark:bg-gray-800">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Related Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.filter(p => p.id !== product.id).slice(0, 4).map((relatedProduct) => (
              <Link
                key={relatedProduct.id}
                href={`/products/${relatedProduct.id}`}
                className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-600 hover:border-blue-500 group"
              >
                <div className="text-4xl text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">⚡</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors">
                  {relatedProduct.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                  {relatedProduct.description}
                </p>
                <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm group-hover:underline">
                  View Details →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}