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
    this.cartService.productsInCart.subscribe((products) => {
      this.cartProducts = products;
    })
  }

  ngOnInit(): void {
    
  }

}
