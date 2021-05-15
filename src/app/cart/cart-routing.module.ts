import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../service/auth.guard';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {
    path: '', component: CartComponent , canActivate:[AuthGuard]
  },
  {
    path: 'payment', component: PaymentComponent ,canActivate:[AuthGuard]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
