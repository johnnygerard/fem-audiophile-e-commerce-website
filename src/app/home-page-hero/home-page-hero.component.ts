import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-page-hero',
  standalone: true,
  imports: [
    RouterLink,
  ],
  templateUrl: './home-page-hero.component.html',
  styleUrl: './home-page-hero.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageHeroComponent {
}
