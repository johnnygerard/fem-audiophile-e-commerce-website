import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FacebookComponent } from '../svg/social-media/facebook.component';
import { XComponent } from '../svg/social-media/x.component';
import { InstagramComponent } from '../svg/social-media/instagram.component';

@Component({
  selector: 'app-social-media',
  standalone: true,
  imports: [
    FacebookComponent,
    XComponent,
    InstagramComponent,
  ],
  templateUrl: './social-media.component.html',
  styleUrl: './social-media.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SocialMediaComponent {

}
