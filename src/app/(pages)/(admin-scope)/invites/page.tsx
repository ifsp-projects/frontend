import type { Metadata } from 'next'

import { admin } from '@/instances/admin'
import { getMetaData } from '@/utils/seo/get-metadata'

import { InviteList } from './components/invite-list'
import { SendInviteForm } from './components/send-invite-form'

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    ...getMetaData({
      title: 'Invites | Capivara Solidária',
      description:
        'Transforme a presença digital da sua ONG com o Capivara Solidária. Gere páginas incríveis, personalize conteúdo e conquiste mais doadores e visibilidade — sem precisar de programador.',
      image: '',
      url: '/invites'
    }),
    robots: {
      index: false,
      follow: false
    }
  }
}

export default async function AdminInvitesPage() {
  const { data } = await admin.listAllInvites()

  return (
    <div className="mx-auto max-w-5xl px-6 py-10">
      <div className="mb-10 flex flex-col gap-1">
        <span className="text-xs font-semibold tracking-widest text-rose-400 uppercase">
          Admin
        </span>
        <h1 className="text-3xl font-black tracking-tight text-neutral-800">
          Invites
        </h1>
        <p className="text-sm text-neutral-500">
          Send and manage onboarding invites for approved organizations.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <div className="rounded-sm border border-neutral-100 bg-neutral-50 p-6">
            <div className="mb-5">
              <h2 className="text-sm font-bold text-neutral-800">
                Send invite
              </h2>
              <p className="mt-1 text-xs leading-relaxed text-neutral-500">
                The user will receive an email with a link to activate their
                account.
              </p>
            </div>
            <SendInviteForm />
          </div>
        </div>

        <div className="lg:col-span-2">
          <InviteList invites={data.invites} />
        </div>
      </div>
    </div>
  )
}
