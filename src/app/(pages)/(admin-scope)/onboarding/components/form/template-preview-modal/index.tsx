import { Modal } from '@/components/shared/modal'

import { TemplatePreview } from './template-preview'
import type { TemplatePreviewModalProps } from './types'

export const TemplatePreviewModal: React.FC<TemplatePreviewModalProps> = ({
  template,
  onConfirm,
  onCancel,
  isOpen,
  setIsOpen
}) => {
  return (
    <Modal className="mx-auto w-[680px]" isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="flex w-full flex-col gap-6 rounded-md bg-white px-6 pt-12 pb-8 lg:w-[680px]">
        <h2 className="w-full text-left text-lg font-semibold sm:text-xl lg:text-2xl">
          Visualizar template
        </h2>

        <div className="h-[420px] w-full overflow-hidden rounded-sm border border-neutral-100 bg-neutral-50">
          <TemplatePreview template={template} />
        </div>

        <div className="flex justify-end gap-3">
          <button
            className="cursor-pointer rounded-sm border border-neutral-400 px-4 py-2 text-sm text-neutral-700 transition-all duration-300 hover:bg-neutral-50"
            onClick={onCancel}
          >
            Cancelar
          </button>
          <button
            className="cursor-pointer rounded-sm bg-neutral-700 px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-neutral-800"
            onClick={onConfirm}
          >
            Quero usar esse template
          </button>
        </div>
      </div>
    </Modal>
  )
}
