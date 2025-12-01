'use client'

import { signOut } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { FC } from 'react'
import { useState } from 'react'

import { useUserSession } from '@/hooks/use-user-session'

import { HamburgerButton } from '../hamburger-button'

/**
 * Navbar - Main navigation component with responsive design.
 *
 * Displays a sticky header with logo, navigation links, and a CTA button on desktop.
 * On mobile, shows a hamburger menu that toggles a vertical navigation menu.
 *
 */
export const Navbar: FC = () => {
  const { organization } = useUserSession()

  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  const pathname = usePathname()

  if (pathname === '/login') return null

  return (
    <nav className="sticky top-0 left-0 z-40 w-full border-b border-neutral-100 bg-white">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 lg:px-6 xl:px-0">
        <Link href="/">
          <Image
            alt="Project Logo"
            className="aspect-video max-h-10 max-w-28 object-cover"
            height={180}
            src="/brands/company-logo.png"
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
                href="/projetos"
              >
                Projetos
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
                className="cursor-pointer rounded-sm bg-neutral-700 px-4 py-1.5 text-sm font-semibold text-white transition-all duration-150"
                href="/minha-ong"
              >
                Minha ONG
              </Link>
              <button className="cursor-pointer" onClick={() => signOut()}>
                Sair
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Link
                className="cursor-pointer rounded-sm border border-neutral-700 px-4 py-1.5 text-sm font-semibold text-neutral-700 transition-all duration-150 hover:bg-neutral-50"
                href="/contato"
              >
                Acesso antecipado
              </Link>
              <Link
                className="cursor-pointer rounded-sm bg-neutral-700 px-4 py-1.5 text-sm font-semibold text-white transition-all duration-150"
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

      {menuOpen ? (
        <div className="flex w-full flex-col gap-4 bg-white/90 px-6 py-4 text-neutral-700 shadow-md lg:hidden">
          <Link
            className="text-sm font-medium transition-colors duration-150 ease-in-out hover:text-rose-400"
            href="/"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            Home
          </Link>
          <Link
            className="text-sm font-medium transition-colors duration-150 ease-in-out hover:text-rose-400"
            href="/sobre"
            onClick={() => setMenuOpen(false)}
          >
            Sobre
          </Link>
          <Link
            className="text-sm font-medium transition-colors duration-150 ease-in-out hover:text-rose-400"
            href="/contato"
            onClick={() => setMenuOpen(false)}
          >
            Contato
          </Link>
          <Link
            className="text-sm font-medium transition-colors duration-150 ease-in-out hover:text-rose-400"
            href="/projetos"
            onClick={() => setMenuOpen(false)}
          >
            Projetos
          </Link>
        </div>
      ) : null}
    </nav>
  )
}
