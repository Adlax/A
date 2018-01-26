import { Component } from 'angular2/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES, FormBuilder, ControlGroup, Validators } from 'angular2/common';

@Component({
  selector: 'demo-form-with-validations-shorthand',
  directives: [ CORE_DIRECTIVES, FORM_DIRECTIVES ],
  template: `
    <div class="ui raised segment">
      <h2 class="ui header"> Demo Form With FormBuilder with shorthand Validation </h2>
      <form class="ui form" [ngFormModel]="myForm" (ngSubmit)="onSubmit(myForm.value)">
        <div class="field" [class.error]="!myForm.find('sku').valid && myForm.find('sku').touched">
            <label for="skuInput">SKU</label>
            <input type="text" id="skuInput" placeholder="SKU..." [ngFormControl]="myForm.controls['sku']">
            <div class="ui error message" *ngIf="!sku.control.valid"> sku is not valid </div>
            <div class="ui error message" *ngIf="sku.control.hasError('required')"> sku is required </div>
        </div>
        <div class="ui error message" *ngIf="!myForm.valid"> your form is invalid </div>
        <button class="ui button" type="submit">Send</button>
      </form>
    </div>
  `
})
export class DemoFormWithValidationsShorthand {
  myForm: ControlGroup;
  constructor(fb: FormBuilder){
    this.myForm = fb.group({
        'sku': ['', Validators.required]
    });
  }
  onSubmit(value: string): void {
    console.log('Tu as envoyé : ', value);
  }
}
