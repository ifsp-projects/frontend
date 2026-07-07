import Link from 'next/link'

import type { NavbarActionsProps } from './types'

export const NavbarActions: React.FC<NavbarActionsProps> = ({
  organization
}) => {
  return organization ? (
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
        Quero participar
      </Link>
    </div>
  )
}
