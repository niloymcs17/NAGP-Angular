import { Component } from '@angular/core';
import {  FormControl, Validators } from '@angular/forms';
import { LazyTranslateService } from './service/lazy-translate.service';
import { ProductService } from './service/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  langChange = new FormControl('en', Validators.required);
  lang = [
    {value: 'en', viewValue: 'English'},
    {value: 'ba', viewValue: 'Bengali'}
  ];
  cartSize = 0;
  
  constructor( private customLang:LazyTranslateService ,private productService : ProductService ){
    this.langChange.valueChanges.subscribe(value => {
      console.log(value);
      this.customLang.changeLang(value);
    });

    this.productService.cartCount.subscribe( value =>
      {
        this.cartSize = value;
      });
  }

  

  
}
