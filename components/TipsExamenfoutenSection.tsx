'use client'

import TipsVideoCarouselSection from './TipsVideoCarouselSection'
import { examenFoutenVideos } from '@/data/cbr-videos'

export default function TipsExamenfoutenSection() {
  return (
    <TipsVideoCarouselSection
      id="v2"
      label="Top 5 Examenfouten"
      title="Herken ze. Vermijd ze. Slaag met vertrouwen."
      description="Dit zijn de meest gemaakte fouten die mensen hun rijbewijs kosten – en ze zijn makkelijk te voorkomen. Bekijk de video en vergroot je kans om in één keer te slagen."
      image="/images/person-taking-driver-s-license-exam_11zon-scaled.webp"
      link="/tips/examenfouten"
      videos={examenFoutenVideos.map(v => ({
        youtubeId: v.youtubeId,
        title: v.title
      }))}
    />
  )
}

