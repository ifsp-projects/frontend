import type { Metadata, NextPage } from 'next'

import { getMetaData } from '../../../utils/seo/get-metadata'
import { Header } from './sections/header'
import { Donations } from './sections/mission/donations'

export const generateMetadata = async (): Promise<Metadata> => {
  return getMetaData({
    title: 'Lar dos Velhinhos',
    description: 'Lar dos Velhinhos',
    image: '',
    url: '/projetos/lar-dos-velhinhos'
  })
}

const Page: NextPage = async () => {
  return (
    <main>
      <Header />
      <Donations />
    </main>
  )
}

export default Page
