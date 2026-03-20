import type { Organization, WebPage, WebSite, WithContext } from 'schema-dts'

const organization: Organization = {
  '@type': 'Organization',
  '@id': 'https://capivara-solidaria.com.br/#website',
  name: 'Capivara Solidária',
  url: 'https://capivara-solidaria.com.br',
  logo: {
    '@type': 'ImageObject',
    url: 'https://capivara-solidaria.com.br/logo.png',
    width: '200',
    height: '200'
  },
  description:
    'Plataforma brasileira que conecta apoiadores a ONGs verificadas nas áreas de Assistência Social, Educação, Saúde e Meio Ambiente.',
  foundingDate: '2025',
  areaServed: {
    '@type': 'Country',
    name: 'Brasil'
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    telephone: '5519999101607',
    availableLanguage: 'Portuguese'
  },
  sameAs: ['https://www.instagram.com/capivara.solidaria']
}

export const websiteJsonLd: WithContext<WebSite> = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://capivara-solidaria.com.br/#website',
  url: 'https://capivara-solidaria.com.br',
  name: 'Capivara Solidária',
  description:
    'Descubra ONGs verificadas e apoie causas que transformam o Brasil.',
  inLanguage: 'pt-BR',
  publisher: { '@id': 'https://capivara-solidaria.com.br/' }
}

export const homepageJsonLd: WithContext<WebPage> = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://capivara-solidaria.com.br/#website',
  url: 'https://capivara-solidaria.com.br',
  name: 'Capivara Solidária — Conectando você a ONGs que transformam o Brasil',
  description:
    'Plataforma gratuita para descobrir, conhecer e apoiar organizações sem fins lucrativos verificadas nas áreas de Assistência Social, Educação, Saúde e Meio Ambiente.',
  isPartOf: { '@id': 'https://capivara-solidaria.com.br/#website' },
  about: { '@id': 'https://capivara-solidaria.com.br/sobre' },
  inLanguage: 'pt-BR',
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Início',
        item: 'https://capivara-solidaria.com.br'
      }
    ]
  }
}

export const organizationJsonLd: WithContext<Organization> = {
  '@context': 'https://schema.org',
  ...organization
}

export const getHomepageJsonLd = (): string => {
  // Google supports @graph for multiple entities in one <script> block
  const graph = {
    '@context': 'https://schema.org',
    '@graph': [websiteJsonLd, homepageJsonLd, organizationJsonLd].map(
      ({ '@context': _, ...rest }) => rest
    ) // strip @context from each node — @graph handles it
  }
  return JSON.stringify(graph)
}
