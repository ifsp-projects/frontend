import type { MetadataRoute } from 'next'

const robots = (): MetadataRoute.Robots => {
  return {
    rules: {
      userAgent: '*',
      allow: ['/']
    },
    sitemap: ['https://capivara-solidaria.com.br/sitemap.xml']
  }
}

export default robots
