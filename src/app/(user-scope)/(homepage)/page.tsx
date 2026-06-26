import type { Metadata, NextPage } from 'next'
import dynamic from 'next/dynamic'
import Script from 'next/script'

import { getMetaData } from '@/utils/seo/get-metadata'

import { getHomepageJsonLd } from './json-ld'
import { Benefits } from './sections/benefits'
import { ContactSimplified } from './sections/contact-simplified'
import { Details } from './sections/details'
import { Header } from './sections/header'

const MoreInfoAbout = dynamic(() => import('./sections/more-info-about'))
const Contact = dynamic(() => import('./sections/contact'))
const HowItWorks = dynamic(() => import('./sections/how-it-works'))

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
      <main className="overflow-x-hidden" id="website">
        <Header />
        <Details />
        <Benefits />
        <MoreInfoAbout />
        <HowItWorks />
        <Contact />
        <ContactSimplified />
      </main>
    </>
  )
}

export default Page
