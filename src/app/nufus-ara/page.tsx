'use client'
import { useState } from 'react'
import Navbar from '@/components/Navbar'

interface PersonData {
  id: number
  ad: string
  soyad: string
  yas: number
  mahalle: string
  ilce: string
}

export default function NufusAra() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedIlce, setSelectedIlce] = useState('')
  const [selectedMahalle, setSelectedMahalle] = useState('')

  // Örnek veri - Gerçek uygulamada API'den gelecek
  const sampleData: PersonData[] = [
    { id: 1, ad: 'Ahmet', soyad: 'Yılmaz', yas: 35, mahalle: 'Kumbahçe', ilce: 'Bodrum' },
    { id: 2, ad: 'Ayşe', soyad: 'Demir', yas: 28, mahalle: 'Türkkuyusu', ilce: 'Bodrum' },
    { id: 3, ad: 'Mehmet', soyad: 'Kaya', yas: 45, mahalle: 'Çarşı', ilce: 'Gümbet' },
    // Daha fazla örnek veri eklenebilir
  ]

  const ilceler = ['Tüm İlçeler', 'Bodrum', 'Gümbet', 'Turgutreis', 'Yalıkavak']
  const mahalleler = ['Tüm Mahalleler', 'Kumbahçe', 'Türkkuyusu', 'Çarşı', 'Merkez']

  const filteredData = sampleData.filter(person => {
    const matchesSearch = 
      person.ad.toLowerCase().includes(searchTerm.toLowerCase()) ||
      person.soyad.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesIlce = !selectedIlce || selectedIlce === 'Tüm İlçeler' || person.ilce === selectedIlce
    const matchesMahalle = !selectedMahalle || selectedMahalle === 'Tüm Mahalleler' || person.mahalle === selectedMahalle

    return matchesSearch && matchesIlce && matchesMahalle
  })

  return (
    <main className="min-h-screen bg-blue-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h1 className="text-3xl font-bold text-blue-800 mb-8">Nüfus Ara</h1>
          
          {/* Search and Filters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div>
              <input
                type="text"
                placeholder="İsim veya soyisim ara..."
                className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <select
              className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={selectedIlce}
              onChange={(e) => setSelectedIlce(e.target.value)}
            >
              {ilceler.map(ilce => (
                <option key={ilce} value={ilce}>{ilce}</option>
              ))}
            </select>
            <select
              className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={selectedMahalle}
              onChange={(e) => setSelectedMahalle(e.target.value)}
            >
              {mahalleler.map(mahalle => (
                <option key={mahalle} value={mahalle}>{mahalle}</option>
              ))}
            </select>
          </div>

          {/* Results Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead className="bg-blue-100">
                <tr>
                  <th className="px-4 py-3 text-left text-blue-800">Ad</th>
                  <th className="px-4 py-3 text-left text-blue-800">Soyad</th>
                  <th className="px-4 py-3 text-left text-blue-800">Yaş</th>
                  <th className="px-4 py-3 text-left text-blue-800">Mahalle</th>
                  <th className="px-4 py-3 text-left text-blue-800">İlçe</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((person) => (
                  <tr 
                    key={person.id}
                    className="border-b border-blue-100 hover:bg-blue-50"
                  >
                    <td className="px-4 py-3">{person.ad}</td>
                    <td className="px-4 py-3">{person.soyad}</td>
                    <td className="px-4 py-3">{person.yas}</td>
                    <td className="px-4 py-3">{person.mahalle}</td>
                    <td className="px-4 py-3">{person.ilce}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {filteredData.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                Sonuç bulunamadı
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
} 