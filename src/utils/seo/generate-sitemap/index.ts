import * as fs from 'fs'

import { generateSitemap } from './generate-sitemap'

const sitemapBuilder = async () => {
  const lastModified = new Date().toISOString()

  const sitemapResponse = await generateSitemap(lastModified)
  fs.writeFileSync(`public/sitemap.xml`, sitemapResponse)
}

sitemapBuilder()
