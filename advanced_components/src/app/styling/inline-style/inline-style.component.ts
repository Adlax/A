import { Component } from '@angular/core';

@Component({
  selector: 'app-inline-style',
  styles: ['
    .highlight {
      border: 20px solid red;
      background-color: yellow;
      text-align: center;
      margin-bottom: 20px;
    }
  '],
  template: `
    <h4 class="ui horizontal divider header">
      Inline Styling Example
    </h4>
    <div class="highlight">
      This uses component <code>styles</code> propertu
    </div>
  `
})
export class InlineStyleComponent {

}
