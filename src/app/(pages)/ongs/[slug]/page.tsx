import type { Metadata, NextPage } from 'next'
import { notFound } from 'next/navigation'

import { instanceMotor } from '@/instances/motor'
import { getUserSession } from '@/utils/auth/get-user-session'
import { getMetaData } from '@/utils/seo/get-metadata'

import { EditablePrimaryLandingPageLayout } from './editable-layout/templates/primary'
import { ReadablePrimaryLandingPageLayout } from './readable-layout/templates/primary'
import type { OngPageProps } from './types'

export const generateMetadata = async ({
  params
}: OngPageProps): Promise<Metadata> => {
  const { slug } = await params

  const { data: response } =
    await instanceMotor.organizations.getOrganizationBySlug({ slug })

  if (!response.organization) {
    return notFound()
  }

  return getMetaData({
    title: 'Projetos',
    description: 'Projetos',
    image: '',
    url: `/ongs/${slug}`
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
