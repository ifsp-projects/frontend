import type { MetadataRoute } from 'next'

import { BASE_URL } from '@/constants/environments/base-url'
import { instanceMotor } from '@/instances/motor'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://capivara-solidaria.com.br'

  const staticRoutes = ['/', '/login', '/sobre', '/minha-ong', '/ongs'].map(
    route => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1
    })
  )

  let ongsRoutes: MetadataRoute.Sitemap = []

  try {
    const { data } = await instanceMotor.organizations.getAllOrganizations()

    if (data?.organizations) {
      ongsRoutes = data.organizations.map(organization => ({
        url: `${BASE_URL}/ongs/${organization.organization_profile.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8
      }))
    }
  } catch (error) {
    console.error('Falha ao gerar sitemap das ONGs:', error)
  }

  return [...staticRoutes, ...ongsRoutes]
}
