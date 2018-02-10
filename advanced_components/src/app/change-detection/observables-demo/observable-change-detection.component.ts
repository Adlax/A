import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-observable-change-detection',
  changeDetection: ChangeDetectionStrategy.OnPush;
  template: `
    <div>
      <div> Total Items : {{ counter }} </div>
    </div>
  `
})
export class ObservableChangeDetectionComponent implements OnInit {
  @Input() items: Observable<number>;
  counter: number = 0;
  constructor(private changeDetector: ChangeDetectorRef) {}
  ngOnInit() {
    this.items.subscribe( (value) => {
        console.log('Got value : ', value);
        this.counter++;
        if(this.counter %5 == 0) { this.changeDetector.markForCheck(); }
    },
    null,
    () => {
        this.changeDetector.markForCheck();
    });
  }

}
