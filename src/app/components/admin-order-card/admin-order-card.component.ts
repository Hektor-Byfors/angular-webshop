import { Component, Input, OnInit } from '@angular/core';
import { order } from 'src/app/models/order';

@Component({
  selector: 'app-admin-order-card',
  templateUrl: './admin-order-card.component.html',
  styleUrls: ['./admin-order-card.component.scss']
})
export class AdminOrderCardComponent implements OnInit {
  @Input() order!: order;

  constructor() { }

  ngOnInit(): void {
  }

}
