import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-on-changes-demo',
  templateUrl: './on-changes-demo.component.html',
  styles: [],
})
export class OnChangesDemoComponent implements OnInit {
  display: boolean;
  name: string;
  comment: string;
  constructor(){};
  ngOnInit(){
    this.display = true;
    this.name = 'John D Myself';
    this.comment = 'Tuker Carlson is ... whouhawo';
  }
  setValues(nameFld, commentFld): void {
    this.name = nameFld.value;
    this.comment = commentFld.value;
  }
  toggle(): void {
    this.display = !this.display;
  }
}
