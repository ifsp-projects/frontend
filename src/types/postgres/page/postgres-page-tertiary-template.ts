export interface PostgresPageTertiaryTemplate {
  aboutUs: {
    span: string
    title: string
    firstDescriptionParagraph: string
    secondDescriptionParagraph: string
    stats: {
      icon: string
      value: string
      label: string
    }[]
  }
  faq: {
    anchor: {
      label: string
      href: string
    }
    questions: {
      title: string
      description: string
    }[]
  }
  header: {
    span: string
    title: string
    decoratedText: string
    description: string
    anchor: {
      label: string
      href: string
    }
    button: string
    image: string
  }
  howItWorks: {
    span: string
    title: string
    description: string
    cards: {
      icon: string
      title: string
      description: string
    }[]
    anchor: {
      label: string
      href: string
    }
  }
  initiatives: {
    label: string
    title: string
    projects: {
      tag: string
      title: string
      description: string
      metric: string
      status: string
      image: string
    }[]
  }
  moreInfoAbout: {
    cards: {
      title: string
      description: string
      image: string
    }[]
  }
  testimonials: {
    label: string
    title: string
    description: string
    testimonial: {
      content: string
      author: {
        image: string
        name: string
        role: string
        city: string
      }
    }
    cards: {
      content: string
      author: {
        image: string
        name: string
        role: string
        city: string
      }
    }[]
  }
}
