import type { Metadata, NextPage } from 'next'

import { getMetaData } from '@/utils/seo/get-metadata'

export const generateMetadata = async (): Promise<Metadata> => {
  return getMetaData({
    title: 'Projetos',
    description: 'Projetos',
    image: '',
    url: '/minha-ong'
  })
}

const Page: NextPage = async () => {
  return <main className="bg-neutral-50"></main>
}

export default Page
