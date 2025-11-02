import type { Metadata, NextPage } from 'next'

import { getMetaData } from '../../utils/seo/get-metadata'
import { Header } from './sections/header'

export const generateMetadata = async (): Promise<Metadata> => {
  return getMetaData({
    title: 'Login',
    description: '',
    image: '',
    url: '/login'
  })
}

const Page: NextPage = async () => {
  return (
    <main>
      <Header />
    </main>
  )
}

export default Page
