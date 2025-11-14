import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Earthing Blog | Chemical vs Gel Earthing, Installation Guides & Tips',
  description: 'Expert articles on earthing systems, chemical vs gel earthing comparison, installation guides, and electrical safety tips from industry professionals.',
  keywords: 'earthing blog, chemical earthing vs gel earthing, earthing installation guide, electrical safety tips, earthing electrode selection',
}

const blogPosts = [
  {
    slug: 'what-is-gel-earthing',
    title: 'What is Gel Earthing? Benefits and Installation Process',
    description: 'Complete guide to gel earthing systems, their advantages over traditional earthing, and proper installation methods.',
    date: '2024-01-15',
    readTime: '5 min read'
  },
  {
    slug: 'chemical-vs-gel-earthing',
    title: 'Chemical Earthing vs Gel Earthing: Which is Better?',
    description: 'Detailed comparison between chemical earthing and gel earthing systems for different applications and soil conditions.',
    date: '2024-01-10',
    readTime: '7 min read'
  },
  {
    slug: 'select-best-earthing-electrode',
    title: 'How to Select the Best Earthing Electrode for Your Project',
    description: 'Expert tips on choosing the right earthing electrode based on soil conditions, application, and budget requirements.',
    date: '2024-01-05',
    readTime: '6 min read'
  },
  {
    slug: 'copper-bonded-rod-manufacturers',
    title: 'Best Copper Bonded Rod Manufacturers in India - Quality Guide',
    description: 'Comprehensive guide to identifying quality copper bonded rods and top manufacturers in India.',
    date: '2024-01-01',
    readTime: '8 min read'
  },
  {
    slug: 'earthing-protects-home-surges',
    title: 'How Proper Earthing Protects Your Home from Electrical Surges',
    description: 'Understand how earthing systems safeguard your home appliances and electrical systems from voltage surges.',
    date: '2023-12-28',
    readTime: '4 min read'
  },
  {
    slug: 'industrial-earthing-requirements',
    title: 'Earthing Requirements for Industrial Electrical Panels',
    description: 'Complete guide to earthing specifications and requirements for industrial electrical panels and machinery.',
    date: '2023-12-25',
    readTime: '6 min read'
  }
]

export default function BlogPage() {
  return (
    <div className="pt-20">
      <section className="section-padding bg-gradient-to-br from-primary-50 to-blue-100">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Earthing & Electrical Safety Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Expert insights, installation guides, and latest trends in earthing systems and electrical safety.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.slug} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {post.description}
                  </p>
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}