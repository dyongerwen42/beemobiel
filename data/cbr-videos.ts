// CBR YouTube Video Data
// These are relevant videos from the CBR YouTube channel (@cbrnl)
// Update these with actual video IDs found on https://www.youtube.com/@cbrnl/videos

export interface CBRVideo {
  youtubeId: string
  title: string
  category: 'eerste-rijles' | 'examenfouten' | 'rotondes' | 'algemeen'
}

// Eerste Rijles Videos
// Video's die relevant zijn voor beginners en eerste rijlessen
export const eersteRijlesVideos: CBRVideo[] = [
  {
    youtubeId: '90DRSSl4QLw',
    title: 'Zo Gaat Het Bij Het CBR Praktijkexamen Auto – Uitleg over de auto examenprocedure',
    category: 'eerste-rijles'
  },
  {
    youtubeId: 'v5AxECiPFzI',
    title: 'Zo gaat het bij het theorie-examen van het CBR – Uitleg theorieprocedure',
    category: 'eerste-rijles'
  },
  {
    youtubeId: 'sWSfRwLP2IQ',
    title: 'Zo gaat het bij het praktijkexamen bromfiets van het CBR – Relevant voor AM-rijbewijs',
    category: 'eerste-rijles'
  },
  {
    youtubeId: 'YaTAw7iHoPk',
    title: 'Zo gaat het bij het praktijkexamen motor van het CBR – Relevant voor A-rijbewijs',
    category: 'eerste-rijles'
  },
  {
    youtubeId: 'AuwVmShBw-A',
    title: 'Zo Gaat Het Bij De Tussentijdse Toets Van Het CBR – Uitleg tussentijdse toets',
    category: 'eerste-rijles'
  }
]

// Top 5 Examenfouten Videos
// Video's over veelgemaakte fouten en examentips
export const examenFoutenVideos: CBRVideo[] = [
  {
    youtubeId: '_s3RflnYyAw',
    title: 'Waarop moet je letten bij het rijexamen - Zeven tips van de examinator (intro)',
    category: 'examenfouten'
  },
  {
    youtubeId: 'Tuod3I3BWXM',
    title: 'De meestgemaakte fouten in het rijexamen – CBR (introductie)',
    category: 'examenfouten'
  },
  {
    youtubeId: 'pRgz42ZKLrY',
    title: 'De meestgemaakte fouten in het rijexamen – CBR (versie voor rijinstructeurs)',
    category: 'examenfouten'
  },
  {
    youtubeId: 'eTdRrD92nT8',
    title: 'Meestgemaakte fouten tijdens het in- en uitvoegen praktijkexamen',
    category: 'examenfouten'
  },
  {
    youtubeId: 'ZefvqsLHZQ0',
    title: 'Waarop moet je letten bij het wegrijden - TIP #1 van de CBR-examinator',
    category: 'examenfouten'
  },
  {
    youtubeId: 'PAlo4EUFr_w',
    title: 'Waarop moet je letten bij rechte en bochtige weggedeelten - TIP #2 van de CBR-examinator',
    category: 'examenfouten'
  },
  {
    youtubeId: 'pxgQ4GkrRDw',
    title: 'Waarop moet je letten bij kruispunten - TIP #3 van de CBR-examinator',
    category: 'examenfouten'
  },
  {
    youtubeId: 'V-VnvDenuwE',
    title: 'Waarop moet je letten bij het invoegen en uitvoegen - TIP #4 van de CBR-examinator',
    category: 'examenfouten'
  },
  {
    youtubeId: '_FDmSgPRh_U',
    title: 'Waarop moet je letten bij inhalen en van rijstrook wisselen - TIP #5 van de CBR-examinator',
    category: 'examenfouten'
  },
  {
    youtubeId: 'gZhZ1XR0KEY',
    title: 'Waarop moet je letten bij bijzondere weggedeelten - TIP #6 van de CBR-examinator',
    category: 'examenfouten'
  },
  {
    youtubeId: 'mR3-BOYlbvs',
    title: 'Waarop moet je letten bij bijzondere verrichtingen - TIP #7 van de CBR-examinator',
    category: 'examenfouten'
  },
  {
    youtubeId: 'ci3IKxP8gIA',
    title: 'Zo Gaat Het Bij Het Faalangstexamen Van Het CBR – Tips voor faalangst examens',
    category: 'examenfouten'
  }
]

// Rotondes Videos
// Video's over invoegen, uitvoegen en verkeerssituaties (relevant voor rotondes)
export const rotondesVideos: CBRVideo[] = [
  {
    youtubeId: 'V-VnvDenuwE', // Waarop moet je letten bij het invoegen en uitvoegen - TIP #4 van de CBR-examinator
    title: 'Waarop moet je letten bij het invoegen en uitvoegen - TIP #4 van de CBR-examinator',
    category: 'rotondes'
  },
  {
    youtubeId: 'eTdRrD92nT8', // Meestgemaakte fouten tijdens het in- en uitvoegen praktijkexamen
    title: 'Meestgemaakte fouten tijdens het in- en uitvoegen praktijkexamen',
    category: 'rotondes'
  },
  {
    youtubeId: 'pxgQ4GkrRDw', // Waarop moet je letten bij kruispunten - TIP #3 van de CBR-examinator (relevant voor rotondes)
    title: 'Waarop moet je letten bij kruispunten - TIP #3 van de CBR-examinator',
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

