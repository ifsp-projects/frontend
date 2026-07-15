import type { Metadata, NextPage } from 'next'
import Script from 'next/script'

import { TermosDeUso } from '@/_pages/termos-de-uso'
import { getMetaData } from '@/shared/utils/seo/get-metadata'

import { jsonLd } from './json-ld'

export const generateMetadata = async (): Promise<Metadata> => {
  return getMetaData({
    title: 'Termos de Uso | Capivara Solidária',
    description:
      'Leia os Termos de Uso da Capivara Solidária. Entenda as condições de utilização da plataforma, direitos e responsabilidades dos usuários e organizações cadastradas.',
    image: '',
    url: '/termos-de-uso'
  })
}

const Page: NextPage = async () => {
  return (
    <>
      <Script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        type="application/ld+json"
      />
      <TermosDeUso />
    </>
  )
}

export default Page
