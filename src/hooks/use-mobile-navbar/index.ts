import { usePathname } from 'next/navigation'
import { useCallback, useEffect, useRef, useState } from 'react'

import type { PostgresOrganization } from '@/types/postgres/postgres-organization'

import { useClickOutside } from '../use-click-outside'
import { useLockBodyScroll } from '../use-lock-body-scroll'
import { useOngSearch } from '../use-ong-search'

export const useNavbarSearch = (orgs: PostgresOrganization[]) => {
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
