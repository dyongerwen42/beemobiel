import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tips en Trucs - BeeMobiel Rijschool',
  description:
    'Handige tips, praktische adviezen en nuttige informatie om je voor te bereiden op je rijlessen en examen. Leer van onze ervaring en haal je rijbewijs met vertrouwen.',
}

export default function TipsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

