import { Articles } from './posts'
import { Tags } from './tags'

export class Blog {
  public readonly articles: Articles
  public readonly tags: Tags

  constructor() {
    this.articles = new Articles()
    this.tags = new Tags()
  }
}
