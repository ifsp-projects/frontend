import type { Metadata, NextPage } from 'next'

import { getMetaData } from '@/utils/seo/get-metadata'

import { FAQ } from '../common/sections/faq'
import { ImagesGrid } from '../common/sections/images-grid'
import { MoreInfoAbout } from '../common/sections/more-info-about'
import { Depoiments } from './sections/depoiments'
import { Details } from './sections/details'
import { Header } from './sections/header'
import { Mission } from './sections/mission'

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
    <main className="text-slate-700 selection:!bg-emerald-50">
      <Header />
      <Details />
      <ImagesGrid />
      <MoreInfoAbout />
      <Mission />
      <Depoiments />
      <FAQ color="emerald" />
    </main>
  )
}

export default Page
