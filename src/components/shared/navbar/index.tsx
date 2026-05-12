'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

import { useOngSearch } from '@/hooks/use-ong-search'
import { useUserSession } from '@/hooks/use-user-session'
import type { PostgresOrganization } from '@/types/postgres/postgres-organization'

import { HamburgerButton } from '../hamburger-button'

interface NavbarProps {
  orgs?: PostgresOrganization[]
}

export const Navbar = ({ orgs = [] }: NavbarProps) => {
  const { organization } = useUserSession()

  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const searchInputRef = useRef<HTMLInputElement>(null)
  const searchPanelRef = useRef<HTMLDivElement>(null)
  const [menuHeight, setMenuHeight] = useState(0)

  const pathname = usePathname()
  const { query, setQuery, results } = useOngSearch(orgs)

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])
  useEffect(() => {
    setSearchOpen(false)
    setQuery('')
  }, [pathname])

  useEffect(() => {
    if (menuRef.current) setMenuHeight(menuRef.current.scrollHeight)
  }, [menuOpen, organization])

  useEffect(() => {
    if (searchOpen) {
      setTimeout(() => searchInputRef.current?.focus(), 50)
    }
  }, [searchOpen])

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        searchPanelRef.current &&
        !searchPanelRef.current.contains(e.target as Node)
      ) {
        setSearchOpen(false)
        setQuery('')
      }
    }
    if (searchOpen) document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [searchOpen])

  useEffect(() => {
    document.body.style.overflow = searchOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [searchOpen])

  if (pathname === '/login') return null

  return (
    <>
      <div
        className={`fixed inset-0 z-998 transition-all duration-300 ${
          searchOpen
            ? 'pointer-events-auto bg-neutral-500/40 opacity-100 backdrop-blur-sm'
            : 'pointer-events-none opacity-0'
        }`}
        onClick={() => {
          setSearchOpen(false)
          setQuery('')
        }}
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
              src="/capivara-solidaria-logo.png"
              width={360}
            />
          </Link>

          <div className="hidden w-full items-center justify-end gap-8 lg:flex xl:gap-12">
            <ul className="ml-8 flex w-full items-center justify-start gap-4.5">
              {[
                { href: '/', label: 'Home' },
                { href: '/ongs', label: 'Ongs' },
                { href: '/sobre', label: 'Sobre' },
                { href: '/contato', label: 'Contato' },
                { href: '/faq', label: 'FAQ' },
                { href: '/blog', label: 'Blog' }
              ].map(({ href, label }) => (
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

            <div className="relative w-full rounded-full border border-neutral-300">
              <input
                className="relative z-10 max-w-[320px] px-4 py-1.5 text-sm text-neutral-600 placeholder:text-neutral-400 focus:outline-0"
                onFocus={() => setSearchOpen(true)}
                placeholder="Pesquisar ongs..."
                type="text"
                readOnly
              />
              <figure className="absolute -top-1.5 right-4 z-20">
                <svg
                  height="44px"
                  viewBox="0 0 15 44"
                  width="15px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14.298,27.202l-3.87-3.87c0.701-0.929,1.122-2.081,1.122-3.332c0-3.06-2.489-5.55-5.55-5.55c-3.06,0-5.55,2.49-5.55,5.55 c0,3.061,2.49,5.55,5.55,5.55c1.251,0,2.403-0.421,3.332-1.122l3.87,3.87c0.151,0.151,0.35,0.228,0.548,0.228 s0.396-0.076,0.548-0.228C14.601,27.995,14.601,27.505,14.298,27.202z M1.55,20c0-2.454,1.997-4.45,4.45-4.45 c2.454,0,4.45,1.997,4.45,4.45S8.454,24.45,6,24.45C3.546,24.45,1.55,22.454,1.55,20z" />
                </svg>
              </figure>
            </div>

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
                  className="w-full cursor-pointer rounded-full bg-neutral-700 px-4 py-2 text-center text-sm font-semibold text-white transition-all duration-150 hover:bg-neutral-800 lg:max-w-[115px]"
                  href="/login"
                  onClick={() => setMenuOpen(false)}
                >
                  Entrar
                </Link>
                <Link
                  className="w-full max-w-[150px] cursor-pointer rounded-full border border-neutral-700 px-4 py-2 text-center text-sm font-semibold text-neutral-700 transition-all duration-150 hover:bg-neutral-50"
                  href="/contato"
                  onClick={() => setMenuOpen(false)}
                >
                  Quero fazer parte
                </Link>
              </div>
            )}
          </div>

          <div className="flex items-center lg:hidden">
            <HamburgerButton
              isOpen={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
              variant="primary"
            />
          </div>
        </div>

        <div
          className={`absolute left-0 w-full border-b border-neutral-100 bg-white transition-all duration-300 ease-in-out ${
            searchOpen
              ? 'pointer-events-auto translate-y-0 opacity-100'
              : 'pointer-events-none -translate-y-2 opacity-0'
          }`}
          ref={searchPanelRef}
          style={{ top: '100%' }}
        >
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
                  className="shrink-0 text-neutral-400 transition-colors hover:text-neutral-600"
                  onClick={() => setQuery('')}
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
                  {[
                    { href: '/ongs', label: 'Ver todas as organizações' },
                    {
                      href: '/ongs?ong_type=animais',
                      label: 'Proteção Animal'
                    },
                    {
                      href: '/ongs?ong_type=criancasEAdolescentes',
                      label: 'Crianças e Adolescentes'
                    },
                    {
                      href: '/ongs?ong_type=combateAFome',
                      label: 'Combate à Fome'
                    }
                  ].map(({ href, label }) => (
                    <Link
                      onClick={() => {
                        setSearchOpen(false)
                        setQuery('')
                      }}
                      className="flex items-center gap-2 rounded-md px-2 py-1.5 text-[13px] text-neutral-600 transition-colors hover:bg-neutral-50 hover:text-rose-500"
                      href={href}
                      key={href}
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
                          onClick={() => {
                            setSearchOpen(false)
                            setQuery('')
                          }}
                          className="flex items-center gap-3 rounded-md px-2 py-2.5 transition-colors hover:bg-neutral-50"
                          href={`/ongs/${ong.organization_profile?.slug}`}
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
                          <svg
                            className="ml-auto h-4 w-4 shrink-0 text-neutral-300"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M9 5l7 7-7 7"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </Link>
                      </li>
                    )
                  })}
                </ul>
                <Link
                  onClick={() => {
                    setSearchOpen(false)
                    setQuery('')
                  }}
                  className="mt-2 flex items-center gap-1.5 px-2 py-2 text-xs font-medium text-rose-500 transition-colors hover:text-rose-600"
                  href={`/ongs?name=${encodeURIComponent(query)}`}
                >
                  Ver todos os resultados para "{query}"
                  <svg
                    className="h-3.5 w-3.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9 5l7 7-7 7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-8 text-center">
                <p className="text-sm font-medium text-neutral-600">
                  Nenhuma organização encontrada para "{query}"
                </p>
                <p className="mt-1 text-xs text-neutral-400">
                  Tente um termo diferente ou navegue pelas categorias.
                </p>
              </div>
            )}
          </div>
        </div>

        <div
          style={{
            maxHeight: menuOpen ? `${menuHeight}px` : '0px',
            opacity: menuOpen ? 1 : 0
          }}
          className="overflow-hidden transition-all duration-300 ease-in-out lg:hidden"
        >
          <div
            className="flex w-full flex-col gap-1 bg-white px-4 py-3 text-neutral-700 shadow-md"
            ref={menuRef}
          >
            {[
              { href: '/', label: 'Home' },
              { href: '/ongs', label: 'Projetos' },
              { href: '/sobre', label: 'Sobre' },
              { href: '/contato', label: 'Contato' },
              { href: '/faq', label: 'FAQ' },
              { href: '/blog', label: 'Blog' }
            ].map(({ href, label }) => (
              <Link
                className={`rounded-md px-3 py-2.5 text-sm font-medium transition-colors duration-150 ease-in-out hover:bg-neutral-50 hover:text-rose-400 ${pathname === href ? 'bg-neutral-50 text-rose-500' : ''}`}
                href={href}
                key={href}
                onClick={() => setMenuOpen(false)}
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
                  onClick={() => setMenuOpen(false)}
                >
                  Minha ONG
                </Link>
              </div>
            ) : (
              <div className="flex flex-col gap-2 px-3 py-2">
                <Link
                  className="w-full cursor-pointer rounded-sm bg-neutral-700 px-4 py-2 text-center text-sm font-semibold text-white transition-all duration-150 hover:bg-neutral-800"
                  href="/login"
                  onClick={() => setMenuOpen(false)}
                >
                  Já tenho uma conta
                </Link>
                <Link
                  className="w-full cursor-pointer rounded-sm border border-neutral-700 px-4 py-2 text-center text-sm font-semibold text-neutral-700 transition-all duration-150 hover:bg-neutral-50"
                  href="/contato"
                  onClick={() => setMenuOpen(false)}
                >
                  Quero fazer parte da iniciativa
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  )
}
