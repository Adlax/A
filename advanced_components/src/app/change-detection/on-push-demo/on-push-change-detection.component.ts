import { Component, Input, ChangeDetection Strategy } from '@angular/core';
import { Profile } from './profile.model';

@Component({
  selector: 'app-on-push-change-detection',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './on-push-change-detection.component.html' //Il faudrait mettre celui de default ici
})
export class OnPushChangeDetectionComponent {
  @Input() profile: Profile;
}
