// CBR YouTube Video Data
// These are relevant videos from the CBR YouTube channel (@cbrnl)
// Update these with actual video IDs found on https://www.youtube.com/@cbrnl/videos

export interface CBRVideo {
  youtubeId: string
  title: string
  category: 'eerste-rijles' | 'examenfouten' | 'rotondes' | 'algemeen'
}

// Eerste Rijles Videos
// Note: CBR heeft geen specifieke "eerste rijles" video's, maar deze video's zijn relevant voor beginners
export const eersteRijlesVideos: CBRVideo[] = [
  {
    youtubeId: '5wWiTaIgW90', // "Zo gaat het bij het theorie-examen" - goede voorbereiding voor eerste rijles
    title: 'Zo gaat het bij het theorie-examen',
    category: 'eerste-rijles'
  },
  {
    youtubeId: 'XHOmBV4js_E', // Placeholder - zoek op CBR kanaal naar "praktijkexamen" of "voorbereiding" video's
    title: 'Voorbereiding op je eerste autorijles',
    category: 'eerste-rijles'
  },
  {
    youtubeId: 'XHOmBV4js_E', // Placeholder - zoek naar relevante CBR video's over rijlessen
    title: 'Wat te verwachten tijdens je rijlessen',
    category: 'eerste-rijles'
  }
]

// Top 5 Examenfouten Videos
// Note: Zoek op het CBR kanaal naar video's over "veelgemaakte fouten" of "praktijkexamen tips"
export const examenFoutenVideos: CBRVideo[] = [
  {
    youtubeId: 'XHOmBV4js_E', // Placeholder - zoek naar CBR video over examenfouten
    title: 'Veelgemaakte fouten tijdens het praktijkexamen',
    category: 'examenfouten'
  },
  {
    youtubeId: 'XHOmBV4js_E', // Placeholder - zoek naar CBR video over praktijkexamen tips
    title: 'Hoe voorkom je examenfouten',
    category: 'examenfouten'
  },
  {
    youtubeId: 'XHOmBV4js_E', // Placeholder - zoek naar relevante CBR video's
    title: 'Tips voor een succesvol praktijkexamen',
    category: 'examenfouten'
  }
]

// Rotondes Videos
// Note: CBR heeft mogelijk geen specifieke rotondes video's, maar zoek naar verkeerssituaties
export const rotondesVideos: CBRVideo[] = [
  {
    youtubeId: 'XHOmBV4js_E', // Placeholder - zoek naar CBR video over rotondes of verkeerssituaties
    title: 'Hoe neem je rotondes correct',
    category: 'rotondes'
  },
  {
    youtubeId: 'XHOmBV4js_E', // Placeholder - zoek naar relevante verkeerssituatie video's
    title: 'Invoegen en uitvoegen op rotondes',
    category: 'rotondes'
  },
  {
    youtubeId: 'XHOmBV4js_E', // Placeholder - zoek naar CBR video's over verkeersregels
    title: 'Richting aangeven op rotondes',
    category: 'rotondes'
  }
]

// Helper function to get videos by category
export function getVideosByCategory(category: CBRVideo['category']): CBRVideo[] {
  switch (category) {
    case 'eerste-rijles':
      return eersteRijlesVideos
    case 'examenfouten':
      return examenFoutenVideos
    case 'rotondes':
      return rotondesVideos
    default:
      return []
  }
}

// Instructions:
// 1. Visit https://www.youtube.com/@cbrnl/videos
// 2. Find relevant videos for each category
// 3. Extract the video ID from the URL (e.g., from https://www.youtube.com/watch?v=VIDEO_ID)
// 4. Update the youtubeId fields above with the actual video IDs
// 5. Update the titles to match the actual video titles
