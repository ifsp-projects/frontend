import type { Metadata, NextPage } from 'next'

import { getMetaData } from '@/utils/seo/get-metadata'

import { AllArticles } from './sections/all-articles'
import { Contact } from './sections/contact'
import { FeaturedArticles } from './sections/featured-articles'

export const generateMetadata = async (): Promise<Metadata> => {
  return getMetaData({
    title: 'Capivara Solidária | Blog de Impacto Social',
    description:
      'Descubra conteúdos, histórias e estratégias para ajudar ONGs a crescer, aumentar sua visibilidade e gerar mais impacto social.',
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
