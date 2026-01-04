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
          src="/images/DSC03967.jpg"
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
        <nav
          className={`mb-2 sm:mb-3 flex items-center justify-center gap-2 text-xs sm:text-sm transition-all duration-1000 ${
            isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
          aria-label="Breadcrumb"
          style={{ animationDelay: '0s' }}
        >
          <Link
            href="/"
            className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300 font-medium flex items-center"
          >
            Home
          </Link>
          <span className="text-yellow-500/70 flex items-center leading-none">›</span>
          <span className="text-white/90 font-medium flex items-center">Neem contact met ons op</span>
        </nav>
        
        {/* Title */}
        <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-[1.15] sm:leading-[1.1] tracking-tight text-shadow-lg transition-all duration-700 px-2 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ animationDelay: '0.1s' }}>
          NEEM CONTACT MET ONS OP
        </h1>
      </div>
    </section>
  )
}

