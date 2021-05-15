import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './service/auth.guard';

const routes: Routes = [
  { path: 'product' , loadChildren:() => import('./product/product.module').then(m => m.ProductModule) },
  { path: 'cart' , loadChildren:() => import('./cart/cart.module').then(m => m.CartModule) ,canLoad: [AuthGuard]},
  { path: 'login' , component: LoginComponent },
  { path: '**' , redirectTo:'product' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
