import { ongsRoutesBuilder } from './ongs-routes'
import { staticRoutesBuilder } from './static-routes'

export const generateSitemap =
  async lastModified => `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticRoutesBuilder(lastModified)}
  ${await ongsRoutesBuilder(lastModified)}
  </urlset>
  `
