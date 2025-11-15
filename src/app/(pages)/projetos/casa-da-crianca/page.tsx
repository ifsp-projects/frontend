import type { Metadata, NextPage } from 'next'

import { getMetaData } from '@/utils/seo/get-metadata'

import { Header } from './sections/header'
import { History } from './sections/history'
import { HowToHelp } from './sections/how-to-help'
import { Mission } from './sections/mission'

export const generateMetadata = async (): Promise<Metadata> => {
  return getMetaData({
    title: 'Casa da Criança',
    description: 'Casa da Criança',
    image: '',
    url: '/projetos/casa-da-crianca'
  })
}

const Page: NextPage = async () => {
  return (
    <main>
      <Header />
      <Mission />
      <History />
      <HowToHelp />
    </main>
  )
}

export default Page
