'use client'

import { useState } from 'react'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

const faqs = [
  {
    question: 'Kan ik kiezen tussen handgeschakeld en automaat?',
    answer: 'Ja, we bieden rijlessen aan in zowel handgeschakelde als automatische auto\'s.',
  },
  {
    question: 'Hoe lang duurt een rijles?',
    answer: 'Een standaard rijles duurt 60 minuten. Langere lessen zijn ook mogelijk.',
  },
  {
    question: 'Zijn de instructeurs gecertificeerd?',
    answer: 'Zeker! Al onze instructeurs zijn professioneel opgeleid en gecertificeerd.',
  },
  {
    question: 'Kan ik rijles volgen in het Engels?',
    answer: 'Ja, we geven rijlessen in zowel Nederlands als Engels.',
  },
  {
    question: 'Kan ik mijn lessen online boeken?',
    answer: 'Ja, je kunt eenvoudig je lessen boeken of beheren via onze website of contactformulier.',
  },
  {
    question: 'Bieden jullie spoedcursussen aan?',
    answer: 'Ja, wij hebben flexibele pakketten waaronder ook intensieve trainingen.',
  },
]

export default function ErvaringenFAQSection() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 })
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section ref={ref} className="py-6 sm:py-10 md:py-14 lg:py-16 bg-gray-50 relative overflow-hidden">
      <div className="w-full max-w-4xl mx-auto px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8">
        <div className={`text-center mb-5 sm:mb-6 md:mb-8 lg:mb-12 transition-opacity duration-700 ${isIntersecting ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-yellow-600 uppercase font-bold text-xs sm:text-sm tracking-wide mb-2 sm:mb-2.5 px-2">
            Veelgestelde Vragen
          </p>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-2.5 sm:mb-3 md:mb-4 leading-tight px-2">
            Informatie & Richtlijnen
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed px-2">
            Bekijk hieronder belangrijke informatie over onze rijlessen, tarieven en werkwijze. Deze richtlijnen helpen u om goed voorbereid aan uw rijopleiding te beginnen.
          </p>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white border-2 border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:border-yellow-400 ${
                isIntersecting ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.05 + 0.2}s` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 sm:px-8 py-4 sm:py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-base sm:text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 sm:w-6 sm:h-6 text-yellow-600 flex-shrink-0 transform transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 sm:px-8 pb-4 sm:pb-5 pt-0">
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}




