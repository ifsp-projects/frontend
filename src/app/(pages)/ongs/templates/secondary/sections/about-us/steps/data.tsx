import { ArrowUpGraph } from '@/app/(pages)/sobre/icons/arrow-up-graph'
import { MagnifyingGlassWebsite } from '@/app/(pages)/sobre/icons/magnifying-glass-website'
import { PeopleGroup } from '@/app/(pages)/sobre/icons/people-group'
import { WritePaper } from '@/app/(pages)/sobre/icons/write-paper'

export const STEP_CARDS_ICONS = [
  <WritePaper
    className="h-6 w-6 text-blue-400 lg:h-7 lg:w-7"
    key="first-step-icon"
  />,
  <MagnifyingGlassWebsite
    className="h-6 w-6 text-blue-400 lg:h-7 lg:w-7"
    key="second-step-icon"
  />,
  <PeopleGroup
    className="h-6 w-6 text-blue-400 lg:h-7 lg:w-7"
    key="third-step-icon"
  />,
  <ArrowUpGraph
    className="h-6 w-6 text-blue-400 lg:h-7 lg:w-7"
    key="fourth-step-icon"
  />
]
