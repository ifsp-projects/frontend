export interface TimelineProps {
  copy: {
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
