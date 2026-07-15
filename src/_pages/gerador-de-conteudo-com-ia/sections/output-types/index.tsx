import { OUTPUT_TYPES } from './data'

export const OutputTypes = async () => {
  return (
    <section className="flex flex-col items-center px-6 py-24 xl:px-12">
      <div className="flex w-full max-w-5xl flex-col gap-12">
        <article className="flex flex-col gap-3 text-center">
          <p className="text-xs font-semibold tracking-widest text-rose-400 uppercase">
            O que você pode gerar
          </p>
          <h2 className="text-3xl font-black tracking-tight text-neutral-800 lg:text-4xl">
            Um gerador. Qualquer formato.
          </h2>
          <p className="mx-auto max-w-md text-sm leading-relaxed text-neutral-500">
            Da legenda do Instagram ao e-mail de captação de grandes doadores —
            a IA se adapta ao formato e ao canal.
          </p>
        </article>

        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {OUTPUT_TYPES.map(({ icon: Icon, label }) => (
            <li
              className="flex flex-col items-center gap-3 rounded-sm border border-neutral-100 bg-neutral-50 px-4 py-5 text-center"
              key={label}
            >
              <figure className="flex h-8 w-8 items-center justify-center rounded-sm bg-rose-50">
                <Icon className="h-4 w-4 text-rose-400" strokeWidth={1.8} />
              </figure>
              <p className="text-xs font-medium text-neutral-600">{label}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
