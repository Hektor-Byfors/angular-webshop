import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { orderRows } from 'src/app/models/orderRows';
import { product } from 'src/app/models/product';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.scss']
})
export class CheckoutFormComponent implements OnInit {
  @Input() cartProducts!: product[];

  totalPrice: number = 0;

  orderRows: orderRows[] = [];

  checkoutForm = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(4)]),
    payment: new FormControl("", [Validators.required, Validators.minLength(1)])
  })

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.cartProducts.forEach((p) => {
      this.totalPrice += p.price;

      if(this.orderRows.length === 0){
        this.orderRows.push({
          productId: p.id,
          product: null,
          amount: 1
          });
      } else {
        let i: number = 0;
        this.orderRows.forEach((oD) => {
          if(oD.productId === p.id) {
            oD.amount++
          } else if(i + 1 === this.orderRows.length) {
            this.orderRows.push({
              productId: p.id,
              product: null,
              amount: 1
            })
          } else {
            i++
          }
        })
      }
    })
  }

  apiPostUrl: string = "https://medieinstitutet-wie-products.azurewebsites.net/api/orders";
  onSubmit(){
    this.http.post(this.apiPostUrl, 
      {
        companyId: 990218,
        created: new Date(),
        createdBy: this.checkoutForm.value.name,
        paymentMethod: this.checkoutForm.value.payment,
        totalPrice: this.totalPrice,
        status: 0,
        orderRows: this.orderRows
      })
      .subscribe((res) => {
      console.log(res);
      alert("Order sent")
    })
  }
}
