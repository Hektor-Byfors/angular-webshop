import { Component, OnInit, Input } from '@angular/core';
import { product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product!: product;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  addToCart(product: product) {
    this.cartService.pushProductToCart(this.product);
  }
}
