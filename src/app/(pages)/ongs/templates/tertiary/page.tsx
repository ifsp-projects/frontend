import type { Metadata, NextPage } from 'next'

import { getMetaData } from '@/utils/seo/get-metadata'

import { FAQ } from '../common/sections/faq'
import { AboutUs } from './sections/about-us'
import { Header } from './sections/header'
import { HowItWorks } from './sections/how-it-works'
import { Initiatives } from './sections/initiatives'
import { MoreInfoAbout } from './sections/more-info-about'
import { Testimonials } from './sections/testimonials'

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
    <main className="text-neutral-700 selection:bg-yellow-50! selection:text-yellow-600">
      <Header />
      <HowItWorks />
      <Testimonials />
      <MoreInfoAbout />
      <Initiatives />
      <AboutUs />
      <FAQ color="yellow" />
    </main>
  )
}

export default Page
