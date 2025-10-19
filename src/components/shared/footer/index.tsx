import Link from 'next/link'
import type { FC } from 'react'

import { FOOTER_LINKS } from './data'
import type { FooterLinkProps } from './types'

export const Footer: FC = () => {
  return (
    <footer className="relative z-20 w-full border-t-2 border-neutral-200 bg-neutral-100 px-4 py-8 sm:py-12 lg:pt-14 lg:pb-20">
      <div className="mx-auto flex w-full max-w-3xl flex-col justify-between gap-6 border-b border-neutral-300 pb-6 md:flex-row lg:max-w-6xl lg:gap-12">
        {FOOTER_LINKS.map((footerSection, sectionIndex: number) => (
          <article
            className="flex w-full flex-col gap-4 border-b border-neutral-300 pb-4 sm:border-transparent sm:pb-0 lg:gap-6"
            key={`${footerSection.title}-${sectionIndex}`}
          >
            <h3 className="font-medium lg:text-lg">{footerSection.title}</h3>
            <div className="flex w-full flex-col gap-2">
              {footerSection.links.map(
                (footerLink: FooterLinkProps, index: number) => (
                  <Link
                    className="w-fit border-b border-transparent text-xs transition-all duration-300 hover:text-neutral-900 sm:text-xs lg:text-sm"
                    href={footerLink.href}
                    key={`${footerLink.label}-${index}`}
                    target={sectionIndex === 2 ? '_blank' : '_self'}
                  >
                    {footerLink.label}
                  </Link>
                )
              )}
            </div>
          </article>
        ))}
      </div>
      <div className="mx-auto flex w-full max-w-3xl items-center gap-6 pt-4 md:pt-6 lg:max-w-6xl">
        <p className="w-full text-[13px] font-light sm:text-xs lg:text-sm">
          Copyright © 2025 Projeto Campanha Solidária All rights reserved.
        </p>
        <p className="w-full text-right text-[13px] font-light sm:text-xs lg:text-sm">
          Brazil
        </p>
      </div>
    </footer>
  )
}
