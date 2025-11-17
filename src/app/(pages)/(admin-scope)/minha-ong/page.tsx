import type { Metadata, NextPage } from 'next'

import { getMetaData } from '@/utils/seo/get-metadata'

import { Form } from './sections/form'
import { Header } from './sections/header'

export const generateMetadata = async (): Promise<Metadata> => {
  return getMetaData({
    title: 'Projetos',
    description: 'Projetos',
    image: '',
    url: '/minha-ong'
  })
}

const Page: NextPage = async () => {
  return (
    <main className="bg-neutral-50">
      <Header />
      <Form />
    </main>
  )
}

export default Page
