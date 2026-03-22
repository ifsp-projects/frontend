export interface PostgresPageQuarternaryTemplate {
  causes: {
    label: string
    title: string
    description: string
    heroImage: string
    cards: {
      icon: string
      title: string
      description: string
      label: string
    }[]
  }
  faq: {
    anchor: string
    questions: {
      title: string
      description: string
    }[]
  }
  getInvolved: {
    title: string
    label: string
    description: string
    cards: {
      icon: string
      title: string
      description: string
    }[]
    anchorText: string
    anchor: string
  }
  header: {
    label: string
    title: string
    decoratedTitle: string
    description: string
    anchor: string
    button: string
    stats: {
      title: string
      description: string
    }[]
  }
  timeline: {
    label: string
    title: string
    cards: {
      label: string
      title: string
      description: string
      span: string
    }[]
    anchor: string
    anchorTitle: string
  }
}
