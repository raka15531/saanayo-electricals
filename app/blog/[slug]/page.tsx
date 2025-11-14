import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'

const blogPosts = {
  'what-is-gel-earthing': {
    title: 'What is Gel Earthing? Benefits and Installation Process Explained',
    description: 'Complete guide to gel earthing systems, their advantages over traditional earthing, installation process, and maintenance requirements.',
    content: `
      <h2>Understanding Gel Earthing Systems</h2>
      <p>Gel earthing is an advanced grounding technology that uses special conductive gel compounds to maintain low soil resistance...</p>
      <!-- Full article content -->
    `,
    date: 'January 15, 2024',
    readTime: '5 min read'
  },
  // Add other blog posts here
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts[params.slug as keyof typeof blogPosts]
  
  if (!post) {
    return {
      title: 'Blog Post Not Found',
    }
  }

  return {
    title: post.title,
    description: post.description,
  }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]
  
  if (!post) {
    notFound()
  }

  return (
    <div className="pt-20">
      <article className="section-padding">
        <div className="container-custom max-w-4xl">
          <Link href="/blog" className="text-blue-600 hover:text-blue-700 mb-6 inline-block">
            ← Back to Blog
          </Link>
          
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {post.title}
            </h1>
            <div className="flex items-center text-gray-500 text-sm">
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              <span>{post.readTime}</span>
            </div>
          </header>

          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>
    </div>
  )
}