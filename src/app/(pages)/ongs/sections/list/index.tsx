'use client'

import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import type { FC } from 'react'
import { useEffect, useState } from 'react'

import { EmptyBox } from '@/assets/icons/empty-box'
import { formatOngType } from '@/utils/helpers/format-ong-type'

import { categories } from './data'
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
    <section className="bg-neutral-50 px-4 py-8 lg:py-12 xl:px-0">
      <div className="mx-auto w-full max-w-2xl lg:max-w-7xl">
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

          <div className="h-5 w-px shrink-0 bg-neutral-200" />

          {categories.map(({ key, label }) => (
            <button
              className={`flex h-9 shrink-0 cursor-pointer items-center gap-1.5 rounded-full border px-4 text-[13px] font-medium transition-all duration-150 focus:outline-none ${
                selectedCategory === key
                  ? 'border-rose-400 bg-rose-400 text-white shadow-sm'
                  : 'border-neutral-200 bg-white text-neutral-700 hover:border-rose-300 hover:text-rose-500'
              }`}
              key={key}
              onClick={() => handleSelectCategory(key)}
            >
              {label}
            </button>
          ))}
        </div>

        <h2 className="mb-4 text-lg font-bold text-neutral-900">
          Organizações
          {orgs.length > 0 && (
            <span className="ml-2 text-sm font-normal text-neutral-400">
              ({orgs.length})
            </span>
          )}
        </h2>

        {orgs.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
            {orgs.map(ong => {
              const profile = ong.organization_profile
              const colors = getCategoryColor(profile?.ong_type ?? '')
              const initial = profile?.name?.charAt(0) ?? '?'

              return (
                <Link
                  className="group flex flex-col"
                  href={`/ongs/${ong.organization_profile?.slug}`}
                  key={ong.id}
                >
                  <div className="flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-neutral-100 transition-all duration-200 hover:shadow-md hover:ring-neutral-200">
                    <div className="relative aspect-square w-full overflow-hidden bg-neutral-100">
                      {profile?.logo ? (
                        <img
                          alt={profile.name ?? ''}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                          src={profile.logo}
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-rose-100 to-rose-200">
                          <span className="text-4xl font-bold text-rose-400">
                            {initial}
                          </span>
                        </div>
                      )}

                      <span
                        className={`absolute top-2 left-2 flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-semibold shadow-sm backdrop-blur-sm ${colors.bg}`}
                      >
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${colors.dot}`}
                        />
                        {formatOngType({ ong_type: profile?.ong_type })}
                      </span>
                    </div>

                    <article className="flex flex-1 flex-col p-3">
                      <p className="truncate text-sm font-semibold text-neutral-900 transition-colors duration-150 group-hover:text-rose-500">
                        {profile?.name}
                      </p>
                      <p className="mt-0.5 line-clamp-2 text-[12px] leading-relaxed text-neutral-500">
                        {profile?.ong_description ??
                          'Organização sem fins lucrativos dedicada a causas sociais.'}
                      </p>
                    </article>
                  </div>
                </Link>
              )
            })}
          </div>
        ) : (
          <article className="flex flex-col items-center justify-center py-20 text-center">
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
    </section>
  )
}
