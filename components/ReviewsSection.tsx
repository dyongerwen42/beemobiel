'use client'

import Image from 'next/image'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

const reviews = [
  {
    name: "Kamila Stankiewicz",
    avatar: "K",
    avatarColor: "bg-blue-500",
    rating: 5,
    text: "Easy and stress free learning from really cool driving instructors. Thanks guys!!!",
    role: "Leerling"
  },
  {
    name: "Joey Brandon",
    avatar: "J",
    avatarColor: "bg-green-500",
    rating: 5,
    text: "Hele fijne rijschool voelde me heel erg op me gemak bij samy in de auto altijd veel geduld en duidelijke uitleg echt een aanrader",
    role: "Leerling"
  },
  {
    name: "Amelia Rudzka",
    avatar: "A",
    avatarColor: "bg-pink-500",
    rating: 5,
    text: "Top rijschool! Prettige sfeer, duidelijke uitleg en veel geduld. Ik zou deze rijschool zeker aanraden.",
    role: "Leerling"
  },
  {
    name: "matt",
    avatar: "M",
    avatarColor: "bg-purple-500",
    rating: 5,
    text: "Ik heb in het verleden bij een andere rijschool in de regio gelest, maar deze rijschool steekt er voor mij bovenuit. Het kwaliteitsverschil is duidelijk zichtbaar. Ik ben vooral onder de indruk van de professionele begeleiding en de manier van lesgeven. De instructeur is rustig, legt alles helder uit en heeft veel kennis, waardoor ik me tijdens de lessen zeer goed ondersteund voel, zeker een aanrader!",
    role: "Leerling"
  },
  {
    name: "Marcin Zemler",
    avatar: "M",
    avatarColor: "bg-indigo-500",
    rating: 5,
    text: "Ik kon me geen betere rijschool voorstellen om voor het eerst de weg op te gaan. In één keer mijn rijbewijs gehaald. De instructeur legde alles heel handig uit en wanneer ik toch dingen verkeerd deed had hij ERG VEEL GEDULD en gaf mij weer andere tips om het beter te doen. Wat een geweldige ervaring. Ik kan nu veilig de weg op :)",
    role: "Leerling"
  },
  {
    name: "Nair Haddad",
    avatar: "N",
    avatarColor: "bg-teal-500",
    rating: 5,
    text: "Geweldige rij-instructeur! Ik heb last van examenvrees en kreeg zeer professionele ondersteuning. Dit gaat verder dan een standaard rijles. Ik heb verschillende rijscholen geprobeerd en bij deze heb ik echt mijn vertrouwen gevonden.",
    role: "Leerling"
  },
  {
    name: "Ruben Warmerdam",
    avatar: "R",
    avatarColor: "bg-orange-500",
    rating: 5,
    text: "Damon, een van de beste chauffeurs en instructeurs in de Randstad. Hij is zeer professioneel, geduldig en vriendelijk, en heeft me geholpen mijn rijbewijs te halen. Hij adviseerde me zelfs over het kopen van mijn nieuwe auto en haalde me zelfs op toen de Nederlandse Spoorwegen faalden. Als ik 7 sterren kon geven, zou ik dat doen. Bedankt Damon!",
    role: "Leerling"
  },
  {
    name: "amal el atoui",
    avatar: "A",
    avatarColor: "bg-cyan-500",
    rating: 5,
    text: "Ik ben superblij met deze rijschool! De instructeur is geduldig en legt alles duidelijk uit. Dankzij hun hulp ben ik in één keer geslaagd. Echt een aanrader!",
    role: "Leerling"
  },
  {
    name: "Zuzanna Rita",
    avatar: "Z",
    avatarColor: "bg-rose-500",
    rating: 5,
    text: "Ik kan deze rijschool echt aanraden! Alles ging snel, makkelijk en super soepel. Ik heb ook nog een paar handige tips meegekregen. Echt een aanrader!",
    role: "Leerling"
  },
  {
    name: "Stefano Fazalalikhan",
    avatar: "S",
    avatarColor: "bg-amber-500",
    rating: 5,
    text: "Zeer goede rij instructeur, heel geduldig en weet heel goed alles over te brengen. Legt je alles op een duidelijke manier uit en is verder heel sociaal en betrouwbaar!",
    role: "Leerling"
  },
  {
    name: "Crjik X",
    avatar: "C",
    avatarColor: "bg-emerald-500",
    rating: 5,
    text: "Fantastisch! Instructeur heeft geduld met je en begeleid je in het volledige process! Kan geen betere rijschool aanraden!",
    role: "Leerling"
  },
  {
    name: "Harvey Kleinmoedig",
    avatar: "H",
    avatarColor: "bg-violet-500",
    rating: 5,
    text: "Top instructeur! Hij legt situaties duidelijk uit tijdens en na de rit. Ik voel me echt op mijn gemak! Zeker een aanrader!",
    role: "Leerling"
  },
  {
    name: "Konrad Henke",
    avatar: "K",
    avatarColor: "bg-sky-500",
    rating: 5,
    text: "Een professionele en moderne aanpak van rijlessen, en altijd een prettige en vriendelijke sfeer in de auto. Als je gestrest bent achter het stuur, zou ik deze plek zeker aanraden.",
    role: "Leerling"
  },
  {
    name: "Sophie de Groot",
    avatar: "S",
    avatarColor: "bg-fuchsia-500",
    rating: 5,
    text: "Dankzij Beemobiel heb ik eindelijk mijn rijbewijs gehaald met een goed gevoel! Bedankt voor jullie geduld en duidelijke uitleg :)",
    role: "Leerling"
  }
]

