'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

export default function ContactHeroSection() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 })
  
  return (
    <section ref={ref} className="relative min-h-[35vh] sm:min-h-[40vh] md:min-h-[45vh] lg:min-h-[50vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/instructor-with-female-student-at-the-driving-school-outdooors-1.jpg"
          alt="Contact"
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/75 to-black/70"></div>
      </div>
      
      {/* Content */}
      <div className={`relative z-10 w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8 py-8 sm:py-10 md:py-12 lg:py-14 text-center`}>
        {/* Breadcrumb */}
        <div className={`mb-3 sm:mb-4 transition-all duration-700 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <nav className="flex items-center justify-center text-white/95 text-xs sm:text-sm" aria-label="Breadcrumb">
            <Link 
              href="/" 
              className="hover:text-yellow-400 transition-colors duration-300 font-medium"
            >
              Home
            </Link>
            <span className="mx-2 text-white/60"> &gt; </span>
            <span className="text-white font-medium">Neem contact met ons op</span>
          </nav>
        </div>
        
        {/* Title */}
        <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-[1.15] sm:leading-[1.1] tracking-tight text-shadow-lg transition-all duration-700 px-2 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ animationDelay: '0.1s' }}>
          NEEM CONTACT MET ONS OP
        </h1>
      </div>
    </section>
  )
}

