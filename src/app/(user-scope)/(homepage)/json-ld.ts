import type {
  Organization,
  Person,
  WebPage,
  WebSite,
  WithContext
} from 'schema-dts'

const members: Person[] = [
  {
    '@type': 'Person',
    '@id': 'https://capivara-solidaria.com.br/sobre/#gabrielortona',
    name: 'Gabriel Ortona',
    jobTitle: 'Analista de Dados',
    sameAs: 'https://www.linkedin.com/in/gabriel-gardeazabal-ortona-8332511ab/'
  },
  {
    '@type': 'Person',
    '@id': 'https://capivara-solidaria.com.br/sobre/#higormathias',
    name: 'Higor Figueiredo',
    jobTitle: 'Desenvolvedor de Controles Internos',
    sameAs: 'https://www.linkedin.com/in/higor-matias-7905262aa/'
  },
  {
    '@type': 'Person',
    '@id': 'https://capivara-solidaria.com.br/sobre/#luisgustavo',
    name: 'Luis Gustavo',
    jobTitle: 'Desenvolvedor Mobile',
    sameAs: 'https://www.linkedin.com/in/lu%C3%ADs-gustavo-barbosa-27b0601b2'
  },
  {
    '@type': 'Person',
    '@id': 'https://capivara-solidaria.com.br/sobre/#matheusrocha',
    name: 'Matheus Rocha',
    jobTitle: 'Desenvolvedor Backend',
    sameAs: 'https://www.linkedin.com/in/matheus-rocha-45a077300/'
  },
  {
    '@type': 'Person',
    '@id': 'https://capivara-solidaria.com.br/sobre/#murilomedina',
    name: 'Murilo Medina',
    jobTitle: 'Engenheiro de Software',
    sameAs: 'https://www.linkedin.com/in/murilo-medina-47ba002a9/'
  },
  {
    '@type': 'Person',
    '@id': 'https://capivara-solidaria.com.br/sobre/#vitorgabriel',
    name: 'Vitor Gabriel Silva',
    jobTitle: 'Desenvolvedor Frontend',
    sameAs: 'https://www.linkedin.com/in/vitor-silva-0ab38a261/'
  }
]

const organization: Organization = {
  '@type': 'Organization',
  '@id': 'https://capivara-solidaria.com.br/#website',
  name: 'Capivara Solidária',
  alternateName: 'Capivara Solidaria',
  url: 'https://capivara-solidaria.com.br',
  email: 'capivarasolidariacapivari@gmail.com',
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
  knowsAbout: [
    'ONGs',
    'Assistência Social',
    'Educação',
    'Saúde',
    'Meio Ambiente'
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    telephone: '+5519999101607',
    availableLanguage: { '@type': 'Language', name: 'Portuguese' }
  },
  sameAs: ['https://www.instagram.com/capivara.solidaria'],
  member: members,
  founder: members
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
  sameAs: ['https://www.instagram.com/capivara.solidaria']
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
