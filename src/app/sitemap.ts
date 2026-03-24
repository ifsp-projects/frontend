import type { MetadataRoute } from 'next'

import { blog } from '@/instances/blog'
import { instanceMotor } from '@/instances/motor'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://capivara-solidaria.com.br'

  const staticRoutes = [
    '/',
    '/faq',
    '/sobre',
    '/contato',
    '/ongs',
    '/gerador-de-conteudo-com-ia',
    '/criador-de-paginas',
    '/termos-de-uso',
    '/blog'
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 1
  }))

  let ongsRoutes: MetadataRoute.Sitemap = []
  let blogArticleRoutes: MetadataRoute.Sitemap = []

  try {
    const { data: organizations } =
      await instanceMotor.organizations.getAllOrganizations()

    if (organizations?.organizations) {
      ongsRoutes = organizations.organizations.map(organization => ({
        url: `${baseUrl}/ongs/${organization.organization_profile.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8
      }))
    }

    const { data: blogArticles } = await blog.articles.getAllArticles({
      shouldRemoveFeaturedArticles: true
    })

    if (blogArticles?.length) {
      blogArticleRoutes = blogArticles.map(article => ({
        url: `${baseUrl}/blog/${article.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8
      }))
    }
  } catch (error) {
    console.error('Falha ao gerar sitemap das ONGs:', error)
  }

  return [...staticRoutes, ...ongsRoutes, ...blogArticleRoutes]
}
