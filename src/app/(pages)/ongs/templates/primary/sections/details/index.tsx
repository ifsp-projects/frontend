import { PeopleGroup } from '@/app/(pages)/sobre/icons/people-group'

export const Details = async () => {
  return (
    <section className="bg-slate-50 px-4 py-12 lg:py-16 xl:px-0">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-8 lg:max-w-7xl">
        <article className="flex flex-col gap-2 lg:items-center">
          <p className="text-sm text-emerald-600 uppercase lg:text-center">
            Future Payment
          </p>
          <h2 className="text-2xl font-bold lg:text-center lg:text-4xl">
            Experience that grows with your scale
          </h2>
        </article>
        <ul className="flex h-auto w-full flex-col items-stretch gap-8 lg:flex-row">
          <li className="flex h-auto w-full flex-col gap-3 rounded-sm border border-slate-300 bg-white p-4">
            <figure className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50">
              <PeopleGroup className="h-4 w-4 text-emerald-600" />
            </figure>
            <article className="flex w-full flex-col gap-1">
              <h3 className="text-xl font-bold">Free transfers</h3>
              <p className="text-sm text-slate-500">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
              </p>
            </article>
          </li>
          <li className="flex h-auto w-full flex-col gap-3 rounded-sm border border-slate-300 bg-white p-4">
            <figure className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50">
              <PeopleGroup className="h-4 w-4 text-emerald-600" />
            </figure>
            <article className="flex w-full flex-col gap-1">
              <h3 className="text-xl font-bold">Free transfers</h3>
              <p className="text-sm text-slate-500">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
              </p>
            </article>
          </li>
          <li className="flex h-auto w-full flex-col gap-3 rounded-sm border border-slate-300 bg-white p-4">
            <figure className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50">
              <PeopleGroup className="h-4 w-4 text-emerald-600" />
            </figure>
            <article className="flex w-full flex-col gap-1">
              <h3 className="text-xl font-bold">Free transfers</h3>
              <p className="text-sm text-slate-500">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
              </p>
            </article>
          </li>
        </ul>
      </div>
    </section>
  )
}
