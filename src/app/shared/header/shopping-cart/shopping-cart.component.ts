import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ShoppingCartService } from '../../../services/shopping-cart.service';
import { CurrencyPipe, NgFor } from '@angular/common';
import { QuantityControlComponent } from '../../quantity-control/quantity-control.component';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [
    FormsModule,
    NgFor,
    RouterLink,
    CurrencyPipe,
    QuantityControlComponent,
  ],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShoppingCartComponent {
  readonly items = this._cart.items;
  readonly size = this._cart.size;
  readonly totalPrice = this._cart.totalPrice;

  constructor(private readonly _cart: ShoppingCartService) { }

  emptyCart(): void {
    this._cart.emptyCart();
  }
}
