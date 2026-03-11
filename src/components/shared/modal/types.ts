import type { Dispatch, SetStateAction } from 'react'
import type React from 'react'

export interface ModalProps {
  children: React.JSX.Element
  className?: string
  dismissible?: boolean
  fullScreen?: boolean
  isOpen: boolean
  onClose?: () => void
  setIsOpen: Dispatch<SetStateAction<boolean>>
}
