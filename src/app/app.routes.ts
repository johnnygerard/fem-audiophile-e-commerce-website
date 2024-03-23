import { Routes } from '@angular/router';
import { productDetailsTitleResolver } from './product-details-title.resolver';

const loadProductCategoryPage = () => import(
  './pages/product-category-page/product-category-page.component'
);

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    title: 'Home',
    loadComponent: () => import('./pages/home-page/home-page.component'),
  },
  {
    path: 'headphones',
    title: 'Headphones',
    loadComponent: loadProductCategoryPage,
  },
  {
    path: 'speakers',
    title: 'Speakers',
    loadComponent: loadProductCategoryPage,
  },
  {
    path: 'earphones',
    title: 'Earphones',
    loadComponent: loadProductCategoryPage,
  },
  {
    path: 'product/:id',
    title: productDetailsTitleResolver,
    loadComponent: () => import('./pages/product-details-page/product-details-page.component'),
  },
  {
    path: 'checkout',
    title: 'Checkout',
    loadComponent: () => import('./pages/checkout-page/checkout-page.component'),
  },
  {
    path: '**',
    redirectTo: '',
  }
];
