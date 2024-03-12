import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SourceMedia } from '../../../types/source-media.enum';
import { PictureService } from '../../../../assets/images/picture.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-zx9',
  standalone: true,
  imports: [
    RouterLink,
  ],
  templateUrl: './product-zx9.component.html',
  styleUrl: './product-zx9.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductZX9Component {
  readonly sourceMedia = SourceMedia;
  picture = inject(PictureService).getSources('home', 'speaker-zx9.png');
}
