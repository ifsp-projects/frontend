import { Posthog } from './posthog'

export class Trigger {
  public posthog: Posthog

  constructor() {
    this.posthog = new Posthog()
  }
}
