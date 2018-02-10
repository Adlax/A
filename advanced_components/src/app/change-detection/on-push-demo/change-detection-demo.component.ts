import { Component } from '@angular/core';
import { Profile } from './profile.model';

@Component({
  selector: 'app-change-detection-demo',
  template: `
    <div class="ui page grid">
      <div class="two column row">
        <div class="column area">
            <app-default-change-detection [(profile)]="profile1"></app-default-change-detection>
        </div>
        <div class="column area">
            <app-on-push-change-detection [(profile)]="profile2"></app-on-push-change-detection>
        </div>
      </div>
    <div>
  `
})
export class OnPushChangeDetectionComponent {
  profile1: Profile = new Profile('Gigi','LaToutoune');
  profile2: Profile = new Profile('Mario','RitalPizzaoilo');
}
