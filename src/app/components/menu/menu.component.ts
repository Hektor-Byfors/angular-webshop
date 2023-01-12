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
  showCartNumber: boolean = false;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.productEmitter.subscribe((product) => {
      this.products.push(product);
      this.showCartNumber = true;
    })
  }

  currentProductsInCart(){
    this.cartService.raiseProductsInCartEmitter(this.products);
  }
}
