import { usePathname } from 'next/navigation'
import { useCallback, useEffect, useRef, useState } from 'react'

import type { OrganizationProps } from '@/domain/entities/organization'
import { useClickOutside } from '@/shared/hooks/use-click-outside'
import { useLockBodyScroll } from '@/shared/hooks/use-lock-body-scroll'
import { useOngSearch } from '@/shared/hooks/use-ong-search'

export const useNavbarSearch = (orgs: OrganizationProps[]) => {
  const pathname = usePathname()
  const { query, results, setQuery } = useOngSearch(orgs)

  const [isOpen, setIsOpen] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  const clearQuery = useCallback(() => setQuery(''), [setQuery])

  const close = useCallback(() => {
    setIsOpen(false)
    setQuery('')
  }, [setQuery])

  const open = useCallback(() => setIsOpen(true), [])

  useEffect(() => {
    close()
  }, [pathname, close])

  useEffect(() => {
    if (!isOpen) return
    const id = setTimeout(() => inputRef.current?.focus(), 50)
    return () => clearTimeout(id)
  }, [isOpen])

  useClickOutside({ ref: panelRef, handler: close, enabled: isOpen })
  useLockBodyScroll(isOpen)

  return {
    clearQuery,
    close,
    inputRef,
    isOpen,
    open,
    panelRef,
    query,
    results,
    setQuery
  }
}
