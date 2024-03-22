import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductCategoryPageComponent } from './pages/product-category-page/product-category-page.component';
import { ProductDetailsPageComponent } from './pages/product-details-page/product-details-page.component';
import { CheckoutPageComponent } from './pages/checkout-page/checkout-page.component';
import { productDetailsTitleResolver } from './product-details-title.resolver';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    title: 'Home',
    component: HomePageComponent,
  },
  {
    path: 'headphones',
    title: 'Headphones',
    component: ProductCategoryPageComponent,
  },
  {
    path: 'speakers',
    title: 'Speakers',
    component: ProductCategoryPageComponent,
  },
  {
    path: 'earphones',
    title: 'Earphones',
    component: ProductCategoryPageComponent,
  },
  {
    path: 'product/:id',
    title: productDetailsTitleResolver,
    component: ProductDetailsPageComponent,
  },
  {
    path: 'checkout',
    title: 'Checkout',
    component: CheckoutPageComponent,
  },
  {
    path: '**',
    redirectTo: '',
  }
];
