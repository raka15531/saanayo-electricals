import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Chemical Earthing Price & Installation Guide 2024 | Earthing Blog',
  description: 'Get complete chemical earthing price, installation cost, procedure & specifications. Expert guides on chemical earthing systems, earth pit construction, and earthing materials in India.',
  keywords: 'chemical earthing price, cost of earthing a house in india, chemical earthing cost, earth pit installation, earthing kit price, chemical earthing procedure, earthing pit material, chemical earthing electrode, types of chemical earthing, pipe earthing details, earth pit testing procedure, industrial earthing, gi electrode, earthing chemical, chemical earth pit',
}

const blogPosts = [
  {
    slug: 'chemical-earthing-price-cost-india',
    title: 'Chemical Earthing Price 2024 - Complete Cost Guide for House & Industrial Projects',
    description: 'Get detailed chemical earthing price for residential and industrial projects. Learn about chemical earthing cost factors, material prices, and installation charges across India.',
    date: '2024-01-20',
    readTime: '8 min read',
    category: 'Price Guide'
  },
  {
    slug: 'chemical-earthing-procedure-installation',
    title: 'Chemical Earthing Procedure - Step-by-Step Installation & Earth Pit Construction Guide',
    description: 'Complete chemical earthing procedure with diagrams. Learn earth pit installation, testing methods, and IS standard compliance for perfect earthing system installation.',
    date: '2024-01-18',
    readTime: '10 min read',
    category: 'Installation'
  },
  {
    slug: 'chemical-earthing-vs-gel-earthing',
    title: 'Chemical Earthing vs Gel Earthing: Which is Better? Price & Performance Comparison 2024',
    description: 'Detailed comparison between chemical earthing and gel earthing systems. Understand differences in cost, performance, installation, and ideal applications.',
    date: '2024-01-15',
    readTime: '7 min read',
    category: 'Comparison'
  },
  {
    slug: 'earthing-material-list-specifications',
    title: 'Complete Earthing Material List & Specifications - Chemical, Pipe & Plate Earthing',
    description: 'Get complete earthing material list for chemical earthing, pipe earthing, and plate earthing systems. Specifications, standards, and quality guidelines.',
    date: '2024-01-12',
    readTime: '9 min read',
    category: 'Materials'
  },
  {
    slug: 'house-earthing-cost-india',
    title: 'Cost of Earthing a House in India 2024 - Complete Price Breakdown',
    description: 'Detailed cost analysis for house earthing in India. Get chemical earthing price, labor costs, and budget planning for residential electrical safety.',
    date: '2024-01-10',
    readTime: '6 min read',
    category: 'Residential'
  },
  {
    slug: 'industrial-earthing-requirements',
    title: 'Industrial Earthing Requirements & Specifications for Factories & Plants',
    description: 'Complete guide to industrial earthing requirements, specifications, and compliance standards for factories, manufacturing plants, and commercial buildings.',
    date: '2024-01-08',
    readTime: '8 min read',
    category: 'Industrial'
  },
  {
    slug: 'earth-pit-installation-testing-procedure',
    title: 'Earth Pit Installation & Testing Procedure - Complete Guide with Diagrams',
    description: 'Step-by-step earth pit installation guide with testing procedures, diagrams, and compliance standards. Learn proper earth pit construction and maintenance.',
    date: '2024-01-05',
    readTime: '12 min read',
    category: 'Testing'
  },
  {
    slug: 'types-of-earthing-systems',
    title: 'Different Types of Earthing Systems - Chemical, Pipe, Plate & Rod Earthing Comparison',
    description: 'Complete guide to different types of earthing systems: chemical earthing, pipe earthing, plate earthing, and rod earthing. Comparison, applications, and selection guide.',
    date: '2024-01-03',
    readTime: '10 min read',
    category: 'Systems'
  },
  {
    slug: 'chemical-earthing-specifications-is-standards',
    title: 'Chemical Earthing Specifications & IS Standards - Complete Technical Guide',
    description: 'Complete technical guide to chemical earthing specifications, IS standards, material requirements, and compliance guidelines for electrical earthing systems.',
    date: '2024-01-01',
    readTime: '8 min read',
    category: 'Standards'
  },
  {
    slug: 'pipe-earthing-details-material-list',
    title: 'Pipe Earthing Details & Material List - Complete Installation Guide',
    description: 'Complete guide to pipe earthing installation with material list, specifications, and step-by-step procedure. Traditional earthing method with modern applications.',
    date: '2023-12-28',
    readTime: '9 min read',
    category: 'Pipe Earthing'
  },
  {
    slug: 'earthing-chemical-compound-guide',
    title: 'Earthing Chemical Compound Guide - Types, Properties & Application Methods',
    description: 'Complete guide to earthing chemical compounds: types, properties, specifications, and application methods for chemical earthing systems.',
    date: '2023-12-25',
    readTime: '11 min read',
    category: 'Chemicals'
  },
  {
    slug: 'gi-electrode-earthing-systems',
    title: 'GI Electrode Earthing Systems - Specifications, Price & Installation Guide',
    description: 'Complete guide to GI electrode earthing systems: specifications, installation procedures, price analysis, and maintenance requirements.',
    date: '2023-12-22',
    readTime: '10 min read',
    category: 'GI Electrodes'
  }
]

