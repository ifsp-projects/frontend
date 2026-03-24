'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { type FC, cloneElement } from 'react'

import { SHARE_LINKS } from './data'
import type { ShareLink } from './types'

export const ShareArticle: FC = () => {
  const pathname = usePathname()

  return (
    <div className="flex justify-start gap-4">
      {SHARE_LINKS.map((link: ShareLink, index: number) => (
        <Link
          href={`${link.href}${pathname}`}
          key={`share-post-${link.href}-${index}`}
          target="_blank"
        >
          <div
            className={`duration-default w-6 rounded-sm text-neutral-700 transition-all duration-200 hover:text-rose-400 lg:w-8`}
          >
            {cloneElement(link.icon, {
              className:
                'transition-all duration-300 hover:text-rose-400 text-neutral-600'
            })}
          </div>
        </Link>
      ))}
    </div>
  )
}
