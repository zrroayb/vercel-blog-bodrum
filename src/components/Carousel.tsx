'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slides = [
    {
      image: '/slide1.jpg',
      title: 'Hoş Geldiniz',
      description: 'Profesyonel hizmetlerimizle yanınızdayız'
    },
    {
      image: '/slide2.jpg',
      title: 'Kaliteli Hizmet',
      description: 'Müşteri memnuniyeti önceliğimizdir'
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative h-full min-h-[400px] w-full overflow-hidden rounded-lg">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-500 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white rounded-lg">
            <div className="text-center p-4">
              <h2 className="text-3xl font-bold mb-2">{slide.title}</h2>
              <p className="text-lg">{slide.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
} 