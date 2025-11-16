import { Auth } from './auth'

export class Account {
  auth: Auth

  constructor() {
    this.auth = new Auth()
  }
}
