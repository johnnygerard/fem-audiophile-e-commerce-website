export class ShoppingCartItem {
  readonly imageSrc = `/assets/images/cart/${this.id}.jpg`;

  constructor(
    readonly id: string,
    public quantity: number,
    readonly name: string,
    readonly price: number,
  ) { }

  get toJSON(): string {
    return JSON.stringify({
      id: this.id,
      quantity: this.quantity,
    });
  }
}
