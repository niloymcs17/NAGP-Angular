import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LazyTranslateService } from '../service/lazy-translate.service';

export function checkoutTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/cart/', '.json');
}

@NgModule({
  declarations: [
    CartComponent,
    PaymentComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    HttpClientModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: checkoutTranslateLoader,
        deps: [HttpClient]
      },
      isolate: true,
    })
  ]
})
export class CartModule {
  constructor(private langservice: TranslateService, private customLag: LazyTranslateService) {
    this.customLag.language.subscribe(value => this.langservice.use(value));
  }
}
