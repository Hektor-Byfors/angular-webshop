import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.scss']
})
export class CheckoutFormComponent implements OnInit {
  checkoutForm = new FormGroup({
    name: new FormControl(""),
    payment: new FormControl("")
  })

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  apiPostUrl: string = "https://medieinstitutet-wie-products.azurewebsites.net/api/orders";

  order = {
    companyId: 990218,
    created: "",
    createdBy: "test subject",
    paymentMethod: "Swish",
    totalPrice: 100,
    status: 0,
    orderRows: []
  }

  onSubmit(){
    console.log(this.checkoutForm.value);
    this.http.post(this.apiPostUrl, this.order).subscribe((res) => {
      console.log(res);
    })
  }
}
