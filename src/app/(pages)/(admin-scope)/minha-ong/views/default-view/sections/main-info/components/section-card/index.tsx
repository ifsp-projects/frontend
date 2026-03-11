import type { SectionCardProps } from './types'

export const SectionCard = ({ title, children }: SectionCardProps) => (
  <div className="rounded-sm border border-neutral-200 bg-white p-4 lg:p-6">
    <p className="text-xl font-bold text-neutral-800 lg:text-2xl">{title}</p>
    <div className="mt-4 flex w-full flex-1 flex-col gap-4">{children}</div>
  </div>
)
