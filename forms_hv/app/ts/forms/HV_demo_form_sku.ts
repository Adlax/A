import { Component } from 'angular2/core';
import { FORM_DIRECTIVES } from 'angular2/common';

@Component({
  selector: 'demo_form_sku',
  directives: [ FORM_DIRECTIVES ],
  template: `
    <div class="ui raised segment">
      <h2 class="ui header"> Demo Form With ngForm </h2>
      <form class="ui form" #f="ngForm" (ngSubmit)="onSubmit(f.value)">
        <div class="field">
            <label for="skuInput">SKU</label>
            <input type="text" id="skuInput" placeholder="SKU..." ngControl="sku">
        </div>
        <button class="ui button" type="submit">Send</button>
      </form>
    </div>
  `
})
export class DemoFormSku {
  onSubmit(value: string): void {
    console.log('Tu as envoyé : ', value);
  }
}
