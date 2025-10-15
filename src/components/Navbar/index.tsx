'use client'

import Link from 'next/link'
import { useState } from 'react'

export const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 z-20 w-full bg-white/80 shadow-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:px-0">
        <Link href={'/'}>
          <span className="cursor-pointer text-2xl font-bold text-gray-800 lg:text-3xl">
            Capivara Solidária
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-8 text-gray-700 lg:flex">
          <li>
            <Link className="transition-colors hover:text-gray-900" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="transition-colors hover:text-gray-900" href="/faq">
              Sobre
            </Link>
          </li>
          <li>
            <Link
              className="transition-colors hover:text-gray-900"
              href="/contato"
            >
              Contato
            </Link>
          </li>
          <li>
            <Link
              className="transition-colors hover:text-gray-900"
              href="/projetos"
            >
              Projetos
            </Link>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <div className="flex items-center lg:hidden">
          <button
            className="focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="mb-1 block h-0.5 w-6 bg-gray-800"></span>
            <span className="mb-1 block h-0.5 w-6 bg-gray-800"></span>
            <span className="block h-0.5 w-6 bg-gray-800"></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="flex w-full flex-col gap-4 bg-white/90 px-6 py-4 text-gray-700 shadow-md lg:hidden">
          <Link
            className="transition-colors hover:text-gray-900"
            href="/"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            className="transition-colors hover:text-gray-900"
            href="/sobre"
            onClick={() => setMenuOpen(false)}
          >
            Sobre
          </Link>
          <Link
            className="transition-colors hover:text-gray-900"
            href="/contato"
            onClick={() => setMenuOpen(false)}
          >
            Contato
          </Link>
          <Link
            className="transition-colors hover:text-gray-900"
            href="/projetos"
            onClick={() => setMenuOpen(false)}
          >
            Projetos
          </Link>
        </div>
      )}
    </nav>
  )
}
