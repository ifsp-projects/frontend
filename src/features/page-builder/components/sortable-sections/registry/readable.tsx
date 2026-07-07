import type {
  DEFAULT_TEMPLATES_ORDER,
  TemplateType
} from 'capivara-solidaria-ts-sdk'
import type { ColorPalette } from 'capivara-solidaria-ts-sdk'

import { FAQ } from '@/features/page-builder/ui/readable-layout/shared/sections/faq'
import { MoreInfoAbout } from '@/features/page-builder/ui/readable-layout/shared/sections/more-info-about'
import { Depoiments as PrimaryTemplateDepoiments } from '@/features/page-builder/ui/readable-layout/primary-template/sections/depoiments'
import { Details as PrimaryTemplateDetails } from '@/features/page-builder/ui/readable-layout/primary-template/sections/details'
import { Header as PrimaryTemplateHeader } from '@/features/page-builder/ui/readable-layout/primary-template/sections/header'
import { Mission as PrimaryTemplateMission } from '@/features/page-builder/ui/readable-layout/primary-template/sections/mission'
import { Causes as QuarternaryTemplateCauses } from '@/features/page-builder/ui/readable-layout/quarternary-template/sections/causes'
import { GetInvolved as QuarternaryTemplateGetInvolved } from '@/features/page-builder/ui/readable-layout/quarternary-template/sections/get-involved'
import { Header as QuarternaryTemplateHeader } from '@/features/page-builder/ui/readable-layout/quarternary-template/sections/header'
import { Timeline as QuarternaryTemplateTimeline } from '@/features/page-builder/ui/readable-layout/quarternary-template/sections/timeline'
import { AboutUs as SecondaryTemplateAboutUs } from '@/features/page-builder/ui/readable-layout/secondary-template/sections/about-us'
import { Header as SecondaryTemplateHeader } from '@/features/page-builder/ui/readable-layout/secondary-template/sections/header'
import { HowItWorks as SecondaryTemplateHowItWorks } from '@/features/page-builder/ui/readable-layout/secondary-template/sections/how-it-works'
import { MoreInfoAbout as SecondaryTemplateMoreInfoAbout } from '@/features/page-builder/ui/readable-layout/secondary-template/sections/more-info-about'
import { AboutUs as TertiaryTemplateAboutUs } from '@/features/page-builder/ui/readable-layout/tertiary-template/sections/about-us'
import { Header as TertiaryTemplateHeader } from '@/features/page-builder/ui/readable-layout/tertiary-template/sections/header'
import { HowItWorks as TertiaryTemplateHowItWorks } from '@/features/page-builder/ui/readable-layout/tertiary-template/sections/how-it-works'
import { Initiatives as TertiaryTemplateInitiatives } from '@/features/page-builder/ui/readable-layout/tertiary-template/sections/initiatives'
import { MoreInfoAbout as TertiaryTemplateMoreInfoAbout } from '@/features/page-builder/ui/readable-layout/tertiary-template/sections/more-info-about'
import { Testimonials as TertiaryTemplateTestimonials } from '@/features/page-builder/ui/readable-layout/tertiary-template/sections/testimonials'

type SectionKeys<T extends TemplateType> =
  (typeof DEFAULT_TEMPLATES_ORDER)[T][number]

type SectionRegistry = {
  [T in TemplateType]: Record<
    SectionKeys<T>,
    React.FC<{
      copy: any
      mainColor: string
      palette: ColorPalette
    }>
  >
}

/**
 * Strongly typed registry contract.
 *
 * Guarantees that every template provides implementations
 * for all sections declared in DEFAULT_TEMPLATES_ORDER.
 *
 * This prevents runtime failures caused by missing
 * section registrations and provides compile-time safety
 * whenever new sections are introduced.
 */
export const READABLE_TEMPLATE_SECTION_REGISTRY: SectionRegistry = {
  primary: {
    header: props => <PrimaryTemplateHeader {...props} />,
    details: props => <PrimaryTemplateDetails {...props} />,
    moreInfoAbout: props => <MoreInfoAbout {...props} />,
    ourMission: props => <PrimaryTemplateMission {...props} />,
    depoiments: props => <PrimaryTemplateDepoiments {...props} />,
    faq: props => <FAQ {...props} />
  },
  secondary: {
    header: props => <SecondaryTemplateHeader {...props} />,
    howItWorks: props => <SecondaryTemplateHowItWorks {...props} />,
    moreInfoAbout: props => <SecondaryTemplateMoreInfoAbout {...props} />,
    aboutUs: props => <SecondaryTemplateAboutUs {...props} />,
    faq: props => <FAQ {...props} />
  },
  tertiary: {
    header: props => <TertiaryTemplateHeader {...props} />,
    howItWorks: props => <TertiaryTemplateHowItWorks {...props} />,
    testimonials: props => <TertiaryTemplateTestimonials {...props} />,
    moreInfoAbout: props => <TertiaryTemplateMoreInfoAbout {...props} />,
    initiatives: props => <TertiaryTemplateInitiatives {...props} />,
    aboutUs: props => <TertiaryTemplateAboutUs {...props} />,
    faq: props => <FAQ {...props} />
  },
  quarternary: {
    header: props => <QuarternaryTemplateHeader {...props} />,
    causes: props => <QuarternaryTemplateCauses {...props} />,
    timeline: props => <QuarternaryTemplateTimeline {...props} />,
    getInvolved: props => <QuarternaryTemplateGetInvolved {...props} />,
    faq: props => <FAQ {...props} />
  }
}
