import { Component, OnInit } from '@angular/core';
import { order } from 'src/app/models/order';
import { product } from 'src/app/models/product';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  orders: order[] = [];

  constructor(private orderService: OrdersService) { }

  ngOnInit(): void {
    this.orderService.getOrders().subscribe((res) => {
      this.orders = res;
    })
  }

}