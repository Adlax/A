import { Component, Directive, Input, HostListener, ExportAs, ElementRef } from '@angular/core';

@Directive({
  selector: '[popup]',
  exportAs: 'popup',
})
export class PopupDirective {
  @Input() message: String;
  constructor(_elementRef: ElementRef) {
      console.log(_elementRef);
  }
  @HostListener('click') displayMessage(): void {
      alert(this.message);
  }
}

@Component({
  selector: 'app-popup-demo',
  template: `
    <div class="ui message" popup #popup1="popup" message="Clicked the message">
      <div class="header">
        Learning Directives
      </div>
      <p>
        THis should use your popup directive buddy, with an export, so than you can use their templates after elsewhere
      </p>
    </div>
    <i class="alarm icon" popup #popup2="popup" message="Clicked the alarm icon"> </i>
  `
})
export class PopupDemoComponent4 {

}

<div class="margin-top: 20px;">
  <button (click)="popup1.displayMessage()" class="ui button"> Display the message of the first popup element </button>
  <button (click)="popup2.displayMessage()" class="ui button"> Display the message of the second popup element </button>
</div>
