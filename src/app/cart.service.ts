import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cart } from './cart';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private url = 'http://localhost:3000/cart';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  addToCart(item: Cart): Observable<any> {

    return this.http.post(this.url, item, this.httpOptions);
  }

  updateCartItem(itemId: number, updatedData: Cart): Observable<any> {
    const url = `${this.url}/${itemId}`;

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.patch<any>(url, updatedData, httpOptions);
  }

  getCartItems(): Observable<Cart[]> {
    return this.http.get<Cart[]>(this.url, this.httpOptions);
  }

  constructor(private http: HttpClient) {}
}
