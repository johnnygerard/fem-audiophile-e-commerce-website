import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SourceMedia } from '../types/source-media.enum';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent {
  readonly sourceMedia = SourceMedia;
  picture = {
    mobile: this.#getSrc('mobile'),
    tablet: this.#getSrc('tablet'),
    desktop: this.#getSrc('desktop'),
  };

  #getSrc(device: string): string {
    return `/assets/images/shared/${device}/best-gear.jpg`;
  }
}
