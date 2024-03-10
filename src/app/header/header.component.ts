import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';
import { MenuComponent } from '../svg/menu/menu.component';
import { LogoComponent } from '../svg/logo/logo.component';
import { ShoppingCartComponent } from '../svg/shopping-cart/shopping-cart.component';
import { RichNavigationComponent } from '../rich-navigation/rich-navigation.component';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

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
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
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
