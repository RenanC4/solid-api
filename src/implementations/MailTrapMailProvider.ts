import { IMailProvider, IMessage } from './../providers/IMailProvider';

export class MailTrapMailProvider implements IMailProvider {
  constructor(){
    
  }

  async sendMail(message: IMessage): Promise<void>{
    await
  }
}