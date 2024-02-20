import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { MenuCardComponent } from './menu-card/menu-card.component';
import { FoodComponent } from './food/food.component';
import { RouterModule } from '@angular/router';
import { CartService } from './cart.service';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FoodComponent, RouterModule, MenuCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  
  
})
export class AppComponent implements OnInit, OnDestroy{
  cartService = inject(CartService)
  cartSize: number;
  cartSizeSubscription: Subscription;
  

ngOnInit(): void{
  this.cartSizeSubscription = this.cartService.getCartItemSubject().subscribe(res=>{
    this.cartSize = res.length
  });

  this.cartService.setCartItemSubject()
}
  constructor( ){}
  ngOnDestroy(): void {
    this.cartSizeSubscription.unsubscribe();
  }


}
