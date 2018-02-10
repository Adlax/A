//Directive popup
@Directive({
  selector: '[popup]',
})
export class PopupDirective {
  constructor(){
    console.log('Directive popup bound');
  }
}

//Component using the directive popup
@Component({
  selector: 'app-popup-demo',
  template: `
    <div class="ui message" popup>
      <div class="header">
          Learning Directive
      <div>
      <p>
          This should use your popup directive buddy
      </p>
    <div>
  `
})
export class PopupDemoComnponent1 {

}
