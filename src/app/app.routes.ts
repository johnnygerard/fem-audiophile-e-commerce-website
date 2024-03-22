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
    component: HomePageComponent,
    title: 'Home',
  },
  {
    path: 'headphones',
    component: ProductCategoryPageComponent,
    title: 'Headphones',
  },
  {
    path: 'speakers',
    component: ProductCategoryPageComponent,
    title: 'Speakers',
  },
  {
    path: 'earphones',
    component: ProductCategoryPageComponent,
    title: 'Earphones',
  },
  {
    path: 'product/:id',
    component: ProductDetailsPageComponent,
    title: productDetailsTitleResolver,
  },
  {
    path: 'checkout',
    component: CheckoutPageComponent,
    title: 'Checkout',
  },
  {
    path: '**',
    redirectTo: '',
  }
];
