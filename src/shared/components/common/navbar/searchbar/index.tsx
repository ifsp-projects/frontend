import { ChevronRightIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { useNavbarSearch } from '@/shared/components/common/navbar/hooks/use-navbar-search'

import { QUICK_LINKS } from '../data'
import type { SearchbarProps } from './types'

export const Searchbar: React.FC<SearchbarProps> = ({ orgs }) => {
  const {
    clearQuery,
    close: closeSearch,
    inputRef: searchInputRef,
    isOpen: isSearchOpen,
    panelRef: searchPanelRef,
    query,
    results,
    setQuery
  } = useNavbarSearch(orgs)

  return (
    <div
      className={`absolute left-0 w-full border-b border-neutral-100 bg-white transition-all duration-300 ease-in-out ${
        isSearchOpen
          ? 'pointer-events-auto translate-y-0 opacity-100'
          : 'pointer-events-none -translate-y-2 opacity-0'
      }`}
      ref={searchPanelRef}
      style={{ top: '100%' }}
    >
      {isSearchOpen ? (
        <div className="mx-auto max-w-7xl px-4 pt-8 pb-4 lg:px-6 xl:px-0">
          <div className="relative flex items-center gap-3 border-b border-neutral-200 pb-4">
            <svg
              className="h-5 w-5 shrink-0 text-neutral-400"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" strokeLinecap="round" />
            </svg>
            <input
              className="w-full bg-transparent text-base text-neutral-800 placeholder:text-neutral-400 focus:outline-none"
              onChange={e => setQuery(e.target.value)}
              placeholder="Buscar organizações..."
              ref={searchInputRef}
              type="text"
              value={query}
            />
            {query && (
              <button
                aria-label="Limpar busca"
                className="shrink-0 text-neutral-400 transition-colors hover:text-neutral-600"
                onClick={clearQuery}
                type="button"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M6 18L18 6M6 6l12 12"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            )}
          </div>

          {query.trim() === '' ? (
            <div className="py-4">
              <p className="text-xs font-semibold text-neutral-400">
                Links rápidos
              </p>
              <div className="mt-3 flex flex-col">
                {QUICK_LINKS.map(({ href, label }) => (
                  <Link
                    className="flex items-center gap-2 rounded-md px-2 py-1.5 text-[13px] text-neutral-600 transition-colors hover:bg-neutral-50 hover:text-rose-500"
                    href={href}
                    key={href}
                    onClick={closeSearch}
                  >
                    <svg
                      height="16"
                      viewBox="0 0 9 16"
                      width="9"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m8.6124 8.1035-2.99 2.99a.5.5 0 0 1 -.7071-.7071l2.1366-2.1364h-6.316a.5.5 0 0 1 0-1h6.316l-2.1368-2.1367a.5.5 0 0 1 .7071-.7071l2.99 2.99a.5.5 0 0 1 .0002.7073z"></path>
                    </svg>
                    <p className="text-[13px] text-neutral-600">{label}</p>
                  </Link>
                ))}
              </div>
            </div>
          ) : results.length > 0 ? (
            <div className="py-3">
              <p className="mb-2 text-[11px] font-semibold tracking-widest text-neutral-400 uppercase">
                Organizações
              </p>
              <ul className="flex flex-col">
                {results.map(ong => {
                  const profile = ong.organization_profile
                  return (
                    <li key={ong.id}>
                      <Link
                        className="flex items-center gap-3 rounded-md px-2 py-2.5 transition-colors hover:bg-neutral-50"
                        href={`/ongs/${ong.organization_profile?.slug}`}
                        onClick={closeSearch}
                      >
                        {profile?.logo ? (
                          <Image
                            alt={profile.name ?? ''}
                            className="h-9 w-9 shrink-0 rounded-md border border-neutral-100 object-contain p-0.5"
                            height={36}
                            src={profile.logo}
                            width={36}
                          />
                        ) : (
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-rose-100 text-sm font-bold text-rose-400">
                            {profile?.name?.charAt(0) ?? '?'}
                          </div>
                        )}
                        <article className="flex min-w-0 flex-col">
                          <p className="truncate text-sm font-semibold text-neutral-800">
                            {profile?.name}
                          </p>
                          <p className="truncate text-xs text-neutral-400">
                            {profile?.ong_type}
                          </p>
                        </article>
                        <ChevronRightIcon className="ml-auto h-4 w-4 shrink-0 text-neutral-300" />
                      </Link>
                    </li>
                  )
                })}
              </ul>
              <Link
                className="mt-2 flex items-center gap-1.5 px-2 py-2 text-xs font-medium text-rose-500 transition-colors hover:text-rose-600"
                href={`/ongs?name=${encodeURIComponent(query)}`}
                onClick={closeSearch}
              >
                Ver todos os resultados para "{query}"
                <ChevronRightIcon className="h-3.5 w-3.5" />
              </Link>
            </div>
          ) : (
            <article className="flex flex-col items-center justify-center py-8 text-center">
              <p className="text-sm font-medium text-neutral-600">
                Nenhuma organização encontrada para "{query}"
              </p>
              <p className="mt-1 text-xs text-neutral-400">
                Tente um termo diferente ou navegue pelas categorias.
              </p>
            </article>
          )}
        </div>
      ) : null}
    </div>
  )
}
