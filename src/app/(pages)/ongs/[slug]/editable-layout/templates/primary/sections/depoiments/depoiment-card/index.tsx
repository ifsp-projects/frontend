import Image from 'next/image'
import type { FC } from 'react'

import { EditableCopyField } from '@/components/shared/template-fields/editable-copy-field'

import type { DepoimentCardProps } from './types'

export const DepoimentCard: FC<DepoimentCardProps> = ({ copy, index }) => {
  return (
    <article className="card">
      <section className="card__hero">
        <header className="card__hero-header">
          <span>Depoimento</span>
          <div className="card__icon">
            <svg
              fill="none"
              height="20"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </div>
        </header>

        <EditableCopyField
          as="p"
          className="card__job-title"
          defaultValue={copy.content}
          path={`depoiments.cards[${index}].content`}
        />
      </section>

      <footer className="card__footer">
        <div className="card__job-summary">
          <figure className="card__job-icon">
            <Image
              alt="Person Image"
              className="h-10 w-10 rounded-full object-cover lg:h-12 lg:w-12"
              height={80}
              src="https://sb.kaleidousercontent.com/67418/1920x1545/c5f15ac173/samuel-raita-ridxdghg7pw-unsplash.jpg"
              width={80}
            />
          </figure>
          <article className="flex w-full flex-1 flex-col">
            <EditableCopyField
              as="p"
              className="text-base font-semibold"
              defaultValue={copy.author.name}
              path={`depoiments.cards[${index}].author.name`}
            />
            <EditableCopyField
              as="p"
              className="text-sm font-light text-slate-500"
              defaultValue={copy.author.city}
              path={`depoiments.cards[${index}].author.city`}
            />
          </article>
        </div>
      </footer>
    </article>
  )
}
