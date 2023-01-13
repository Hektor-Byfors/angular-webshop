import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private orderService: OrdersService) { }

  ngOnInit(): void {
    this.orderService.getOrders().subscribe((res) => {
      console.log(res);
      
    })
  }

}
