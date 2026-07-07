import type { TemplateType } from 'capivara-solidaria-ts-sdk'

export interface TemplatePreviewModalProps {
  isOpen: boolean
  onCancel: () => void
  onConfirm: () => void
  setIsOpen: (value: boolean) => void
  template: TemplateType
}
