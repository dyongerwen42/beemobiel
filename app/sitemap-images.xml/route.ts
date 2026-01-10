import { NextResponse } from 'next/server'

export async function GET() {
  const baseUrl = 'https://beemobiel.nl'
  
  // Comprehensive image sitemap for better image SEO
  const images = [
    {
      loc: `${baseUrl}/images/logo.png`,
      caption: 'BeeMobiel Rijschool Logo',
      title: 'BeeMobiel Rijschool',
      geo_location: 'Nederland',
    },
    {
      loc: `${baseUrl}/images/instructor-with-female-student-at-the-driving-school-outdooors-1.jpg`,
      caption: 'Instructeur met student tijdens rijles',
      title: 'Rijles bij BeeMobiel',
      geo_location: 'Nederland',
    },
    {
      loc: `${baseUrl}/images/instructor-showing-traffic-shemes-to-a-female-student-outdooors-1.jpg`,
      caption: 'Instructeur legt verkeersregels uit',
      title: 'Verkeersregels uitleg',
      geo_location: 'Nederland',
    },
    {
      loc: `${baseUrl}/images/person-taking-driver-s-license-exam-1_11zon-scaled.webp`,
      caption: 'Rijexamen afleggen',
      title: 'Rijexamen',
      geo_location: 'Nederland',
    },
    {
      loc: `${baseUrl}/images/vehicles_11zon-scaled.webp`,
      caption: 'Lesvoertuigen van BeeMobiel',
      title: 'Lesvoertuigen',
      geo_location: 'Nederland',
    },
    {
      loc: `${baseUrl}/images/traffic-cones-car-driving-license-test_11zon-scaled.webp`,
      caption: 'Rijexamen oefenen',
      title: 'Rijexamen oefenen',
      geo_location: 'Nederland',
    },
    {
      loc: `${baseUrl}/images/home-4_11zon_11zon-scaled.webp`,
      caption: 'BeeMobiel Rijschool',
      title: 'BeeMobiel Rijschool',
      geo_location: 'Nederland',
    },
  ]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${images.map(image => `
  <url>
    <loc>${baseUrl}</loc>
    <image:image>
      <image:loc>${image.loc}</image:loc>
      <image:caption>${image.caption}</image:caption>
      <image:title>${image.title}</image:title>
      <image:geo_location>${image.geo_location}</image:geo_location>
    </image:image>
  </url>`).join('')}
</urlset>`

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}






