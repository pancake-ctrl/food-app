import {Routes} from '@angular/router';
import { FoodComponent } from './food/food.component';
import { DetailsComponent } from './details/details.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';


const routeConfig: Routes = [
    {
        path: '',
        component: FoodComponent,
        title: 'HomePage',
        pathMatch:'full'
    },
    
    {
        path: 'details/:id',
        component: DetailsComponent,
        title: 'details'
    },
    
    {
        path: 'cart',
        component: CartComponent,
        title: 'Cart'
    },

    {
        path: 'checkout',
        component: CheckoutComponent,
        title: 'Checkout'
    }
];

export default routeConfig;