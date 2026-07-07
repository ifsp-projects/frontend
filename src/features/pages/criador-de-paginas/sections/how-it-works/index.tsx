import { HOW_IT_WORKS } from './data'

export const HowItWorks = async () => {
  return (
    <section className="flex flex-col items-center px-6 py-24 xl:px-12">
      <div className="flex w-full max-w-5xl flex-col gap-16">
        <article className="flex flex-col gap-3 text-center">
          <p className="text-xs font-semibold tracking-widest text-rose-400 uppercase">
            Como funciona
          </p>
          <h2 className="text-3xl font-black tracking-tight text-neutral-800 lg:text-4xl">
            Do zero à publicação em 3 passos.
          </h2>
        </article>

        <ul className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {HOW_IT_WORKS.map(({ step, title, description }) => (
            <li
              className="flex flex-col gap-4 rounded-sm border border-neutral-300 bg-neutral-50 p-6"
              key={step}
            >
              <span className="text-4xl font-black text-rose-200">{step}</span>
              <article className="flex flex-col gap-2">
                <h3 className="text-sm font-bold text-neutral-800">{title}</h3>
                <p className="text-sm leading-relaxed text-neutral-500">
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
