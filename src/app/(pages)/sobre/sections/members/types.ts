export interface MemberData {
  description: string
  job_title: string
  name: string
  thumb: string
  urls: {
    linkedin: string
    github: string
    portfolio?: string
  }
}
