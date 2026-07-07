import type { Metadata, NextPage } from 'next'

import { AllArticles } from '@/features/blog/sections/all-articles'
import { FeaturedArticles } from '@/features/blog/sections/featured-articles'
import { Contact } from '@/features/pages/homepage/sections/contact'
import { getMetaData } from '@/utils/seo/get-metadata'

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
    <main className="overflow-hidden">
      <FeaturedArticles />
      <AllArticles />
      <Contact />
    </main>
  )
}

export default Page
