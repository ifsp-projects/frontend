import type { Metadata, NextPage } from 'next'

import { getMetaData } from '../../../../utils/seo/get-metadata'
import { FAQ } from '../common/sections/faq'
import { ImagesGrid } from '../common/sections/images-grid'
import { AboutUs } from './sections/about-us'
import { Header } from './sections/header'
import { HowItWorks } from './sections/how-it-works'
import { MoreInfoAbout } from './sections/more-info-about'

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
    <main className="text-slate-700 selection:!bg-blue-50 selection:text-blue-600">
      <Header />
      <ImagesGrid />
      <HowItWorks />
      <MoreInfoAbout />
      <AboutUs />
      <FAQ color="blue" />
    </main>
  )
}

export default Page
