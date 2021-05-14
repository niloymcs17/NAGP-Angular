import { Component, OnInit } from '@angular/core';
import { Products, ProductService } from 'src/app/service/product.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  displayedColumns: string[] = ['title', 'quantity', 'price', 'total' , 'delete'];
  dataSource = new MatTableDataSource<any>();

  totalCartprice = 0;

  constructor(private router: Router , private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.cartMap.forEach((value: number, key: Products) => {
      const item = {
        id: key.Id,
        title: key.Title,
        quantity: value,
        price: key.price,
        total: key.price * value
      }
      this.totalCartprice += item.total;
      this.dataSource.data.push(item);
    });
  }

  remove(item : any){
    this.dataSource.data = this.dataSource.data.filter( v => v != item);
    this.productService.removeItem(item.id);
  }

  payment(){
    this.router.navigate(['/cart/payment' , {  data: {  total: this.totalCartprice , orderID:'ODR2326934' } }])
  }

}
