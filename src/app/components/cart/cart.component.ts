import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartProducts: product[] = [];

  constructor(private cartService: CartService) {
    this.cartService.cartObservable.subscribe((cartProducts) => {
      this.cartProducts = cartProducts
    })
  }

  ngOnInit(): void {
    
  }

  remove(i: number){
    this.cartProducts.splice(i, 1);
  }
}
