import type { Metadata, NextPage } from 'next'

import { instanceMotor } from '@/instances/motor'
import { getUserSession } from '@/utils/auth/get-user-session'
import { getMetaData } from '@/utils/seo/get-metadata'

import { EditablePrimaryLandingPageLayout } from './editable-layout/templates/primary'
import { ReadablePrimaryLandingPageLayout } from './readable-layout/templates/primary'
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

  return user?.email === response.organization.email ? (
    <EditablePrimaryLandingPageLayout slug={slug} />
  ) : (
    <ReadablePrimaryLandingPageLayout slug={slug} />
  )
}

export default Page
