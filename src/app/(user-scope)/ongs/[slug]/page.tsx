import type { Metadata, NextPage } from 'next'
import { notFound } from 'next/navigation'

import { instanceMotor } from '@/instances/motor'
import type { PostgresOrganization } from '@/types/postgres/postgres-organization'
import { getUserSession } from '@/utils/auth/get-user-session'
import { getMetaData } from '@/utils/seo/get-metadata'

import { EditablePrimaryLandingPageLayout } from './editable-layout/templates/primary'
import { EditableQuarternaryLandingPageLayout } from './editable-layout/templates/quarternary'
import { EditableSecondaryLandingPageLayout } from './editable-layout/templates/secondary'
import { EditableTertiaryLandingPageLayout } from './editable-layout/templates/tertiary'
import { ReadablePrimaryLandingPageLayout } from './readable-layout/templates/primary'
import { ReadableQuarternaryLandingPageLayout } from './readable-layout/templates/quarternary'
import { ReadableSecondaryLandingPageLayout } from './readable-layout/templates/secondary'
import { ReadableTertiaryLandingPageLayout } from './readable-layout/templates/tertiary'
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
        ): org is PostgresOrganization & {
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

  const user = await getUserSession()

  const { data: response } =
    await instanceMotor.organizations.getOrganizationBySlug({ slug })

  const EDITABLE_LAYOUTS = {
    primary: <EditablePrimaryLandingPageLayout slug={slug} />,
    secondary: <EditableSecondaryLandingPageLayout slug={slug} />,
    tertiary: <EditableTertiaryLandingPageLayout slug={slug} />,
    quarternary: <EditableQuarternaryLandingPageLayout slug={slug} />
  }

  const READABLE_LAYOUTS = {
    primary: <ReadablePrimaryLandingPageLayout slug={slug} />,
    secondary: <ReadableSecondaryLandingPageLayout slug={slug} />,
    tertiary: <ReadableTertiaryLandingPageLayout slug={slug} />,
    quarternary: <ReadableQuarternaryLandingPageLayout slug={slug} />
  }

  return user?.email === response.organization.email
    ? EDITABLE_LAYOUTS[
        response.organization.organization_profile?.design_template
      ]
    : READABLE_LAYOUTS[
        response.organization.organization_profile?.design_template
      ]
}

export default Page
