import { Component, OnChanges, OnInit, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-on-changes',
  templateUrl: './on-changes.component.html',
})
export class OnChangesComponen implements OnChanges {
  @Input('name') name: string;
  @Input('comment') comment: string;
  ngOnChanges(changes: {[propName: string]: SimpleChange}): void {
    console.log('Changements : ', changes);
  }
}
