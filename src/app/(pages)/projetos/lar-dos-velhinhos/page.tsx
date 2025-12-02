import type { Metadata, NextPage } from 'next'

import { getMetaData } from '@/utils/seo/get-metadata'

import { FAQ } from '../sections/FAQ'
import { Donations } from './sections/donations'
import { Header } from './sections/header'
import { Mission } from './sections/mission'

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
      <Mission />
      <Donations />
      <FAQ color="esmerald" />
    </main>
  )
}

export default Page
