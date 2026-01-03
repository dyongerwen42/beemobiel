/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    qualities: [65, 75],
    minimumCacheTTL: 31536000, // 1 year
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
        pathname: '/vi/**',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        pathname: '/**',
      },
    ],
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  // Optimize production builds
  productionBrowserSourceMaps: false,
  // Reduce JavaScript bundle size
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  experimental: {
    optimizeCss: true,
  },
  // Target modern browsers to avoid unnecessary polyfills
  transpilePackages: [],
  // Headers for better caching
  async headers() {
    return [
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/videos/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ]
  },
  // Redirects for old URLs to new structure
  async redirects() {
    return [
      {
        source: '/autos',
        destination: '/tarieven/autos',
        permanent: true,
      },
      {
        source: '/motorfietsen-2',
        destination: '/tarieven/motorfietsen',
        permanent: true,
      },
      {
        source: '/scooters-brommers',
        destination: '/tarieven/scooters',
        permanent: true,
      },
      {
        source: '/theorie',
        destination: '/tarieven/theorie',
        permanent: true,
      },
      {
        source: '/tips-en-trucs',
        destination: '/tips',
        permanent: true,
      },
      {
        source: '/faqs',
        destination: '/faq',
        permanent: true,
      },
      {
        source: '/neem-contact-op',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/voorwaarden-en-beleid',
        destination: '/voorwaarden',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig

