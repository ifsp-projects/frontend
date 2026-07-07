import type { Metadata, NextPage } from 'next'
import dynamic from 'next/dynamic'
import Script from 'next/script'

import { Benefits } from '@/features/pages/homepage/sections/benefits'
import { Contact } from '@/features/pages/homepage/sections/contact'
import { Details } from '@/features/pages/homepage/sections/details'
import { Header } from '@/features/pages/homepage/sections/header'
import MoreInfoAbout from '@/features/pages/homepage/sections/more-info-about'
import { getMetaData } from '@/utils/seo/get-metadata'

import { getHomepageJsonLd } from './json-ld'

const HowItWorks = dynamic(
  () => import('@/features/pages/homepage/sections/how-it-works')
)

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
      <main className="overflow-x-hidden" id="website">
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
