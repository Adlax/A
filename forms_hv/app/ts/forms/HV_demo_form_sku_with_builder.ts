import { Component } from 'angular2/core';
import { FORM_DIRECTIVES, FormBuilder, ControlGroup  } from 'angular2/common';

@Component({
  selector: 'demo-form-sku-builder',
  directives: [ FORM_DIRECTIVES ],
  template: `
    <div class="ui raised segment">
      <h2 class="ui header"> Demo Form With FormBuilder </h2>
      <form class="ui form" [ngFormModel]="myForm" (ngSubmit)="onSubmit(myForm.value)">
        <div class="field">
            <label for="skuInput">SKU</label>
            <input type="text" id="skuInput" placeholder="SKU..." [ngFormControl]="myForm.controls['sku']">
        </div>
        <button class="ui button" type="submit">Send</button>
      </form>
    </div>
  `
})
export class DemoFormSkuBuilder {
  myForm: ControlGroup;
  constructor(fb: FormBuilder){
    this.myForm = fb.group({
        'sku': ['ABC123']
    });
  }
  onSubmit(value: string): void {
    console.log('Tu as envoyé : ', value);
  }
}
