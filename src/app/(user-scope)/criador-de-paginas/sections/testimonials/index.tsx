import { TESTIMONIALS } from './data'

export const Testimonials = async () => {
  return (
    <section className="flex flex-col items-center px-6 py-24 xl:px-12">
      <div className="flex w-full max-w-5xl flex-col gap-12">
        <article className="flex flex-col gap-3 text-center">
          <p className="text-xs font-semibold tracking-widest text-rose-400 uppercase">
            Quem usa
          </p>
          <h2 className="text-3xl font-black tracking-tight text-neutral-800">
            ONGs reais. Resultados reais.
          </h2>
        </article>

        <ul className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {TESTIMONIALS.map(({ quote, author, role }, index: number) => (
            <li
              className="flex flex-col justify-between gap-6 rounded-sm border border-neutral-100 p-6"
              key={`author-${index}`}
            >
              <p className="text-sm leading-relaxed text-neutral-600">
                "{quote}"
              </p>
              <article className="flex flex-col gap-0.5 border-t border-neutral-100 pt-4">
                <p className="text-xs font-bold text-neutral-700">{author}</p>
                <p className="text-xs text-neutral-400">{role}</p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
