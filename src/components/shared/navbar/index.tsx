'use client'

import Image from 'next/image'
import Link from 'next/link'
import type { FC } from 'react'
import { useState } from 'react'

import { HamburgerButton } from '../hamburger-button'

/**
 * Navbar - Main navigation component with responsive design.
 *
 * Displays a sticky header with logo, navigation links, and a CTA button on desktop.
 * On mobile, shows a hamburger menu that toggles a vertical navigation menu.
 *
 */
export const Navbar: FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  return (
    <nav className="sticky top-0 left-0 z-[99999] w-full border-b border-neutral-100 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-6 xl:px-0">
        <Link href="/">
          <Image
            alt="Project Logo"
            className="aspect-video max-h-10 max-w-28 object-cover"
            height={180}
            src="/brands/company-logo.png"
            width={360}
          />
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
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
          </ul>

          <button className="cursor-pointer rounded-sm bg-neutral-700 px-4 py-1.5 text-sm font-semibold text-white transition-all duration-150">
            Quero saber mais
          </button>
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
