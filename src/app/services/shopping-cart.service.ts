import { Injectable, computed, effect, signal } from '@angular/core';
import { ShoppingCartItem } from '../types/shopping-cart-item.class';
import { ProductService } from './product.service';
import { ShoppingCartItemJSON } from '../types/shopping-cart-item-json.type';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  readonly STORAGE_KEY = 'cart';
  readonly items = signal<ShoppingCartItem[]>([]);
  readonly size = computed(() => this.items().length);
  readonly totalPrice = computed(() => this.items().reduce(
    (sum, item) => sum + item.price * item.quantity, 0
  ));

  constructor(private _productService: ProductService) {
    if (window.localStorage) {
      // Restore cart from local storage
      const cartJSON = window.localStorage.getItem(this.STORAGE_KEY);

      if (cartJSON) {
        const deserialized = JSON.parse(cartJSON) as ShoppingCartItemJSON[];

        this.items.set(deserialized.map(
          item => this.#createItem(item.id, item.quantity)
        ));
      }

      // Keep local storage synchronized with cart
      effect(() => window.localStorage.setItem(
        this.STORAGE_KEY,
        JSON.stringify(this.items().map(item => ({
          id: item.id,
          quantity: item.quantity,
        })))
      ));
    } else {
      console.warn('Local storage not supported');
    }
  }

  addItem(id: string, quantity: number): void {
    this.items.update(items => {
      const item = items.find(item => item.id === id);

      if (item) {
        item.quantity += quantity;
        return [...items];
      }

      items.push(this.#createItem(id, quantity));
      this.#sortItemsByPriceDescending(items);

      return [...items];
    });
  }

  emptyCart(): void {
    this.items.set([]);
  }

  #createItem(id: string, quantity: number): ShoppingCartItem {
    const { name, price } = this._productService.getProduct(id);

    return new ShoppingCartItem(
      id,
      quantity,
      name,
      price
    );
  }

  #sortItemsByPriceDescending(items: ShoppingCartItem[]): void {
    items.sort((a, b) => b.price - a.price);
  }
}
