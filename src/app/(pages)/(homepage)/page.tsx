import type { Metadata, NextPage } from 'next'

import { PartnersCarousel } from '@/components/ui/partners-carousel'
import { getMetaData } from '@/utils/seo/get-metadata'

import { HowItWorks } from '../sobre/sections/how-it-works'
import { AboutTheProject } from './sections/about-the-project'
import { Benefits } from './sections/benefits'
import { Contact } from './sections/contact'
import { Header } from './sections/header'
import { Highlights } from './sections/highlights'
import { MoreInfoAbout } from './sections/more-info-about'

export const generateMetadata = async (): Promise<Metadata> => {
  return getMetaData({
    title:
      'Capivara Solidário | Crie Landing Pages Profissionais para ONGs em Minutos',
    description:
      'Transforme a presença digital da sua ONG com o Capivara Solidário. Gere páginas incríveis, personalize conteúdo e conquiste mais doadores e visibilidade — sem precisar de programador.',
    image: '',
    url: '  /'
  })
}

const Page: NextPage = async () => {
  return (
    <main>
      <Header />
      <PartnersCarousel />
      <Highlights />
      <MoreInfoAbout />
      <Benefits />
      <HowItWorks />
      <AboutTheProject />
      <Contact />
    </main>
  )
}

export default Page
