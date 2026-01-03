'use client'

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import Link from 'next/link'

export default function GuideStepsDetailedSection() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 })

  return (
    <section ref={ref} className="py-6 sm:py-10 md:py-14 lg:py-16 bg-white relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8">
        <div className="space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12">
          {/* STAP 1 */}
          <div className={`transition-opacity duration-700 ${isIntersecting ? 'opacity-100' : 'opacity-0'}`}>
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2.5 sm:mb-3 md:mb-4">STAP 1: Kies je rijschool</h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed mb-2 sm:mb-3">
              De eerste stap is het kiezen van je rijschool. Belangrijk is daarbij om op een aantal punten te letten. Hierdoor zorg je er namelijk voor dat je een goede keuze maakt, waarbij je ook op de langere termijn tevreden blijft met je keuze.
            </p>
            <p className="text-xs sm:text-sm md:text-base font-semibold text-gray-900 mb-2 sm:mb-3">Hou bijvoorbeeld rekening met:</p>
            <ul className="space-y-2 sm:space-y-2.5 text-gray-600 mb-4 sm:mb-5">
              <li className="flex items-start">
                <span className="text-yellow-600 mr-3 mt-1 font-bold">•</span>
                <span><strong>Kosten:</strong> Het is natuurlijk zonde om onnodig te veel te betalen. Controleer daarom altijd even de prijzen, en of deze competitief zijn. Bij BeeMobiel kiezen we er bijvoorbeeld speciaal voor om zonder verborgen kosten te werken, interessante totaalpakketten aan te bieden en het gehele traject zo betaalbaar mogelijk te houden. Wil je beginnen met één rijles of meteen een volledig lespakket? Wij hebben het allemaal!</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 mr-3 mt-1 font-bold">•</span>
                <span><strong>Aanbod pakketten:</strong> Kijk daarnaast ook altijd even WELKE pakketten er precies allemaal zijn. Zo biedt een echt goede rijschool vaak naast auto rijlessen ook motor rijlessen en scooter rijlessen aan. Maar dat niet alleen. Denk aan pakketten met 15 of 20 rijlessen, theoriecursus en praktijkexamen inbegrepen. Met de alles-in-1 pakketten van BeeMobiel ben je in één keer voorzien.</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 mr-3 mt-1 font-bold">•</span>
                <span><strong>Slagingspercentage:</strong> Het is mogelijk om de slagingspercentages van rijscholen te controleren op de website van het CBR. Daarmee zie je in één oogopslag of de kwaliteit van de rij-instructeuren (en daarmee de rijschool als geheel) aan jouw voorwaarden voldoet. Indien dat het geval is, kun je natuurlijk met een gerust hart aan je rijlessen beginnen.</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 mr-3 mt-1 font-bold">•</span>
                <span><strong>Reviews:</strong> Een van de allerbeste methoden om te controleren of de kwaliteit van een rijschool en de bijbehorende rijlessen aan een bepaalde standaard voldoen, is door de reviews erbij te pakken. Authentieke ervaringen van mensen spelen over het algemeen boekdelen. Zeker bij BeeMobiel vinden we het altijd erg belangrijk dat letterlijk iedereen zich veilig, zelfverzekerd en helemaal op zijn of haar gemak voelt. We hebben er alle vertrouwen in dat onze reviews dat blijven bevestigen!</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 mr-3 mt-1 font-bold">•</span>
                <span><strong>Instructeur:</strong> Het is natuurlijk altijd fijn om een vaste, goede instructeur te krijgen. Hier bouw je geleidelijk aan een band mee op. Bovendien leert de instructeur je dan ook steeds beter kennen. Aan de hand van constructieve, persoonlijke feedback, zorgen onze instructeurs er altijd voor dat je steeds beter en comfortabeler wordt in de auto of op de motor of scooter.</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 mr-3 mt-1 font-bold">•</span>
                <span><strong>Gevoel:</strong> Tot slot moet je natuurlijk ook een goed gevoel hebben bij de rijschool. Zeker als je het spannend vindt om te leren rijden, is dit belangrijk. Wij hopen natuurlijk dat je ziet dat we er alles aan doen om je enthousiast te krijgen om voor BeeMobiel te kiezen. Maar uiteindelijk hak je zelf de knoop door.</span>
              </li>
            </ul>
          </div>

          {/* STAP 2 */}
          <div className={`transition-opacity duration-700 ${isIntersecting ? 'opacity-100' : 'opacity-0'}`}>
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2.5 sm:mb-3 md:mb-4">STAP 2: De eerste rijles</h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed mb-2 sm:mb-3">
              Heb je gekozen voor de rijlessen van BeeMobiel? Dan heten we je van harte welkom!
            </p>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed mb-2 sm:mb-3">
              Het is nu tijd voor je eerste rijles. Of dit nu op de scooter, de motor of in de auto gaat zijn, maakt verder niet heel veel verschil.
            </p>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed mb-2 sm:mb-3">
              Bij BeeMobiel weten we heel goed dat dit tegelijkertijd leuk, spannend én leerzaam gaat zijn. Onze instructeurs begrijpen dan ook als geen ander dat het belangrijk is om rustig te beginnen en echt kennis te maken met het voertuig. De nadruk ligt op je zo snel mogelijk zo comfortabel mogelijk voelen. Hier helpen we je graag bij!
            </p>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
              Voor je het weet, zit je eerste rijles er alweer op en begin je aan les nummer 2, 3, 5, 10, enzovoort.
            </p>
          </div>

          {/* STAP 3 */}
          <div className={`transition-opacity duration-700 ${isIntersecting ? 'opacity-100' : 'opacity-0'}`}>
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2.5 sm:mb-3 md:mb-4">STAP 3: Theorie-examen</h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed mb-2 sm:mb-3">
              Een derde stap die hoe dan ook voorbijkomt op jouw persoonlijk route richting het behalen van je rijbewijs, is je theorie-examen. Ook dit geldt voor alle voertuigen. Je auto theorie, motor theorie en scooter theorie zijn een belangrijk onderdeel om alle regels over het veilig rijden op weg te leren.
            </p>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
              Bij de lespakketten van BeeMobiel is je theorie-examen vaak ook inbegrepen, waardoor je hier in ieder geval niet nog apart kosten voor hoeft te maken. Bovendien staan onze instructeurs natuurlijk altijd voor je klaar om nog wat extra tips en tricks mee te geven, zodat de kans zo groot mogelijk is dat jij je theorie in één keer haalt!
            </p>
          </div>

          {/* STAP 4 */}
          <div className={`transition-opacity duration-700 ${isIntersecting ? 'opacity-100' : 'opacity-0'}`}>
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2.5 sm:mb-3 md:mb-4">STAP 4: Praktijkexamen</h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed mb-2 sm:mb-3">
              Nadat je je theorie-examen hebt weten te halen en voldoende rijlessen hebt genomen om alles omtrent veilig op de weg rijden onder de knie te krijgen, is het tijd voor je praktijkexamen. Dit is voor velen het meest spannende onderdeel. Dit examen gaat namelijk bepalen of jij je rijbewijs weet te halen.
            </p>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
              Uiteraard bereidt BeeMobiel je hier zo goed mogelijk op voor. We vertellen je precies welke proeven je mogelijk te wachten staan, waar je extra op moet letten en hoe je ervoor zorgt dat je je praktijkexamen zo snel mogelijk weet te halen. Wij hebben er dan ook iedere keer weer alle vertrouwen in dat dit helemaal goed komt!
            </p>
          </div>

          {/* STAP 5 */}
          <div className={`transition-opacity duration-700 ${isIntersecting ? 'opacity-100' : 'opacity-0'}`}>
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2.5 sm:mb-3 md:mb-4">STAP 5: Met rijbewijs de weg op</h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed mb-2 sm:mb-3">
              De 5e is meteen ook de laatste stap. Op dit punt heb jij het volledige traject namelijk succesvol afgerond en heb je je rijbewijs op zak. Dit betekent dat je de weg op mag met je auto, motor en/of scooter.
            </p>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
              We hopen dan ook dat we je mogen helpen om deze realiteit zo snel mogelijk voor je te realiseren!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

