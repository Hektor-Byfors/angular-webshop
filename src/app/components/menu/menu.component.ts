import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  products: product[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.cartObservable.subscribe((cartProducts) => {
      this.products = cartProducts
    })
  }
}
