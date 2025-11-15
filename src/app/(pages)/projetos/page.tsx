import type { Metadata, NextPage } from 'next'

import { getMetaData } from '../../../utils/seo/get-metadata'
import { Header } from './sections/header'
import { Projects } from './sections/projects'

export const generateMetadata = async (): Promise<Metadata> => {
  return getMetaData({
    title: 'Projetos',
    description: 'Projetos',
    image: '',
    url: '/projetos'
  })
}

const Page: NextPage = async () => {
  return (
    <main className="bg-neutral-50">
      <Header />
      <Projects />
    </main>
  )
}

export default Page
