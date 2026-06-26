import { usePathname } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'

export const useMobileMenu = () => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const close = useCallback(() => setIsOpen(false), [])
  const toggle = useCallback(() => setIsOpen(prev => !prev), [])

  useEffect(() => {
    close()
  }, [pathname, close])

  return { close, isOpen, toggle }
}
