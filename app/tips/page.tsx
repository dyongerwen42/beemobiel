import Header from '@/components/Header'
import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'
import TipsHeroSection from '@/components/TipsHeroSection'
import TipsIntroSection from '@/components/TipsIntroSection'
import TipsBasisTheorieSection from '@/components/TipsBasisTheorieSection'
import TipsEersteRijlesSection from '@/components/TipsEersteRijlesSection'
import TipsExamenfoutenSection from '@/components/TipsExamenfoutenSection'
import TipsRotondesSection from '@/components/TipsRotondesSection'
import CTAFinalSection from '@/components/CTAFinalSection'
import TipsPageClient from '@/components/TipsPageClient'

export const metadata = {
  title: 'Tips & Trucs - Handige Rijtips voor Rijlessen & Examen | BeeMobiel',
  description: 'Handige tips en adviezen voor rijlessen en examen. Leer alles over je eerste rijles, veelgemaakte examen fouten, rotondes rijden en meer.',
  keywords: ['rijtips', 'rijlessen tips', 'examen tips', 'rijbewijs tips', 'autorijden tips', 'rijlessen advies'],
  openGraph: {
    title: 'Tips & Trucs - BeeMobiel Rijschool',
    description: 'Handige tips en adviezen voor rijlessen en examen',
    url: 'https://beemobiel.nl/tips',
    type: 'website',
    images: [
      {
        url: 'https://beemobiel.nl/images/instructor-with-female-student-at-the-driving-school-outdooors-1.jpg',
        width: 1200,
        height: 630,
        alt: 'Tips & Trucs BeeMobiel',
      },
    ],
  },
  alternates: {
    canonical: 'https://beemobiel.nl/tips',
    languages: {
      'nl': 'https://beemobiel.nl/tips',
      'nl-NL': 'https://beemobiel.nl/tips',
    },
  },
}

const tipsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': 'https://beemobiel.nl/tips#collection',
  name: 'Tips en Trucs - BeeMobiel Rijschool',
  description: 'Handige tips en adviezen voor rijlessen en examen',
  url: 'https://beemobiel.nl/tips',
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@type': 'Article',
          headline: 'Eerste Rijles',
          url: 'https://beemobiel.nl/tips/eerste-rijles',
        },
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: {
          '@type': 'Article',
          headline: 'Top 5 Examenfouten',
          url: 'https://beemobiel.nl/tips/examenfouten',
        },
      },
      {
        '@type': 'ListItem',
        position: 3,
        item: {
          '@type': 'Article',
          headline: 'Rotondes Rijden',
          url: 'https://beemobiel.nl/tips/rotondes',
        },
      },
    ],
  },
}

const videoCollectionJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  '@id': 'https://beemobiel.nl/tips#videos',
  name: 'Rijtips Video Collectie',
  description: 'Instructievideo\'s over rijlessen en examen van het CBR',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@type': 'VideoObject',
        name: 'Zo Gaat Het Bij Het CBR Praktijkexamen Auto – Uitleg over de auto examenprocedure',
        contentUrl: 'https://www.youtube.com/watch?v=90DRSSl4QLw',
        embedUrl: 'https://www.youtube.com/embed/90DRSSl4QLw',
        thumbnailUrl: 'https://img.youtube.com/vi/90DRSSl4QLw/maxresdefault.jpg',
        publisher: { '@type': 'Organization', name: 'CBR' },
      },
    },
    {
      '@type': 'ListItem',
      position: 2,
      item: {
        '@type': 'VideoObject',
        name: 'De meestgemaakte fouten in het rijexamen – CBR (introductie)',
        contentUrl: 'https://www.youtube.com/watch?v=Tuod3I3BWXM',
        embedUrl: 'https://www.youtube.com/embed/Tuod3I3BWXM',
        thumbnailUrl: 'https://img.youtube.com/vi/Tuod3I3BWXM/maxresdefault.jpg',
        publisher: { '@type': 'Organization', name: 'CBR' },
      },
    },
    {
      '@type': 'ListItem',
      position: 3,
      item: {
        '@type': 'VideoObject',
        name: 'De meestgemaakte fouten in het rijexamen – CBR (versie voor rijinstructeurs)',
        contentUrl: 'https://www.youtube.com/watch?v=pRgz42ZKLrY',
        embedUrl: 'https://www.youtube.com/embed/pRgz42ZKLrY',
        thumbnailUrl: 'https://img.youtube.com/vi/pRgz42ZKLrY/maxresdefault.jpg',
        publisher: { '@type': 'Organization', name: 'CBR' },
      },
    },
    {
      '@type': 'ListItem',
      position: 4,
      item: {
        '@type': 'VideoObject',
        name: 'Meestgemaakte fouten tijdens het in- en uitvoegen praktijkexamen',
        contentUrl: 'https://www.youtube.com/watch?v=eTdRrD92nT8',
        embedUrl: 'https://www.youtube.com/embed/eTdRrD92nT8',
        thumbnailUrl: 'https://img.youtube.com/vi/eTdRrD92nT8/maxresdefault.jpg',
        publisher: { '@type': 'Organization', name: 'CBR' },
      },
    },
    {
      '@type': 'ListItem',
      position: 5,
      item: {
        '@type': 'VideoObject',
        name: 'Waarop moet je letten bij het wegrijden - TIP #1 van de CBR-examinator',
        contentUrl: 'https://www.youtube.com/watch?v=ZefvqsLHZQ0',
        embedUrl: 'https://www.youtube.com/embed/ZefvqsLHZQ0',
        thumbnailUrl: 'https://img.youtube.com/vi/ZefvqsLHZQ0/maxresdefault.jpg',
        publisher: { '@type': 'Organization', name: 'CBR' },
      },
    },
    {
      '@type': 'ListItem',
      position: 6,
      item: {
        '@type': 'VideoObject',
        name: 'Waarop moet je letten bij rechte en bochtige weggedeelten - TIP #2 van de CBR-examinator',
        contentUrl: 'https://www.youtube.com/watch?v=PAlo4EUFr_w',
        embedUrl: 'https://www.youtube.com/embed/PAlo4EUFr_w',
        thumbnailUrl: 'https://img.youtube.com/vi/PAlo4EUFr_w/maxresdefault.jpg',
        publisher: { '@type': 'Organization', name: 'CBR' },
      },
    },
    {
      '@type': 'ListItem',
      position: 7,
      item: {
        '@type': 'VideoObject',
        name: 'Waarop moet je letten bij kruispunten - TIP #3 van de CBR-examinator',
        contentUrl: 'https://www.youtube.com/watch?v=pxgQ4GkrRDw',
        embedUrl: 'https://www.youtube.com/embed/pxgQ4GkrRDw',
        thumbnailUrl: 'https://img.youtube.com/vi/pxgQ4GkrRDw/maxresdefault.jpg',
        publisher: { '@type': 'Organization', name: 'CBR' },
      },
    },
    {
      '@type': 'ListItem',
      position: 8,
      item: {
        '@type': 'VideoObject',
        name: 'Waarop moet je letten bij het invoegen en uitvoegen - TIP #4 van de CBR-examinator',
        contentUrl: 'https://www.youtube.com/watch?v=V-VnvDenuwE',
        embedUrl: 'https://www.youtube.com/embed/V-VnvDenuwE',
        thumbnailUrl: 'https://img.youtube.com/vi/V-VnvDenuwE/maxresdefault.jpg',
        publisher: { '@type': 'Organization', name: 'CBR' },
      },
    },
    {
      '@type': 'ListItem',
      position: 9,
      item: {
        '@type': 'VideoObject',
        name: 'Waarop moet je letten bij inhalen en van rijstrook wisselen - TIP #5 van de CBR-examinator',
        contentUrl: 'https://www.youtube.com/watch?v=_FDmSgPRh_U',
        embedUrl: 'https://www.youtube.com/embed/_FDmSgPRh_U',
        thumbnailUrl: 'https://img.youtube.com/vi/_FDmSgPRh_U/maxresdefault.jpg',
        publisher: { '@type': 'Organization', name: 'CBR' },
      },
    },
    {
      '@type': 'ListItem',
      position: 10,
      item: {
        '@type': 'VideoObject',
        name: 'Waarop moet je letten bij bijzondere weggedeelten - TIP #6 van de CBR-examinator',
        contentUrl: 'https://www.youtube.com/watch?v=gZhZ1XR0KEY',
        embedUrl: 'https://www.youtube.com/embed/gZhZ1XR0KEY',
        thumbnailUrl: 'https://img.youtube.com/vi/gZhZ1XR0KEY/maxresdefault.jpg',
        publisher: { '@type': 'Organization', name: 'CBR' },
      },
    },
    {
      '@type': 'ListItem',
      position: 11,
      item: {
        '@type': 'VideoObject',
        name: 'Waarop moet je letten bij bijzondere verrichtingen - TIP #7 van de CBR-examinator',
        contentUrl: 'https://www.youtube.com/watch?v=mR3-BOYlbvs',
        embedUrl: 'https://www.youtube.com/embed/mR3-BOYlbvs',
        thumbnailUrl: 'https://img.youtube.com/vi/mR3-BOYlbvs/maxresdefault.jpg',
        publisher: { '@type': 'Organization', name: 'CBR' },
      },
    },
    {
      '@type': 'ListItem',
      position: 12,
      item: {
        '@type': 'VideoObject',
        name: 'Waarop moet je letten bij het rijexamen - Zeven tips van de examinator (intro)',
        contentUrl: 'https://www.youtube.com/watch?v=_s3RflnYyAw',
        embedUrl: 'https://www.youtube.com/embed/_s3RflnYyAw',
        thumbnailUrl: 'https://img.youtube.com/vi/_s3RflnYyAw/maxresdefault.jpg',
        publisher: { '@type': 'Organization', name: 'CBR' },
      },
    },
    {
      '@type': 'ListItem',
      position: 13,
      item: {
        '@type': 'VideoObject',
        name: 'Zo gaat het bij het theorie-examen van het CBR – Uitleg theorieprocedure',
        contentUrl: 'https://www.youtube.com/watch?v=v5AxECiPFzI',
        embedUrl: 'https://www.youtube.com/embed/v5AxECiPFzI',
        thumbnailUrl: 'https://img.youtube.com/vi/v5AxECiPFzI/maxresdefault.jpg',
        publisher: { '@type': 'Organization', name: 'CBR' },
      },
    },
    {
      '@type': 'ListItem',
      position: 14,
      item: {
        '@type': 'VideoObject',
        name: 'Zo gaat het bij het praktijkexamen bromfiets van het CBR – Relevant voor AM-rijbewijs',
        contentUrl: 'https://www.youtube.com/watch?v=sWSfRwLP2IQ',
        embedUrl: 'https://www.youtube.com/embed/sWSfRwLP2IQ',
        thumbnailUrl: 'https://img.youtube.com/vi/sWSfRwLP2IQ/maxresdefault.jpg',
        publisher: { '@type': 'Organization', name: 'CBR' },
      },
    },
    {
      '@type': 'ListItem',
      position: 15,
      item: {
        '@type': 'VideoObject',
        name: 'Zo Gaat Het Bij Het Faalangstexamen Van Het CBR – Tips voor faalangst examens',
        contentUrl: 'https://www.youtube.com/watch?v=ci3IKxP8gIA',
        embedUrl: 'https://www.youtube.com/embed/ci3IKxP8gIA',
        thumbnailUrl: 'https://img.youtube.com/vi/ci3IKxP8gIA/maxresdefault.jpg',
        publisher: { '@type': 'Organization', name: 'CBR' },
      },
    },
    {
      '@type': 'ListItem',
      position: 16,
      item: {
        '@type': 'VideoObject',
        name: 'Zo Gaat Het Bij De Tussentijdse Toets Van Het CBR – Uitleg tussentijdse toets',
        contentUrl: 'https://www.youtube.com/watch?v=AuwVmShBw-A',
        embedUrl: 'https://www.youtube.com/embed/AuwVmShBw-A',
        thumbnailUrl: 'https://img.youtube.com/vi/AuwVmShBw-A/maxresdefault.jpg',
        publisher: { '@type': 'Organization', name: 'CBR' },
      },
    },
    {
      '@type': 'ListItem',
      position: 17,
      item: {
        '@type': 'VideoObject',
        name: 'Zo gaat het bij het praktijkexamen motor van het CBR – Relevant voor A-rijbewijs',
        contentUrl: 'https://www.youtube.com/watch?v=YaTAw7iHoPk',
        embedUrl: 'https://www.youtube.com/embed/YaTAw7iHoPk',
        thumbnailUrl: 'https://img.youtube.com/vi/YaTAw7iHoPk/maxresdefault.jpg',
        publisher: { '@type': 'Organization', name: 'CBR' },
      },
    },
  ],
}

const breadcrumbTipsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://beemobiel.nl',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Tips en Trucs',
      item: 'https://beemobiel.nl/tips',
    },
  ],
}

export default function TipsPage() {
  return (
    <>
      <JsonLd data={tipsJsonLd} />
      <JsonLd data={videoCollectionJsonLd} />
      <JsonLd data={breadcrumbTipsJsonLd} />
      <TipsPageClient />
    </>
  )
}

