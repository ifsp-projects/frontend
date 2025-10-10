'use client'

import { useEffect } from 'react'

/**
 * Loads Bootstrap's JavaScript bundle when the component mounts and renders nothing.
 *
 * This component dynamically imports `bootstrap/dist/js/bootstrap.bundle.min.js` once on client-side mount to enable Bootstrap's JS behavior.
 *
 * @returns `null` (renders no DOM output)
 */
export default function BootstrapClient() {
  useEffect(() => {
    //@ts-ignore
    import('bootstrap/dist/js/bootstrap.bundle.min.js')
  }, [])

  return null
}