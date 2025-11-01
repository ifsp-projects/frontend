import type { Metadata, NextPage } from 'next'

import { getMetaData } from '../../../../utils/seo/get-metadata'
import { SecondaryLandingPageLayout } from '../../[slug]/templates/secondary'

export const generateMetadata = async (): Promise<Metadata> => {
  return getMetaData({
    title: 'Projetos',
    description: 'Projetos',
    image: '',
    url: '/ongs'
  })
}

const Page: NextPage = async () => {
  return <SecondaryLandingPageLayout />
}

export default Page
