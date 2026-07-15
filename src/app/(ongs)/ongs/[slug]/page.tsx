import type { Metadata, NextPage } from 'next'
import { notFound } from 'next/navigation'

import type { OrganizationProps } from '@/domain/entities/organization'
import {
  LANDING_PAGE_LAYOUTS,
  isDesignTemplate
} from '@/features/page-builder/config/landing-page-layouts'
import { getOrganizationBySlug } from '@/features/page-builder/utils/get-organization-by-slug'
import { instanceMotor } from '@/services/motor'
import { getUserSession } from '@/features/auth/utils/get-user-session'
import { getMetaData } from '@/shared/utils/seo/get-metadata'

type OngPageProps = {
  params: Promise<{
    slug: string
  }>
}

export const generateMetadata = async ({
  params
}: OngPageProps): Promise<Metadata> => {
  const { slug } = await params

  const { data: response } =
    await instanceMotor.organizations.getOrganizationBySlug({ slug })

  if (!response.organization) {
    return notFound()
  }

  const { data } = await instanceMotor.pages.getPageBySlug({ slug })

  return getMetaData({
    title: response.organization?.organization_profile?.name,
    description: `Conheça mais sobre o projeto ${response.organization?.organization_profile?.name}, apoie causas que impactam positivamente nossa sociedade`,
    image: data?.page?.sections?.header?.heroImage || '',
    url: `/ongs/${slug}`
  })
}

export async function generateStaticParams() {
  const { data } = await instanceMotor.organizations.getAllOrganizations()

  return (
    data?.organizations
      ?.filter(
        (
          org
        ): org is OrganizationProps & {
          organization_profile: { slug: string }
        } =>
          typeof org?.organization_profile?.slug === 'string' &&
          org.organization_profile.slug.trim().length > 0
      )
      .map(org => ({
        slug: org.organization_profile.slug
      })) ?? []
  )
}

const Page: NextPage<OngPageProps> = async ({ params }) => {
  const { slug } = await params

  const [user, organization] = await Promise.all([
    getUserSession(),
    getOrganizationBySlug(slug)
  ])

  if (!organization) {
    notFound()
  }

  const designTemplate = organization.organization_profile?.design_template

  if (!isDesignTemplate(designTemplate)) {
    notFound()
  }

  const isOwner = user?.email === organization.email
  const { editable: EditableLayout, readable: ReadableLayout } =
    LANDING_PAGE_LAYOUTS[designTemplate]

  return isOwner ? (
    <EditableLayout slug={slug} />
  ) : (
    <ReadableLayout slug={slug} />
  )
}

export default Page
