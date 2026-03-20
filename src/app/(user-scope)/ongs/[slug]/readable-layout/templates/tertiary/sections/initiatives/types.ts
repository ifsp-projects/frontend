export interface InitiativesProps {
  copy: {
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
}
