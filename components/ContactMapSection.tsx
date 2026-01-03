'use client'

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

export default function ContactMapSection() {
  const { ref, isIntersecting } = useIntersectionObserver()
  
  return (
    <section ref={ref} className="py-6 sm:py-10 md:py-14 lg:py-16 bg-gradient-to-b from-gray-50/50 to-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-600 rounded-full blur-3xl"></div>
      </div>
      
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-5 sm:mb-6 md:mb-8 transition-all duration-700 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold text-gray-900 leading-tight px-2">
            ONZE RIJGEBIEDEN
          </h2>
          <p className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base text-gray-600 max-w-2xl mx-auto px-2">
            We rijden door heel Zuid-Holland. Bekijk hier waar we actief zijn!
          </p>
        </div>
        
        {/* Map */}
        <div className={`transition-all duration-700 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ animationDelay: '0.2s' }}>
          <div className="w-full h-[400px] sm:h-[500px] md:h-[600px] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl border-2 border-gray-200">
            <iframe
              src="https://www.google.com/maps/d/u/0/embed?mid=174S67Xhsv91-qPCTUb-Jrc7TvwOLG3M&ehbc=2E312F&noprof=1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Onze Rijgebieden"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

