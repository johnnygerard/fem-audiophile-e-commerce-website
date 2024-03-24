import { Injectable } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service';
import { ShoppingCartItem } from '../types/shopping-cart-item.class';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  #items: ShoppingCartItem[] = [];

  constructor(
    private readonly _cart: ShoppingCartService,
  ) { }

  get items(): readonly ShoppingCartItem[] {
    return this.#items;
  }

  createOrder(): void {
    this.#items = this._cart.items().map(item => item.clone());
  }
}
