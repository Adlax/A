import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-observable-change-detection',
  template: `
    <app-observable-change-detection [items]="itemsObservable"></app-observable-change-detection>
  `
})
export class ObservableChangeDetectionComponent implements OnInit {
  itemsObservable: Observable<number>;
  constructor(){}
  ngOnInit(){
    this.itemsObservable = Observable.timer(100,100).take(101);
  }
}
