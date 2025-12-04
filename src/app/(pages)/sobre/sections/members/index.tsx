import Image from 'next/image'
import type { FC } from 'react'

import { GithubIcon } from '@/assets/socials/github'
import { LinkedinIcon } from '@/assets/socials/linkedin'

import { TEAM_MEMBERS } from './data'

export const Members: FC = async () => {
  return (
    <section className="bg-white px-4 py-12 lg:py-16 xl:px-0">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-8 lg:max-w-7xl lg:gap-16">
        <article className="flex flex-col gap-4 lg:items-center">
          <h2 className="text-center text-2xl font-bold lg:text-4xl">
            Conheça nosso time
          </h2>
          <p className="text-center text-sm text-neutral-500 lg:text-base">
            Veja quem são nossos desenvolvedores e suas funções dentro do nosso
            time
          </p>
        </article>
        <ul className="grid h-auto grid-cols-1 items-stretch gap-6 rounded-sm sm:grid-cols-2 lg:grid-cols-3">
          {TEAM_MEMBERS.map((member, index: number) => (
            <li
              className="flex h-auto w-full flex-col gap-4 rounded-sm bg-white p-4"
              key={`${member.name}-${index}`}
            >
              <div className="flex w-full items-center gap-4">
                <figure className="aspect-square max-h-20 w-full max-w-20 rounded-sm">
                  <Image
                    alt={member.name}
                    className="aspect-square h-full max-h-20 w-full max-w-20 rounded-sm object-cover"
                    fetchPriority="low"
                    height={200}
                    loading="lazy"
                    src={member.thumb}
                    width={200}
                  />
                </figure>
                <article className="flex flex-col">
                  <p className="text-sm font-bold lg:text-base">
                    {member.name}
                  </p>
                  <p className="text-sm">{member.job_title}</p>
                </article>
              </div>
              <p className="text-sm text-neutral-500">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard
              </p>
              <div className="flex w-full items-center gap-3">
                <a
                  aria-label="Linkedin Profile"
                  href={member.urls.linkedin}
                  rel="noreferrer"
                  target="_blank"
                >
                  <LinkedinIcon className="h-5.5 w-5.5 rounded-sm text-blue-600" />
                </a>
                <a
                  aria-label="Github Profile"
                  href={member.urls.github}
                  rel="noreferrer"
                  target="_blank"
                >
                  <GithubIcon className="h-5.5 w-5.5 text-neutral-700" />
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
