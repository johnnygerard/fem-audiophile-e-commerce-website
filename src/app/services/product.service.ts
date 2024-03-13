import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../types/product.type';
import { ProductCategory } from '../types/product-category.enum';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  readonly #products$ = new BehaviorSubject<Product[]>([]);
  readonly products$ = this.#products$.asObservable();

  constructor(private _http: HttpClient) {
    this._http.get<Product[]>('/assets/products.json')
      .subscribe(products => this.#products$.next(products));
  }

  getProduct(id: string): Product {
    const product = this.#products$.value.find(product => product.id === id);

    if (product) return product;
    throw Error(`Product #${id} not found`);
  }

  getProductsByCategory(category: ProductCategory): Product[] {
    return this.#products$.value.filter(product => product.category === category);
  }
}
