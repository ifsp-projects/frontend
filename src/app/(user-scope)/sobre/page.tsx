import type { Metadata, NextPage } from 'next'

import { Header } from '@/features/pages/sobre/sections/header'
import { HowItWorks } from '@/features/pages/sobre/sections/how-it-works'
import { Members } from '@/features/pages/sobre/sections/members'
import { Stack } from '@/features/pages/sobre/sections/stack'
import { getMetaData } from '@/utils/seo/get-metadata'

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
    <main className="overflow-hidden">
      <Header />
      <HowItWorks />
      <Members />
      <Stack />
    </main>
  )
}

export default Page
