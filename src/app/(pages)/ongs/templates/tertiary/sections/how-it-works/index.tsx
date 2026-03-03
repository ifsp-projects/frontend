import Link from 'next/link'

import { STEPS } from './data'

export const HowItWorks = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-2xl px-4 py-12 lg:max-w-7xl lg:py-16 xl:px-0">
        <div className="mb-8 flex items-center gap-4 lg:mb-16">
          <div className="h-px flex-1 bg-neutral-100" />
          <span className="rounded-full border border-amber-200 bg-amber-50 px-5 py-1.5 text-[10px] font-bold tracking-widest text-amber-600 uppercase">
            Como funciona
          </span>
          <div className="h-px flex-1 bg-neutral-100" />
        </div>

        <div className="mb-14 flex flex-col items-center gap-4 text-center">
          <h2 className="max-w-xl text-3xl font-black text-neutral-700 lg:text-4xl">
            Do diagnóstico ao impacto — veja nossa jornada
          </h2>
          <p className="max-w-lg text-sm leading-relaxed text-neutral-500 lg:text-base">
            Cada etapa do nosso processo foi desenhada para garantir eficiência,
            cuidado e transparência com quem doa e com quem recebe.
          </p>
        </div>

        <div className="relative grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          <div className="absolute top-10 left-[12.5%] hidden h-px w-3/4 bg-amber-100 lg:block" />

          {STEPS.map(({ icon: Icon, step, title, description }, i) => (
            <div className="relative flex flex-col gap-5 lg:px-6" key={step}>
              <div className="relative flex items-start gap-4 lg:flex-col lg:gap-5">
                <div className="relative z-10 flex h-20 w-20 shrink-0 flex-col items-center justify-center rounded-md border-4 border-white bg-amber-400 ring ring-amber-400">
                  <Icon className="h-7 w-7 text-amber-950" strokeWidth={1.8} />
                  <span className="text-[10px] font-black text-amber-800/70">
                    {step}
                  </span>
                </div>
                <article className="flex flex-col gap-1.5 lg:mt-6">
                  <h3 className="text-base font-black text-neutral-700">
                    {title}
                  </h3>
                  <p className="text-xs text-neutral-500 md:text-sm">
                    {description}
                  </p>
                </article>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Link
            className="rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-600 transition-all duration-300 hover:border-amber-400 hover:text-amber-600"
            href="#"
          >
            Ver projetos ativos
          </Link>
        </div>
      </div>
    </section>
  )
}
