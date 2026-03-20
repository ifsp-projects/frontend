import type { Metadata, NextPage } from 'next'

import { getMetaData } from '@/utils/seo/get-metadata'

import { Header } from './sections/header'
import { HowItWorks } from './sections/how-it-works'
import { Members } from './sections/members'

export const generateMetadata = async (): Promise<Metadata> => {
  return getMetaData({
    title:
      'Sobre a Capivara Solidária | Inovação Digital para ONGs Brasileiras',
    description:
      'Conheça a Capivara Solidária, uma plataforma feita para fortalecer ONGs com páginas profissionais, acessíveis e prontas para captar mais apoio.',
    image: '',
    url: '/sobre'
  })
}

const Page: NextPage = async () => {
  return (
    <main>
      <Header />
      <HowItWorks />
      <Members />
    </main>
  )
}

export default Page
