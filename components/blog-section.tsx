import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function BlogSection() {
  const blogPosts = [
    {
      title: "Building a Modern Portfolio with Next.js",
      excerpt: "Learn how to create a professional developer portfolio using Next.js and Tailwind CSS.",
      date: "May 15, 2023",
      slug: "building-modern-portfolio-nextjs",
    },
    {
      title: "Understanding React Server Components",
      excerpt: "A deep dive into React Server Components and how they improve performance in Next.js applications.",
      date: "April 22, 2023",
      slug: "understanding-react-server-components",
    },
    {
      title: "Mastering TypeScript for React Developers",
      excerpt: "Essential TypeScript patterns and best practices for React development.",
      date: "March 10, 2023",
      slug: "mastering-typescript-react-developers",
    },
  ]

  return (
    <section id="blog" className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-cyan-400 mb-12">Latest Articles</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-navy-dark/80 backdrop-blur-sm border border-gray-800 rounded-lg p-6 hover:border-cyan-400/30 transition-colors"
            >
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">{post.title}</h3>
                <p className="text-gray-400 text-sm">{post.excerpt}</p>
                <p className="text-gray-500 text-xs">{post.date}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/blog" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
            View All Articles <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
