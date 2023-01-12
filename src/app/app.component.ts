import { Component } from '@angular/core';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [CartService]
})
export class AppComponent {
  title = 'Webshop';

  constructor(private cartService: CartService){

  }
}
