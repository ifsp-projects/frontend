export interface PostgresPagePrimaryTemplate {
  depoiments: {
    title: string
    description: string
    cards: {
      content: string
      author: {
        name: string
        city: string
      }
    }[]
  }
  details: {
    feature: string
    title: string
    tabs: {
      icon: string
      title: string
      description: string
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
  }
  imagesGrid: {
    title: string
    description: string
  }
  moreInfoAbout: {
    title: string
    description: string
  }
}
