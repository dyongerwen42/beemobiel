'use client'

import TipsVideoCarouselSection from './TipsVideoCarouselSection'
import { eersteRijlesVideos } from '@/data/cbr-videos'

export default function TipsEersteRijlesSection() {
  return (
    <TipsVideoCarouselSection
      id="v1"
      label="Eerste Rijles"
      title="Geen verrassingen – alleen duidelijkheid en vertrouwen."
      description="Zenuwachtig voor je eerste les? We laten je stap voor stap zien wat er gebeurt zodra je achter het stuur zit. Zo voel je je zeker voordat je begint."
      image="/images/DSC03959.jpg"
      link="/tips/eerste-rijles"
      videos={eersteRijlesVideos.map(v => ({
        youtubeId: v.youtubeId,
        title: v.title
      }))}
    />
  )
}

