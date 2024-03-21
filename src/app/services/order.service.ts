import { Injectable } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service';
import { ShoppingCartItem } from '../types/shopping-cart-item.class';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  #items: ShoppingCartItem[] = [];
  #itemQuantities: number[] = [];

  constructor(
    private readonly _cart: ShoppingCartService,
  ) { }

  get items(): readonly ShoppingCartItem[] {
    return this.#items;
  }

  get itemQuantities(): readonly number[] {
    return this.#itemQuantities;
  }

  createOrder(): void {
    this.#items = this._cart.items();
    this.#itemQuantities = this.#items.map(item => item.quantity());
  }
}
