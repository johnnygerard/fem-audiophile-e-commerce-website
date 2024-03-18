export class ShoppingCartItem {
  readonly imageSrc = `/assets/images/cart/${this.id}.jpg`;

  constructor(
    readonly id: string,
    public quantity: number,
    readonly shortName: string,
    readonly price: number,
  ) { }
}
