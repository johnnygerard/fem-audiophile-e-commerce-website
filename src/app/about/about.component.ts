import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SourceMedia } from '../types/source-media.enum';
import { PictureService } from '../../assets/images/picture.service';

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
  picture = inject(PictureService).getSources('shared', 'best-gear.jpg');
}
