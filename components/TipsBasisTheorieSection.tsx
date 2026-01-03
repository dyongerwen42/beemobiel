'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

export default function TipsBasisTheorieSection() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 })

  return (
    <section ref={ref} className="py-6 sm:py-10 md:py-14 lg:py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden scroll-mt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(251, 191, 36, 0.2) 1px, transparent 0)`,
          backgroundSize: '50px 50px',
        }}></div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 md:gap-20 lg:gap-24 items-center">
          {/* Premium Image Column */}
          <div className={`relative h-64 sm:h-80 md:h-96 lg:h-[650px] rounded-3xl overflow-hidden shadow-xl group transition-all duration-1000 ${isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>
            
            <Image
              src="/images/DSC03944.jpg"
              alt="Rijtheorie leren"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
              sizes="(max-width: 1024px) 100vw, 50vw"
              loading="lazy"
            />
            
            {/* Multi-layer Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/20 via-transparent to-transparent"></div>
            
            {/* Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            
            {/* Corner Accents */}
            <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-yellow-600/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-yellow-600/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* Premium Content Column */}
          <div className={`transition-all duration-1000 ${isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-yellow-600/20 backdrop-blur-sm rounded-full mb-4 sm:mb-6 border border-yellow-600/30">
              <div className="w-2 h-2 bg-yellow-600 rounded-full mr-2 animate-pulse"></div>
              <p className="text-yellow-400 uppercase font-bold text-xs sm:text-sm tracking-widest">
                Basis van de Rijtheorie
              </p>
            </div>
            
            {/* Heading with Gradient */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 sm:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                Begrijp de regels
              </span>
              <br />
              <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 bg-clip-text text-transparent">
                vóór je de weg op gaat.
              </span>
            </h2>
            
            {/* Text Content with Glassmorphism Cards */}
            <div className="space-y-5 sm:space-y-6 mb-8 sm:mb-10">
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-white/10 shadow-xl">
                <p className="text-base sm:text-lg text-gray-200 leading-relaxed font-medium">
                  Leer de belangrijkste verkeersregels, verkeersborden en veilige rijpraktijken.
                </p>
              </div>
              <div className="bg-gradient-to-br from-yellow-600/10 to-yellow-500/5 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-yellow-600/20 shadow-xl">
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-medium">
                  Het begrijpen van verkeersregels is essentieel voordat je begint met rijlessen. In deze sectie krijg je toegang tot zorgvuldig samengesteld lesmateriaal dat je helpt bij het leren van verkeersborden, voorrangsregels en andere belangrijke onderdelen van de verkeersveiligheid. Of je nu helemaal nieuw bent of je kennis wilt opfrissen, deze theorie helpt je om met meer vertrouwen aan je praktijkexamen te beginnen. Je leert situaties inschatten, fouten vermijden en sneller de juiste beslissingen nemen op de weg.
                </p>
              </div>
            </div>

            {/* Premium CTA Button */}
            <Link
              href="/tips/rijtips"
              className="group relative inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 text-gray-900 font-black rounded-2xl overflow-hidden transition-all duration-300 shadow-xl hover:shadow-yellow-600/50 transform hover:scale-105 uppercase tracking-wider text-sm sm:text-base"
            >
              <span className="relative z-10 flex items-center gap-2">
                Lees meer
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

