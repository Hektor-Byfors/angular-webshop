import { Injectable } from '@angular/core';
import { product } from '../models/product';
import { Subject } from "rxjs"

@Injectable({
  providedIn: 'root'
})
export class CartService {
  //productEmitter = new EventEmitter<product>();
  productEmitter = new Subject<product>();
  productsInCart = new Subject<product[]>();

  constructor() { }

  raiseProductEmitter(product: product){
    this.productEmitter.next(product);
  }

  raiseProductsInCartEmitter(products: product[]){
    this.productsInCart.next(products);
  }
}
