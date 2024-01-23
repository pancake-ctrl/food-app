import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Cart} from './cart';

@Injectable({
  providedIn: 'root',
})
export class CartService {

  private url = "http://localhost:3000/cart";

  addToCart(item: Cart): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        
      })
    };
    console.log(item);
    return this.http.put(this.url, item, httpOptions);
  }

  constructor(private http: HttpClient) { }
}
