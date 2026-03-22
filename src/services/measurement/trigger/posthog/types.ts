import type { PostgresDesignTemplates } from '@/types/postgres/enums/postgres-design-template'

import type {
  MeasurementAiIntentType,
  MeasurementDeviceType,
  MeasurementOngTypes,
  MeasurementShareChannel,
  MeasurementSourcePage,
  MeasurementTrafficSource
} from '../../types'

interface BaseUserProperties {
  city?: string
  /** Used to trigger posthog.identify() inside the service */
  email?: string
  ongType?: MeasurementOngTypes
}

interface BasePageProperties {
  deviceType?: MeasurementDeviceType
  orgId: string
  pageId: string
  trafficSource?: MeasurementTrafficSource
}

interface SignupStartedProperties extends BaseUserProperties {
  referralSource?: MeasurementTrafficSource | 'invite'
}

interface SignupCompletedProperties extends BaseUserProperties {
  ongType: MeasurementOngTypes
  referralSource?: MeasurementTrafficSource | 'invite'
}

interface FirstPagePublishedProperties extends BaseUserProperties {
  templateId?: string
  templateUsed: boolean
  /** Time in seconds from signup to first publish */
  timeToPublishSeconds: number
}

interface EditorSessionBaseProperties {
  orgId: string
  pageId: string
}

interface EditorSessionEndedProperties extends EditorSessionBaseProperties {
  blocksCount: number
  editCount: number
  published: boolean
  sessionDurationSeconds: number
}

interface TemplateSelectedProperties extends EditorSessionBaseProperties {
  templateId: string
  templateType: PostgresDesignTemplates
}

interface CategoryFilteredProperties {
  category: MeasurementOngTypes | 'all'
  previousCategory?: MeasurementOngTypes | 'all'
  resultsCount: number
}

interface SearchPerformedProperties {
  category?: MeasurementOngTypes
  city?: string
  query: string
  resultsCount: number
}

interface OrgCardClickedProperties {
  city?: string
  ongType: MeasurementOngTypes
  orgId: string
  /** 1-based position in the listing */
  position: number
}

interface OrgProfileViewedProperties {
  deviceType?: MeasurementDeviceType
  ongType: MeasurementOngTypes
  orgId: string
  trafficSource?: MeasurementTrafficSource
}

interface OrgLpVisitedProperties extends BasePageProperties {
  fromHub: boolean
}

interface ConversionActionProperties {
  ongType: MeasurementOngTypes
  orgId: string
  sourcePage: MeasurementSourcePage
}

interface OrgSharedProperties extends ConversionActionProperties {
  shareChannel: MeasurementShareChannel
}

interface LeadFormSubmittedProperties extends ConversionActionProperties {
  formType: 'donation' | 'volunteer' | 'contact' | 'newsletter' | 'custom'
  lpId: string
}

interface AiChatBaseProperties {
  orgId?: string
  pageId?: string
  sessionId: string
}

interface AiMessageSentProperties extends AiChatBaseProperties {
  intentType?: MeasurementAiIntentType
}

interface AiResponseReceivedProperties extends AiChatBaseProperties {
  intentType?: MeasurementAiIntentType
  responseLatencyMs: number
  sessionMessageIndex: number
  tokensUsed?: number
}

interface AiSuggestionActionProperties extends AiChatBaseProperties {
  /** Whether the suggestion was directly inserted into the editor */
  appliedToEditor?: boolean
  intentType?: MeasurementAiIntentType
}

interface AiChatSessionEndedProperties extends AiChatBaseProperties {
  sessionDurationSeconds: number
  suggestionsApplied: number
  suggestionsDismissed: number
  totalMessages: number
}

interface AiFeedbackProperties extends AiChatBaseProperties {
  feedbackText?: string
  model?: string
  sessionMessageIndex: number
}

export type PostHogEventsNames = keyof PostHogEvents

export interface PostHogEvents {
  ai_chat_feedback_submitted: AiFeedbackProperties & { feedbackText: string }
  ai_chat_opened: AiChatBaseProperties
  ai_chat_session_ended: AiChatSessionEndedProperties
  ai_message_sent: AiMessageSentProperties
  ai_response_copied: AiChatBaseProperties
  ai_response_received: AiResponseReceivedProperties
  ai_retry_triggered: AiChatBaseProperties
  ai_suggestion_applied: AiSuggestionActionProperties
  ai_suggestion_dismissed: AiSuggestionActionProperties
  category_filtered: CategoryFilteredProperties
  contact_org_clicked: ConversionActionProperties
  cta_button_configured: EditorSessionBaseProperties
  custom_domain_connected: EditorSessionBaseProperties
  donate_button_clicked: ConversionActionProperties
  editor_session_ended: EditorSessionEndedProperties
  editor_session_started: EditorSessionBaseProperties
  first_page_published: FirstPagePublishedProperties
  lead_form_submitted: LeadFormSubmittedProperties
  org_card_clicked: OrgCardClickedProperties
  org_lp_visited: OrgLpVisitedProperties
  org_profile_viewed: OrgProfileViewedProperties
  org_saved_to_favorites: ConversionActionProperties
  org_shared: OrgSharedProperties
  page_created: EditorSessionBaseProperties
  page_preview_opened: EditorSessionBaseProperties
  page_unpublished: EditorSessionBaseProperties
  search_performed: SearchPerformedProperties
  signup_completed: SignupCompletedProperties
  signup_started: SignupStartedProperties
  template_selected: TemplateSelectedProperties
}

export type PostHogTrack = <T extends PostHogEventsNames>(
  eventName: T,
  eventProperties?: PostHogEvents[T],
  overwritePrefix?: string
) => void
