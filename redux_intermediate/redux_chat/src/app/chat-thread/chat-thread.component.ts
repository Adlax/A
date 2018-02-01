import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Thread } from '../thread/thread.model';

@Component({
  selector: 'chat-thread',
  template: './chat-thread.component.html',
  styleUrls: ['./chat-thread.component.css']
})
export class ChatThreadComponent {
  @Input() thread: Thread;
  @Input() selected: boolean;
  @Output() onThreadSelected: EventEmitter<Thread>;
  constructor() {
    this.onThreadSelected = new EventEmitter<Thread>();
  }
  ngOnInit(){}
  clicked(event: any) {
    this.onThreadSelected.emit(this.thread);
    event.preventDefault();
  }

}
