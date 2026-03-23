import { FEATURES } from './data'

export const Features = async () => {
  return (
    <section className="flex flex-col items-center border-t border-neutral-100 bg-neutral-50 px-6 py-24 xl:px-12">
      <div className="flex w-full max-w-5xl flex-col gap-16">
        <div className="flex flex-col gap-3">
          <p className="text-xs font-semibold tracking-widest text-rose-400 uppercase">
            Como a gente te ajuda?
          </p>
          <article className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="max-w-md text-3xl font-black tracking-tight text-neutral-800 lg:text-4xl">
              Tudo que sua ONG precisa para brilhar online.
            </h2>
            <p className="max-w-sm text-sm leading-relaxed text-neutral-500">
              Cada funcionalidade foi pensada para as necessidades reais de
              projetos sociais — não para grandes empresas.
            </p>
          </article>
        </div>

        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ icon: Icon, title, description }) => (
            <li
              className="flex flex-col gap-4 rounded-sm border border-neutral-100 bg-white p-6"
              key={title}
            >
              <figure className="flex h-9 w-9 items-center justify-center rounded-sm bg-rose-50">
                <Icon className="h-4 w-4 text-rose-400" strokeWidth={1.8} />
              </figure>
              <article className="flex flex-col gap-1.5">
                <h3 className="text-sm font-bold text-neutral-800">{title}</h3>
                <p className="text-xs leading-relaxed text-neutral-500">
                  {description}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
