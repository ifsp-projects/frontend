import Link from 'next/link'

import { MOBILE_NAV_LINKS } from '../data'
import type { MobileNavigationProps } from './types'

export const MobileNavigation: React.FC<MobileNavigationProps> = ({
  closeMenu,
  isMenuOpen,
  organization,
  pathname
}) => {
  return (
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
                Quero fazer parte
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
