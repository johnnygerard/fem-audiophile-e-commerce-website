import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, BaseRouteReuseStrategy } from '@angular/router';
import { ProductCategory } from '../types/product-category.enum';

@Injectable({
  providedIn: 'root'
})
export class RouteReuseStrategyService extends BaseRouteReuseStrategy {
  readonly productCategories = Object.values(ProductCategory) as string[];

  override   shouldReuseRoute(
    future: ActivatedRouteSnapshot,
    curr: ActivatedRouteSnapshot,
  ): boolean {
    const futureUrl = future.url.join('/');

    if (this.productCategories.includes(futureUrl))
      return false;

    // Angular default behavior
    // Source: https://github.com/angular/angular/blob/17.3.0/packages/router/src/route_reuse_strategy.ts#L104-L111
    return future.routeConfig === curr.routeConfig;
  }
}
