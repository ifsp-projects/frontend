import type { Metadata, NextPage } from 'next'

import { getMetaData } from '@/utils/seo/get-metadata'

import { FAQ } from '../common/sections/faq'
import { Causes } from './sections/causes'
import { GetInvolved } from './sections/get-involved'
import { Header } from './sections/header'
import { Timeline } from './sections/timeline'

export const generateMetadata = async (): Promise<Metadata> => {
  return getMetaData({
    title: 'Projetos',
    description: 'Projetos',
    image: '',
    url: '/ongs'
  })
}

const Page: NextPage = async () => {
  return (
    <main className="text-neutral-700 selection:bg-red-50! selection:text-red-600">
      <Header />
      <Causes />
      <Timeline />
      <GetInvolved />
      <FAQ color="red" />
    </main>
  )
}

export default Page
