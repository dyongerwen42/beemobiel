'use client'

import Link from 'next/link'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

export default function CTAFinalSection() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.2 })

  return (
    <section ref={ref} className="relative py-8 sm:py-10 md:py-12 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-600/5 rounded-full blur-3xl"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8 text-center">
        <div className={`transition-all duration-700 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold text-gray-900 mb-2.5 sm:mb-3 md:mb-4 leading-tight px-2">
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Word Vandaag Nog Een Zelfverzekerde Chauffeur
            </span>
          </h2>
        </div>
        
        <p className={`text-xs sm:text-sm md:text-base text-gray-700 max-w-2xl mx-auto mb-4 sm:mb-5 md:mb-6 leading-relaxed px-2 transition-all duration-700 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ animationDelay: '0.1s' }}>
          Bij ons leer je niet alleen rijden, maar ook vertrouwen opbouwen achter het stuur. Neem vandaag nog de eerste stap naar veilige en zelfstandige mobiliteit.
        </p>
        
        <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 transition-all duration-700 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ animationDelay: '0.2s' }}>
          <Link 
            href="/lessen"
            className="group relative inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-white border-2 border-gray-900 text-gray-900 font-black rounded-xl text-sm sm:text-base uppercase tracking-wider overflow-hidden transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              Alle Lessen
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </Link>
          <Link 
            href="/contact"
            className="group relative inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 text-gray-900 font-black rounded-xl text-sm sm:text-base uppercase tracking-wider overflow-hidden transition-all duration-300 shadow-2xl hover:shadow-yellow-600/50 transform hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              Neem Contact Op
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
        </div>
      </div>
    </section>
  )
}
