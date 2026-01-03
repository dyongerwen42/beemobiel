'use client'

import Link from 'next/link'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

export default function TheoryCTASection() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.2 })

  return (
    <section ref={ref} className="py-6 sm:py-10 md:py-14 lg:py-16 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-600/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8 text-center">
        <h2
          className={`text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-2.5 sm:mb-3 md:mb-4 leading-[1.15] sm:leading-[1.1] tracking-tight px-2 transition-opacity duration-700 ${
            isIntersecting ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Klaar om je theorie-examen te halen?
        </h2>
        <p
          className={`text-xs sm:text-sm md:text-base text-white/90 max-w-2xl mx-auto mb-4 sm:mb-5 md:mb-6 leading-relaxed px-2 transition-opacity duration-700 ${
            isIntersecting ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.1s' }}
        >
          Begin vandaag nog met jouw theorie-opleiding! Kies het pakket dat bij je past en leer in jouw tempo, met professionele begeleiding.
        </p>
        <div
          className={`transition-opacity duration-700 ${isIntersecting ? 'opacity-100' : 'opacity-0'}`}
          style={{ animationDelay: '0.2s' }}
        >
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-yellow-600 text-gray-900 font-bold rounded-xl text-sm sm:text-base md:text-lg uppercase tracking-wide hover:bg-yellow-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <span>Boek je les</span>
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 transform group-hover:translate-x-2 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

