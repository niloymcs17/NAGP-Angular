import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailViewComponent } from './product-detail-view/product-detail-view.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductNotFoundComponent } from './product-not-found/product-not-found.component';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: ':id', component: ProductDetailViewComponent },
  { path:':id/404', component: ProductNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
