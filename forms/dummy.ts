//Control
let nameControl = new Control("Nate");
let name = nameControl.value;
nameControl.errors;
nameControl.dirty;
nameControl.valid;
<input type="text" ngControl="name"/>

//ControlGroup
let personInfo = new ControlGroup({
  firstName: new Control("Nate"),
  lastName: new Control("Archibald"),
  zip: new Control("12568"),
})
personInfo.value;
personInfo.errors;
personInfo.dirty;
personInfo.valid;

//form
import { Component } from 'angular2/core';
import { FORM_DIRECTIVES } from 'angular2/common';

@Component({
  selector: 'demo-form-sku',
  directives: [FORM_DIRECTIVES],
  template: `
    <div class="ui raised segment">
      <h2 class="ui header"> Demo Form: SKU </h2>
      <form #form="ngForm" (ngSubmit)="onSubmit(form.value)" class="ui form">
        <div class="field">
          <label for="skuInput">SKU</label>
          <input type="text" id="skuInput" placeholder="SKU" ngControl="sku">
        </div>
          <button type="submit" class="ui button">Submit!</button>
      </form>
    </div>
  `
})

//simple sku form
export class DemoFormSku {
  onSubmit(value: string): void {
    console.log('You submited this : ', value);
  }
}

//TRY IT OUT
import { Component } from 'angular2/core';
import { FORM_DIRECTIVES } from 'angular2/common';

@Component({
  selector: 'demo-form-sku',
  directives: [FORM_DIRECTIVES],
  template: `
    <div class="ui raised segment">
      <h2 class="ui header"> Demo Form: SKU </h2>
      <form #form="ngForm" (ngSubmit)="onSubmit(form.value)" class="ui form">
        <div class="field">
          <label for="skuInput">SKU</label>
          <input type="text" id="skuInput" placeholder="SKU" ngControl="sku">
        </div>
          <button type="submit" class="ui button">Submit!</button>
      </form>
    </div>
  `
})
export class DemoFormSku {

  onSubmit(value: string): void {
    console.log('You submited this : ', value);
  }
}

//TRY IT OUT FormBuilder and validators
import { Component } from 'angular2/core';
import { FORM_DIRECTIVES, FormBuilder, ControlGroup } from 'angular2/common';

@Component({
  selector: 'demo-form-sku',
  directives: [FORM_DIRECTIVES],
  template: `
    <div class="ui raised segment">
      <h2 class="ui header"> Demo Form: SKU with builder </h2>
      <form [ngFormModel]="myForm" (ngSubmit)="onSubmit(myForm.value)" class="ui form">
        <div class="field" [class.error]="!sku.valid && sku.touched">
          <label for="skuInput">SKU</label>
          <input type="text" id="skuInput" placeholder="SKU" [ngFormControl]="myForm.controls['sku']">
          <div class="ui error message" *ngIf="!sku.valid"> sku n est pas valide </div>
          <div class="ui error message" *ngIf="!sku.hasError('required')"> sku et requis </div>
          <div class="error" *ngIf="myForm.hasError('required','sku')"> sku n est pas valide </div>
        </div>
          <button type="submit" class="ui button">Submit!</button>
      </form>
      <div class="ui error message" *ngIf="!myForm.valid"> Le formulaire n'est pas valid </div>
    </div>
  `
})
export class DemoFormWithValidationsExplicit {
  myForm: ControlGroup;
  sku: AbstractControl;
  constructor(fb: FormBuilder){
    this.myForm = fb.group({'sku': ['', Validators.required]});
    this.sku = this.myForm.controls['sku'];
  }
  onSubmit(value: string): void {
    console.log('You submited this : ', value);
  }
}

//PUTTING IT TOGETHER///////////////////////////////////////////////////////////
import { Component } from 'angular2/core';
import { FORM_DIRECTIVES, FormBuilder, ControlGroup, Validators, AbstractControl } from 'angular2/common';

@Component({
  selector: 'demo-form-with-validators-explicit',
  directives: [FORM_DIRECTIVES],
  template: `
    <div class="ui raised segment">
      <h2 class="ui header"> Demo Form with validators explicit </h2>
      <form [ngFormModel]="myForm" (ngSubmit)="onSubmit(myForm.value)" class="ui form">
        <div class="field" [class.error]="!sku.valid && sku.touched">
          <label for="skuInput">SKU</label>
          <input type="text" id="skuInput" placeholder="SKU" [ngFormControl]="myForm.controls['sku']">
          <div class="ui error message" *ngIf="!sku.valid"> sku n est pas valide </div>
          <div class="ui error message" *ngIf="!sku.hasError('required')"> sku et requis </div>
        </div>
        <div class="ui error message" *ngIf="!myForm.valid"> le form n est pas valide </div>
        <button type="submit" class="ui button">Submit!</button>
      </form>
    </div>
  `
})
export class DemoFormWithValidationsExplicit {
  myForm: ControlGroup;
  sku: AbstractControl;
  constructor(fb: FormBuilder){
    this.myForm = fb.group({'sku': ['', Validators.required]});
    this.sku = this.myForm.controls['sku'];
  }
  onSubmit(value: string): void {
    console.log('You submited this : ', value);
  }
}

