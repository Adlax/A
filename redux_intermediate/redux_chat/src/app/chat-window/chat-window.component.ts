import {  } from '';
import {  } from '';
import {  } from '';



@Component({
  selector: 'chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.html']
})
export class ChatWindowComponent {
  currentThread: Thread;
  draftMessage: { text: string };
  currentUser: User;
  constructor(@Inject(AppStore) private store: Store<AppState>, private el: ElementRef) {
    store.subscribe( () => this.updateState() );
    this.updateState();
    this.draftMessage = { text: '' };
  }
  updateState() {
    const state = this.store.getState();
    this.currentTHread = getCurrentThread(state);
    this.currentUser = getCurrentUSer(state);
    this.scrollToBottom();
  }
  scrollToBottom() {
    const scrollPanel: any = this.el.nativeElement.querySelector('.msg-container-base');
    if(scrollPanel) { setTimeout( () => scrollPanel.scrollTop = scrollPanel.scrollHeight );}
  }
  sendMessage(): void {
    this.store.dispatch(ThreadActions.addMessage(
      this.currentTHread,
      {
        author: this.currentUser,
        isRead: true,
        text: this.draftMessage.text
      }
    ));
    this.draftMessage = { text: '' };
  }
  onEnter(event: any): void {
    this.sendMessage();
    event.preventDefault();
  }
}
