'use client'

import { motion } from 'framer-motion'
import { Download, FileText, Shield, Zap, CheckCircle } from 'lucide-react'
import Image from 'next/image'

const technicalSpecs = [
  {
    id: 1,
    product: "Chemical Earthing System",
    description: "Advanced maintenance-free chemical earthing systems with stable ground resistance",
    image: "/images/chemical-earthing-systems.jpg",
    specifications: [
      "Electrode Material: Copper / GI",
      "Backfill Compound: Special conductive mixture (25kg)",
      "Resistance Value: < 1 Ohm",
      "Installation Depth: 3-4 meters",
      "System Life: 15+ years",
      "Maintenance: Zero maintenance",
      "Standards: IS 3043, IEC 62561",
      "Soil Conditions: All types including rocky and dry"
    ],
    applications: [
      "Industrial plants and factories",
      "Telecommunication towers",
      "High-rise buildings",
      "Data centers",
      "Power substations",
      "Sensitive electronic equipment"
    ],
    file: "/specs/chemical-earthing-specs.pdf",
    size: "2.4 MB"
  },
  {
    id: 2,
    product: "Copper Bonded Earthing Rods",
    description: "Premium copper bonded rods with 250-micron coating for superior conductivity",
    image: "/images/copper-bonded-rods.jpg",
    specifications: [
      "Core Material: High-tensile steel",
      "Copper Coating: 250 microns minimum",
      "Diameter: 14mm, 16mm, 17.2mm, 20mm",
      "Length: 1.2m, 2.4m, 3.0m",
      "Conductivity: > 99.9% pure copper equivalent",
      "Tensile Strength: 600 N/mm²",
      "Standards: IS 3043, UL 467, BS 7430",
      "Corrosion Resistance: Excellent"
    ],
    applications: [
      "Critical power installations",
      "Telecommunication sites",
      "Data centers",
      "Hospital buildings",
      "Airports and railways",
      "Lightning protection systems"
    ],
    file: "/specs/copper-rods-specs.pdf",
    size: "1.8 MB"
  },
  {
    id: 3,
    product: "GI Earthing Electrodes & Pipes",
    description: "Galvanized Iron earthing electrodes and pipes for robust grounding solutions",
    image: "/images/earthing-electrodes.jpg",
    specifications: [
      "Material: High-grade Galvanized Iron",
      "Diameter: 16mm, 20mm, 25mm, 32mm, 40mm, 50mm, 65mm, 80mm",
      "Length: 1.5m, 2m, 2.5m, 3m",
      "Coating: Hot-dip galvanized",
      "Thickness: 3mm to 5mm (pipes)",
      "Standards: IS 3043, IS 1239",
      "Soil Resistance: < 1 Ohm",
      "Service Life: 10-15 years"
    ],
    applications: [
      "Heavy industrial plants",
      "Power generation stations",
      "Railway electrification",
      "Mining applications",
      "Oil and gas industry",
      "Large commercial projects"
    ],
    file: "/specs/gi-earthing-specs.pdf",
    size: "2.1 MB"
  },
  {
    id: 4,
    product: "Lightning Arresters",
    description: "Advanced lightning arresters for reliable protection against lightning strikes",
    image: "/images/lightning-arresters.jpg",
    specifications: [
      "Type: Station Class, Distribution Class",
      "Voltage Rating: 11kV, 22kV, 33kV",
      "Discharge Capacity: 10kA to 40kA",
      "Response Time: < 25 nanoseconds",
      "Housing: Polymer / Porcelain",
      "Standards: IS 3070, IEC 60099",
      "Operating Temperature: -40°C to +60°C",
      "Protection Level: 1.5kV to 4kV"
    ],
    applications: [
      "Electrical substations",
      "Power distribution lines",
      "Industrial plants",
      "Commercial buildings",
      "Telecommunication towers",
      "Residential complexes"
    ],
    file: "/specs/lightning-arresters-specs.pdf",
    size: "2.3 MB"
  },
  {
    id: 5,
    product: "Electrical Distribution Panels",
    description: "Custom-designed electrical panels with advanced safety features",
    image: "/images/electrical-panels.jpg",
    specifications: [
      "Type: LT Distribution Panel",
      "Incomer: MCB/MCCB 63A to 800A",
      "Outgoing: 6-way to 48-way",
      "Enclosure: IP54, CRCA sheet",
      "Busbar: Copper/Aluminum",
      "Standards: IS 8623, IEC 61439",
      "Short Circuit Rating: 25kA to 65kA",
      "Voltage: 415V AC, 3-phase"
    ],
    applications: [
      "Industrial plants",
      "Commercial buildings",
      "Residential complexes",
      "Hospitals",
      "Shopping malls",
      "Educational institutions"
    ],
    file: "/specs/electrical-panels-specs.pdf",
    size: "2.7 MB"
  },
  {
    id: 6,
    product: "Surge Protection Devices",
    description: "Advanced SPDs to safeguard sensitive equipment from voltage spikes",
    image: "/images/surge-protection-devices.jpg",
    specifications: [
      "Type: Type 1, Type 2, Type 3",
      "Voltage: 230V, 415V AC",
      "Nominal Current: 20A to 125A",
      "Protection Level: 1.5kV to 4kV",
      "Response Time: < 25ns",
      "Standards: IEC 61643, IS 15099",
      "Remote Signaling: Optional",
      "Status Indication: Visual LED"
    ],
    applications: [
      "Home appliances protection",
      "Industrial automation",
      "Telecom equipment",
      "Medical equipment",
      "Security systems",
      "Data centers"
    ],
    file: "/specs/surge-protection-specs.pdf",
    size: "1.9 MB"
  },
  {
    id: 7,
    product: "Grounding Accessories Kit",
    description: "Complete grounding accessories for comprehensive earthing systems",
    image: "/images/grounding-accessories.jpg",
    specifications: [
      "Clamp Material: Copper/Brass",
      "Connector Type: Exothermic/Mechanical",
      "Conductor Size: 25mm² to 185mm²",
      "Coating: Electro-tin plated",
      "Temperature Rating: -40°C to 120°C",
      "Standards: IS 3043, UL 467",
      "Corrosion Resistance: Excellent",
      "Installation: Tool-less options available"
    ],
    applications: [
      "New earthing installations",
      "System maintenance",
      "Retrofit projects",
      "Industrial applications",
      "Commercial buildings",
      "Residential projects"
    ],
    file: "/specs/grounding-accessories-specs.pdf",
    size: "1.6 MB"
  }
]

