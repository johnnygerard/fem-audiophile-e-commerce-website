import { Routes } from '@angular/router';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductCategoryComponent } from './pages/product-category/product-category.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'headphones',
    component: ProductCategoryComponent,
  },
  {
    path: 'speakers',
    component: ProductCategoryComponent,
  },
  {
    path: 'earphones',
    component: ProductCategoryComponent,
  },
  {
    path: 'product/:id',
    component: ProductDetailsComponent,
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
  },
  {
    path: '**',
    redirectTo: '',
  }
];
