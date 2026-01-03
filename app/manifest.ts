import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'BeeMobiel Rijschool - Professionele Rijlessen',
    short_name: 'BeeMobiel',
    description: 'Professionele rijlessen voor auto, motor en scooter in Nederland',
    start_url: '/',
    display: 'standalone',
    background_color: '#111827',
    theme_color: '#D97706',
    icons: [
      {
        src: '/images/logo.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/images/logo.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
    categories: ['education', 'business'],
    lang: 'nl-NL',
    orientation: 'portrait',
  }
}

