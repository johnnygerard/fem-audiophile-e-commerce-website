import { Injectable, computed, signal } from '@angular/core';
import { ShoppingCartItem } from './types/shopping-cart-item.class';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  readonly items = signal<ShoppingCartItem[]>([]);
  readonly size = computed(() => this.items().length);
  readonly totalPrice = computed(() => this.items().reduce(
    (sum, item) => sum + item.price * item.quantity, 0
  ));

  constructor(private _productService: ProductService) { }

  addItem(id: string, quantity: number): void {
    this.items.update(items => {
      const item = items.find(item => item.id === id);

      if (item) {
        item.quantity += quantity;
        return [...items];
      }

      const { name, price } = this._productService.getProduct(id);

      items.push(new ShoppingCartItem(
        id,
        quantity,
        name,
        price
      ));
      this.#sortItemsByPriceDescending(items);

      return [...items];
    });
  }

  emptyCart(): void {
    this.items.set([]);
  }

  #sortItemsByPriceDescending(items: ShoppingCartItem[]): void {
    items.sort((a, b) => b.price - a.price);
  }
}
