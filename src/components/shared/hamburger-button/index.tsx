import type { HamburgerButtonProps } from './types'

/**
 * HamburgerButton - An animated hamburger menu button that transforms into an X when opened.
 *
 * @example
 * ```tsx
 * <HamburgerButton
 *   isOpen={menuOpen}
 *   onClick={() => setMenuOpen(!menuOpen)}
 *   variant="primary"
 * />
 * ```
 */
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
      aria-controls="mobile-menu"
      aria-expanded={isOpen}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      className="duration-default group flex cursor-pointer flex-col items-center justify-center rounded-sm p-2"
      onClick={onClick}
      type="button"
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
