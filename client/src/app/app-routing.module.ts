import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './pages/search/search.module#SearchModule',
  },
  {
    path: 'items',
    loadChildren: './pages/items/items.module#ItemsModule',
  },
  {
    path: 'items/:id',
    loadChildren: './pages/product-details/product-details.module#ProductDetailsModule',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
