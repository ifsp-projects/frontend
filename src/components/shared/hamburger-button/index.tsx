import type { HamburgerButtonProps } from './types'

export const HamburgerButton: React.FC<HamburgerButtonProps> = ({
  isOpen,
  onClick,
  variant
}) => {
  const genericHamburgerLine = `h-[2px] w-5 my-[2px] rounded-full transition cursor-pointer ease transform duration-default ${
    variant === 'secondary' ? 'bg-neutral-50' : 'bg-neutral-700'
  }`

  return (
    <button
      className="duration-default group flex cursor-pointer flex-col items-center justify-center rounded-sm p-2"
      onClick={onClick}
    >
      <div
        className={`${genericHamburgerLine} ${
          isOpen ? 'translate-y-1.5 rotate-45' : ''
        }`}
      />
      <div className={`${genericHamburgerLine} ${isOpen ? 'opacity-0' : ''}`} />
      <div
        className={`${genericHamburgerLine} ${
          isOpen ? '-translate-y-1.5 -rotate-45' : ''
        }`}
      />
    </button>
  )
}
