import type { Metadata, NextPage } from 'next'

import { getMetaData } from '../../../../utils/seo/get-metadata'
import { PrimaryLandingPageLayout } from './templates/primary'

export const generateMetadata = async (): Promise<Metadata> => {
  return getMetaData({
    title: 'Projetos',
    description: 'Projetos',
    image: '',
    url: '/ongs'
  })
}

const Page: NextPage = async () => {
  return <PrimaryLandingPageLayout />
}

export default Page
