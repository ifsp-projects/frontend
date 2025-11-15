import type { Metadata, NextPage } from 'next'

import { getMetaData } from '../../../utils/seo/get-metadata'
import { ContactForm } from './sections/contact-form'
import { Header } from './sections/header'

export const generateMetadata = async (): Promise<Metadata> => {
  return getMetaData({
    title: 'Contato',
    description: 'Contato',
    image: '',
    url: '/contato'
  })
}

const Page: NextPage = async () => {
  return (
    <main>
      <Header />
      <ContactForm />
    </main>
  )
}

export default Page
