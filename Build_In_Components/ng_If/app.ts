import { Component } from 'angular2/core';
import { bootstrap } from 'angular2/platform/browser';

@Component({
  selector: 'switch-sample-app',
  template: `
    <h4 class="ui horizontal divider header">
      Test du ngIf
    </h4>

    <div class="ui raised segment">
      <div [ngIf]="false"> Caca </div>
      <div [ngIf]="true"> ON </div>
    </div>
  `
})
class SwitchSampleApp {
  //choice: number;

  //constructor() {
    //this.choice = 1;
  }
}

bootstrap(SwitchSampleApp);
