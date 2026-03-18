import type { WebPage, WithContext } from 'schema-dts'

export const jsonLd: WithContext<WebPage> = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Termos de Uso',
  description:
    'Termos de Uso da plataforma Capivara Solidária — condições de uso, direitos e responsabilidades.',
  url: 'https://capivara-solidaria.com.br/termos-de-uso',
  publisher: {
    '@type': 'Organization',
    name: 'Capivara Solidária',
    url: 'https://capivara-solidaria.com.br'
  },
  dateModified: '2025-01-01',
  inLanguage: 'pt-BR',
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Início',
        item: 'https://capivara-solidaria.com.br'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Termos de Uso',
        item: 'https://capivara-solidaria.com.br/termos-de-uso'
      }
    ]
  }
}
