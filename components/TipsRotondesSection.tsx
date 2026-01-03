'use client'

import TipsVideoCarouselSection from './TipsVideoCarouselSection'
import { rotondesVideos } from '@/data/cbr-videos'

export default function TipsRotondesSection() {
  return (
    <TipsVideoCarouselSection
      id="v3"
      label="Rotondes Rijden"
      title="Invoegen, afslaan, richting aangeven – zonder stress."
      description="Veel beginnende bestuurders vinden rotondes lastig. In deze video leggen we stap voor stap uit wat je moet doen om elke keer veilig en soepel te rijden."
      image="/images/highway-lessons_11zon-scaled.webp"
      link="/tips/rotondes"
      videos={rotondesVideos.map(v => ({
        youtubeId: v.youtubeId,
        title: v.title
      }))}
    />
  )
}
