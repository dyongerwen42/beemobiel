'use client'

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

export default function ContactInfoSection() {
  const { ref, isIntersecting } = useIntersectionObserver()
  
  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "E-mail",
      content: "rijschool@beemobiel.nl",
      link: "mailto:rijschool@beemobiel.nl"
    },
    {
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Telefoon",
      content: "071 220 3046",
      link: "tel:0712203046"
    },
    {
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Locatie",
      content: "Nederland",
      link: null
    }
  ]

  return (
    <section ref={ref} className="py-6 sm:py-10 md:py-14 lg:py-16 bg-gray-50 relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8">
        {/* Header */}
        <div className={`text-center mb-5 sm:mb-6 md:mb-8 lg:mb-12 transition-opacity duration-700 ${isIntersecting ? 'opacity-100' : 'opacity-0'}`}>
          <div className="inline-flex items-center px-3 sm:px-3.5 md:px-4 py-1.5 sm:py-1.5 md:py-2 bg-yellow-50/90 backdrop-blur-sm rounded-full mb-2.5 sm:mb-3 md:mb-4 border border-yellow-200/60 shadow-md">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-600 rounded-full mr-2 sm:mr-2.5"></div>
            <p className="text-yellow-700 uppercase font-bold text-xs sm:text-sm md:text-base tracking-wider">Contactgegevens</p>
          </div>
          <h2 className={`text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-2.5 sm:mb-3 md:mb-4 leading-tight transition-opacity duration-700 px-2 ${isIntersecting ? 'opacity-100' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
            Neem contact met ons op
          </h2>
        </div>
        
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8">
          {contactInfo.map((info, index) => {
            const content = info.link ? (
              <a
                href={info.link}
                className="group relative bg-white rounded-lg sm:rounded-xl md:rounded-2xl p-3.5 sm:p-4 md:p-5 lg:p-6 xl:p-7 shadow-md hover:shadow-lg transition-all duration-300 border-2 border-gray-100 hover:border-yellow-400 flex flex-col items-center text-center min-h-[140px] sm:min-h-[160px] md:min-h-[180px] justify-center"
                aria-label={`${info.title}: ${info.content}`}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-14 lg:h-14 rounded-full bg-yellow-600 flex items-center justify-center mb-2.5 sm:mb-3 md:mb-4 text-white shadow-md transform group-hover:scale-110 group-active:scale-95 transition-transform duration-300">
                  {info.icon}
                </div>
                <h3 className="text-base sm:text-lg md:text-xl lg:text-xl font-bold text-gray-900 mb-1.5 sm:mb-2 md:mb-2.5 group-hover:text-yellow-600 transition-colors duration-300">
                  {info.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-base font-medium break-words">
                  {info.content}
                </p>
              </a>
            ) : (
              <div className="group relative bg-white rounded-lg sm:rounded-xl md:rounded-2xl p-3.5 sm:p-4 md:p-5 lg:p-6 xl:p-7 shadow-md hover:shadow-lg transition-all duration-300 border-2 border-gray-100 hover:border-yellow-400 flex flex-col items-center text-center min-h-[140px] sm:min-h-[160px] md:min-h-[180px] justify-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-14 lg:h-14 rounded-full bg-yellow-600 flex items-center justify-center mb-2.5 sm:mb-3 md:mb-4 text-white shadow-md transform group-hover:scale-110 transition-transform duration-300">
                  {info.icon}
                </div>
                <h3 className="text-base sm:text-lg md:text-xl lg:text-xl font-bold text-gray-900 mb-1.5 sm:mb-2 md:mb-2.5 group-hover:text-yellow-600 transition-colors duration-300">
                  {info.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-base font-medium break-words">
                  {info.content}
                </p>
              </div>
            )

            return (
              <div
                key={index}
                className={`transition-opacity duration-700 ${isIntersecting ? 'opacity-100' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.15 + 0.3}s` }}
              >
                {content}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

