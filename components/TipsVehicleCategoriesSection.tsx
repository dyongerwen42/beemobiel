'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

const vehicleCategories = [
  {
    id: 'auto',
    title: "Auto Tips",
    description: "Specifieke tips voor autorijlessen",
    tips: [
      {
        title: "Eerste Rijles Auto",
        content: "Wat te verwachten van je eerste autorijles en hoe je je het beste kunt voorbereiden.",
        link: "/tips/eerste-rijles"
      },
      {
        title: "Examenfouten Auto",
        content: "De meest gemaakte fouten tijdens het autorijexamen en hoe deze te vermijden.",
        link: "/tips/examenfouten"
      },
      {
        title: "Rotondes Rijden",
        content: "Veilig en zelfverzekerd rotondes navigeren in de auto.",
        link: "/tips/rotondes"
      }
    ]
  },
  {
    id: 'motor',
    title: "Motor Tips",
    description: "Specifieke tips voor motorrijlessen",
    tips: [
      {
        title: "Motorbeheersing",
        content: "Leer de basistechnieken voor veilige motorbeheersing en balans.",
        link: "#motor-tips"
      },
      {
        title: "Motor Examenprocedure",
        content: "Alles wat je moet weten over het motor praktijkexamen.",
        link: "#motor-examen"
      }
    ]
  },
  {
    id: 'scooter',
    title: "Scooter & Brommer Tips",
    description: "Specifieke tips voor scooter- en brommerlessen",
    tips: [
      {
        title: "Scooter Basisvaardigheden",
        content: "De fundamenten van veilig scooter rijden en verkeersregels.",
        link: "#scooter-tips"
      },
      {
        title: "Bromfiets Examenprocedure",
        content: "Voorbereiding op het bromfiets praktijkexamen.",
        link: "#bromfiets-examen"
      }
    ]
  }
]

export default function TipsVehicleCategoriesSection() {
  const { ref, isIntersecting } = useIntersectionObserver()
  const [activeCategory, setActiveCategory] = useState('auto')

  return (
    <section ref={ref} className="py-6 sm:py-10 md:py-14 lg:py-16 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8 relative z-10">
        <div className={`text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 transition-opacity duration-700 ${isIntersecting ? 'opacity-100' : 'opacity-0'}`}>
          <div className="inline-flex items-center px-2.5 sm:px-3 md:px-3.5 py-1 sm:py-1.5 md:py-1.5 bg-yellow-50/90 backdrop-blur-sm rounded-full mb-1.5 sm:mb-2 md:mb-2.5 border border-yellow-200/60 shadow-md">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-600 rounded-full mr-1.5 sm:mr-2 animate-pulse"></div>
            <p className="text-yellow-700 uppercase font-bold text-xs sm:text-sm tracking-wider">Per Voertuigtype</p>
          </div>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-2.5 sm:mb-3 md:mb-4 leading-tight px-2">
            Tips per voertuigtype
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed px-2">
            Elke voertuigtype heeft specifieke uitdagingen. Ontdek gerichte tips voor jouw rijbewijs.
          </p>
        </div>

        {/* Category Tabs */}
        <div className={`flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-10 md:mb-12 transition-opacity duration-700 ${isIntersecting ? 'opacity-100' : 'opacity-0'}`}>
          {vehicleCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-yellow-600 text-gray-900 shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-yellow-50 hover:text-yellow-700 border border-gray-200'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Category Content */}
        <div className={`transition-opacity duration-700 ${isIntersecting ? 'opacity-100' : 'opacity-0'}`}>
          {vehicleCategories.map((category) => (
            <div
              key={category.id}
              className={`${activeCategory === category.id ? 'block' : 'hidden'}`}
            >
              <div className="text-center mb-8 sm:mb-10">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                  {category.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
                  {category.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {category.tips.map((tip, index) => (
                  <Link
                    key={index}
                    href={tip.link}
                    className="group bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-200 hover:border-yellow-400"
                  >
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-yellow-600 transition-colors duration-300">
                      {tip.title}
                    </h4>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {tip.content}
                    </p>
                    <div className="mt-4 sm:mt-6 flex items-center text-yellow-600 font-semibold text-sm sm:text-base">
                      <span className="group-hover:mr-2 transition-all duration-300">Lees meer</span>
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:ml-3 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
