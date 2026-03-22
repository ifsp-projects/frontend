import { Trigger } from '../../trigger'
import type { MeasurementAiIntentType } from '../../types'

interface AiSessionContext {
  orgId?: string
  pageId?: string
  sessionId: string
}

export class AiChat {
  private trigger: Trigger

  constructor() {
    this.trigger = new Trigger()
  }

  /** Chat panel is opened */
  public openChat(ctx: AiSessionContext) {
    this.trigger.posthog.track('ai_chat_opened', ctx)
  }

  /** User sends a message */
  public sendMessage(
    ctx: AiSessionContext & {
      intentType?: MeasurementAiIntentType
    }
  ) {
    this.trigger.posthog.track('ai_message_sent', ctx)
  }

  /** Model response is received by the client */
  public receiveResponse(
    ctx: AiSessionContext & {
      responseLatencyMs: number
      tokensUsed?: number
      intentType?: MeasurementAiIntentType
      sessionMessageIndex: number
    }
  ) {
    this.trigger.posthog.track('ai_response_received', ctx)
  }

  /** User applies an AI suggestion (e.g. inserts generated text into editor) */
  public applySuggestion(
    ctx: AiSessionContext & {
      intentType?: MeasurementAiIntentType
      appliedToEditor?: boolean
    }
  ) {
    this.trigger.posthog.track('ai_suggestion_applied', ctx)
  }

  /** User dismisses / ignores an AI suggestion */
  public dismissSuggestion(
    ctx: AiSessionContext & {
      intentType?: MeasurementAiIntentType
      appliedToEditor?: boolean
    }
  ) {
    this.trigger.posthog.track('ai_suggestion_dismissed', ctx)
  }

  /** User copies a response to clipboard */
  public copyResponse(ctx: AiSessionContext) {
    this.trigger.posthog.track('ai_response_copied', ctx)
  }

  /** User submits explicit feedback through a feedback form */
  public submitFeedback(
    ctx: AiSessionContext & {
      feedbackText: string
      model?: string
      sessionMessageIndex: number
    }
  ) {
    this.trigger.posthog.track('ai_chat_feedback_submitted', ctx)
  }

  /** User retries a failed / unsatisfactory generation */
  public retryGeneration(ctx: AiSessionContext) {
    this.trigger.posthog.track('ai_retry_triggered', ctx)
  }

  /** Chat session ends (tab close, navigation away, explicit close) */
  public endSession(
    ctx: AiSessionContext & {
      sessionDurationSeconds: number
      totalMessages: number
      suggestionsApplied: number
      suggestionsDismissed: number
    }
  ) {
    this.trigger.posthog.track('ai_chat_session_ended', ctx)
  }
}
