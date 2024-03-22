import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductCategoryPageComponent } from './pages/product-category-page/product-category-page.component';
import { ProductDetailsPageComponent } from './pages/product-details-page/product-details-page.component';
import { CheckoutPageComponent } from './pages/checkout-page/checkout-page.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomePageComponent,
  },
  {
    path: 'headphones',
    component: ProductCategoryPageComponent,
  },
  {
    path: 'speakers',
    component: ProductCategoryPageComponent,
  },
  {
    path: 'earphones',
    component: ProductCategoryPageComponent,
  },
  {
    path: 'product/:id',
    component: ProductDetailsPageComponent,
  },
  {
    path: 'checkout',
    component: CheckoutPageComponent,
  },
  {
    path: '**',
    redirectTo: '',
  }
];
