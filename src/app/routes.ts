import {Routes} from '@angular/router';
import { FoodComponent } from './food/food.component';
import { DetailsComponent } from './details/details.component';


const routeConfig: Routes = [
    {
        path: '',
        component: FoodComponent,
        title: 'HomePage'
    },
    
    {
        path: 'details/:id',
        component: DetailsComponent,
        title: 'Home details'
      }
];

export default routeConfig;