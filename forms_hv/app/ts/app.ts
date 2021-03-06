/*
 * Angular
 */
import {
  Component
} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

/*
 * We're using Webpack to load our CSS which is why we use `require` instead of
 * `import` here
 */
require('../css/styles.css');
require('../css/semantic.min.css');
require('../images/ng-book-2-minibook.png');
require('../images/favicon-32x32.png');
require('../images/favicon.ico');

/*
 * Our Demos
 */
import {DemoFormSku} from
  './forms/HV_demo_form_sku';
import {DemoFormSkuBuilder} from
  './forms/HV_demo_form_sku_with_builder';
import {DemoFormWithValidationsShorthand} from
  './forms/HV_demo_form_with_validations_shorthand';
import {DemoFormWithValidationsExplicit} from
  './forms/HV_demo_form_with_validations_explicit';
import {DemoFormWithCustomValidations} from
   './forms/HV_demo_form_with_custom_validations';
import {DemoFormWithEvents} from
   './forms/HV_demo_form_with_events';
import {DemoFormNgModel} from
  './forms/HV_demo_form_ng_model';

/*
 * Webpack
 */
@Component({
  selector: 'forms-demo-app',
  directives: [DemoFormSku,
               DemoFormSkuBuilder,
               DemoFormWithValidationsShorthand,
               DemoFormWithValidationsExplicit,
               DemoFormWithCustomValidations,
               DemoFormWithEvents,
               DemoFormNgModel],
  template: `
    <div>
      <demo-form-sku></demo-form-sku>
      //<demo-form-sku-builder></demo-form-sku-builder>
      //<demo-form-with-validations-explicit></demo-form-with-validations-explicit>
      //<demo-form-with-validations-shorthand></demo-form-with-validations-shorthand>
      //<demo-form-with-custom-validations></demo-form-with-custom-validations>
      //<demo-form-with-events></demo-form-with-events>
      //<demo-form-ng-model></demo-form-ng-model>
    </div>
  `
})
class FormsDemoApp {
}

bootstrap(FormsDemoApp);
