export interface TestimonialsProps {
  copy: {
    label: string
    title: string
    description: string
    testimonial: {
      content: string
      author: {
        image: string
        name: string
        role: string
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
