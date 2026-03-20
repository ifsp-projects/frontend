export const StepBadge = ({
  step,
  state
}: {
  step: number
  state: 'active' | 'done' | 'upcoming'
}) => {
  if (state === 'done') {
    return (
      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-rose-200 bg-rose-50">
        <svg className="h-3 w-3 text-rose-400" fill="none" viewBox="0 0 12 12">
          <path
            d="M2 6l3 3 5-5"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </svg>
      </div>
    )
  }

  return (
    <div
      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${
        state === 'active'
          ? 'bg-rose-400 text-white'
          : 'bg-neutral-100 text-neutral-400'
      }`}
    >
      {step}
    </div>
  )
}
