import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { NoInviteIcon } from '@/assets/icons/no-invite'
import { validateTokenAction } from '@/features/onboarding/actions/onboarding-actions'
import { ResetPasswordForm } from '@/features/onboarding/components/reset-password/reset-password-form'
import { StepBadge } from '@/features/onboarding/components/reset-password/step-badge'
import { RESET_PASSWORD_FEEDBACK_MESSAGES } from '@/features/onboarding/constants/reset-password-messages'
import { getMetaData } from '@/utils/seo/get-metadata'

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
    const msg =
      RESET_PASSWORD_FEEDBACK_MESSAGES[validation.reason || ''] ??
      RESET_PASSWORD_FEEDBACK_MESSAGES['not_found']

    return (
      <main className="flex min-h-screen items-center justify-center bg-white px-4">
        <header className="w-full max-w-sm text-center">
          <div className="mx-auto mb-6 flex h-32 w-32 items-center justify-center rounded-full border border-rose-100 bg-rose-50">
            <NoInviteIcon />
          </div>
          <h1 className="text-xl font-bold text-neutral-600">{msg.title}</h1>
          <p className="text-sm text-neutral-500">{msg.body}</p>
        </header>
      </main>
    )
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
            Defina sua senha
          </h1>
          <p className="text-sm leading-relaxed text-neutral-500">
            Bem-vindo,{' '}
            <span className="font-medium text-neutral-700">
              {validation.email}
            </span>
            . Crie uma senha segura para começar.
          </p>
        </section>

        <ResetPasswordForm email={validation.email} token={token} />
      </div>
    </main>
  )
}

export default Page
