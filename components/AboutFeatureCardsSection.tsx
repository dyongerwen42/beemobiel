'use client'

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

const features = [
  {
    title: 'Betaalbare Tarieven',
    icon: (
      <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    bgColor: 'bg-white',
    textColor: 'text-gray-900',
  },
  {
    title: 'Veilig Rijden',
    icon: (
      <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    bgColor: 'bg-white',
    textColor: 'text-gray-900',
  },
  {
    title: 'Verkeersregels Leren',
    icon: (
      <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    bgColor: 'bg-yellow-600',
    textColor: 'text-white',
  },
]

export default function AboutFeatureCardsSection() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 })

  return (
    <section ref={ref} className="py-6 sm:py-10 md:py-14 lg:py-16 bg-gray-50 relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${feature.bgColor} rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`${feature.textColor} mb-4 sm:mb-6`}>
                {feature.icon}
              </div>
              <h3 className={`${feature.textColor} text-xl sm:text-2xl md:text-3xl font-bold leading-tight`}>
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

