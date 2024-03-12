import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';
import { MenuComponent } from '../../svg/menu/menu.component';
import { LogoComponent } from '../../svg/logo/logo.component';
import { ShoppingCartComponent } from '../../svg/shopping-cart/shopping-cart.component';
import { RichNavigationComponent } from '../rich-navigation/rich-navigation.component';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { trigger, style, transition, animate } from '@angular/animations';
import { NavigationComponent } from '../navigation/navigation.component';

const TIMING = '300ms ease';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgIf,
    RouterLink,
    MenuComponent,
    LogoComponent,
    ShoppingCartComponent,
    RichNavigationComponent,
    NavigationComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('pane', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)' }),
        animate(TIMING, style({ transform: 'translateY(0)' })),
      ]),
      transition(':leave', [
        animate(TIMING, style({ transform: 'translateY(-100%)' })),
      ]),
    ]),
  ],
})
export class HeaderComponent {
  isDesktop = this.#isDesktop;
  isPaneOpen = false;

  togglePane(): void {
    this.isPaneOpen = !this.isPaneOpen;
  }

  @HostListener('window:resize')
  onResize(): void {
    this.isDesktop = this.#isDesktop;
  }

  get #isDesktop(): boolean {
    return window.innerWidth >= 1440;
  }
}
