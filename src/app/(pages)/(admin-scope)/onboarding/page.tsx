import type { Metadata, NextPage } from 'next'
import { notFound, redirect } from 'next/navigation'

import { admin } from '@/instances/admin'
import { instanceMotor } from '@/instances/motor'
import { getMetaData } from '@/utils/seo/get-metadata'

import { OnboardingProfileForm } from './components/form'
import { StepBadge } from './components/step-badge'
import type { OnboardingPageProps } from './types'

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    ...getMetaData({
      title: 'Onboarding | Capivara Solidária',
      description:
        'Gerencie as informações, imagens e campanhas da sua ONG em um só lugar. Edite seu perfil e mostre o impacto do seu trabalho.',
      image: '',
      url: '/onboarding'
    }),
    robots: {
      index: false,
      follow: false
    }
  }
}

const Page: NextPage<OnboardingPageProps> = async ({ searchParams }) => {
  const { token } = await searchParams

  if (!token) {
    await redirect('/')
  }

  const { data: inviteTokenData } = await admin.getInviteByToken({
    inviteToken: token
  })

  if (!inviteTokenData) {
    await redirect('/')
  }

  const { data } = await instanceMotor.organizations.getOrganizationByEmail({
    email: inviteTokenData.inviteToken.email
  })

  if (!data.organization) notFound()
  if (!data.organization?.is_user_new) redirect('/minha-ong')

  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-4 py-16">
      <section className="w-full max-w-lg">
        <div className="mb-10 h-6 w-6 rounded-sm bg-rose-400" />

        <div className="mb-8 flex items-center gap-2.5">
          <StepBadge state="done" step={1} />
          <div className="h-px flex-1 bg-rose-200" />
          <StepBadge state="active" step={2} />
        </div>

        <OnboardingProfileForm token={token} />
      </section>
    </main>
  )
}

export default Page
