import type { Metadata, NextPage } from 'next'

import { getMetaData } from '@/utils/seo/get-metadata'

import { AllArticles } from './sections/all-articles'
import { Contact } from './sections/contact'
import { FeaturedArticles } from './sections/featured-articles'

export const generateMetadata = async (): Promise<Metadata> => {
  return getMetaData({
    title: 'Blog | Capivara Solidária',
    description:
      'Conheça o Blog Capivara Solidária, uma plataforma feita para fortalecer ONGs com páginas profissionais, acessíveis e prontas para captar mais apoio.',
    image: '',
    url: '/blog'
  })
}

const Page: NextPage = async () => {
  return (
    <main>
      <FeaturedArticles />
      <AllArticles />
      <Contact />
    </main>
  )
}

export default Page
