import Image from 'next/image'
import type { FC } from 'react'

export const Header: FC = async () => {
  return (
    <section className="px-4 py-12 lg:py-16 xl:px-2">
      <header className="mx-auto flex w-full max-w-2xl flex-col gap-8 lg:max-w-7xl lg:gap-12">
        <article className="flex w-full flex-col items-center gap-4">
          <span className="border-b-2 border-b-rose-300 text-sm font-semibold text-neutral-600 underline-offset-2">
            Sobre nós
          </span>
          <h1 className="text-center text-2xl font-bold lg:text-4xl">
            Temos orgulho em impulsionar causas <br />
            <span className="text-center text-2xl font-bold text-neutral-500 lg:text-4xl">
              que transformam o mundo
            </span>
          </h1>
          <p className="text-center text-sm text-neutral-500 lg:text-base">
            Conectamos pessoas e causas com propósito. Conheça nossa missão{' '}
            <br /> é o impacto que impulsiona nosso trabalho
          </p>
        </article>
        <div className="mx-auto flex h-auto max-w-2xl flex-col items-stretch gap-4 lg:max-w-5xl lg:flex-row lg:gap-6">
          <figure className="aspect-square h-auto w-full rounded-sm">
            <Image
              alt="Header Image"
              className="aspect-square h-full w-full rounded-sm object-cover"
              height={1080}
              src="/images/olhos.webp"
              width={1920}
            />
          </figure>
          <div className="flex h-auto flex-col gap-4 lg:gap-6">
            <figure className="aspect-video h-full max-h-[490px] w-full rounded-sm pl-5">
              <Image
                alt="Header Image"
                className="aspect-video h-full w-full rounded-sm object-cover"
                height={1080}
                src="/images/boy.webp"
                width={1920}
              />
            </figure>
            <figure className="aspect-video h-full max-h-[490px] w-full rounded-sm">
              <Image
                alt="Header Image"
                className="aspect-video h-full w-full rounded-sm object-cover"
                height={1080}
                src="/images/muro.webp"
                width={1920}
              />
            </figure>
          </div>
        </div>
      </header>
    </section>
  )
}
