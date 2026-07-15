import { Account } from './account'
import { AiChat } from './ai-chat'
import { OngsHub } from './ongs-hub'
import { PageBuilder } from './page-builder'

export class Dispatch {
  public account: Account
  public aiChat: AiChat
  public ongsHub: OngsHub
  public pageBuilder: PageBuilder

  constructor() {
    this.account = new Account()
    this.aiChat = new AiChat()
    this.ongsHub = new OngsHub()
    this.pageBuilder = new PageBuilder()
  }
}
