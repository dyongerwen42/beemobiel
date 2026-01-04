'use client'

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import Image from 'next/image'

export default function ContactIntroSection() {
  const { ref, isIntersecting } = useIntersectionObserver()
  
  const contactCards = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Locatie",
      content: "Zuid-Holland",
      bgColor: "bg-white",
      iconBgColor: "bg-yellow-600",
      iconTextColor: "text-black",
      titleColor: "text-black",
      contentColor: "text-black"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Bel Ons",
      content: "(+31)71 220 3046",
      bgColor: "bg-yellow-600",
      iconBgColor: "bg-black",
      iconTextColor: "text-white",
      titleColor: "text-black",
      contentColor: "text-black",
      link: "tel:+31712203046"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "E-Mail",
      content: "rijschool@beemobiel.nl",
      bgColor: "bg-white",
      iconBgColor: "bg-yellow-600",
      iconTextColor: "text-black",
      titleColor: "text-black",
      contentColor: "text-black",
      link: "mailto:rijschool@beemobiel.nl"
    },
    {
      icon: (
        <Image
          src="/images/WhatsApp.svg.png"
          alt="WhatsApp"
          width={32}
          height={32}
          className="w-8 h-8 sm:w-9 sm:h-9"
        />
      ),
      title: "WhatsApp",
      content: "(+31)63 435 2236",
      bgColor: "bg-white",
      iconBgColor: "bg-white",
      iconTextColor: "text-white",
      titleColor: "text-black",
      contentColor: "text-black",
      link: "https://wa.me/31634352236"
    }
  ]

  return (
    <section ref={ref} className="py-6 sm:py-10 md:py-14 lg:py-16 bg-gradient-to-b from-white to-gray-50/50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-20 right-10 w-96 h-96 bg-yellow-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-yellow-400 rounded-full blur-3xl"></div>
      </div>
      
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-start">
          {/* Left side - Text content */}
          <div className={`transition-all duration-700 ${isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4 sm:mb-6 leading-tight">
              Persoonlijk advies nodig of zit je met een vraag?
            </h2>
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-yellow-600 mb-6 sm:mb-8 leading-tight">
              BeeMobiel staat voor je klaar!
            </h3>
            <div className="space-y-4 sm:space-y-5">
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                We kunnen het ons goed voorstellen dat je een vraag hebt of op zoek bent naar persoonlijk advies. Om die reden staan we ook altijd voor je klaar om extra informatie aan te leveren en/of even kort over jouw traject voor het behalen van je rijbewijs te spreken.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                Wil je dus nu je vraag stellen of advies ontvangen over het halen van je rijbewijs? Neem dan gerust contact met ons op en wij reageren zo snel mogelijk.
              </p>
              <p className="text-base sm:text-lg md:text-xl font-bold text-gray-900 pt-2">
                Bel, stuur een mail of vul hieronder het contactformulier even in!
              </p>
            </div>
          </div>

          {/* Right side - Contact cards */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {contactCards.map((card, index) => {
              const CardContent = (
                <div className={`${card.bgColor} rounded-lg sm:rounded-xl p-4 sm:p-5 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group border ${
                  card.bgColor === 'bg-yellow-600' 
                    ? 'border-yellow-500/50 hover:border-yellow-600' 
                    : 'border-gray-200 hover:border-yellow-300'
                } transform hover:-translate-y-0.5`}>
                  <div className={`${card.iconBgColor} ${card.iconTextColor} w-10 h-10 sm:w-11 sm:h-11 aspect-square flex items-center justify-center mb-2.5 sm:mb-3 rounded-lg transition-transform duration-300 group-hover:scale-105`}>
                    {card.icon}
                  </div>
                  <h4 className={`${card.titleColor} font-semibold text-xs sm:text-sm mb-1 transition-colors duration-300 ${
                    card.link ? 'group-hover:text-yellow-600' : ''
                  }`}>
                    {card.title}
                  </h4>
                  <p className={`${card.contentColor} text-xs sm:text-sm leading-relaxed`}>
                    {card.content}
                  </p>
                </div>
              )

              return (
                <div
                  key={index}
                  className={`transition-all duration-700 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
                >
                  {card.link ? (
                    <a 
                      href={card.link} 
                      target={card.link.startsWith('http') ? '_blank' : undefined} 
                      rel={card.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="block"
                      aria-label={`Contacteer ons via ${card.title}`}
                    >
                      {CardContent}
                    </a>
                  ) : (
                    CardContent
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

