import { Component, Input, Output, EventEmitter, KeyValueDiffers, DoCheck } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html'
})
export class CommentComponent implements DoCheck {
  @Input() comment: any;
  @Output onRemove: EventEmitter<any>;
  differ: any;
  constructor(differs: KeyValueDiffers) {
    this.differ = differs.find([]).create(null);
    this.onRemove = new EventEmitter();
  }
  ngDoCheck(): void {
    const changes = this.differ.diff(this.comment);
    if(changes) {
      changes.forEachAddedItem(record => this.logChange('added',record));
      changes.forEachRemovedItem(record => this.logChange('removed',record));
      changes.forEachChangesItem(record => this.logChange('changed', record));
    }
  }
  logChange(action, record): void {
    if(action==='changed') { console.log(record.key, action, 'from', record.previousValue, 'to', record.newValue); }
    if(action==='added') { console.log(record.key, action, 'with value', record.currentValue); }
    if(action==='removed') { console.log(record.key, action, '(was' + record.previousValue + ')'); }
  }
  remove(): void {
    this.onRemove.emit(this.comment)
  }
  clear(): void {
    delete this.comment.comment;
  }
  like(): void {
    this.coment.like +=1;
  }
}
