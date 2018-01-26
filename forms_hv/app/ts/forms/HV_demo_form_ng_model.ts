import { Component } from 'angular2/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES, FormBuilder, ControlGroup, Validators } from 'angular2/common';

@Component({
  selector: 'demo-form-ng-model',
  directives: [ CORE_DIRECTIVES, FORM_DIRECTIVES ],
  template: `
    <div class="ui raised segment">
      <h2 class="ui header"> Demo Form With FormBuilder and ngModel </h2>
      <div class="ui info message"> ProductNAme is : {{ productName }} </div>
      <form class="ui form" [ngFormModel]="myForm" (ngSubmit)="onSubmit(myForm.value)">
        <div class="field" [class.error]="!sku.valid && sku.touched">
            <label for="productNameInput">SKU</label>
            <input type="text" id="productNameInput" placeholder="Product Name..." [ngFormControl]="myForm.find('productName')]" [(ngModel)]="productName">
        </div>
        <div class="ui error message" *ngIf="!myForm.valid"> your form is invalid </div>
        <button class="ui button" type="submit">Send</button>
      </form>
    </div>
  `
})
export class DemoFormNgModel {
  myForm: ControlGroup;
  productName: string;
  constructor(fb: FormBuilder){
    this.myForm = fb.group({
        'productName': ['', Validators.compose([Validators.required])]
    });
  }
  onSubmit(value: string): void {
    console.log('Tu as envoyé : ', value);
  }
}
