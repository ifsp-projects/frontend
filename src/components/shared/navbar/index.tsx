'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { MagnifyingGlass } from '@/assets/icons/magnifying-glass'
import { useMobileMenu } from '@/components/shared/navbar/hooks/use-mobile-menu'
import { useNavbarSearch } from '@/components/shared/navbar/hooks/use-navbar-search'
import { useUserSession } from '@/hooks/use-user-session'
import type { PostgresOrganization } from '@/types/postgres/postgres-organization'

import { HamburgerButton } from '../hamburger-button'
import { NavbarActions } from './actions'
import { DESKTOP_NAV_LINKS } from './data'
import { Logo } from './logo'
import { MobileNavigation } from './mobile-navigation'
import { Searchbar } from './searchbar'

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
    close: closeSearch,
    isOpen: isSearchOpen,
    open: openSearch
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
          <Logo />

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
              <MagnifyingGlass />
            </button>

            <NavbarActions organization={organization} />
          </div>

          <div className="flex items-center lg:hidden">
            <HamburgerButton
              isOpen={isMenuOpen}
              onClick={toggleMenu}
              variant="primary"
            />
          </div>
        </div>

        <Searchbar orgs={orgs} />

        <MobileNavigation
          closeMenu={closeMenu}
          isMenuOpen={isMenuOpen}
          organization={organization}
          pathname={pathname}
        />
      </nav>
    </>
  )
}
