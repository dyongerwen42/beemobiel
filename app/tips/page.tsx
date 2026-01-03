'use client'

import { useEffect } from 'react'
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

export const metadata = {
  title: 'Tips & Trucs - Handige Rijtips voor Rijlessen & Examen | BeeMobiel',
  description: 'Handige tips en adviezen voor rijlessen en examen. Leer alles over je eerste rijles, veelgemaakte examen fouten, rotondes rijden en meer.',
  keywords: ['rijtips', 'rijlessen tips', 'examen tips', 'rijbewijs tips', 'autorijden tips', 'rijlessen advies'],
  openGraph: {
    title: 'Tips & Trucs - BeeMobiel Rijschool',
    description: 'Handige tips en adviezen voor rijlessen en examen',
    url: 'https://beemobiel.nl/tips',
    type: 'website',
  },
  alternates: {
    canonical: 'https://beemobiel.nl/tips',
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
  description: 'Instructievideo\'s over rijlessen en examen',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@type': 'VideoObject',
        name: 'Zo gaat het bij het theorie-examen',
        description: 'Voorbereiding op je eerste autorijles',
        thumbnailUrl: 'https://img.youtube.com/vi/5wWiTaIgW90/maxresdefault.jpg',
        uploadDate: '2024-01-01',
        contentUrl: 'https://www.youtube.com/watch?v=5wWiTaIgW90',
        embedUrl: 'https://www.youtube.com/embed/5wWiTaIgW90',
        publisher: {
          '@type': 'Organization',
          name: 'CBR',
        },
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
      <TipsPageContent />
    </>
  )
}

function TipsPageContent() {
  // Handle anchor links on page load and navigation
  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash
      if (hash) {
        setTimeout(() => {
          const element = document.querySelector(hash)
          if (element) {
            const headerOffset = 100 // Account for fixed header
            const elementPosition = element.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            })
          }
        }, 300) // Delay to ensure page is loaded
      }
    }

    // Handle initial load
    handleHashScroll()

    // Handle hash changes (when clicking anchor links)
    window.addEventListener('hashchange', handleHashScroll)

    // Also handle clicks on anchor links for smooth scrolling
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a[href^="#"]')
      if (anchor) {
        const href = anchor.getAttribute('href')
        if (href && href.startsWith('#') && href !== '#') {
          const element = document.querySelector(href)
          if (element) {
            e.preventDefault()
            const headerOffset = 100
            const elementPosition = element.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            })
            // Update URL
            window.history.pushState(null, '', href)
          }
        }
      }
    }

    document.addEventListener('click', handleAnchorClick)

    return () => {
      window.removeEventListener('hashchange', handleHashScroll)
      document.removeEventListener('click', handleAnchorClick)
    }
  }, [])

  return (
    <>
      <Header />
      <main className="relative" style={{ marginTop: 0, paddingTop: 0 }}>
        <TipsHeroSection />
        <TipsIntroSection />
        <TipsBasisTheorieSection />
        <TipsEersteRijlesSection />
        <TipsExamenfoutenSection />
        <TipsRotondesSection />
        <CTAFinalSection />
      </main>
      <Footer />
    </>
  )
}

