import { ImageResponse } from 'next/og'

export const alt = 'BeeMobiel Rijschool - Professionele Rijlessen'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 60,
          background: 'linear-gradient(135deg, #111827 0%, #1F2937 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          padding: '40px',
        }}
      >
        <div style={{ fontSize: 80, fontWeight: 'bold', marginBottom: 20 }}>
          BeeMobiel Rijschool
        </div>
        <div style={{ fontSize: 40, color: '#D97706', marginBottom: 20 }}>
          Professionele Rijlessen
        </div>
        <div style={{ fontSize: 30, opacity: 0.9 }}>
          Auto • Motor • Scooter
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}


