import type { MetadataRoute } from 'next'

/**
 * Generates the robots.txt configuration for search engines.
 *
 * Allows public pages to be crawled while preventing access
 * to private routes. Also exposes the site's sitemap to help
 * search engines discover and index content efficiently.
 *
 * @returns Robots configuration used by Next.js to generate robots.txt.
 */
const robots = (): MetadataRoute.Robots => {
  return {
    rules: {
      userAgent: '*',
      allow: ['/'],
      disallow: '/private/'
    },
    sitemap: ['https://capivara-solidaria.com.br/sitemap.xml']
  }
}

export default robots
