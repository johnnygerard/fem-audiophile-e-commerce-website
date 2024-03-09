import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './types/product.type';
import { ProductCategory } from './types/product-category.enum';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  readonly products = this._http.get<Product[]>('/assets/products.json');

  constructor(private _http: HttpClient) { }

  getProduct(id: number): Observable<Product> {
    return this.products.pipe(
      map(products => {
        const product = products.find(product => product.id === id);

        if (product) return product;
        throw Error(`Product #${id} not found`);
      })
    );
  }

  getProductsByCategory(category: ProductCategory): Observable<Product[]> {
    return this.products.pipe(
      map(products => products.filter(product => product.category === category))
    );
  }
}
