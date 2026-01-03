'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

const lessons = [
  {
    title: "Auto'S",
    subtitle: "Jouw rijles, jouw keuze",
    features: [
      "Leer in je eigen tempo.",
      "Automaat of handgeschakeld",
      "Praktische tips voor echte wegen"
    ],
    link: "/tarieven/autos",
    gradient: "from-black/40 to-black/60",
    image: "/images/vehicles_11zon-scaled.webp"
  },
  {
    title: "Motorfiets",
    subtitle: "Jouw rijles, jouw keuze",
    features: [
      "Leer veilige rijtechnieken",
      "Ervaar stad en snelweg",
      "Deskundig vanaf het begin"
    ],
    link: "/tarieven/motorfietsen",
    gradient: "from-black/40 to-black/60",
    image: "/images/motorcycle-lessons_11zon_11zon-scaled.webp"
  },
  {
    title: "Scooter & Brommer",
    subtitle: "Jouw rijles, jouw keuze",
    features: [
      "Leer veilig scooter of brommer rijden",
      "Volledige uitleg over regels en verkeer",
      "Zelfverzekerd de weg op"
    ],
    link: "/tarieven/scooters",
    gradient: "from-black/40 to-black/60",
    image: "/images/Scooter-Moped-Driving-Lessons_11zon_11zon-scaled.webp"
  }
]

export default function LessonsSection() {
  const { ref, isIntersecting } = useIntersectionObserver()
  
  return (
    <section ref={ref} className="py-6 sm:py-10 md:py-14 lg:py-16 bg-white relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8">
        {/* Header - Perfectly centered */}
        <div className={`text-center mb-5 sm:mb-6 md:mb-8 lg:mb-12 ${
          isIntersecting ? 'animate-fade-in-down' : 'opacity-0'
        }`}>
          <div className="inline-flex items-center px-2.5 sm:px-3 md:px-3.5 py-1 sm:py-1.5 md:py-1.5 bg-yellow-50/90 backdrop-blur-sm rounded-full mb-1.5 sm:mb-2 md:mb-2.5 border border-yellow-200/60 shadow-md">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-600 rounded-full mr-1.5 sm:mr-2 animate-pulse"></div>
            <p className="text-yellow-700 uppercase font-bold text-xs sm:text-sm tracking-wider">Rijlessen</p>
          </div>
          <h2 className={`text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-2.5 sm:mb-3 md:mb-4 leading-tight px-2 transition-opacity duration-700 ${
            isIntersecting ? 'opacity-100' : 'opacity-0'
          }`} style={{ animationDelay: '0.1s' }}>
            Leer rijden met{' '}
            <span className="text-yellow-600">
              vertrouwen en gemak
            </span>
          </h2>
          <p className={`text-xs sm:text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed px-2 transition-opacity duration-700 ${
            isIntersecting ? 'opacity-100' : 'opacity-0'
          }`} style={{ animationDelay: '0.2s' }}>
            Onze rijlessen voor auto's, motoren en scooters zijn afgestemd op jouw tempo en niveau. Of je nu kiest voor handgeschakeld of automatisch, wij zorgen voor een veilige, efficiënte en comfortabele leerervaring.
          </p>
        </div>
        
        {/* Lessons Grid - Perfect alignment */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          {lessons.map((lesson, index) => (
            <div 
              key={index} 
              className={`group bg-white rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-yellow-400/50 flex flex-col transition-opacity duration-700 ${
                isIntersecting ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
            >
              {/* Image - Perfect aspect ratio */}
              <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden">
                <Image
                  src={lesson.image}
                  alt={lesson.title}
                  fill
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-opacity duration-500"></div>
              </div>
              
              <div className="p-6 sm:p-8 md:p-10 flex flex-col flex-grow">
                <p className="text-gray-500 uppercase text-xs sm:text-sm font-semibold mb-3 sm:mb-4 tracking-wider">{lesson.subtitle}</p>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6 leading-tight">{lesson.title}</h3>
                
                <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 flex-grow">
                  {lesson.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-yellow-600 flex items-center justify-center mr-3 sm:mr-4 mt-0.5">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href={lesson.link}
                  className="inline-flex items-center gap-2 sm:gap-3 text-yellow-600 font-semibold text-base sm:text-lg hover:gap-4 transition-all duration-200 hover:text-yellow-700"
                >
                  <span>Lees meer</span>
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA - Perfectly centered */}
        <div className="text-center">
          <Link 
            href="/contact"
            className="group inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-yellow-600 text-gray-900 font-bold rounded-xl text-sm sm:text-base uppercase tracking-wide hover:bg-yellow-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <span>Boek je eerste rijles bij ons</span>
            <svg className="w-5 h-5 sm:w-6 sm:h-6 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
