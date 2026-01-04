'use client'

import { useState } from 'react'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

const faqs = [
  {
    question: 'Welke rijlessen bieden jullie aan?',
    answer: 'Wij bieden rijlessen voor auto\'s (handgeschakeld en automaat), motoren en scooters.',
  },
  {
    question: 'Wat kost een rijles?',
    answer: 'Onze standaard prijs is ongeveer €60 per uur.',
  },
  {
    question: 'Hebben jullie pakketten met meerdere lessen?',
    answer: 'Ja, wij bieden verschillende lespakketten aan met voordelige tarieven.',
  },
  {
    question: 'Kan ik kiezen tussen automaat en handgeschakeld?',
    answer: 'Zeker, je kunt lessen volgen in een automaat of handgeschakelde auto.',
  },
  {
    question: 'In welke regio geven jullie rijlessen?',
    answer: 'Wij geven les in Nederland en omliggende gebieden.',
  },
  {
    question: 'Zijn jullie instructeurs gecertificeerd?',
    answer: 'Ja, al onze instructeurs zijn professioneel opgeleid en gecertificeerd.',
  },
  {
    question: 'Hoe plan ik mijn eerste rijles?',
    answer: 'Neem contact met ons op via het formulier, WhatsApp of telefonisch.',
  },
  {
    question: 'Hoe lang duurt een rijles?',
    answer: 'Een standaard rijles duurt 60 minuten.',
  },
  {
    question: 'Kan ik zonder theorie-examen beginnen?',
    answer: 'Ja, je kunt met praktijklessen starten voordat je je theorie-examen haalt.',
  },
  {
    question: 'In welke taal worden de lessen gegeven?',
    answer: 'Onze lessen zijn standaard in het Nederlands, maar Engels is ook mogelijk.',
  },
]

export default function FAQQuestionsSection() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 })
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section ref={ref} className="py-6 sm:py-10 md:py-14 lg:py-16 bg-white relative overflow-hidden">
      <div className="w-full max-w-4xl mx-auto px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8">
        <div className={`text-center mb-5 sm:mb-6 md:mb-8 lg:mb-12 transition-opacity duration-700 ${isIntersecting ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-2.5 sm:mb-3 md:mb-4 leading-tight px-2">
            Veelgestelde Vragen
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed px-2">
            Informatie & Richtlijnen
          </p>
          <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed mt-2 sm:mt-3 px-2">
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





