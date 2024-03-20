import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ShoppingCartService } from '../../../services/shopping-cart.service';
import { NgFor } from '@angular/common';
import { QuantityControlComponent } from '../../quantity-control/quantity-control.component';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ShoppingCartSvgComponent } from '../../../svg/shopping-cart/shopping-cart.component';
import { AppCurrencyPipe } from '../../../app-currency.pipe';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [
    FormsModule,
    NgFor,
    AppCurrencyPipe,
    QuantityControlComponent,
    ShoppingCartSvgComponent,
  ],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShoppingCartComponent {
  readonly items = this._cart.items;
  readonly size = this._cart.size;
  readonly totalPrice = this._cart.totalPrice;

  constructor(
    private readonly _cart: ShoppingCartService,
    private readonly _router: Router,
  ) { }

  emptyCart(): void {
    this._cart.emptyCart();
  }

  toCheckout(): void {
    this._router.navigateByUrl('/checkout');
  }
}
