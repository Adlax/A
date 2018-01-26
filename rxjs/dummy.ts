//Implementing the Models///////////////////////////////////////////////////////

//user
export class User {
  id: string;
  constructor(public name: string, public avatarSrc = string) {
    this.id = uuid();
  }
}

//thread
export class Thread {
  id: string,
  name: string,
  lastMessage: Message,
  avatarSrc: string,
  constructor(id?: string, name?: string, ?avatarSrc: string) {
    this.id = id || uuid();
    this.name = name;
    this.avatarSrc = avatarSrc;
  }
}

//message
export class Message {
  id: string,
  author: User,
  text: string,
  isRead: boolean,
  thread: Thread,
  sentAt: Date,
  constructor(?obj: any) {
    this.id = obj && obj.id || uuid();
    this.author = obj && obj.author || null;
    this.text = obj && obj.text || null;
    this.isRead = obj && obj.isRead || null;
    this.thread = obj && obj.thread || null;
    this.sentAt = obj && obj.sentAt || new Date();
  }
}

//Implementing UserService
@Injectable()
export class UserService
 
