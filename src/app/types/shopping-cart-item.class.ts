import { ModelSignal } from "@angular/core";

export class ShoppingCartItem {
  readonly imageSrc = `/assets/images/cart/${this.id}.jpg`;

  constructor(
    readonly id: string,
    public quantity: ModelSignal<number>,
    readonly shortName: string,
    readonly price: number,
  ) { }

  get totalPrice(): number {
    return this.price * this.quantity();
  }
}
