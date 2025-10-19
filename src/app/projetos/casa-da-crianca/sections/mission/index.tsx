import type { FC } from 'react'

export const Mission: FC = () => {
  return (
    <section className="mx-auto max-w-2xl px-4 py-12 lg:max-w-6xl lg:py-16 xl:px-0">
      <article className="flex flex-col gap-4 lg:items-center">
        <h2 className="mb-4 text-2xl font-semibold text-blue-800">
          Missão e Propósito
        </h2>
        <p className="mx-auto max-w-3xl text-lg leading-relaxed">
          A Casa da Criança de Capivari tem como missão oferecer acolhimento,
          educação e oportunidades de desenvolvimento integral para crianças e
          adolescentes em situação de vulnerabilidade. A instituição atua
          promovendo o fortalecimento dos vínculos familiares, a inclusão social
          e a construção de um futuro mais justo e solidário.
        </p>
      </article>
    </section>
  )
}
