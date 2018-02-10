import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-om-init',
  template: `
    <div class="ui label">
      <i class="cubes icon"></i> Init/Destroy
    </div>
  `
})
export class OnInitComponent implements OnInit, OnDestroy {
  constructor(){}
  ngOnInit(): void {
    console.log('Creation');
  }
  ngOnDestroy(): void {
    console.log('Destruction');
  }
}
