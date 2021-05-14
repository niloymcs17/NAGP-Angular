import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-detail-view',
  templateUrl: './product-detail-view.component.html',
  styleUrls: ['./product-detail-view.component.scss']
})
export class ProductDetailViewComponent implements OnInit {

  product: any;
  constructor(private snackBar: MatSnackBar, private translate: TranslateService,
    private productService: ProductService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') as any;
    this.product = this.productService.getProductById(id as number);
    if (!this.product) {
      this.router.navigate(['/product/' + id + '/404']);
    }
  }

  addToCart() {
    this.productService.updateCart(this.product, 1);
    const message = this.translate.instant('product_added');
    this.snackBar.open(message, 'Close', {
      duration: 2000,
      panelClass: ['snackbar'],
    });
  }
}
