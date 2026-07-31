import Image from 'next/image'

import type { MeasurementOngTypes } from '@/repositories/measurement-repository/types'
import { posthogEventDispatch } from '@/services/posthog/dispatch'
import { FacebookIcon } from '@/shared/assets/icons/facebook'
import { TwitterIcon } from '@/shared/assets/icons/twitter'
import { InstagramIcon } from '@/shared/assets/socials/instagram'
import { formatOngType } from '@/shared/utils/helpers/format-ong-type'

import type { OngCardProps } from './types'

const categoryColors: Record<string, { bg: string; dot: string }> = {
  Animais: { bg: 'bg-yellow-50 text-yellow-700', dot: 'bg-yellow-400' },
  'Direitos Humanos': {
    bg: 'bg-purple-50 text-purple-700',
    dot: 'bg-purple-400'
  },
  'Combate à Fome': {
    bg: 'bg-orange-50 text-orange-700',
    dot: 'bg-orange-400'
  },
  'Crianças e Adolescentes': {
    bg: 'bg-sky-50 text-sky-700',
    dot: 'bg-sky-400'
  },
  Idosos: { bg: 'bg-blue-50 text-blue-700', dot: 'bg-blue-400' },
  'Pessoas com Deficiência': {
    bg: 'bg-indigo-50 text-indigo-700',
    dot: 'bg-indigo-400'
  }
}

const getCategoryColor = (category: string) =>
  categoryColors[category] ?? {
    bg: 'bg-neutral-100 text-neutral-600',
    dot: 'bg-neutral-400'
  }

export const OngCard: React.FC<OngCardProps> = ({
  setSelectedOng,
  index,
  ong,
  profile,
  initial
}) => {
  const colors = getCategoryColor(profile?.ong_type ?? '')

  return (
    <button
      onClick={() => {
        setSelectedOng(ong)
        posthogEventDispatch.ongsHub.clickOrgCard({
          ongType: formatOngType({
            ong_type: ong?.organization_profile?.ong_type
          }) as MeasurementOngTypes,
          position: index,
          orgId: ong.id
        })
      }}
      className="group flex cursor-pointer flex-col text-left"
      key={ong.id}
    >
      <div className="flex h-full flex-col overflow-hidden rounded-md border border-neutral-200 bg-white transition-all">
        <div className="relative flex w-full items-center justify-center overflow-hidden bg-white pt-4 lg:pt-6">
          {profile?.logo ? (
            <figure>
              <Image
                alt={profile.name ?? ''}
                className="h-37.5 w-full rounded-lg object-contain p-2"
                fetchPriority={index <= 10 ? 'high' : 'auto'}
                height={1080}
                loading={index <= 10 ? 'eager' : 'lazy'}
                src={profile.logo}
                width={1080}
              />
            </figure>
          ) : (
            <figure className="flex h-37.5 w-full items-center justify-center bg-linear-to-br from-rose-100 to-rose-200">
              <span className="text-4xl font-bold text-rose-400">
                {initial}
              </span>
            </figure>
          )}

          <p
            aria-label="Ong Type"
            className={`absolute top-2 left-2 line-clamp-1 flex items-center gap-1 rounded-full bg-rose-400 px-3 py-px text-[11px] font-semibold text-white backdrop-blur-sm ${colors.bg}`}
          >
            {formatOngType({ ong_type: profile?.ong_type })}
          </p>
        </div>

        <div className="flex flex-1 flex-col gap-3 p-4">
          <div className="flex w-full flex-wrap items-center gap-1">
            {profile?.instagram_url ? (
              <InstagramIcon className="-ml-2 h-8 w-8 transition-all duration-300 group-hover:text-neutral-700" />
            ) : null}
            {profile?.facebook_url ? (
              <FacebookIcon className="h-5.5 w-5.5 text-neutral-600 transition-all duration-300 group-hover:text-neutral-700" />
            ) : null}
            {profile?.twitter_url ? (
              <TwitterIcon className="ml-[5.1px] h-5.5 w-5.5 text-neutral-600 transition-all duration-300 group-hover:text-neutral-700" />
            ) : null}
          </div>
          <article className="-mt-1.5 flex h-full flex-col border-b border-neutral-200 pb-3">
            <p className="truncate text-base font-bold">{profile?.name}</p>
            <p className="mt-0.5 line-clamp-3 text-sm text-neutral-500">
              {profile?.ong_description ??
                'Organização sem fins lucrativos dedicada a causas sociais.'}
            </p>
          </article>
          <div className="mt-0 flex w-full items-center justify-center gap-1 rounded-full bg-rose-400 px-4 py-1.5 text-[13px] font-medium text-white transition-all duration-300 group-hover:bg-rose-500 lg:mt-2">
            Conhecer <span className="hidden md:flex"> o projeto</span>
          </div>
        </div>
      </div>
    </button>
  )
}
