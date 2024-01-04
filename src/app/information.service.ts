import { Injectable } from '@angular/core';
import { MenuData } from './menu-card';





@Injectable({
  providedIn: 'root'
})
export class InformationService {
  readonly baseUrl = '/assets';
  menuDataList: MenuData [] = [
    {
    id: 9999,
    name: 'Tacos',
    description: 'Lorem   ',
    image: `${this.baseUrl}/taco.jpeg`,
    availablity: true,
  },
  
  {
    id: 24324,
    name: 'Fries',
    description: 'ads',
    image: `${this.baseUrl}/fries.jpeg`,
    availablity: true,
  },
  {
    id: 9199,
    name: 'Pizza',
    description: 'ads',
    image: `${this.baseUrl}/pizza.jpeg`,
    availablity: true,
  },
  {
    id: 9929,
    name: 'Burger',
    description: 'ads',
    image: `${this.baseUrl}/burger.jpeg`,
    availablity: true,
  },
  {
    id: 4233,
    name: 'Sandwich',
    description: 'ads',
    image: `${this.baseUrl}/sandwich.jpeg`,
    availablity: true,
  }
  ]

  getAllMenuData(): MenuData [] {
    return this.menuDataList;
  }
  
  getMenuItemById(id: number): MenuData | undefined {
    return this.menuDataList.find(menuData => menuData.id === id);
  }

  constructor() { }
}
