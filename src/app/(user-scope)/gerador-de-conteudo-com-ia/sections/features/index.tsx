import { FEATURES } from './data'

export const Features = async () => {
  return (
    <section className="flex flex-col items-center px-6 py-24 xl:px-12">
      <div className="flex w-full max-w-5xl flex-col gap-16">
        <div className="flex flex-col gap-3">
          <span className="text-xs font-semibold tracking-widest text-rose-400 uppercase">
            Recursos
          </span>
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="max-w-md text-3xl font-black tracking-tight text-neutral-800 lg:text-4xl">
              IA que entende o trabalho social de verdade.
            </h2>
            <p className="max-w-sm text-sm leading-relaxed text-neutral-500 lg:text-right">
              Não é um ChatGPT genérico. É um modelo ajustado para as
              necessidades específicas de ONGs e projetos sociais.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ icon: Icon, title, description }) => (
            <div
              className="flex flex-col gap-4 rounded-sm border border-neutral-100 bg-neutral-50 p-6"
              key={title}
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-sm bg-rose-50">
                <Icon className="h-4 w-4 text-rose-400" strokeWidth={1.8} />
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="text-sm font-bold text-neutral-800">{title}</h3>
                <p className="text-xs leading-relaxed text-neutral-500">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
