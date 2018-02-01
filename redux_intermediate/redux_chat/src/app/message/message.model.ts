import { Thread } from '../thread/thread.model';
import { User } from '../user/user.model';

export interface Message {
  id?: string;
  sendAt?: Date;
  isRead?: boolean;
  thread?: Thread;
  author: User;
  text: string;
}
