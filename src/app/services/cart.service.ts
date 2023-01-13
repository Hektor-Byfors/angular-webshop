import { Injectable } from '@angular/core';
import { product } from '../models/product';
import { Subject, Observable } from "rxjs"

@Injectable({
  providedIn: 'root'
})
export class CartService {
  currentProductsInCart: product[] = [];

  cartObservable = new Observable<product[]>((observer) => {
    observer.next(this.currentProductsInCart)
  })

/*   productEmitter = new Subject<product>();
  productsInCart = new Subject<product[]>(); */

  constructor() { }

  pushProductToCart(product: product){
    this.currentProductsInCart.push(product);
    //this.productEmitter.next(product);
  }

  /* raiseProductsInCartEmitter(products: product[]){
    this.productsInCart.next(products);
  } */

  getProductsInCart(): Observable<product[]> {
    return this.cartObservable
  }
}
