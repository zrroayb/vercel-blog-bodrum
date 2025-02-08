import Link from 'next/link'

export default function LatestBlogs() {
  const blogs = [
    {
      title: 'Son Teknolojik Gelişmeler',
      excerpt: 'Teknoloji dünyasındaki son gelişmeleri sizin için derledik...',
      slug: 'son-teknolojik-gelismeler',
      date: '12 Mart 2024'
    },
    {
      title: 'Başarı Hikayeleri',
      excerpt: 'Müşterilerimizin başarı hikayelerini keşfedin...',
      slug: 'basari-hikayeleri',
      date: '10 Mart 2024'
    }
  ]

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Son Yazılar</h2>
      <div className="space-y-6">
        {blogs.map((blog, index) => (
          <article 
            key={index} 
            className="group cursor-pointer"
          >
            <div className="border-l-4 border-blue-600 pl-4 transition-all group-hover:border-blue-400">
              <time className="text-sm text-gray-500 mb-1 block">{blog.date}</time>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                {blog.title}
              </h3>
              <p className="text-gray-600 mb-3">{blog.excerpt}</p>
              <Link
                href={`/blog/${blog.slug}`}
                className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
              >
                Devamını Oku
                <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
} 