import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  apiOrders: string = "https://medieinstitutet-wie-products.azurewebsites.net/api/orders?companyId=990218"

  constructor(private http: HttpClient) { }

  getOrders(){
    return this.http.get<[]>(this.apiOrders);
  }
}
