import type { FC } from 'react'

export const Mission: FC = async () => {
  return (
    <section className="px-4 py-12 lg:py-16 xl:px-0">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-8 lg:max-w-6xl lg:gap-12">
        <article className="flex flex-col gap-4 lg:items-center">
          <p className="text-sm text-emerald-600 uppercase lg:text-center">
            Our mission
          </p>
          <h2 className="text-2 w-full max-w-[400px] text-center text-2xl font-bold lg:text-center lg:text-4xl">
            We've helped innovative companies
          </h2>
          <p className="max-w-[360px] text-sm text-slate-500 lg:text-center lg:text-base">
            Hundreds of all sizes and across all industries have made a big
            improvements with us
          </p>
        </article>
        <ul className="mx-auto flex w-full max-w-2xl flex-col gap-8 lg:flex-row lg:justify-between lg:gap-12">
          <li className="flex w-full flex-col items-center gap-3">
            <span className="text-5xl font-medium text-emerald-600">24%</span>
            <p className="text-sm lg:text-base">Revenue business</p>
          </li>
          <li className="flex w-full flex-col items-center gap-3">
            <span className="text-5xl font-medium text-emerald-600">24%</span>
            <p className="text-sm lg:text-base">Revenue business</p>
          </li>
          <li className="flex w-full flex-col items-center gap-3">
            <span className="text-5xl font-medium text-emerald-600">24%</span>
            <p className="text-sm lg:text-base">Revenue business</p>
          </li>
        </ul>
      </div>
    </section>
  )
}
