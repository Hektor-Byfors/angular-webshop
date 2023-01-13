import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  cartProducts: product[] = [];

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.cartService.cartObservable.subscribe((cartProducts) => {
      this.cartProducts = cartProducts
    })
  }
}
