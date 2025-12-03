import type { Metadata, NextPage } from 'next'

import { PartnersCarousel } from '@/components/ui/partners-carousel'
import { getMetaData } from '@/utils/seo/get-metadata'

import { HowItWorks } from '../sobre/sections/how-it-works'
import { Benefits } from './sections/benefits'
import { Contact } from './sections/contact'
import { Header } from './sections/header'
import { MoreInfoAbout } from './sections/more-info-about'
import { TopDonatedOngs } from './sections/top-donated-ongs'

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
    <main>
      <Header />
      <PartnersCarousel />
      <TopDonatedOngs />
      <MoreInfoAbout />
      <Benefits />
      <HowItWorks />
      <Contact />
    </main>
  )
}

export default Page
