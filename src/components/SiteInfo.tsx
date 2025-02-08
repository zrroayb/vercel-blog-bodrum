export default function SiteInfo() {
  return (
    <section className="text-center max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        Bodrum&apos;un Kalbi
      </h1>
      <p className="text-xl text-gray-600 mb-12">
        Ege&apos;nin incisi Bodrum&apos;da yaşam, kültür ve güncel gelişmeler
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <div className="text-3xl font-bold text-blue-600 mb-2">191,417</div>
          <div className="text-gray-600">Nüfus</div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <div className="text-3xl font-bold text-blue-600 mb-2">1.5M+</div>
          <div className="text-gray-600">Yaz Nüfusu</div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <div className="text-3xl font-bold text-blue-600 mb-2">680km²</div>
          <div className="text-gray-600">Yüzölçümü</div>
        </div>
      </div>
    </section>
  )
} 