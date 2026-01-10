'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

export default function TipsIntroSection() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 })

  return (
    <section ref={ref} className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-white via-gray-50/90 to-white relative overflow-hidden">
      {/* Enhanced Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-yellow-600/8 to-yellow-500/4 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-yellow-500/8 to-yellow-600/4 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(251, 191, 36, 0.2) 1px, transparent 0)`,
          backgroundSize: '50px 50px',
        }}></div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 md:gap-20 lg:gap-16 items-stretch">
          {/* Enhanced Image Column with Premium Effects */}
          <div className={`relative h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl group transition-all duration-1000 ${isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            {/* Enhanced Glow Effect */}
            <div className="absolute -inset-2 bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 rounded-3xl opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-700"></div>
            <div className="absolute -inset-1 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-3xl opacity-50 blur-xl"></div>
            
            <Image
              src="/images/traffic-cones-car-driving-license-test_11zon-scaled.webp"
              alt="Rijlessen"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
              sizes="(max-width: 1024px) 100vw, 50vw"
              loading="lazy"
            />
            
            {/* Multi-layer Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/10 via-transparent to-transparent"></div>
            
            {/* Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            
            {/* Corner Accents */}
            <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-yellow-600/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-yellow-600/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* Content Column */}
          <div className={`transition-all duration-1000 flex flex-col lg:min-h-[500px] ${isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            {/* Enhanced Badge */}
            <div className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-yellow-50 via-yellow-100/90 to-yellow-50 backdrop-blur-md rounded-full mb-5 sm:mb-7 border-2 border-yellow-300/50 shadow-lg group/badge hover:shadow-xl transition-all duration-300">
              <div className="w-2.5 h-2.5 bg-gradient-to-br from-yellow-600 to-yellow-500 rounded-full mr-3 animate-pulse shadow-md shadow-yellow-600/50"></div>
              <p className="text-yellow-800 uppercase font-black text-xs sm:text-sm md:text-base tracking-widest group-hover/badge:text-yellow-900 transition-colors duration-300">
                Rijtips
              </p>
            </div>
            
            {/* Enhanced Heading with Gradient */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-7 sm:mb-9 leading-tight tracking-tight">
              <span className="relative inline-block bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                Voor een vlot en
              </span>
              <br />
              <span className="relative inline-block bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 bg-clip-text text-transparent [text-shadow:_0_2px_15px_rgba(251,191,36,0.2)]">
                succesvol examen
              </span>
            </h2>
            
            {/* Enhanced Text Content with Premium Glassmorphism Cards */}
            <div className="space-y-6 sm:space-y-7 mb-9 sm:mb-11">
              <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border-2 border-gray-200/60 shadow-xl group/card overflow-hidden hover:shadow-2xl transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/50 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
                <p className="relative z-10 text-sm sm:text-base md:text-lg text-gray-800 leading-relaxed font-semibold">
                  Praktische rijtips spelen een belangrijke rol bij het behalen van je theorie- en praktijkexamen. Dit geldt voor je autorijbewijs, je motorrijbewijs en je scooterrijbewijs. Onze ervaren instructeurs gaan namelijk al een tijdje mee in het vak. Hierdoor weten ze als geen ander wat er van jou gevraagd wordt.
                </p>
              </div>
              <div className="relative bg-gradient-to-br from-yellow-50/90 via-yellow-100/70 to-yellow-50/90 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border-2 border-yellow-300/60 shadow-xl group/card overflow-hidden hover:shadow-2xl transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/50 via-yellow-200/30 to-yellow-100/50 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
                <p className="relative z-10 text-sm sm:text-base md:text-lg text-gray-900 leading-relaxed font-semibold">
                  Aan de hand van specifieke rijtips zorgen wij ervoor dat jij je kansen maximaliseert en zodoende precies weet waar je op moet letten om zo snel mogelijk je rijbewijs te halen met BeeMobiel!
                </p>
              </div>
            </div>

            {/* Decorative Divider */}
            <div className="relative mb-8 sm:mb-10">
              <div className="h-px bg-gradient-to-r from-transparent via-yellow-600/30 to-transparent"></div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-yellow-600 rounded-full"></div>
            </div>

            {/* Wat je gaat leren Section */}
            <div className="mb-8 sm:mb-10">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-6 sm:mb-8">
                <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Wat je gaat leren
                </span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {/* Column 1 */}
                <ul className="space-y-3 sm:space-y-4">
                  {[
                    'Wat examinatoren écht willen zien',
                    'Veelgemaakte fouten en hoe je ze voorkomt',
                    'Hoe je kalm blijft tijdens je examen',
                    'Tips voor lastige verkeerssituaties',
                    'Checklist vóór je de auto opstapt'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start group/item bg-white/80 backdrop-blur-md rounded-xl p-4 sm:p-5 border-2 border-gray-200/60 hover:border-yellow-600/60 hover:shadow-xl transition-all duration-500 hover:scale-[1.02]">
                      <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-yellow-600 to-yellow-500 rounded-full flex items-center justify-center mr-4 mt-0.5 group-hover/item:scale-125 transition-transform duration-500 shadow-lg shadow-yellow-600/50">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-800 text-sm sm:text-base leading-relaxed font-semibold group-hover/item:text-gray-900 transition-colors duration-300">{item}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Column 2 */}
                <ul className="space-y-3 sm:space-y-4">
                  {[
                    'Hoe je soepel schakelt en afremt',
                    'De juiste kijktechniek bij kruispunten',
                    'Hoe je verkeersborden sneller herkent en juist toepast',
                    'Hoe je veilig en zelfverzekerd invoegt',
                    'Wat je moet doen bij onverwachte verkeerssituaties'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start group/item bg-white/80 backdrop-blur-md rounded-xl p-4 sm:p-5 border-2 border-gray-200/60 hover:border-yellow-600/60 hover:shadow-xl transition-all duration-500 hover:scale-[1.02]">
                      <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-yellow-600 to-yellow-500 rounded-full flex items-center justify-center mr-4 mt-0.5 group-hover/item:scale-125 transition-transform duration-500 shadow-lg shadow-yellow-600/50">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-800 text-sm sm:text-base leading-relaxed font-semibold group-hover/item:text-gray-900 transition-colors duration-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Enhanced Premium CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 sm:gap-7">
              <Link
                href="/hoe-je-je-rijbewijs-haalt"
                className="group relative inline-flex items-center justify-center gap-3 px-9 sm:px-11 py-5 sm:py-6 bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 text-gray-900 font-black rounded-2xl overflow-hidden transition-all duration-500 shadow-2xl hover:shadow-yellow-600/60 transform hover:scale-110 uppercase tracking-wider text-sm sm:text-base"
              >
                <span className="relative z-10">Bekijk Voorbereidingsgids</span>
                <svg className="relative z-10 w-6 h-6 group-hover:translate-x-2 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

