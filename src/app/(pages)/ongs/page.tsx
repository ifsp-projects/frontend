import type { Metadata, NextPage } from 'next'

import { getMetaData } from '@/utils/seo/get-metadata'
import { Header } from './sections/header'
import { TopDonatedOngs } from './sections/top-donated-ongs'
import { List } from './sections/list'

export const generateMetadata = async (): Promise<Metadata> => {
  return getMetaData({
    title: 'ONGs que fazem parte | Inovação Digital para ONGs Brasileiras',
    description:
      'Catálogo de ONGs que utilizam a Capivara Solidário para fortalecer sua presença digital e captar mais apoio.',
    image: '',
    url: '/ongs'
  })
}

const Page: NextPage = async () => {
  return (
    <main>
      <Header />
      <TopDonatedOngs />
      <List />
    </main>
  )
}

export default Page
