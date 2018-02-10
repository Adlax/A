import { Component, AfterContentInit, QueryList, ContentChildren } from '@angular/core';

import { ContentTabComponent } from './content-tab.component';

@Component({
  selectror: 'tabset',
  templateUrl: './content-tabset.component.html'
})
export class ContentTabsetComponent implements AfterContentInit {
  @ContentChildren(ContentTabComponent) tabs: QueryList<ContentTabComponent>;
  ngAfterContentInit(): void {
    this.tabs.toArray()[0].active = true;
  }
  setActive(tab: ContentTabComponent): void {
    this.tabs.toArray().forEach( (tab) => tab.active = false; );
    tab.active = true;
  }
  constructor(): void {}

}
