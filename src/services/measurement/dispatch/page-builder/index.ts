import type { PostgresDesignTemplates } from '@/types/postgres/enums/postgres-design-template'

import { Trigger } from '../../trigger'
import type { MeasurementOrgContext, MeasurementUserContext } from '../types'

export class PageBuilder {
  private trigger: Trigger

  constructor() {
    this.trigger = new Trigger()
  }

  /** User creates a brand-new page (before editing) */
  public createPage(ctx: MeasurementOrgContext & MeasurementUserContext) {
    this.trigger.posthog.track('page_created', ctx)
  }

  /** Editor tab is opened / focus returns to the editor */
  public startEditorSession(ctx: MeasurementOrgContext) {
    this.trigger.posthog.track('editor_session_started', ctx)
  }

  /** Editor tab is closed or navigated away from */
  public endEditorSession(
    ctx: MeasurementOrgContext & {
      sessionDurationSeconds: number
      editCount: number
      blocksCount: number
      published: boolean
    }
  ) {
    this.trigger.posthog.track('editor_session_ended', ctx)
  }

  /** User selects a pre-built template */
  public selectTemplate(
    ctx: MeasurementOrgContext & {
      templateId: string
      templateType: PostgresDesignTemplates
    }
  ) {
    this.trigger.posthog.track('template_selected', ctx)
  }

  /** User opens the preview mode */
  public openPreview(ctx: MeasurementOrgContext) {
    this.trigger.posthog.track('page_preview_opened', ctx)
  }

  /** Page is taken offline */
  public unpublishPage(ctx: MeasurementOrgContext) {
    this.trigger.posthog.track('page_unpublished', ctx)
  }

  /** User successfully links a custom domain */
  public connectCustomDomain(ctx: MeasurementOrgContext) {
    this.trigger.posthog.track('custom_domain_connected', ctx)
  }

  /** CTA button is configured (label, URL, style) */
  public configureCta(ctx: MeasurementOrgContext) {
    this.trigger.posthog.track('cta_button_configured', ctx)
  }
}
