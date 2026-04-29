import { FAQ } from '@/app/(user-scope)/ongs/[slug]/editable-layout//templates/common/sections/faq'
import { MoreInfoAbout } from '@/app/(user-scope)/ongs/[slug]/editable-layout//templates/common/sections/more-info-about'
import { Depoiments as PrimaryTemplateDepoiments } from '@/app/(user-scope)/ongs/[slug]/editable-layout/templates/primary/sections/depoiments'
import { Details as PrimaryTemplateDetails } from '@/app/(user-scope)/ongs/[slug]/editable-layout/templates/primary/sections/details'
import { Header as PrimaryTemplateHeader } from '@/app/(user-scope)/ongs/[slug]/editable-layout/templates/primary/sections/header'
import { Mission as PrimaryTemplateMission } from '@/app/(user-scope)/ongs/[slug]/editable-layout/templates/primary/sections/mission'
import { Causes as QuarternaryTemplateCauses } from '@/app/(user-scope)/ongs/[slug]/editable-layout/templates/quarternary/sections/causes'
import { GetInvolved as QuarternaryTemplateGetInvolved } from '@/app/(user-scope)/ongs/[slug]/editable-layout/templates/quarternary/sections/get-involved'
import { Header as QuarternaryTemplateHeader } from '@/app/(user-scope)/ongs/[slug]/editable-layout/templates/quarternary/sections/header'
import { Timeline as QuarternaryTemplateTimeline } from '@/app/(user-scope)/ongs/[slug]/editable-layout/templates/quarternary/sections/timeline'
import { AboutUs as SecondaryTemplateAboutUs } from '@/app/(user-scope)/ongs/[slug]/editable-layout/templates/secondary/sections/about-us'
import { Header as SecondaryTemplateHeader } from '@/app/(user-scope)/ongs/[slug]/editable-layout/templates/secondary/sections/header'
import { HowItWorks as SecondaryTemplateHowItWorks } from '@/app/(user-scope)/ongs/[slug]/editable-layout/templates/secondary/sections/how-it-works'
import { MoreInfoAbout as SecondaryTemplateMoreInfoAbout } from '@/app/(user-scope)/ongs/[slug]/editable-layout/templates/secondary/sections/more-info-about'
import { AboutUs as TertiaryTemplateAboutUs } from '@/app/(user-scope)/ongs/[slug]/editable-layout/templates/tertiary/sections/about-us'
import { Header as TertiaryTemplateHeader } from '@/app/(user-scope)/ongs/[slug]/editable-layout/templates/tertiary/sections/header'
import { HowItWorks as TertiaryTemplateHowItWorks } from '@/app/(user-scope)/ongs/[slug]/editable-layout/templates/tertiary/sections/how-it-works'
import { Initiatives as TertiaryTemplateInitiatives } from '@/app/(user-scope)/ongs/[slug]/editable-layout/templates/tertiary/sections/initiatives'
import { MoreInfoAbout as TertiaryTemplateMoreInfoAbout } from '@/app/(user-scope)/ongs/[slug]/editable-layout/templates/tertiary/sections/more-info-about'
import { Testimonials as TertiaryTemplateTestimonials } from '@/app/(user-scope)/ongs/[slug]/editable-layout/templates/tertiary/sections/testimonials'
import type { DEFAULT_TEMPLATES_ORDER } from '@/constants/page-templates/default-templates-order'
import type { TemplateType } from '@/types/postgres/page/psotgres-page-template-types'

type SectionKeys<T extends TemplateType> =
  (typeof DEFAULT_TEMPLATES_ORDER)[T][number]

type SectionRegistry = {
  [T in TemplateType]: Record<SectionKeys<T>, React.FC<{ copy: any }>>
}

export const EDITABLE_TEMPLATE_SECTION_REGISTRY: SectionRegistry = {
  primary: {
    header: props => <PrimaryTemplateHeader {...props} />,
    details: props => <PrimaryTemplateDetails {...props} />,
    moreInfoAbout: props => <MoreInfoAbout {...props} />,
    ourMission: props => <PrimaryTemplateMission {...props} />,
    depoiments: props => <PrimaryTemplateDepoiments {...props} />,
    faq: props => <FAQ color="emerald" {...props} />
  },
  secondary: {
    header: props => <SecondaryTemplateHeader {...props} />,
    howItWorks: props => <SecondaryTemplateHowItWorks {...props} />,
    moreInfoAbout: props => <SecondaryTemplateMoreInfoAbout {...props} />,
    aboutUs: props => <SecondaryTemplateAboutUs {...props} />,
    faq: props => <FAQ color="blue" {...props} />
  },
  tertiary: {
    header: props => <TertiaryTemplateHeader {...props} />,
    howItWorks: props => <TertiaryTemplateHowItWorks {...props} />,
    testimonials: props => <TertiaryTemplateTestimonials {...props} />,
    moreInfoAbout: props => <TertiaryTemplateMoreInfoAbout {...props} />,
    initiatives: props => <TertiaryTemplateInitiatives {...props} />,
    aboutUs: props => <TertiaryTemplateAboutUs {...props} />,
    faq: props => <FAQ color="yellow" {...props} />
  },
  quarternary: {
    header: props => <QuarternaryTemplateHeader {...props} />,
    causes: props => <QuarternaryTemplateCauses {...props} />,
    timeline: props => <QuarternaryTemplateTimeline {...props} />,
    getInvolved: props => <QuarternaryTemplateGetInvolved {...props} />,
    faq: props => <FAQ color="rose" {...props} />
  }
}
