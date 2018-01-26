import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Metric, AnalyticsImplementation } from './analytics-demo.interface.ts';
import { AnalyticsService } from '../services/analytics-demo.service.ts';
import { HttpModule, Http } from '@angular/http';

@NgModule({
  imports: [CommonModule, HttpModule],
  providers: [
    { provide: 'API-URL', useValue: 'http://devserver.com' },
    {
      provide: AnalyticsService,
      deps: [Http, 'API-URL'],
      useFactory(http: Http, apiUrl: string) {
        //on cree une implementation qui log l evenement
        const loggingImplementation: AnalyticsImplementation = {
          recordEvent: (metric: Metric): void => { console.log('The metric is : ', metric); console.log('Sending to', apiUrl); }
        };
        return new AnalyticsService(loggingImplementation);
      }
    }
  ],
  declarations: []
})
export class AnalyticsDemoModule {

}