//Explicitly setting the sku Control as an instance variable////////////////////
export class DemoFormWithValidationsShorthand {
  myForm: ControlGroup;
  constructor(fb: FormBuilder){
    this.myForm = fb.group({'sku': ['', Validators.required]});
    this.sku = this.myForm.controls['sku'];
  }
  onSubmit(value: string): void {
    console.log('You submited this : ', value);
  }
}

//Field coloring via myForm.find
<div class="field" [class.error]="!myForm.find('sku').valid && myForm.find('sku').touched">

//The form export from NgFormControl
<input type="text" id="skuInput" placeholder="SKU" #sku="ngForm" [ngFormControl]=myForm.controls['sku'] >
<div *ngIf="!sku.control.valid"> sku est invalide </div>
<div *ngIf="sku.controlhasError('required')"> sku es trequis </div>

//Putting it togther shorthand//////////////////////////////////////////////////
import { Component } from 'angular2/core';
import { FORM_DIRECTIVES, FormBuilder, ControlGroup, Validators } from 'angular2/common';

@Component({
  selector: 'demo-form-with-validators-shorthand',
  directives: [FORM_DIRECTIVES],
  template: `
    <div class="ui raised segment">
      <h2 class="ui header"> Demo Form with validators shorthand </h2>
      <form [ngFormModel]="myForm" (ngSubmit)="onSubmit(myForm.value)" class="ui form">
        <div class="field" [class.error]="!myForm.find('sku').valid && myForm.find('sku').touched">
          <label for="skuInput">SKU</label>
          <input type="text" id="skuInput" placeholder="SKU" #sku="ngForm" [ngFormControl]="myForm.controls['sku']">
          <div class="ui error message" *ngIf="!sku.control.valid"> sku n est pas valide </div>
          <div class="ui error message" *ngIf="!sku.control.hasError('required')"> sku et requis </div>
        </div>
        <div class="ui error message" *ngIf="!myForm.valid"> le form n est pas valide </div>
        <button type="submit" class="ui button">Submit!</button>
      </form>
    </div>
  `
})
export class DemoFormWithValidationsShorthand {
  myForm: ControlGroup;
  constructor(fb: FormBuilder){
    this.myForm = fb.group({'sku': ['', Validators.required]});
  }
  onSubmit(value: string): void {
    console.log('You submited this : ', value);
  }
}

//Custom Validations
export class Validators {
  static required(c: control): StringMap<string,boolean> {
    return isBlank(c.value) || c.value=="" ? {'required': true} : null;
  }
}

//Writing the Validator
function skuValidator(control: control): {[string]: boolean} {
  if(!control.value.match(/^123/)) return {inValid sku: true};
}

//Assigning the Validator to the Control
  this.myForm = fb.group({
                          'sku': ['',Validators.compose([Validators.required,skuValidator])]
                        })
<div class="ui error message" *ngIf="sku.hasError('invalidSku')"> Sku must start with <tt>123</tt> </div>

//Watching For Changes//////////////////////////////////////////////////////////
  this.myForm = fb.group({
    'sku': ['',Validators.required]
  });

  this.sku = this.myForm.controls['sku'];

  this.sku.valueChanges.subscribe{
    (value: string) => { console.log('Youc changed sku to: ', value); }
  }

  this.myForm.valueChanges.subscribe {
    (value: string) => { console.log('You changed form to:', value); }
  }

//ngModel///////////////////////////////////////////////////////////////////////
import { Component } from 'angular2/core';
import { FORM_DIRECTIVES, FormBuilder, ControlGroup, Validators } from 'angular2/common';

@Component({
  selector: 'demo-form-with-validators-ngModel',
  directives: [FORM_DIRECTIVES],
  template: `
    <div class="ui raised segment">
      <h2 class="ui header"> Demo Form with validators shorthand </h2>
      <form [ngFormModel]="myForm" (ngSubmit)="onSubmit(myForm.value)" class="ui form">
        <div class="field" [class.error]="!myForm.find('sku').valid && myForm.find('sku').touched">
          <label for="skuInput">SKU</label>
          <input type="text" id="skuInput" placeholder="SKU" #sku="ngForm" [ngFormControl]="myForm.controls['sku']">
          <input type="text" id="productNameInput" placeholder="Product Name" [ngFormControl]="myForm.find('productName')" [(ngModel)]="productName" >
          <div class="ui info message"> the product name is: {{ productName }} </div> 
          <div class="ui error message" *ngIf="!sku.control.valid"> sku n est pas valide </div>
          <div class="ui error message" *ngIf="!sku.control.hasError('required')"> sku et requis </div>
        </div>
        <div class="ui error message" *ngIf="!myForm.valid"> le form n est pas valide </div>
        <button type="submit" class="ui button">Submit!</button>
      </form>
    </div>
  `
})
export class DemoFormNgModel {
  myForm: ControlGroup;
  productname: string;
  constructor(fb: formBuilder){
    this.myForm = fb.group({
                            'productName': ['',Validators.required]
                            });
  }
  onSubmit(value: string): void {
    console.log('You typed:', value);
  }
}
