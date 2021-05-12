import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-detail-view',
  templateUrl: './product-detail-view.component.html',
  styleUrls: ['./product-detail-view.component.scss']
})
export class ProductDetailViewComponent implements OnInit {

  product:any;
  constructor(private productService:ProductService , private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') as any;
    this.product = this.productService.getProductById(id as number);
    if(!this.product){
      this.router.navigate(['/product/'+id+'/404']);
    }
  }

  addToCart(){

  }
}
