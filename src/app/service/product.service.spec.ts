import { TestBed } from '@angular/core/testing';

import { ProductService } from './product.service';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get product "getProductById"', () => {
    const product = service.getProductById(1);
    expect(product?.Id).toBe(1);
  });

  it('should not get product "getProductById"', () => {
    const product = service.getProductById(111);
    expect(product).toBeUndefined;
  });

  it('should get product"getProductByName"', () => {
    const product = service.getProductByName("the");
    expect(product?.length).toBeGreaterThanOrEqual(1);
  });

  it('should not get product"getProductByName"', () => {
    const product = service.getProductByName("tttt");
    expect(product).toBeUndefined;
  });

  it('should add product to cart "updateCart"', () => {
    const product =  {
      "Id": 15,
      "Maker": "selinazawacki",
      "Title": "Floppy Crop",
      "Description": "Used up the Diskette fabric today to make 2 of these crops.",
      "price": 2131

    };
    service.updateCart(product, 2);
    expect(service.cartMap.get(product)).toBe(2);
  });
  it('should remove product from cart "removeItem"', () => {
    const product =  {
      "Id": 15,
      "Maker": "selinazawacki",
      "Title": "Floppy Crop",
      "Description": "Used up the Diskette fabric today to make 2 of these crops.",
      "price": 2131

    };
    service.updateCart(product, 2);
    service.removeItem(15);
    expect(service.cartMap.get(product)).toBeUndefined;
  });

  it('should not remove product from cart "removeItem"', () => {
    const product =  {
      "Id": 15,
      "Maker": "selinazawacki",
      "Title": "Floppy Crop",
      "Description": "Used up the Diskette fabric today to make 2 of these crops.",
      "price": 2131

    };
    service.updateCart(product, 2);
    service.removeItem(1);
    expect(service.cartMap.get(product)).toBe(2);
  });

  it('cart should be empty "emptyCart"', () => {
    service.emptyCart();
    expect(service.cartMap.size).toBe(0);
  });

});
