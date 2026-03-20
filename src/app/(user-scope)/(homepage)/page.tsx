import type { Metadata, NextPage } from 'next'
import Script from 'next/script'

import { getMetaData } from '@/utils/seo/get-metadata'

import { getHomepageJsonLd } from './json-ld'
import { Benefits } from './sections/benefits'
import { Contact } from './sections/contact'
import { Details } from './sections/details'
import { Header } from './sections/header'
import { HowItWorks } from './sections/how-it-works'
import { MoreInfoAbout } from './sections/more-info-about'

export const generateMetadata = async (): Promise<Metadata> => {
  return getMetaData({
    title:
      'Capivara Solidária | Crie Landing Pages Profissionais para ONGs em Minutos',
    description:
      'Transforme a presença digital da sua ONG com o Capivara Solidária. Gere páginas incríveis, personalize conteúdo e conquiste mais doadores e visibilidade — sem precisar de programador.',
    image: '',
    url: '  /'
  })
}

const Page: NextPage = async () => {
  return (
    <>
      <Script
        dangerouslySetInnerHTML={{ __html: getHomepageJsonLd() }}
        type="application/ld+json"
      />
      <main id="website">
        <Header />
        <Details />
        <Benefits />
        <MoreInfoAbout />
        <HowItWorks />
        <Contact />
      </main>
    </>
  )
}

export default Page
