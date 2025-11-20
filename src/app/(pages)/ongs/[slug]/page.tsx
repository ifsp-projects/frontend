import type { Metadata, NextPage } from 'next'

import { instanceMotor } from '@/instances/motor'
import { getUserSession } from '@/utils/auth/get-user-session'
import { getMetaData } from '@/utils/seo/get-metadata'

import { PrimaryLandingPageLayout } from './templates/primary'
import type { OngPageProps } from './types'

export const generateMetadata = async (): Promise<Metadata> => {
  return getMetaData({
    title: 'Projetos',
    description: 'Projetos',
    image: '',
    url: '/ongs'
  })
}

const Page: NextPage<OngPageProps> = async ({ params }) => {
  const { slug } = await params

  const user = await getUserSession()
  const { data: response } =
    await instanceMotor.organizations.getOrganizationBySlug({ slug })

  return user.email === response.organization.email ? (
    <main>dono da page</main>
  ) : (
    <PrimaryLandingPageLayout />
  )
}

export default Page
