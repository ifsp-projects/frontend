import type { Metadata, NextPage } from 'next'

import { getMetaData } from '@/utils/seo/get-metadata'

import { Header } from './sections/header'
import { HowItWorks } from './sections/how-it-works'
import { Members } from './sections/members'

export const generateMetadata = async (): Promise<Metadata> => {
  return getMetaData({
    title: 'Conheça mais sobre nós',
    description: 'Conheça mais sobre nós',
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
