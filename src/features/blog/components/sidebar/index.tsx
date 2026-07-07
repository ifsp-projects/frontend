import { ArticleIndexes } from './sidebar-indexes'
import type { SidebarProps } from './types'

export const Sidebar: React.FC<SidebarProps> = ({ article }) => {
  return (
    <div
      className="hidden min-h-full w-full max-w-[320px] flex-col gap-8 lg:flex lg:gap-12"
      data-cid="sidebar"
    >
      <div className="invisible-scrollbar sticky flex max-h-screen w-full flex-col gap-16 overflow-y-scroll pb-4 lg:top-24 lg:z-10">
        <ArticleIndexes article={article} />
      </div>
    </div>
  )
}
