import { Injectable } from '@angular/core';
import { ShoppingCartItem } from '../types/shopping-cart-item.class';
import { PriceBreakdown } from '../types/price-breakdown.type';

@Injectable({
  providedIn: 'root'
})
export class PriceService {
  readonly VAT_RATE = 0.2;
  readonly SHIPPING_COST = 50;

  constructor() { }

  getPriceBreakdown(items: readonly ShoppingCartItem[]): PriceBreakdown {
    const subtotal = items.reduce((acc, item) => acc + item.totalPrice, 0);
    const shipping = this.SHIPPING_COST;
    const vat = subtotal * this.VAT_RATE;
    const total = subtotal + shipping;

    return {
      subtotal,
      shipping,
      vat,
      total,
    };
  }
}
