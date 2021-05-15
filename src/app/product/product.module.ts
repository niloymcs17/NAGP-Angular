import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LazyTranslateService } from '../service/lazy-translate.service';
import { ProductCardComponent } from './product-card/product-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ProductDetailViewComponent } from './product-detail-view/product-detail-view.component';
import { ProductNotFoundComponent } from './product-not-found/product-not-found.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

export function productTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/product/', '.json');
}

@NgModule({
  declarations: [
    ProductListComponent,
    ProductCardComponent,
    ProductDetailViewComponent,
    ProductNotFoundComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    HttpClientModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: productTranslateLoader,
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
