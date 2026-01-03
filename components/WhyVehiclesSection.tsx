'use client'

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

const stats = [
  {
    number: "10+",
    label: "Jaren Ervaring"
  },
  {
    number: "200+",
    label: "Studenten Opgeleid"
  },
  {
    number: "95%",
    label: "Slagingspercentage"
  },
  {
    number: "5+",
    label: "Professionele Instructeurs"
  }
]

const skills = [
  {
    label: "Automaat rijlessen",
    percentage: 92
  },
  {
    label: "Schakel rijlessen",
    percentage: 88
  },
  {
    label: "Verkeersinzicht",
    percentage: 85
  },
  {
    label: "",
    percentage: 86
  }
]

export default function WhyVehiclesSection() {
  const { ref, isIntersecting } = useIntersectionObserver()
  
  return (
    <section ref={ref} className="py-6 sm:py-10 md:py-14 lg:py-16 bg-gray-50 relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8">
        {/* Header */}
        <div className={`text-center mb-5 sm:mb-6 md:mb-8 lg:mb-12 ${
          isIntersecting ? 'animate-fade-in-down' : 'opacity-0 invisible'
        }`}>
          <div className="inline-flex items-center px-2.5 sm:px-3 md:px-3.5 py-1 sm:py-1.5 md:py-1.5 bg-yellow-50/90 backdrop-blur-sm rounded-full mb-1.5 sm:mb-2 md:mb-2.5 border border-yellow-200/60 shadow-md">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-600 rounded-full mr-1.5 sm:mr-2 animate-pulse"></div>
            <p className="text-yellow-700 uppercase font-bold text-xs sm:text-sm tracking-wider">Waarom wij</p>
          </div>
          <h2 className={`text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-2.5 sm:mb-3 md:mb-4 leading-tight px-2 ${
            isIntersecting ? 'animate-fade-in-up' : 'opacity-0 invisible'
          }`} style={{ animationDelay: '0.15s' }}>
            Waarom Onze Voertuigen?
          </h2>
          <p className={`text-xs sm:text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed px-2 ${
            isIntersecting ? 'animate-fade-in-up' : 'opacity-0 invisible'
          }`} style={{ animationDelay: '0.3s' }}>
            Onze voertuigen zijn geselecteerd met jouw leerproces en comfort in gedachten. Of je nu leert rijden in een stadsauto of een motorfiets, we zorgen ervoor dat je in het juiste voertuig stapt dat past bij jouw behoeften.
          </p>
        </div>
        
        {/* Stats Grid */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10 mb-8 sm:mb-12 md:mb-16 lg:mb-20 ${
          isIntersecting ? 'animate-fade-in-up' : 'opacity-0 invisible'
        }`} style={{ animationDelay: '0.45s' }}>
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center group"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-600 mb-2 sm:mb-3 transform group-hover:scale-105 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-xs sm:text-sm md:text-base font-semibold text-gray-700">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
        
        {/* Expertise Section */}
        <div className={`${
          isIntersecting ? 'animate-fade-in-up' : 'opacity-0 invisible'
        }`} style={{ animationDelay: '0.6s' }}>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 md:mb-8 text-center">
            Onze Expertise
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-6 md:mb-8 text-center max-w-3xl mx-auto">
            Meer dan 10 jaar ervaring in rijlessen
          </p>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-8 sm:mb-12 md:mb-16 text-center max-w-3xl mx-auto">
            Met meer dan 10 jaar ervaring bieden wij professionele en effectieve rijlessen aan, afgestemd op elke leerling. Onze instructeurs zorgen voor een veilige en zelfverzekerde leeromgeving.
          </p>
          
          {/* Skills */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg border-2 border-gray-100">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 sm:mb-4 gap-2 sm:gap-0">
                  <span className="text-sm sm:text-base md:text-lg font-semibold text-gray-900">
                    {skill.label || 'Rijvaardigheden'}
                  </span>
                  <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-yellow-600">
                    {skill.percentage}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 sm:h-3 md:h-4 overflow-hidden">
                  <div 
                    className="bg-yellow-600 h-full rounded-full transition-all duration-1000"
                    style={{ width: isIntersecting ? `${skill.percentage}%` : '0%' }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

