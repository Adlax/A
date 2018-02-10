import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-tabs-demo',
  templateUrl: './content-tabs-demo.component.html'
})
export class ContentTabsDemoComponent implements OnInit{
  tabs: any;
  ngOnInit(): void {
    this.tabs = [
      {title: 'About', content: 'Nous sommes les plus beaux'},
      {title: 'Blog', content: 'tout le bullshit classique'},
      {title: 'Contact us', content: 'Non, c est une blague'}
    ];
  }
}
