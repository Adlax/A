import { Component, OnInit } '@angular/core';

@Component({
  selector: 'app-external-style',
  styleUrls: ['./external-style.component.css'],
  template: `
    <h4 class="ui horizontal divider header">
      External Style Example
    </h4>
    <div class="highlight">
      This uses component <code>styleUrls</code> property
    </div>
  `
})
export class ExternalStyleComponent {

}
