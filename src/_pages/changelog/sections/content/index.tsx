import { CHANGELOG } from './data'

const BADGE_COLORS = {
  'page-builder':
    'rounded-full bg-purple-50 px-2.5 lg:px-3 p-0.5 lg:py-1 text-[11px] md:text-xs font-semibold text-purple-500 border-purple-300 border',
  'copy-generator':
    'rounded-full bg-rose-50 px-2.5 lg:px-3 border-rose-200 border p-0.5 lg:py-1 text-[11px] md:text-xs font-semibold text-rose-500',
  'ongs-hub':
    'rounded-full px-2.5 lg:px-3 p-0.5 lg:py-1 text-[11px] md:text-xs font-semibold text-neutral-600 border border-neutral-300'
}

const BADGE_NAME = {
  'page-builder': 'Editor de Pagina',
  'copy-generator': 'Gerador de Copies',
  'ongs-hub': 'Hub de Ongs'
}

export const Content = async () => {
  return (
    <section className="bg-white">
      <ul className="mx-auto flex w-full max-w-2xl flex-col border-x border-neutral-200 lg:max-w-7xl">
        {CHANGELOG.map((changelogItem, index: number) => (
          <li
            className="relative mx-auto flex w-full max-w-2xl flex-col lg:max-w-7xl lg:flex-row lg:justify-between"
            key={`changelog-item-${index}`}
          >
            <div className="absolute top-12 -left-px h-6 w-[1.65px] bg-rose-400" />
            <div className="bg-stripes flex w-full flex-col items-start pt-12 pb-8 pl-2 lg:max-w-1/3 lg:pb-16">
              <p className="w-fit rounded-full bg-white px-3 py-0.5 text-base">
                {changelogItem.month}. {changelogItem.year}
              </p>
              <p className="bg-white px-3 py-0.5 text-xs text-neutral-600">
                {changelogItem.version}
              </p>
            </div>
            <div className="flex w-full flex-col gap-4 pr-4 pl-4 lg:max-w-2/3 lg:gap-0 lg:pl-0">
              {changelogItem.features.map((feature, featureIndex: number) => (
                <div
                  className="flex w-full flex-col gap-4 border-b border-neutral-200 py-3 lg:flex-row lg:justify-between lg:gap-0 lg:border-transparent lg:py-0"
                  key={`feature-item-${featureIndex}`}
                >
                  <div className="flex w-[190px] items-start border-neutral-200 pr-3 lg:justify-end lg:border-x lg:border-dashed lg:pt-12 lg:pb-4">
                    <span className={BADGE_COLORS[feature.type]}>
                      {BADGE_NAME[feature.type]}
                    </span>
                  </div>
                  <p
                    className={`w-full pb-4 text-sm text-neutral-600 lg:pt-12 lg:pl-4`}
                  >
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
