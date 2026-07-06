'use client'

import { ChevronRightIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { useMobileMenu } from '@/hooks/use-mobile-menu'
import { useNavbarSearch } from '@/hooks/use-mobile-navbar'
import { useUserSession } from '@/hooks/use-user-session'
import type { PostgresOrganization } from '@/types/postgres/postgres-organization'

import { HamburgerButton } from '../hamburger-button'
import { DESKTOP_NAV_LINKS, MOBILE_NAV_LINKS, QUICK_LINKS } from './data'

interface NavbarProps {
  orgs?: PostgresOrganization[]
}

export const Navbar = ({ orgs = [] }: NavbarProps) => {
  const pathname = usePathname()
  const { organization } = useUserSession()

  const {
    isOpen: isMenuOpen,
    toggle: toggleMenu,
    close: closeMenu
  } = useMobileMenu()

  const {
    clearQuery,
    close: closeSearch,
    inputRef: searchInputRef,
    isOpen: isSearchOpen,
    open: openSearch,
    panelRef: searchPanelRef,
    query,
    results,
    setQuery
  } = useNavbarSearch(orgs)

  if (pathname === '/login') return null

  return (
    <>
      <div
        className={`fixed inset-0 z-998 transition-all duration-300 ${
          isSearchOpen
            ? 'pointer-events-auto bg-neutral-500/40 opacity-100 backdrop-blur-sm'
            : 'pointer-events-none opacity-0'
        }`}
        onClick={closeSearch}
        aria-hidden
      />

      <nav className="sticky top-0 left-0 z-999 w-full border-b border-neutral-50 bg-neutral-50 py-1">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 lg:px-6 xl:px-0">
          <Link href="/">
            <Image
              alt="Project Logo"
              className="aspect-video max-h-12 max-w-28 object-cover"
              fetchPriority="high"
              height={220}
              loading="eager"
              sizes="120px"
              src="/capivara-solidaria-logo.webp"
              width={360}
            />
          </Link>

          <div className="hidden w-full items-center justify-end gap-8 lg:flex xl:gap-12">
            <ul className="ml-8 flex w-full items-center justify-start gap-4.5">
              {DESKTOP_NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    className="text-sm font-medium transition-colors duration-150 ease-in-out hover:text-rose-400"
                    href={href}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            <button
              aria-expanded={isSearchOpen}
              aria-label="Abrir busca de organizações"
              className="relative flex max-h-8.5 w-full max-w-[320px] cursor-text items-center justify-between gap-2 rounded-full border border-neutral-300 px-4 py-1.5 text-left text-sm text-neutral-400 transition-colors hover:border-neutral-400"
              onClick={openSearch}
              type="button"
            >
              <p className="cursor-text">Pesquisar ongs...</p>
              <svg
                className="h-10 w-6 shrink-0 cursor-pointer"
                viewBox="0 0 15 44"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M14.298,27.202l-3.87-3.87c0.701-0.929,1.122-2.081,1.122-3.332c0-3.06-2.489-5.55-5.55-5.55c-3.06,0-5.55,2.49-5.55,5.55 c0,3.061,2.49,5.55,5.55,5.55c1.251,0,2.403-0.421,3.332-1.122l3.87,3.87c0.151,0.151,0.35,0.228,0.548,0.228 s0.396-0.076,0.548-0.228C14.601,27.995,14.601,27.505,14.298,27.202z M1.55,20c0-2.454,1.997-4.45,4.45-4.45 c2.454,0,4.45,1.997,4.45,4.45S8.454,24.45,6,24.45C3.546,24.45,1.55,22.454,1.55,20z" />
              </svg>
            </button>

            {organization ? (
              <div className="flex w-full items-center justify-end gap-3 lg:justify-end">
                <Link
                  className="cursor-pointer rounded-full bg-neutral-700 px-5 py-2 text-sm font-semibold text-white transition-all duration-150 hover:bg-neutral-800"
                  href="/minha-ong"
                >
                  Minha ONG
                </Link>
              </div>
            ) : (
              <div className="flex w-full items-center justify-end gap-3">
                <Link
                  className="w-full cursor-pointer rounded-full bg-neutral-700 px-4 py-1.5 text-center text-sm font-semibold text-white transition-all duration-150 hover:bg-neutral-800 lg:max-w-[115px]"
                  href="/login"
                >
                  Entrar
                </Link>
                <Link
                  className="w-full max-w-[150px] cursor-pointer rounded-full border border-neutral-700 px-4 py-1.5 text-center text-sm font-semibold text-neutral-700 transition-all duration-150 hover:bg-neutral-50"
                  href="/contato"
                >
                  Quero fazer parte
                </Link>
              </div>
            )}
          </div>

          <div className="flex items-center lg:hidden">
            <HamburgerButton
              isOpen={isMenuOpen}
              onClick={toggleMenu}
              variant="primary"
            />
          </div>
        </div>

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
                            <div className="flex min-w-0 flex-col">
                              <span className="truncate text-sm font-semibold text-neutral-800">
                                {profile?.name}
                              </span>
                              <span className="truncate text-xs text-neutral-400">
                                {profile?.ong_type}
                              </span>
                            </div>
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

        <div
          className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-in-out lg:hidden ${
            isMenuOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
          }`}
        >
          <div className="overflow-hidden">
            <div className="flex w-full flex-col gap-1 bg-white px-4 py-3 text-neutral-700 shadow-md">
              {MOBILE_NAV_LINKS.map(({ href, label }) => (
                <Link
                  className={`rounded-md px-3 py-2.5 text-sm font-medium transition-colors duration-150 ease-in-out hover:bg-neutral-50 hover:text-rose-400 ${pathname === href ? 'bg-neutral-50 text-rose-500' : ''}`}
                  href={href}
                  key={href}
                  onClick={closeMenu}
                >
                  {label}
                </Link>
              ))}

              <div className="my-1 h-px w-full bg-neutral-100" />

              {organization ? (
                <div className="flex flex-col gap-2 px-3 py-2">
                  <Link
                    className="w-full cursor-pointer rounded-sm bg-neutral-700 px-4 py-2 text-center text-sm font-semibold text-white transition-all duration-150 hover:bg-neutral-800"
                    href="/minha-ong"
                    onClick={closeMenu}
                  >
                    Minha ONG
                  </Link>
                </div>
              ) : (
                <div className="flex flex-col gap-2 px-3 py-2">
                  <Link
                    className="w-full cursor-pointer rounded-sm bg-neutral-700 px-4 py-2 text-center text-sm font-semibold text-white transition-all duration-150 hover:bg-neutral-800"
                    href="/login"
                    onClick={closeMenu}
                  >
                    Já tenho uma conta
                  </Link>
                  <Link
                    className="w-full cursor-pointer rounded-sm border border-neutral-700 px-4 py-2 text-center text-sm font-semibold text-neutral-700 transition-all duration-150 hover:bg-neutral-50"
                    href="/contato"
                    onClick={closeMenu}
                  >
                    Quero fazer parte da iniciativa
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
