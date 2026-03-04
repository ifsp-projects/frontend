import { TESTIMONIALS } from './data'

export const Testimonials = async () => {
  return (
    <section className="flex flex-col items-center border-t border-neutral-100 bg-neutral-50 px-6 py-24 xl:px-12">
      <div className="flex w-full max-w-5xl flex-col gap-12">
        <div className="flex flex-col gap-3 text-center">
          <span className="text-xs font-semibold tracking-widest text-rose-400 uppercase">
            Quem usa
          </span>
          <h2 className="text-3xl font-black tracking-tight text-neutral-800">
            Comunicadores de ONGs falam por si.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {TESTIMONIALS.map(({ quote, author, role }) => (
            <div
              className="flex flex-col justify-between gap-6 rounded-sm border border-neutral-200 bg-white p-6"
              key={author}
            >
              <p className="text-sm leading-relaxed text-neutral-600">
                "{quote}"
              </p>
              <div className="flex flex-col gap-0.5 border-t border-neutral-100 pt-4">
                <span className="text-xs font-bold text-neutral-700">
                  {author}
                </span>
                <span className="text-xs text-neutral-400">{role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