export default function TechnicalSpecs() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Technical Specifications</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Comprehensive technical specifications for all our electrical safety products and earthing systems
            </p>
            <div className="flex items-center justify-center space-x-6 text-blue-200">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5" />
                <span>IS Standard Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="w-5 h-5" />
                <span>Quality Tested</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5" />
                <span>Performance Guaranteed</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technical Specifications Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Product Technical Specifications
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Detailed specifications, applications, and performance data for all our electrical safety products
            </p>
          </motion.div>

          <div className="space-y-12">
            {technicalSpecs.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200"
              >
                <div className="grid md:grid-cols-3 gap-8 p-8">
                  {/* Product Image */}
                  <div className="relative h-64 md:h-auto">
                    <Image
                      src={product.image}
                      alt={product.product}
                      fill
                      className="object-cover rounded-lg"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'
                        e.currentTarget.parentElement.innerHTML = `
                          <div class="w-full h-full bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                            <div class="text-4xl text-white opacity-80">⚡</div>
                          </div>
                        `
                      }}
                    />
                  </div>

                  {/* Product Details */}
                  <div className="md:col-span-2">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {product.product}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {product.description}
                        </p>
                      </div>
                      <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {product.size}
                      </div>
                    </div>

                    {/* Specifications */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center space-x-2">
                        <FileText className="w-5 h-5 text-blue-600" />
                        <span>Technical Specifications</span>
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {product.specifications.map((spec, idx) => (
                          <div key={idx} className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{spec}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Applications */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Applications</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.applications.map((app, idx) => (
                          <span
                            key={idx}
                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                          >
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Download Button */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div className="flex items-center space-x-2 text-gray-500">
                        <FileText className="w-4 h-4" />
                        <span className="text-sm">PDF Specification Sheet</span>
                      </div>
                      <button
                        onClick={() => {
                          // Simulate download - replace with actual PDF files
                          const message = `Hi, I would like to get the technical specifications for ${product.product}`
                          window.open(`https://wa.me/919667846784?text=${encodeURIComponent(message)}`, '_blank')
                        }}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center space-x-2"
                      >
                        <Download className="w-4 h-4" />
                        <span>Get Specifications</span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards & Compliance Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Quality Standards & Compliance
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {[
                  { standard: "IS 3043", name: "Earthing Practice Code" },
                  { standard: "IS 3070", name: "Lightning Arresters" },
                  { standard: "IEC 62561", name: "Lightning Protection" },
                  { standard: "IS 8623", name: "Distribution Boards" }
                ].map((item, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-6">
                    <div className="text-2xl font-bold text-blue-600 mb-2">{item.standard}</div>
                    <div className="text-sm text-gray-600">{item.name}</div>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Need Custom Technical Specifications?
                </h3>
                <p className="text-gray-600 mb-6">
                  For project-specific requirements, custom product specifications, or technical consultations, 
                  our engineering team is ready to assist you with detailed documentation and support.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+919667846784"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Call Technical Support
                  </a>
                  <a
                    href="mailto:saanayoelectricindustries@gmail.com"
                    className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Email Requirements
                  </a>
                </div>
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
              Ready to Specify Our Products?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Get detailed technical specifications, CAD drawings, and project documentation for your next electrical safety project
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/919667846784?text=Hi, I need complete technical specifications for my project"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                📞 WhatsApp for Specs
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