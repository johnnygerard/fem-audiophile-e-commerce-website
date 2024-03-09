import { Component } from '@angular/core';
import { Routes } from '@angular/router';

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
    component: DummyComponent,
  },
  {
    path: 'headphones',
    component: DummyComponent,
  },
  {
    path: 'speakers',
    component: DummyComponent,
  },
  {
    path: 'earphones',
    component: DummyComponent,
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
