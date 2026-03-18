import type { PostgresDesignTemplates } from '@/types/postgres/enums/postgres-design-template'

export interface TemplatePreviewModalProps {
  isOpen: boolean
  onCancel: () => void
  onConfirm: () => void
  setIsOpen: (value: boolean) => void
  template: PostgresDesignTemplates
}
