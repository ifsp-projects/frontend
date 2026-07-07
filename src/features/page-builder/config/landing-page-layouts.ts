import type { TemplateType } from 'capivara-solidaria-ts-sdk'
import type { ComponentType } from 'react'

import { EditablePrimaryLandingPageLayout } from '@/features/page-builder/ui/editable-layout/primary-template'
import { EditableQuarternaryLandingPageLayout } from '@/features/page-builder/ui/editable-layout/quarternary-template'
import { EditableSecondaryLandingPageLayout } from '@/features/page-builder/ui/editable-layout/secondary-template'
import { EditableTertiaryLandingPageLayout } from '@/features/page-builder/ui/editable-layout/tertiary-template'
import { ReadablePrimaryLandingPageLayout } from '@/features/page-builder/ui/readable-layout/primary-template'
import { ReadableQuarternaryLandingPageLayout } from '@/features/page-builder/ui/readable-layout/quarternary-template'
import { ReadableSecondaryLandingPageLayout } from '@/features/page-builder/ui/readable-layout/secondary-template'
import { ReadableTertiaryLandingPageLayout } from '@/features/page-builder/ui/readable-layout/tertiary-template'

export type LandingPageLayoutProps = {
  slug: string
}

type LayoutVariants = {
  editable: ComponentType<LandingPageLayoutProps>
  readable: ComponentType<LandingPageLayoutProps>
}

export const LANDING_PAGE_LAYOUTS: Record<TemplateType, LayoutVariants> = {
  primary: {
    editable: EditablePrimaryLandingPageLayout,
    readable: ReadablePrimaryLandingPageLayout
  },
  secondary: {
    editable: EditableSecondaryLandingPageLayout,
    readable: ReadableSecondaryLandingPageLayout
  },
  tertiary: {
    editable: EditableTertiaryLandingPageLayout,
    readable: ReadableTertiaryLandingPageLayout
  },
  quarternary: {
    editable: EditableQuarternaryLandingPageLayout,
    readable: ReadableQuarternaryLandingPageLayout
  }
}

export const isDesignTemplate = (value: unknown): value is TemplateType =>
  typeof value === 'string' && value in LANDING_PAGE_LAYOUTS
