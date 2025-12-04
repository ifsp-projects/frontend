export interface DepoimentProps {
  copy: {
    cards: {
      content: string
      author: {
        image: string
        name: string
        city: string
      }
    }[]
    description: string
    title: string
  }
}
