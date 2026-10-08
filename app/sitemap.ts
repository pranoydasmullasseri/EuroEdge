import { MetadataRoute } from 'next'
import { servicesData } from '@/lib/services-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.euroedgets.com'
  const lastModifiedDate = new Date('2026-03-01T00:00:00.000Z')

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: lastModifiedDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: lastModifiedDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: lastModifiedDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/industries`,
      lastModified: lastModifiedDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: lastModifiedDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/careers`,
      lastModified: lastModifiedDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: lastModifiedDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-and-conditions`,
      lastModified: lastModifiedDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]

  const serviceRoutes: MetadataRoute.Sitemap = servicesData.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: lastModifiedDate,
    changeFrequency: 'weekly' as const,
    priority: 0.95,
  }))

  return [...staticRoutes, ...serviceRoutes]
}
