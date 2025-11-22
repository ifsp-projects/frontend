export interface DepoimentProps {
  copy: {
    cards: {
      content: string
      author: {
        name: string
        city: string
      }
    }[]
    description: string
    title: string
  }
}
