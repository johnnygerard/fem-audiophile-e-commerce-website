import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { ShoppingCartService } from '../../../services/shopping-cart.service';
import { CurrencyPipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-checkout-summary',
  standalone: true,
  imports: [
    NgFor,
    CurrencyPipe,
  ],
  templateUrl: './checkout-summary.component.html',
  styleUrl: './checkout-summary.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckoutSummaryComponent {
  readonly VAT_RATE = 0.2;
  readonly items = this._cart.items;
  readonly totalPrice = this._cart.totalPrice; // VAT included
  readonly shippingCost = computed(() => 50);
  readonly vat = computed(() => this.totalPrice() * this.VAT_RATE);
  readonly grandTotal = computed(() => this.totalPrice() + this.shippingCost());
  readonly costEntries = [
    { label: 'Total', value: this.totalPrice },
    { label: 'Shipping', value: this.shippingCost },
    { label: 'VAT (included)', value: this.vat },
  ];

  constructor(
    private readonly _cart: ShoppingCartService,
  ) { }
}