import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PictureService } from '../../../assets/images/picture.service';
import { SourceMedia } from '../../types/source-media.enum';

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
