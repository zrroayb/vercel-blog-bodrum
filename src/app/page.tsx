import Navbar from '@/components/Navbar'
import Carousel from '@/components/Carousel'
import ContactForm from '@/components/ContactForm'
import LatestBlogs from '@/components/LatestBlogs'
import SiteInfo from '@/components/SiteInfo'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {/* Hero Section with Site Info */}
        <SiteInfo />
        
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="h-[500px] lg:h-[600px]">
            <Carousel />
          </div>
          <div className="h-[500px] lg:h-[600px] overflow-auto">
            <LatestBlogs />
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="max-w-3xl mx-auto">
          <ContactForm />
        </div>
      </div>
    </main>
  )
}
