import { NextResponse } from 'next/server'

export async function GET() {
  const statistics = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'BeeMobiel Rijschool Statistieken',
    description: 'Statistieken over onze rijschool prestaties',
    datePublished: '2024-01-01',
    dateModified: new Date().toISOString().split('T')[0],
    variableMeasured: [
      {
        '@type': 'PropertyValue',
        name: 'Studenten Opgeleid',
        value: '200+',
        unitText: 'studenten',
      },
      {
        '@type': 'PropertyValue',
        name: 'Slagingspercentage',
        value: '90',
        unitText: 'percent',
      },
      {
        '@type': 'PropertyValue',
        name: 'Jaar Ervaring',
        value: '10+',
        unitText: 'jaren',
      },
      {
        '@type': 'PropertyValue',
        name: 'Professionele Instructeurs',
        value: '5+',
        unitText: 'instructeurs',
      },
    ],
    creator: {
      '@type': 'Organization',
      name: 'BeeMobiel Rijschool',
      url: 'https://beemobiel.nl',
    },
  }

  return NextResponse.json(statistics, {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600',
    },
  })
}





