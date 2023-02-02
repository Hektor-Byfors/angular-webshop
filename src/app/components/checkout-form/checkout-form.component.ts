import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { product } from 'src/app/models/product';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.scss']
})
export class CheckoutFormComponent implements OnInit {
  @Input() cartProducts!: product[];

  totalPrice: number = 0;

  orderRows: string[] = [];

  checkoutForm = new FormGroup({
    name: new FormControl(""),
    payment: new FormControl("")
  })

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.cartProducts.forEach((p) => {
      this.totalPrice += p.price;
      this.orderRows.push(p.name)
    })
  }

  apiPostUrl: string = "https://medieinstitutet-wie-products.azurewebsites.net/api/orders";

  order = {
    companyId: 990218,
    created: new Date(),
    createdBy: this.checkoutForm.value.name,
    paymentMethod: this.checkoutForm.value.payment,
    totalPrice: this.totalPrice,
    status: 0,
    orderRows: []
  }

  onSubmit(){
    /* console.log(this.order);
    console.log({
      companyId: 990218,
      created: new Date(),
      createdBy: this.checkoutForm.value.name,
      paymentMethod: this.checkoutForm.value.payment,
      totalPrice: this.totalPrice,
      status: 0,
      orderRows: this.orderRows
    });
    
    console.log(this.totalPrice);
    
    
    console.log(this.checkoutForm.value.name);
    console.log(this.cartProducts); */
    
    this.http.post(this.apiPostUrl, 
      {
        companyId: 990218,
        created: new Date(),
        createdBy: this.checkoutForm.value.name,
        paymentMethod: this.checkoutForm.value.payment,
        totalPrice: this.totalPrice,
        status: 0,
        orderRows: [
          {
            productId: 76,
            product: null,
            amount: 2
          }
        ]
      })
      .subscribe((res) => {
      console.log(res);
    })
  }
}