export default function ReviewsSection() {
  const { ref, isIntersecting } = useIntersectionObserver()
  
  return (
    <section ref={ref} className="py-6 sm:py-10 md:py-14 lg:py-16 bg-white relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8">
        {/* Header - Perfectly centered */}
        <div className={`text-center mb-5 sm:mb-6 md:mb-8 lg:mb-12 ${
          isIntersecting ? 'animate-fade-in-down' : 'opacity-0'
        }`}>
          <p className="text-yellow-600 uppercase font-bold text-xs sm:text-sm tracking-wide mb-2 sm:mb-2.5">
            Wat Onze Leerlingen Zeggen
          </p>
          <h2 className={`text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-2.5 sm:mb-3 md:mb-4 leading-tight px-2 transition-opacity duration-700 ${
            isIntersecting ? 'opacity-100' : 'opacity-0'
          }`} style={{ animationDelay: '0.1s' }}>
            Echte Ervaringen, Echte Resultaten
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed mb-6 px-2">
            Vertrouwd door honderden – onze leerlingen delen hun succesverhalen na hun rijopleiding bij ons.
          </p>
        </div>
        
        {/* Reviews Horizontal Scroll */}
        <div className="overflow-x-auto pb-4 mb-8 sm:mb-12 md:mb-16 lg:mb-20 -mx-3 sm:-mx-4 md:-mx-5 lg:-mx-6 xl:-mx-8 px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-yellow-500 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:hover:bg-yellow-600">
          <div className="flex gap-4 sm:gap-6 min-w-max">
            {reviews.map((review, index) => (
              <div 
                key={index} 
                className={`group bg-white border border-gray-200/80 rounded-xl p-5 sm:p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:border-yellow-300/50 hover:-translate-y-1 relative overflow-hidden flex flex-col transition-opacity duration-700 w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px] ${
                  isIntersecting ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.05 + 0.2}s` }}
              >
              <div className="absolute inset-0 bg-yellow-50/0 group-hover:bg-yellow-50/20 transition-all duration-300 rounded-xl"></div>
              
              <div className="relative z-10 flex flex-col flex-grow">
                <div className="flex items-start mb-4 sm:mb-5 md:mb-6">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 ${review.avatarColor} rounded-xl flex items-center justify-center text-white font-semibold text-lg sm:text-xl md:text-2xl mr-3 sm:mr-4 shadow-sm transition-transform duration-300 group-hover:scale-105 border border-white/20 flex-shrink-0`}>
                    {review.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-900 text-base sm:text-lg md:text-xl mb-1 sm:mb-2 truncate">{review.name}</h4>
                    <div className="flex items-center group-hover:animate-pulse">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="relative w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0">
                          {/* Background star (gray) */}
                          <svg 
                            className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300 absolute inset-0" 
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          {/* Filled star (yellow) with animation */}
                          <svg 
                            className={`w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 absolute inset-0 transition-all duration-300 ${
                              i < review.rating ? 'opacity-100' : 'opacity-0'
                            } group-hover:opacity-100`}
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                            style={{
                              transitionDelay: `${i * 100}ms`,
                              transformOrigin: 'left center',
                            }}
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex-shrink-0 ml-2">
                    <svg viewBox="0 0 24 24" className="w-full h-full">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                  </div>
                </div>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 sm:mb-5 flex-grow">{review.text}</p>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue-500 flex items-center justify-center border border-white shadow-sm flex-shrink-0">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-xs sm:text-sm text-gray-500 font-medium">Verified by Trustindex</span>
                </div>
              </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Google Reviews Summary - Professional */}
        <div className="text-center">
            <div className="inline-flex flex-col sm:flex-row items-center bg-white border border-yellow-200/50 rounded-xl p-6 sm:p-8 md:p-10 shadow-sm transition-all duration-300 max-w-2xl hover:shadow-lg hover:-translate-y-1">
            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-yellow-600 rounded-xl flex items-center justify-center mr-0 sm:mr-6 mb-4 sm:mb-0 shadow-sm flex-shrink-0">
              <svg className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <div className="text-center sm:text-left">
              <h4 className="font-bold text-gray-900 text-xl sm:text-2xl md:text-3xl mb-2 leading-tight">Rijschool Beemobiel</h4>
              <div className="flex items-center justify-center sm:justify-start mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 font-medium text-sm sm:text-base md:text-lg">16 Google reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
