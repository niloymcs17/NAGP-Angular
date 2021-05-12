import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() product:any;
  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  loadProduct(){
    console.log('product id ',this.product.Id)
    this.route.navigate([ '/product/' ,this.product.Id]);
  }
}
