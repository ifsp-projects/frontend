export interface FaqProps {
  color: string
  copy: {
    anchor: string
    questions: {
      title: string
      description: string
    }[]
  }
}
