import { Injectable } from '@angular/core';
import { Metric, AnalyticsImplementation } from '../analytics-demo/analytics-demo.interface.ts';

@Injectable()
export class AnalyticsService {
  constructor(private implementation: AnalyticsImplementation){

  }
  record(metric: Metric){
    this.implementation.recordEvent(metric);
  }
}
