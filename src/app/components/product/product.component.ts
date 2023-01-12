import { Component, OnInit, Input } from '@angular/core';
import { product } from 'src/app/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product!: product;

  constructor() { }

  ngOnInit(): void {
  }

  addToCart(product: product) {
    console.log(product.id);
  }
}
