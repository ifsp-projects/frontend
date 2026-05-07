'use client'

import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'
import type { FC } from 'react'
import { useEffect, useState } from 'react'

import { EmptyBox } from '@/assets/icons/empty-box'
import { FacebookIcon } from '@/assets/icons/facebook'
import { TwitterIcon } from '@/assets/icons/twitter'
import { InstagramIcon } from '@/assets/socials/instagram'
import { posthogEventDispatch } from '@/instances/posthog/dispatch'
import type { PostgresOrganization } from '@/types/postgres/postgres-organization'
import { formatOngType } from '@/utils/helpers/format-ong-type'

import { categories } from './data'
import { OngDrawer } from './drawer'
import type { ListProps } from './types'

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

export const List: FC<ListProps> = ({ data }) => {
  const [selectedOng, setSelectedOng] = useState<PostgresOrganization | null>(
    null
  )

  const router = useRouter()
  const searchParams = useSearchParams()

  const selectedCategory = searchParams.get('ong_type') ?? ''
  const currentSearch = searchParams.get('name') ?? ''

  const [searchInput, setSearchInput] = useState(currentSearch)

  useEffect(() => {
    const timeout = setTimeout(() => {
      const params = new URLSearchParams(Array.from(searchParams.entries()))
      if (searchInput) params.set('name', searchInput)
      else params.delete('name')
      router.replace(`/ongs?${params.toString()}`)
    }, 400)
    return () => clearTimeout(timeout)
  }, [searchInput])

  useEffect(() => {
    setSearchInput(currentSearch)
  }, [currentSearch])

  const handleSelectCategory = (key: string) => {
    const params = new URLSearchParams(Array.from(searchParams.entries()))
    if (selectedCategory === key) params.delete('ong_type')
    else params.set('ong_type', key)
    router.replace(`/ongs?${params.toString()}`)
  }

  const orgs = data?.organizations ?? []

  return (
    <section className="relative bg-white px-4 py-8 lg:py-12 xl:px-0">
      <div
        className="group absolute top-[40%] z-20 w-full lg:min-h-[190px]"
        id="page-wrap"
      >
        <div id="inner-wrap">
          <svg
            className="waves w-full"
            height="321.75"
            preserveAspectRatio="xMinYMid meet"
            viewBox="0 0 960 214.5"
            width="1440"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="a">
                <stop offset="0" stopColor="#fafafa" />
                <stop offset="0.2" stopColor="#f5f5f5" />
                <stop offset="0.4" stopColor="#eaeaea" />
                <stop offset="0.6" stopColor="#f5f5f5" />
                <stop offset="1" stopColor="#fafafa" />
              </linearGradient>
            </defs>

            <path
              d="M2662.6 1S2532 41.2 2435 40.2c-19.6-.2-37.3-1.3-53.5-2.8 0 0-421.3-59.4-541-28.6-119.8 30.6-206.2 75.7-391 73.3-198.8-2-225.3-15-370.2-50-145-35-218 37-373.3 36-19.6 0-37.5-1-53.7-3 0 0-282.7-36-373.4-38C139 26 75 46-1 46v106c17-1.4 20-2.3 37.6-1.2 130.6 8.4 210 56.3 287 62.4 77 6 262-25 329.3-23.6 67 1.4 107 22.6 193 23.4 155 1.5 249-71 380-62.5 130 8.5 209 56.3 287 62.5 77 6 126-18 188-18 61.4 0 247-38 307.4-46 159.3-20 281.2 29 348.4 30 67 2 132.2 6 217.4 7 39.3 0 87-11 87-11V1z"
              fill="url(#a)"
              fillOpacity="0.25"
            />

            <path
              d="M2663.6 73.2S2577 92 2529 89c-130.7-8.5-209.5-56.3-286.7-62.4s-125.7 18-188.3 18c-5 0-10-.4-14.5-.7-52-5-149.2-43-220.7-39-31.7 2-64 14-96.4 30-160.4 80-230.2-5.6-340.4-18-110-12-146.6 20-274 36S820.4 0 605.8 0C450.8 0 356 71 225.2 62.2 128 56 60.7 28-.3 11.2V104c22 7.3 46 14.2 70.4 16.7 110 12.3 147-19.3 275-35.5s350 39.8 369 43c27 4.3 59 8 94 10 13 .5 26 1 39 1 156 2 250-70.3 381-62 130.5 8.2 209.5 56.3 286.7 62 77 6.4 125.8-18 188.3-17.5 5 0 10 .2 14.3.6 52 5 145 49.5 220.7 38.2 32-5 64-15 96.6-31 160.5-79.4 230.3 6 340 18.4 110 12 146.3-20 273.7-36l15.5-2V73l1-.5z"
              fill="#f5f5f5"
            />

            <g fill="none" stroke="#e5e5e5" strokeWidth="0.6">
              <path d="M0 51.4c3.4.6 7.7 1.4 11 2.3 133.2 34 224.3 34 308.6 34 110.2 0 116.7 36.6 229.8 26 113-11 128.7-44 222-42.6C865 73 889 38 1002 27c113-10.8 119.6 25.6 229.8 25.6 84.4 0 175.4 0 308.6 34 133 34.2 277-73 379.4-84.3 204-22.5 283.6 128.7 283.6 128.7" />
              <path d="M0 6C115.7-6 198.3 76.6 308 76.6c109.6 0 131.8-20 223-28.3 114.3-10.2 238.2 0 238.2 0s124 10.2 238.3 0c91-8.2 113.2-28 223-28S1425 103 1541 91c115.8-11.8 153.3-69 269.3-84.6 116-15.5 198.4 71 308 71 109.8 0 131.8-20 223-28 114-10.2 237.7 0 237.7 0s37.4 2.4 82.8 3.7" />
            </g>
          </svg>
        </div>
      </div>
      <div className="relative z-50 mx-auto w-full max-w-2xl lg:max-w-7xl">
        <div className="scrollbar-hide mb-6 flex items-center gap-2 overflow-x-auto pb-2">
          <div className="shrink-0">
            <input
              className="h-9 w-[200px] rounded-full border border-neutral-200 bg-white px-4 text-[13px] text-neutral-700 transition duration-150 placeholder:text-neutral-400 hover:border-rose-300 focus:border-rose-400 focus:ring-2 focus:ring-rose-100 focus:outline-none"
              onChange={e => setSearchInput(e.target.value)}
              placeholder="Buscar organização..."
              type="text"
              value={searchInput}
            />
          </div>

          <div className="mx-2 h-5 w-px shrink-0 bg-neutral-200" />

          {categories.map(({ key, label }) => (
            <button
              className={`flex h-8 shrink-0 cursor-pointer items-center gap-1.5 rounded-full border px-4 text-xs font-medium transition-all duration-150 focus:outline-none ${
                selectedCategory === key
                  ? 'border-rose-400 bg-rose-400 text-white shadow-sm'
                  : 'border-neutral-200 bg-white text-neutral-700 hover:border-rose-300 hover:text-rose-500'
              }`}
              onClick={() => {
                handleSelectCategory(key)
                posthogEventDispatch.ongsHub.filterCategory({
                  category: label,
                  resultsCount: orgs.length
                })
              }}
              aria-label="Select Ong Category"
              key={key}
            >
              {label}
            </button>
          ))}
        </div>

        <p className="mb-4 text-lg font-bold">
          Organizações
          {orgs.length > 0 && (
            <span className="ml-2 text-sm font-normal text-neutral-400">
              ({orgs.filter(org => org.account_status === 'active').length})
            </span>
          )}
        </p>

        {orgs.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {orgs.map((ong, index: number) => {
              const profile = ong.organization_profile
              const colors = getCategoryColor(profile?.ong_type ?? '')
              const initial = profile?.name?.charAt(0) ?? '?'

              return profile?.name && ong.account_status === 'active' ? (
                <button
                  onClick={() => {
                    setSelectedOng(ong)
                    posthogEventDispatch.ongsHub.clickOrgCard({
                      ongType: formatOngType({
                        ong_type: ong?.organization_profile?.ong_type
                      }),
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
                            className="h-[150px] w-full rounded-lg object-contain p-2"
                            fetchPriority={index <= 8 ? 'high' : 'auto'}
                            height={1080}
                            loading={index <= 8 ? 'eager' : 'lazy'}
                            src={profile.logo}
                            width={1080}
                          />
                        </figure>
                      ) : (
                        <figure className="flex h-[150px] w-full items-center justify-center bg-linear-to-br from-rose-100 to-rose-200">
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
                          <FacebookIcon className="h-[22px] w-[22px] text-neutral-600 transition-all duration-300 group-hover:text-neutral-700" />
                        ) : null}
                        {profile?.twitter_url ? (
                          <TwitterIcon className="ml-[5.1px] h-[22px] w-[22px] text-neutral-600 transition-all duration-300 group-hover:text-neutral-700" />
                        ) : null}
                      </div>
                      <article className="-mt-1.5 flex h-full flex-col border-b border-neutral-200 pb-3">
                        <p className="truncate text-base font-bold">
                          {profile?.name}
                        </p>
                        <p className="mt-0.5 line-clamp-3 text-sm text-neutral-500">
                          {profile?.ong_description ??
                            'Organização sem fins lucrativos dedicada a causas sociais.'}
                        </p>
                      </article>
                      <div className="mt-0 flex w-full items-center justify-center rounded-full bg-rose-400 px-4 py-1.5 text-[13px] font-medium text-white transition-all duration-300 group-hover:bg-rose-500 lg:mt-2">
                        Conhecer o projeto
                      </div>
                    </div>
                  </div>
                </button>
              ) : null
            })}
          </div>
        ) : (
          <article className="flex flex-col items-center justify-center rounded-sm border border-neutral-300 bg-white p-4 py-8 text-center">
            <figure className="mb-4">
              <EmptyBox />
            </figure>
            <h3 className="mb-1 text-base font-semibold text-neutral-800">
              Nenhuma organização encontrada
            </h3>
            <p className="text-sm text-neutral-500">
              Tente alterar a categoria ou o termo de busca.
            </p>
          </article>
        )}
      </div>
      <OngDrawer
        onClose={() => setSelectedOng(null)}
        ong={selectedOng}
        open={!!selectedOng}
      />
    </section>
  )
}
