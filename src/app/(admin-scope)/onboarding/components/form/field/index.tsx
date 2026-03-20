import type { FieldProps } from './types'

export const Field = ({
  label,
  required,
  optional,
  error,
  hint,
  children
}: FieldProps) => {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="flex items-center gap-1 text-xs font-semibold tracking-wide text-neutral-600 uppercase">
        {label}
        {required && <span className="text-rose-400">*</span>}
        {optional && (
          <span className="ml-1 text-[10px] font-normal tracking-normal text-neutral-400 normal-case">
            optional
          </span>
        )}
      </label>
      {children}
      {hint && !error && <p className="text-[11px] text-neutral-400">{hint}</p>}
      {error && <p className="text-xs text-rose-500">{error}</p>}
    </div>
  )
}
