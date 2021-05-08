import { Component } from '@angular/core';
import {  FormControl, Validators } from '@angular/forms';
import { LazyTranslateService } from './service/lazy-translate.service';

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

  
  constructor( private customLang:LazyTranslateService ){
    this.langChange.valueChanges.subscribe(value => {
      console.log(value);
      this.customLang.changeLang(value);
    });
  }

  
}
