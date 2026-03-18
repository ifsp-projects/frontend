import { BASE_URL } from '@/constants/environments/base-url'

import { TEMPLATE_PREVIEWS } from './data'
import type { TemplatePreviewProps } from './types'

export const TemplatePreview: React.FC<TemplatePreviewProps> = ({
  template
}) => {
  return (
    <div className="h-[420px] w-full overflow-hidden rounded-sm border border-neutral-100">
      <iframe
        className="h-full w-full"
        src={`${BASE_URL}/${TEMPLATE_PREVIEWS[template]}`}
        title={`Preview of ${template}`}
      />
    </div>
  )
}
