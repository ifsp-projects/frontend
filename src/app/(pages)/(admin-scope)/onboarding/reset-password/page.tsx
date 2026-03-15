import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { getMetaData } from '@/utils/seo/get-metadata'

import { validateTokenAction } from '../actions'
import { StepBadge } from '../components/step-badge'
import { InvalidTokenScreen } from './components/invalid-token-screen'
import { ResetPasswordForm } from './components/reset-password-form'

interface PageProps {
  searchParams: Promise<{ token?: string }>
}

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    ...getMetaData({
      title: 'Onboarding | Capivara Solidária',
      description:
        'Transforme a presença digital da sua ONG com o Capivara Solidária. Gere páginas incríveis, personalize conteúdo e conquiste mais doadores e visibilidade — sem precisar de programador.',
      image: '',
      url: '/onboarding/reset-password'
    }),
    robots: {
      index: false,
      follow: false
    }
  }
}

const Page = async ({ searchParams }: PageProps) => {
  const { token } = await searchParams

  if (!token) notFound()

  const validation = await validateTokenAction(token)

  if (!validation.valid) {
    return <InvalidTokenScreen reason={validation?.reason || ''} />
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-4 py-16">
      <div className="w-full max-w-md">
        <div className="mb-10 h-6 w-6 rounded-sm bg-rose-400" />

        <section className="mb-8 flex items-center gap-2.5">
          <StepBadge state="active" step={1} />
          <div className="h-px flex-1 bg-neutral-200" />
          <StepBadge state="upcoming" step={2} />
        </section>

        <section className="mb-8">
          <h1 className="mb-1.5 text-2xl font-black tracking-tight text-neutral-800">
            Set your password
          </h1>
          <p className="text-sm leading-relaxed text-neutral-500">
            Welcome,{' '}
            <span className="font-medium text-neutral-700">
              {validation.email}
            </span>
            . Create a secure password to get started.
          </p>
        </section>

        <ResetPasswordForm email={validation.email} token={token} />
      </div>
    </main>
  )
}

export default Page
