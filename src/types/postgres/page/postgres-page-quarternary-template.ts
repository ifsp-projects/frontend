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
    anchor: {
      label: string
      href: string
    }
  }
  header: {
    label: string
    title: string
    decoratedTitle: string
    description: string
    primaryAnchor: {
      label: string
      href: string
    }
    secondaryAnchor: {
      label: string
      href: string
    }
    heroImage: string
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
    anchor: {
      label: string
      href: string
    }
    anchorTitle: string
  }
}
