import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  list :any;
  constructor(private productSerice: ProductService) { }

  ngOnInit(): void {
    this.list = this.productSerice.productList;
  }

}
