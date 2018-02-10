import { Component, IterableDiffers, DoCheck } from '@angular/core';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html'
})
export class CommentsListComponent implements DoCheck {
  comments: any[];
  iterable: boolean;
  authors: string[];
  texts: string[];
  differ: any;
  constructor(differs: IterableDiffers) {
    this.differ = differs.find([]).create(null);
    this.comments = [];
    this.authors = ['Bob','Ringo','Mouloud'];
    this.texts = ['Moi je dis', 'Lui il dit', 'Vilain !'];
    this.addComment();
  }
  getRandomInt(max: number): number {
    return Math.floor( Math.random() * (max+1) );
  }
  getRandomItem(array: string[]): string {
    const pos: number = getRandomInt(array.length - 1);
    return array[pos];
  }
  addComment(): void {
    this.comments.push({
      author: this.getRandomItem(this.authors);
      comment: thisGetRandomItem(this.comments);
      likes: this.getRandomInt(20);
    });
  }
  removeComment(comment){
    const pos = this.comments.indexOf(comment);
    this.comments.splice(pos,1);
  }
  ngDoCheck(): void {
    const changes = this.differs.diff(this.comments);
    if(changes) {
      changes.forEachAddedItem( record => console.log('Added :', record) );
      changes.forEachRemovedItem( record => console.log('Removed : ', record) );
      }
  }
}
