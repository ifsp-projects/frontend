import type { Metadata, NextPage } from 'next'
import Script from 'next/script'

import { Homepage } from '@/_pages/homepage'
import { getMetaData } from '@/shared/utils/seo/get-metadata'

import { getHomepageJsonLd } from './json-ld'

export const generateMetadata = async (): Promise<Metadata> => {
  return getMetaData({
    title:
      'Capivara Solidária | Crie Landing Pages Profissionais para ONGs em Minutos',
    description:
      'Transforme a presença digital da sua ONG com o Capivara Solidária. Gere páginas incríveis, personalize conteúdo e conquiste mais doadores e visibilidade — sem precisar de programador.',
    image: '',
    url: '/'
  })
}

const Page: NextPage = async () => {
  return (
    <>
      <Script
        dangerouslySetInnerHTML={{ __html: getHomepageJsonLd() }}
        type="application/ld+json"
      />
      <Homepage />
    </>
  )
}

export default Page
