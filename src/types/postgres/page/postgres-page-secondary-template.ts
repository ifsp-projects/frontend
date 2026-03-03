export interface PostgresPageSecondaryTemplate {
  aboutUs: {
    title: string
    cards: {
      title: string
      description: string
      icon: string
    }[]
  }
  faq: {
    anchor: string
    questions: {
      title: string
      description: string
    }[]
  }
  header: {
    span: string
    title: string
    description: string
    anchor: string
    button: string
  }
  howItWorks: {
    span: string
    title: string
    description: string
    heroImage: string
    anchor: string
  }
  imagesGrid: {
    title: string
    description: string
  }
  moreInfoAbout: {
    cards: {
      title: string
      description: string
      image: string
    }[]
  }
}
