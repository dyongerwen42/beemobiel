'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

export default function TipsIntroSection() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 })

  return (
    <section ref={ref} className="py-6 sm:py-10 md:py-14 lg:py-16 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-600/5 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(251, 191, 36, 0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}></div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 md:gap-20 lg:gap-24 items-center">
          {/* Image Column with Premium Effects */}
          <div className={`relative h-64 sm:h-80 md:h-96 lg:h-[650px] rounded-3xl overflow-hidden shadow-xl group transition-all duration-1000 ${isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
            
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
          <div className={`transition-all duration-1000 ${isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-yellow-600/10 backdrop-blur-sm rounded-full mb-4 sm:mb-6 border border-yellow-600/20">
              <div className="w-2 h-2 bg-yellow-600 rounded-full mr-2 animate-pulse"></div>
              <p className="text-yellow-700 uppercase font-bold text-xs sm:text-sm tracking-widest">
                Tips en trucs
              </p>
            </div>
            
            {/* Heading with Gradient */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 sm:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                Voor een vlot en
              </span>
              <br />
              <span className="bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                succesvol examen
              </span>
            </h2>
            
            {/* Text Content with Glassmorphism Card */}
            <div className="space-y-5 sm:space-y-6 mb-8 sm:mb-10">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-5 sm:p-6 border border-gray-200/50 shadow-lg">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-medium">
                  Tips en trucs spelen een belangrijke rol bij het behalen van je theorie- en praktijkexamen. Dit geldt voor je autorijbewijs, je motorrijbewijs en je scooterrijbewijs. Onze ervaren instructeurs gaan namelijk al een tijdje mee in het vak. Hierdoor weten ze als geen ander wat er van jou gevraagd wordt.
                </p>
              </div>
              <div className="bg-gradient-to-br from-yellow-50/80 to-yellow-100/40 backdrop-blur-sm rounded-2xl p-5 sm:p-6 border border-yellow-200/50 shadow-lg">
                <p className="text-base sm:text-lg text-gray-800 leading-relaxed font-medium">
                  Aan de hand van specifieke tips en trucs zorgen wij ervoor dat jij je kansen maximaliseert en zodoende precies weet waar je op moet letten om zo snel mogelijk je rijbewijs te halen met BeeMobiel!
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
                    <li key={index} className="flex items-start group/item bg-white/60 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-gray-200/50 hover:border-yellow-600/50 hover:shadow-lg transition-all duration-300">
                      <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 bg-gradient-to-br from-yellow-600 to-yellow-500 rounded-full flex items-center justify-center mr-3 mt-0.5 group-hover/item:scale-110 transition-transform duration-300 shadow-md">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-800 text-sm sm:text-base leading-relaxed font-medium group-hover/item:text-gray-900 transition-colors duration-300">{item}</span>
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
                    <li key={index} className="flex items-start group/item bg-white/60 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-gray-200/50 hover:border-yellow-600/50 hover:shadow-lg transition-all duration-300">
                      <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 bg-gradient-to-br from-yellow-600 to-yellow-500 rounded-full flex items-center justify-center mr-3 mt-0.5 group-hover/item:scale-110 transition-transform duration-300 shadow-md">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-800 text-sm sm:text-base leading-relaxed font-medium group-hover/item:text-gray-900 transition-colors duration-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Premium CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <Link
                href="/hoe-je-je-rijbewijs-haalt"
                className="group relative inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 text-gray-900 font-black rounded-2xl overflow-hidden transition-all duration-300 shadow-xl hover:shadow-yellow-600/50 transform hover:scale-105 uppercase tracking-wider text-sm sm:text-base"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Bekijk Voorbereidingsgids
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link
                href="/boek-nu"
                className="group relative inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white font-black rounded-2xl overflow-hidden transition-all duration-300 shadow-xl hover:shadow-gray-900/50 transform hover:scale-105 uppercase tracking-wider text-sm sm:text-base"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Boek Nu
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

