import { Component } from '@angular/core';
import { MenuCardComponent } from './menu-card/menu-card.component';
import { FoodComponent } from './food/food.component';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FoodComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  
  
})
export class AppComponent {
  title = 'homes';
  header= `Hello World`;
}
