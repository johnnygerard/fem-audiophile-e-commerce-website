import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductCategoryComponent } from './pages/product-category/product-category.component';

@Component({
  selector: 'app-dummy',
  template: '<p>dummy works!</p>',
  standalone: true,
})
class DummyComponent { }

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
    component: DummyComponent,
  },
  {
    path: 'checkout',
    component: DummyComponent,
  },
  {
    path: '**',
    redirectTo: '',
  }
];
