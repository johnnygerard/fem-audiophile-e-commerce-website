import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ShoppingCartService } from '../../../services/shopping-cart.service';
import { NgFor } from '@angular/common';
import { AppCurrencyPipe } from '../../../app-currency.pipe';

@Component({
  selector: 'app-checkout-summary',
  standalone: true,
  imports: [
    NgFor,
    AppCurrencyPipe,
  ],
  templateUrl: './checkout-summary.component.html',
  styleUrl: './checkout-summary.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckoutSummaryComponent {
  readonly VAT_RATE = 0.2;
  readonly items = this._cart.items();
  readonly itemQuantities = this.items.map(item => item.quantity());
  readonly totalPrice = this._cart.totalPrice(); // VAT included
  readonly shippingCost = 50;
  readonly vat = this.totalPrice * this.VAT_RATE;
  readonly grandTotal = this.totalPrice + this.shippingCost;
  readonly costEntries = [
    { label: 'Total', value: this.totalPrice },
    { label: 'Shipping', value: this.shippingCost },
    { label: 'VAT (included)', value: this.vat },
  ];

  constructor(
    private readonly _cart: ShoppingCartService,
  ) { }
}