export default function BlogPage() {
  return (
    <div className="pt-20">
      {/* Hero Section with High-Value Keywords */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Chemical Earthing Price & Installation Blog 2024
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Expert guides on <strong>chemical earthing price</strong>, <strong>earth pit installation</strong>, <strong>earthing material specifications</strong>, and complete <strong>earthing procedure</strong> for residential and industrial projects.
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">₹3,500+</div>
              <div className="text-sm text-gray-600">Chemical Earthing Price</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">15+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">1000+</div>
              <div className="text-sm text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">24/7</div>
              <div className="text-sm text-gray-600">Expert Support</div>
            </div>
          </div>

          {/* Quick Links for High-Value Pages */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Link href="/chemical-earthing" className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Chemical Earthing Price
            </Link>
            <Link href="/gel-earthing" className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors">
              Gel Earthing Systems
            </Link>
            <a href="tel:+919667846784" className="bg-gray-800 text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-900 transition-colors">
              Call for Quote
            </a>
          </div>
        </div>
      </section>

      {/* Featured Articles - High Commercial Intent */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Most Popular Earthing Guides
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(0, 6).map((post) => (
              <article key={post.slug} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-3 hover:text-blue-600 transition-colors line-clamp-2 group-hover:underline">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                    {post.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="text-blue-600 font-semibold hover:text-blue-700 transition-colors text-sm flex items-center space-x-1"
                    >
                      <span>Read Guide</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            All Earthing & Electrical Safety Articles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.slug} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-200">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  <h2 className="text-lg font-semibold text-gray-900 mb-3 hover:text-blue-600 transition-colors line-clamp-2">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                    {post.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="text-blue-600 font-semibold hover:text-blue-700 transition-colors text-sm"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section for High-Intent Keywords */}
      <section className="section-padding bg-blue-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Chemical Earthing Price Quote?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Get instant <strong>chemical earthing price</strong>, <strong>earth pit installation cost</strong>, and professional consultation for your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919667846784?text=Hi, I need chemical earthing price quote for my project."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              💬 WhatsApp for Price
            </a>
            <a
              href="tel:+919667846784"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              📞 Call: +91 9667846784
            </a>
            <Link
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              📧 Free Site Survey
            </Link>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Comprehensive Earthing Solutions Knowledge Base
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              Welcome to India's most comprehensive resource for <strong>chemical earthing systems</strong>, <strong>earth pit installation</strong>, and <strong>electrical safety solutions</strong>. Our expert guides cover everything from <strong>chemical earthing price analysis</strong> to detailed <strong>installation procedures</strong> and <strong>material specifications</strong>.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Popular Search Topics</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Chemical Earthing Price & Cost Analysis</li>
                  <li>• Earth Pit Installation Procedure</li>
                  <li>• Earthing Material Specifications</li>
                  <li>• Industrial Earthing Requirements</li>
                  <li>• Pipe Earthing vs Chemical Earthing</li>
                  <li>• GI Electrode Specifications</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Resources</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• IS 3043 Standards Compliance</li>
                  <li>• Earth Pit Testing Methods</li>
                  <li>• Maintenance-Free Earthing Systems</li>
                  <li>• Residential vs Industrial Earthing</li>
                  <li>• Cost of Earthing a House in India</li>
                  <li>• Earthing Chemical Compounds Guide</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}