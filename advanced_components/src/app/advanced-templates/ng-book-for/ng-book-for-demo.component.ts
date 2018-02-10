import { Component, OnInit } from '@angular/core';

@Component({
  selector:'app-ng-book-for-demo',
  templateUrl: './ng-book-for-demo.component.html'
})
export class NgBookForDemoComponent implements OnInit {
  peoples: [];
  constructor(){  }
  ngOnInit(){
    this.peoples = [
      {name: 'Bob', age: 52},
      {name: 'Paulette', age :45},
      {name: 'Zouzoute', age: 18}
    ];
  }
  remove(someone){
    const idx = this.peoples.IndexOf(someone);
    this.peoples.splice(idx,1);
    return false;
  }
  ass(name,age){
    this.peoples.push({name: name.value, age: age.value});
    name.value = '';
    age.value = '';
  }
}
