import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ShoppingCartService } from '../../../services/shopping-cart.service';
import { NgFor, NgIf } from '@angular/common';
import { QuantityControlComponent } from '../../quantity-control/quantity-control.component';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AppCurrencyPipe } from '../../../app-currency.pipe';
import { SvgShoppingCartComponent } from '../../../svg/svg-shopping-cart.component';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    NgFor,
    AppCurrencyPipe,
    QuantityControlComponent,
    SvgShoppingCartComponent,
  ],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShoppingCartComponent {
  isDialogOpen = false;
  readonly items = this._cart.items;
  readonly size = this._cart.size;
  readonly totalPrice = this._cart.totalPrice;

  constructor(
    private readonly _cart: ShoppingCartService,
    private readonly _router: Router,
  ) { }

  get isCartEmpty(): boolean {
    return this._cart.isEmpty;
  }

  emptyCart(): void {
    this._cart.empty();
  }

  checkOut(): void {
    this.isDialogOpen = false;
    this._router.navigateByUrl('/checkout');
  }
}
