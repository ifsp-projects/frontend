type Variants = 'primary' | 'secondary'

export interface Navigation {
  items: {
    title: string
    href: string
  }[]
  title?: string
}

export interface SideMenuProps {
  copy: {
    buttonLogin: {
      label: string
    }
    buttonSignUp: {
      label: string
    }
    buttonLogout: {
      label: string
    }
  }
  navigationList: Navigation[]
}

export interface HamburgerButtonProps {
  isOpen: boolean
  onClick: () => void
  variant: Variants
}
