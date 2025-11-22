import { DepoimentCard } from './depoiment-card'

export const Depoiments = async () => {
  return (
    <section className="bg-slate-50 px-4 py-12 lg:py-16 xl:px-0">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-8 lg:max-w-7xl">
        <article className="flex w-full flex-col gap-2 lg:items-center">
          <h2 className="text-2xl font-bold lg:text-center lg:text-4xl">
            Depoimentos
          </h2>
          <p className="text-sm text-slate-500 lg:text-center lg:text-base">
            Veja o que as pessoas que ajudamos dizem sobre a gente:
          </p>
        </article>
        <div className="flex w-full flex-col gap-6 lg:flex-row lg:justify-between">
          <DepoimentCard />
          <DepoimentCard />
          <DepoimentCard />
        </div>
      </div>
    </section>
  )
}
