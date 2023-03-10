import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = "https://medieinstitutet-wie-products.azurewebsites.net/api/products";

  constructor(private http: HttpClient) {}

  getProducts(): Observable<product[]> {
    return this.http.get<product[]>(this.apiUrl);
  }
}
