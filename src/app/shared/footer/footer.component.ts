import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LogoComponent } from '../../svg/logo/logo.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { SocialMediaComponent } from '../social-media/social-media.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    LogoComponent,
    NavigationComponent,
    SocialMediaComponent,
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {

}
