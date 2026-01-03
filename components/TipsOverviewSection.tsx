'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

const tipsArticles = [
  {
    title: 'Basis van de Rijtheorie',
    description: 'Begrijp de regels vóór je de weg op gaat. Leer de belangrijkste verkeersregels, verkeersborden en veilige rijpraktijken. Het begrijpen van verkeersregels is essentieel voordat je begint met rijlessen. In deze sectie krijg je toegang tot zorgvuldig samengesteld lesmateriaal dat je helpt bij het leren van verkeersborden, voorrangsregels en andere belangrijke onderdelen van de verkeersveiligheid. Of je nu helemaal nieuw bent of je kennis wilt opfrissen, deze theorie helpt je om met meer vertrouwen aan je praktijkexamen te beginnen. Je leert situaties inschatten, fouten vermijden en sneller de juiste beslissingen nemen op de weg.',
    image: '/images/instructor-showing-traffic-shemes-to-a-female-student-outdooors-1.jpg',
    link: '/tips/rijtips',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Eerste Rijles',
    description: 'Geen verrassingen – alleen duidelijkheid en vertrouwen. Zenuwachtig voor je eerste les? We laten je stap voor stap zien wat er gebeurt zodra je achter het stuur zit. Zo voel je je zeker voordat je begint.',
    image: '/images/instructor-with-female-student-at-the-driving-school-outdooors-1.jpg',
    link: '/tips/eerste-rijles',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Top 5 Examenfouten',
    description: 'Herken ze. Vermijd ze. Slaag met vertrouwen. Dit zijn de meest gemaakte fouten die mensen hun rijbewijs kosten – en ze zijn makkelijk te voorkomen. Bekijk de video en vergroot je kans om in één keer te slagen.',
    image: '/images/person-taking-driver-s-license-exam_11zon-scaled.webp',
    link: '/tips/examenfouten',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Rotondes Rijden',
    description: 'Invoegen, afslaan, richting aangeven – zonder stress. Veel beginnende bestuurders vinden rotondes lastig. In deze video leggen we stap voor stap uit wat je moet doen om elke keer veilig en soepel te rijden.',
    image: '/images/highway-lessons_11zon-scaled.webp',
    link: '/tips/rotondes',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
  },
]

export default function TipsOverviewSection() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.15 })

  return (
    <section ref={ref} className="py-6 sm:py-10 md:py-14 lg:py-16 bg-white relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8">
        <div className={`text-center mb-5 sm:mb-6 md:mb-8 lg:mb-12 transition-opacity duration-700 ${isIntersecting ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-2.5 sm:mb-3 md:mb-4 leading-tight px-2">
            Handige Tips en Adviezen
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
          {tipsArticles.map((article, idx) => (
            <Link
              key={article.title}
              href={article.link}
              className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl border-2 border-gray-100 hover:border-yellow-400/70 transition-all duration-300 ${
                isIntersecting ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="w-12 h-12 bg-yellow-600 rounded-xl flex items-center justify-center text-gray-900 mb-3 shadow-lg">
                    {article.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{article.title}</h3>
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">{article.description}</p>
                <div className="flex items-center text-yellow-600 font-semibold text-sm sm:text-base group-hover:gap-2 transition-all duration-300">
                  Lees meer
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

