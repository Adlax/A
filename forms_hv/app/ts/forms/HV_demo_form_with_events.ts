import { Component } from 'angular2/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES, FormBuilder, ControlGroup, AbstractControl, Validators } from 'angular2/common';

@Component({
  selector: 'demo-form-with-events',
  directives: [ CORE_DIRECTIVES, FORM_DIRECTIVES ],
  template: `
    <div class="ui raised segment">
      <h2 class="ui header"> Demo Form With FormBuilder with explicit Customized Validation and InputListeners </h2>
      <form class="ui form" [ngFormModel]="myForm" (ngSubmit)="onSubmit(myForm.value)">
        <div class="field" [class.error]="!sku.valid && sku.touched">
            <label for="skuInput">SKU</label>
            <input type="text" id="skuInput" placeholder="SKU..." [ngFormControl]="myForm.controls['sku']">
            <div class="ui error message" *ngIf="!sku.hasError('invalidSku')"> sku is not valid because not starting with <tt>123</tt> </div>
            <div class="ui error message" *ngIf="sku.hasError('required')"> sku is required </div>
        </div>
        <div class="ui error message" *ngIf="!myForm.valid"> your form is invalid </div>
        <button class="ui button" type="submit">Send</button>
      </form>
    </div>
  `
})
export class DemoFormWithEvents {
  myForm: ControlGroup;
  sku: AbstractControl;
  constructor(fb: FormBuilder){
    this.myForm = fb.group({
        'sku': ['', Validators.compose([Validators.required,skuValidator])]
    });
    this.sku = this.myForm.controls['sku'];
    this.sku.valueChanges.subscribe {
      (value: string) => { console.log('sku value changed to : ', value); }
    }
    this.myForm.valueChanges.subscribe {
      (value: string) => { console.log('myForm value changed to : ', value); }
    }
  }
  onSubmit(value: string): void {
    console.log('Tu as envoyé : ', value);
  }
}
