'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

export default function TipsBasisTheorieSection() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 })

  return (
    <section id="driving_theory" ref={ref} className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden scroll-mt-20">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-yellow-600/15 to-yellow-500/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-yellow-500/15 to-yellow-600/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute inset-0 opacity-[0.06]" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(251, 191, 36, 0.3) 1px, transparent 0)`,
          backgroundSize: '60px 60px',
        }}></div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 md:gap-20 lg:gap-16 items-stretch">
          {/* Enhanced Premium Image Column */}
          <div className={`relative h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl group transition-all duration-1000 ${isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            {/* Enhanced Glow Effect */}
            <div className="absolute -inset-2 bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 rounded-3xl opacity-0 group-hover:opacity-40 blur-2xl transition-opacity duration-700"></div>
            <div className="absolute -inset-1 bg-gradient-to-br from-yellow-400/25 to-yellow-600/25 rounded-3xl opacity-60 blur-xl"></div>
            
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
          <div className={`transition-all duration-1000 flex flex-col lg:min-h-[500px] ${isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            {/* Enhanced Badge */}
            <div className="inline-flex items-center px-5 py-2.5 bg-yellow-600/25 backdrop-blur-md rounded-full mb-5 sm:mb-7 border-2 border-yellow-600/40 shadow-lg group/badge hover:shadow-xl transition-all duration-300">
              <div className="w-2.5 h-2.5 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full mr-3 animate-pulse shadow-md shadow-yellow-600/50"></div>
              <p className="text-yellow-300 uppercase font-black text-xs sm:text-sm md:text-base tracking-widest group-hover/badge:text-yellow-200 transition-colors duration-300">
                Basis van de Rijtheorie
              </p>
            </div>
            
            {/* Enhanced Heading with Gradient */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-7 sm:mb-9 leading-tight tracking-tight">
              <span className="relative inline-block bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent [text-shadow:_0_2px_20px_rgba(255,255,255,0.2)]">
                Begrijp de regels
              </span>
              <br />
              <span className="relative inline-block bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 bg-clip-text text-transparent [text-shadow:_0_2px_20px_rgba(251,191,36,0.4)]">
                vóór je de weg op gaat.
              </span>
            </h2>
            
            {/* Enhanced Text Content with Premium Glassmorphism Cards */}
            <div className="space-y-8 sm:space-y-10 mb-9 sm:mb-11">
              <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border-2 border-white/15 shadow-2xl group/card overflow-hidden hover:shadow-3xl transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/10 via-transparent to-yellow-600/10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
                <p className="relative z-10 text-sm sm:text-base md:text-lg text-gray-100 leading-relaxed font-semibold">
                  Leer de belangrijkste verkeersregels, verkeersborden en veilige rijpraktijken.
                </p>
              </div>
              <div className="relative bg-gradient-to-br from-yellow-600/15 to-yellow-500/10 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border-2 border-yellow-600/30 shadow-2xl group/card overflow-hidden hover:shadow-3xl transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/15 via-yellow-600/10 to-yellow-500/15 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
                <p className="relative z-10 text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed font-semibold">
                  Het begrijpen van verkeersregels is essentieel voordat je begint met rijlessen. In deze sectie krijg je toegang tot zorgvuldig samengesteld lesmateriaal dat je helpt bij het leren van verkeersborden, voorrangsregels en andere belangrijke onderdelen van de verkeersveiligheid. Of je nu helemaal nieuw bent of je kennis wilt opfrissen, deze theorie helpt je om met meer vertrouwen aan je praktijkexamen te beginnen. Je leert situaties inschatten, fouten vermijden en sneller de juiste beslissingen nemen op de weg.
                </p>
              </div>
            </div>

            {/* Enhanced Premium CTA Button */}
            <Link
              href="/tips/rijtips"
              className="group relative inline-flex items-center justify-center px-9 sm:px-11 py-5 sm:py-6 bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 text-gray-900 font-black rounded-2xl overflow-hidden transition-all duration-500 shadow-2xl hover:shadow-yellow-600/60 transform hover:scale-110 uppercase tracking-wider text-sm sm:text-base"
            >
              <span className="relative z-10 flex items-center gap-3">
                Lees meer
                <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

