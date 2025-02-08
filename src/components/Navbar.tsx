'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-blue-800 text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold">
            Bodrum
          </Link>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <div className={`md:flex ${isOpen ? 'block' : 'hidden'}`}>
            <Link href="/" className="px-3 py-2 hover:text-blue-200">
              Ana Sayfa
            </Link>
            <Link href="/nufus-ara" className="px-3 py-2 hover:text-blue-200">
              Nüfus Ara
            </Link>
            <Link href="/hakkimizda" className="px-3 py-2 hover:text-blue-200">
              Hakkımızda
            </Link>
            <Link href="/iletisim" className="px-3 py-2 hover:text-blue-200">
              İletişim
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
} 