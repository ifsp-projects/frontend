import type { MetadataRoute } from 'next'

import { STATIC_PATHS } from '@/constants/paths'
import { blog } from '@/instances/blog'
import { instanceMotor } from '@/instances/motor'

/**
 * Generates the sitemap for the application.
 *
 * The sitemap includes:
 * - Static pages
 * - Organization profile pages
 * - Blog articles
 *
 * Dynamic routes are fetched from external services to ensure
 * search engines can discover and index newly created content.
 *
 * @returns Sitemap entries consumed by Next.js sitemap generation.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://capivara-solidaria.com.br'

  /**
   * Core application pages that are always available.
   */
  const staticRoutes = STATIC_PATHS.map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 1
  }))

  let ongsRoutes: MetadataRoute.Sitemap = []
  let blogArticleRoutes: MetadataRoute.Sitemap = []

  try {
    // Generates sitemap entries for organization public pages.
    const { data: organizations } =
      await instanceMotor.organizations.getAllOrganizations()

    if (organizations?.organizations) {
      ongsRoutes = organizations.organizations
        .filter(org => org.organization_profile?.slug != null)
        .map(organization => ({
          url: `${baseUrl}/ongs/${organization.organization_profile.slug}`,
          lastModified: new Date(),
          changeFrequency: 'weekly' as const,
          priority: 0.8
        }))
    }

    // Generates sitemap entries for blog articles.
    const { data: blogArticles } = await blog.articles.getAllArticles({
      shouldRemoveFeaturedArticles: false
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
    /**
     * Sitemap generation should continue even if dynamic
     * content cannot be retrieved.
     */
    console.error('Falha ao gerar sitemap das ONGs:', error)
  }

  return [...staticRoutes, ...ongsRoutes, ...blogArticleRoutes]
}
