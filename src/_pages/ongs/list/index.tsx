'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import type { FC } from 'react'
import { useEffect, useState } from 'react'

import type { OrganizationProps } from '@/domain/entities/organization'
import type { MeasurementOngTypes } from '@/repositories/measurement-repository/types'
import { posthogEventDispatch } from '@/services/posthog/dispatch'
import { EmptyBox } from '@/shared/assets/icons/empty-box'

import { OngCard } from './card'
import { categories } from './data'
import { OngDrawer } from './drawer'
import type { ListProps } from './types'
import { Waves } from './waves'

export const List: FC<ListProps> = ({ data }) => {
  const [selectedOng, setSelectedOng] = useState<OrganizationProps | null>(null)

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
        className="group absolute top-[40%] z-20 w-full lg:min-h-47.5"
        id="page-wrap"
      >
        <Waves />
      </div>
      <div className="relative z-50 mx-auto w-full max-w-2xl lg:max-w-7xl">
        <div className="invisible-scrollbar mb-6 flex items-center gap-2 overflow-x-auto pb-2">
          <div className="shrink-0">
            <input
              className="h-9 w-50 rounded-full border border-neutral-200 bg-white px-4 text-[13px] text-neutral-700 transition duration-150 placeholder:text-neutral-400 hover:border-rose-300 focus:border-rose-400 focus:ring-2 focus:ring-rose-100 focus:outline-none"
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
                  category: label as MeasurementOngTypes,
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

              const initial = profile?.name?.charAt(0) ?? '?'

              return profile?.name && ong.account_status === 'active' ? (
                <OngCard
                  index={index}
                  initial={initial}
                  key={`${profile?.name}-${index}`}
                  ong={ong}
                  profile={profile}
                  setSelectedOng={setSelectedOng}
                />
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
