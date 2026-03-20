import type { FC } from 'react'

export const Header: FC = async () => {
  return (
    <section className="bg-neutral-100 px-4 py-12 lg:py-16 xl:px-0">
      <header className="mx-auto flex w-full max-w-2xl flex-col items-center gap-2 lg:max-w-5xl">
        <h2 className="text-center text-4xl font-bold">
          Percebemos que você é novo na nossa plataforma!
        </h2>
        <p className="text-center text-sm text-neutral-500">
          Seja bem vindo! para começarmos, que tal preencher mais algumas
          informações sobre a sua ONG?
        </p>
      </header>
    </section>
  )
}
