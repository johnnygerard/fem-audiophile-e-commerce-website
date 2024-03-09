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

  getProduct(slug: string): Observable<Product | undefined> {
    return this.products.pipe(
      map(products => products.find(product => product.slug === slug))
    );
  }

  getProductsByCategory(category: ProductCategory): Observable<Product[]> {
    return this.products.pipe(
      map(products => products.filter(product => product.category === category))
    );
  }
}
