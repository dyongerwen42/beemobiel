'use client'

import Link from 'next/link'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

export default function CTAFinalSection() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.2 })

  return (
    <section ref={ref} className="relative py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* Enhanced Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-yellow-600/10 to-yellow-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(251, 191, 36, 0.2) 1px, transparent 0)`,
          backgroundSize: '60px 60px',
        }}></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8 text-center">
        <div className={`transition-all duration-700 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 mb-4 sm:mb-5 md:mb-6 leading-tight px-2 tracking-tight pb-2">
            <span className="relative inline-block bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Word Vandaag Nog Een
            </span>
            <br />
            <span className="relative inline-block bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 bg-clip-text text-transparent [text-shadow:_0_2px_15px_rgba(251,191,36,0.2)]">
              Zelfverzekerde Chauffeur
            </span>
          </h2>
        </div>
        
        <p className={`text-sm sm:text-base md:text-lg text-gray-700 max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12 leading-relaxed px-2 font-semibold transition-all duration-700 pb-1 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ animationDelay: '0.1s' }}>
          Bij ons leer je niet alleen rijden, maar ook vertrouwen opbouwen achter het stuur. Neem vandaag nog de eerste stap naar veilige en zelfstandige mobiliteit.
        </p>
        
        <div className={`flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-7 transition-all duration-700 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ animationDelay: '0.2s' }}>
          <Link 
            href="/tarieven"
            className="group relative inline-flex items-center justify-center gap-3 px-9 sm:px-11 py-5 sm:py-6 bg-white border-2 border-gray-900 text-gray-900 font-black rounded-2xl text-sm sm:text-base uppercase tracking-wider overflow-hidden transition-all duration-500 shadow-2xl hover:shadow-gray-900/40 transform hover:scale-110"
          >
            <span className="relative z-10">Alle Lessen</span>
            <svg className="relative z-10 w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-100/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </Link>
          <Link 
            href="/contact"
            className="group relative inline-flex items-center justify-center gap-3 px-9 sm:px-11 py-5 sm:py-6 bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 text-gray-900 font-black rounded-2xl text-sm sm:text-base uppercase tracking-wider overflow-hidden transition-all duration-500 shadow-2xl hover:shadow-yellow-600/60 transform hover:scale-110"
          >
            <span className="relative z-10">Neem Contact Op</span>
            <svg className="relative z-10 w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </Link>
        </div>
      </div>
    </section>
  )
}
