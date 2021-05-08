import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LazyTranslateService } from '../service/lazy-translate.service';
import { ProductCardComponent } from './product-card/product-card.component';

export function checkoutTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/cart/', '.json');
}

@NgModule({
  declarations: [
    ProductListComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
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
export class ProductModule {
  constructor(private langservice: TranslateService, private customLag: LazyTranslateService) {
    this.customLag.language.subscribe(value => this.langservice.use(value));
  }
}
