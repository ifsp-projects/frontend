import type { MetadataRoute } from 'next'

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
