import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://beemobiel.nl'
  const now = new Date()
  
  // Enhanced sitemap with images, videos, and maximum crawlability
  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
      alternates: {
        languages: {
          'nl': baseUrl,
          'nl-NL': baseUrl,
        },
      },
    },
    {
      url: `${baseUrl}/boek-nu`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          'nl': `${baseUrl}/boek-nu`,
          'nl-NL': `${baseUrl}/boek-nu`,
        },
      },
    },
    {
      url: `${baseUrl}/lessen`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          'nl': `${baseUrl}/lessen`,
          'nl-NL': `${baseUrl}/lessen`,
        },
      },
    },
    {
      url: `${baseUrl}/tarieven`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          'nl': `${baseUrl}/tarieven`,
          'nl-NL': `${baseUrl}/tarieven`,
        },
      },
    },
    {
      url: `${baseUrl}/tarieven/autos`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.85,
      alternates: {
        languages: {
          'nl': `${baseUrl}/tarieven/autos`,
          'nl-NL': `${baseUrl}/tarieven/autos`,
        },
      },
    },
    {
      url: `${baseUrl}/tarieven/motorfietsen`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.85,
      alternates: {
        languages: {
          'nl': `${baseUrl}/tarieven/motorfietsen`,
          'nl-NL': `${baseUrl}/tarieven/motorfietsen`,
        },
      },
    },
    {
      url: `${baseUrl}/tarieven/scooters`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.85,
      alternates: {
        languages: {
          'nl': `${baseUrl}/tarieven/scooters`,
          'nl-NL': `${baseUrl}/tarieven/scooters`,
        },
      },
    },
    {
      url: `${baseUrl}/tarieven/theorie`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.85,
      alternates: {
        languages: {
          'nl': `${baseUrl}/tarieven/theorie`,
          'nl-NL': `${baseUrl}/tarieven/theorie`,
        },
      },
    },
    {
      url: `${baseUrl}/ervaringen`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
      alternates: {
        languages: {
          'nl': `${baseUrl}/ervaringen`,
          'nl-NL': `${baseUrl}/ervaringen`,
        },
      },
    },
    {
      url: `${baseUrl}/tips`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
      alternates: {
        languages: {
          'nl': `${baseUrl}/tips`,
          'nl-NL': `${baseUrl}/tips`,
        },
      },
    },
    {
      url: `${baseUrl}/tips/eerste-rijles`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.75,
      alternates: {
        languages: {
          'nl': `${baseUrl}/tips/eerste-rijles`,
          'nl-NL': `${baseUrl}/tips/eerste-rijles`,
        },
      },
    },
    {
      url: `${baseUrl}/tips/examenfouten`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.75,
      alternates: {
        languages: {
          'nl': `${baseUrl}/tips/examenfouten`,
          'nl-NL': `${baseUrl}/tips/examenfouten`,
        },
      },
    },
    {
      url: `${baseUrl}/tips/rotondes`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.75,
      alternates: {
        languages: {
          'nl': `${baseUrl}/tips/rotondes`,
          'nl-NL': `${baseUrl}/tips/rotondes`,
        },
      },
    },
    {
      url: `${baseUrl}/tips/rijtips`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.75,
      alternates: {
        languages: {
          'nl': `${baseUrl}/tips/rijtips`,
          'nl-NL': `${baseUrl}/tips/rijtips`,
        },
      },
    },
    {
      url: `${baseUrl}/hoe-je-je-rijbewijs-haalt`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          'nl': `${baseUrl}/hoe-je-je-rijbewijs-haalt`,
          'nl-NL': `${baseUrl}/hoe-je-je-rijbewijs-haalt`,
        },
      },
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.75,
      alternates: {
        languages: {
          'nl': `${baseUrl}/faq`,
          'nl-NL': `${baseUrl}/faq`,
        },
      },
    },
    {
      url: `${baseUrl}/over-ons`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: {
        languages: {
          'nl': `${baseUrl}/over-ons`,
          'nl-NL': `${baseUrl}/over-ons`,
        },
      },
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: {
        languages: {
          'nl': `${baseUrl}/contact`,
          'nl-NL': `${baseUrl}/contact`,
        },
      },
    },
    {
      url: `${baseUrl}/voorwaarden`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.5,
      alternates: {
        languages: {
          'nl': `${baseUrl}/voorwaarden`,
          'nl-NL': `${baseUrl}/voorwaarden`,
        },
      },
    },
  ]
}



