'use client'

import { signOut } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

import { useUserSession } from '@/hooks/use-user-session'

import { HamburgerButton } from '../hamburger-button'

/**
 * Navbar - Main navigation component with responsive design.
 *
 * Displays a sticky header with logo, navigation links, and a CTA button on desktop.
 * On mobile, shows a hamburger menu that toggles a vertical navigation menu.
 *
 */
export const Navbar = () => {
  const { organization } = useUserSession()

  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const [menuHeight, setMenuHeight] = useState<number>(0)

  const pathname = usePathname()

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (menuRef.current) {
      setMenuHeight(menuRef.current.scrollHeight)
    }
  }, [menuOpen, organization])

  if (pathname === '/login') return null

  return (
    <nav className="sticky top-0 left-0 z-40 w-full border-b border-neutral-100 bg-white">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 lg:px-6 xl:px-0">
        <Link href="/">
          <Image
            alt="Project Logo"
            className="aspect-video max-h-10 max-w-28 object-cover"
            height={180}
            src="/capivara-solidaria-logo.png"
            width={360}
          />
        </Link>
        <div className="hidden items-center gap-8 lg:flex xl:gap-12">
          <ul className="flex items-center gap-4">
            <li>
              <Link
                className="text-sm font-medium transition-colors duration-150 ease-in-out hover:text-rose-400"
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="text-sm font-medium transition-colors duration-150 ease-in-out hover:text-rose-400"
                href="/ongs"
              >
                Projetos
              </Link>
            </li>
            <li>
              <Link
                className="text-sm font-medium transition-colors duration-150 ease-in-out hover:text-rose-400"
                href="/sobre"
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link
                className="text-sm font-medium transition-colors duration-150 ease-in-out hover:text-rose-400"
                href="/contato"
              >
                Contato
              </Link>
            </li>
            <li>
              <Link
                className="text-sm font-medium transition-colors duration-150 ease-in-out hover:text-rose-400"
                href="/faq"
              >
                FAQ
              </Link>
            </li>
          </ul>

          {organization ? (
            <div className="flex items-center gap-3">
              <Link
                className="cursor-pointer rounded-sm bg-neutral-700 px-4 py-1.5 text-sm font-semibold text-white transition-all duration-150 hover:bg-neutral-800"
                href="/minha-ong"
              >
                Minha ONG
              </Link>
              <button
                className="cursor-pointer rounded-sm border border-neutral-700 px-4 py-1.5 text-sm font-semibold text-neutral-700 transition-all duration-150 hover:bg-neutral-50"
                onClick={() => signOut()}
                type="button"
              >
                Sair
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Link
                className="cursor-pointer rounded-sm border border-neutral-700 px-4 py-1.5 text-sm font-semibold text-neutral-700 transition-all duration-150 hover:bg-neutral-50"
                href="/contato"
              >
                Contato
              </Link>
              <Link
                className="cursor-pointer rounded-sm bg-neutral-700 px-4 py-1.5 text-sm font-semibold text-white transition-all duration-150 hover:bg-neutral-800"
                href="/login"
              >
                Entrar
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
        className="overflow-hidden transition-all duration-300 ease-in-out lg:hidden"
        style={{
          maxHeight: menuOpen ? `${menuHeight}px` : '0px',
          opacity: menuOpen ? 1 : 0,
        }}
      >
        <div
          ref={menuRef}
          className="flex w-full flex-col gap-1 bg-white px-4 py-3 text-neutral-700 shadow-md"
        >
          <Link
            className={`rounded-md px-3 py-2.5 text-sm font-medium transition-colors duration-150 ease-in-out hover:bg-neutral-50 hover:text-rose-400 ${pathname === '/' ? 'bg-neutral-50 text-rose-500' : ''}`}
            href="/"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            className={`rounded-md px-3 py-2.5 text-sm font-medium transition-colors duration-150 ease-in-out hover:bg-neutral-50 hover:text-rose-400 ${pathname === '/ongs' ? 'bg-neutral-50 text-rose-500' : ''}`}
            href="/ongs"
            onClick={() => setMenuOpen(false)}
          >
            Projetos
          </Link>
          <Link
            className={`rounded-md px-3 py-2.5 text-sm font-medium transition-colors duration-150 ease-in-out hover:bg-neutral-50 hover:text-rose-400 ${pathname === '/sobre' ? 'bg-neutral-50 text-rose-500' : ''}`}
            href="/sobre"
            onClick={() => setMenuOpen(false)}
          >
            Sobre
          </Link>
          <Link
            className={`rounded-md px-3 py-2.5 text-sm font-medium transition-colors duration-150 ease-in-out hover:bg-neutral-50 hover:text-rose-400 ${pathname === '/contato' ? 'bg-neutral-50 text-rose-500' : ''}`}
            href="/contato"
            onClick={() => setMenuOpen(false)}
          >
            Contato
          </Link>
          <Link
            className={`rounded-md px-3 py-2.5 text-sm font-medium transition-colors duration-150 ease-in-out hover:bg-neutral-50 hover:text-rose-400 ${pathname === '/faq' ? 'bg-neutral-50 text-rose-500' : ''}`}
            href="/faq"
            onClick={() => setMenuOpen(false)}
          >
            FAQ
          </Link>

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
              <button
                className="w-full cursor-pointer rounded-sm border border-neutral-700 px-4 py-2 text-center text-sm font-semibold text-neutral-700 transition-all duration-150 hover:bg-neutral-50"
                onClick={() => {
                  setMenuOpen(false)
                  signOut()
                }}
                type="button"
              >
                Sair
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-2 px-3 py-2">
              <Link
                className="w-full cursor-pointer rounded-sm bg-neutral-700 px-4 py-2 text-center text-sm font-semibold text-white transition-all duration-150 hover:bg-neutral-800"
                href="/login"
                onClick={() => setMenuOpen(false)}
              >
                Entrar
              </Link>
              <Link
                className="w-full cursor-pointer rounded-sm border border-neutral-700 px-4 py-2 text-center text-sm font-semibold text-neutral-700 transition-all duration-150 hover:bg-neutral-50"
                href="/contato"
                onClick={() => setMenuOpen(false)}
              >
                Contato
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}