import { Component, OnInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selectror: '[popup]'
})
export class PopupDirective {
  constructor(_elementRef: ElementRef) {
      console.log(_elementRef);
  }
}

@Component({
  selector: 'app-popup-demo',
  template: `
    <div class="ui message" popup>
      <div class="header">
          Learning Directives
      </div>
      <p>
          This should use your popup directive with a console log ref to all DOM element it is bound to everytime it is created
      </p>
    <div>
    <i class="alarm icon" popup> </i>
  `
})
export class PopupDemoComponent2 {

}
