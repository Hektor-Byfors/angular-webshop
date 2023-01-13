import { Injectable } from '@angular/core';
import { product } from '../models/product';
import { Observable } from "rxjs"

@Injectable({
  providedIn: 'root'
})
export class CartService {
  currentProductsInCart: product[] = [];

  cartObservable = new Observable<product[]>((observer) => {
    observer.next(this.currentProductsInCart)
  })

  constructor() { }

  pushProductToCart(product: product){
    this.currentProductsInCart.push(product);
  }

  getProductsInCart(): Observable<product[]> {
    return this.cartObservable
  }
}
