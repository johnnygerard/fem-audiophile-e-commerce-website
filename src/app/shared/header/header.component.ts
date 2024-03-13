import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostListener } from '@angular/core';
import { MenuComponent } from '../../svg/menu/menu.component';
import { LogoComponent } from '../../svg/logo/logo.component';
import { ShoppingCartComponent } from '../../svg/shopping-cart/shopping-cart.component';
import { RichNavigationComponent } from '../rich-navigation/rich-navigation.component';
import { NgIf } from '@angular/common';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { trigger, style, transition, animate } from '@angular/animations';
import { NavigationComponent } from '../navigation/navigation.component';
import { HeroComponent } from '../../pages/home/hero/hero.component';

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
    HeroComponent,
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
  pageHeader: string | null = null;

  constructor(
    router: Router,
    changeDetectorRef: ChangeDetectorRef,
  ) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        switch (event.url) {
          case '/':
            this.pageHeader = 'home';
            break;
          case '/headphones':
          case '/earphones':
          case '/speakers':
            this.pageHeader = event.url.slice(1);
            break;
          default:
            this.pageHeader = null;
            break;
        }
      }

      // Trigger change detection
      changeDetectorRef.markForCheck();
    });
  }

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
