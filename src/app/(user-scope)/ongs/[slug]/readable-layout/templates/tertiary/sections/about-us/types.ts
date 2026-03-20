export interface AboutUsProps {
  copy: {
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
}
