'use client'

import Image from 'next/image'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

interface ArticleHeroSectionProps {
  title: string
  subtitle?: string
  image: string
  imageAlt: string
}

export default function ArticleHeroSection({ title, subtitle, image, imageAlt }: ArticleHeroSectionProps) {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 })

  return (
    <section
      ref={ref}
      className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-[75vh] lg:min-h-[80vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-black/75"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8 py-8 sm:py-10 md:py-12 lg:py-14 text-center">
        <div
          className={`inline-flex items-center px-2.5 sm:px-3 md:px-3.5 py-1 sm:py-1.5 md:py-1.5 bg-yellow-50/90 backdrop-blur-sm rounded-full mb-2 sm:mb-2.5 md:mb-3 border border-yellow-200/60 shadow-md transition-opacity duration-700 ${
            isIntersecting ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-600 rounded-full mr-1.5 sm:mr-2 animate-pulse"></div>
          <p className="text-yellow-700 uppercase font-bold text-xs sm:text-sm tracking-wider">
            Tips en Trucs
          </p>
        </div>

        <h1
          className={`text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-2.5 sm:mb-3 md:mb-4 leading-[1.1] sm:leading-[1.05] tracking-tight transition-opacity duration-700 ${
            isIntersecting ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.1s' }}
        >
          {title}
        </h1>

        {subtitle && (
          <p
            className={`text-sm sm:text-base md:text-lg text-white/95 max-w-4xl mx-auto leading-relaxed text-shadow-premium transition-opacity duration-700 ${
              isIntersecting ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.2s' }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}

