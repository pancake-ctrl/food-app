import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cart } from './cart';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private url = 'http://localhost:3000/cart';

  private cartItemsSubject: BehaviorSubject<Cart[]> = new BehaviorSubject <Cart[]>([]);
  cartItems$: Observable<Cart[]> = this.cartItemsSubject.asObservable();
  cartSize$: Observable<number>;


  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  setCartItemSubject(): void{
   this.getCartItems().subscribe(res=>{
     const currentItems = this.cartItemsSubject.getValue();
     console.log(currentItems)
     const updatedItems = [...currentItems, ...res, ];
     console.log(updatedItems)
     this.cartItemsSubject.next(updatedItems);
    })
  }

  getCartItemSubject(): Observable<any> {
    return this.cartItems$;
  }

  addToCart(item: Cart): Observable<any> {

    return this.http.post(this.url, item, this.httpOptions);
  }

  removeCartItem(itemId: number):Observable<Cart> {
    const url = `${this.url}/${itemId}`;
    return this.http.delete<Cart>(url, this.httpOptions);
  }

  updateCartItem(itemId: number, updatedData: Cart): Observable<any> {
    const url = `${this.url}/${itemId}`;
    return this.http.patch<any>(url, updatedData, this.httpOptions);
  }

  getCartItems(): Observable<Cart[]> {
    return this.http.get<Cart[]>(this.url, this.httpOptions);
  }

  constructor(private http: HttpClient) {}
}
