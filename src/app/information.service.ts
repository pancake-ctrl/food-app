import { Injectable } from '@angular/core';
import { MenuData } from './menu-card';





@Injectable({
  providedIn: 'root'
})
export class InformationService {
  url = 'http://localhost:3000/menuDataList';
  readonly baseUrl = '/assets';

  async getAllMenuData(): Promise<MenuData[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }
  
   async getMenuItemById(id: number): Promise<MenuData | any>  {
    return await this.getAllMenuData().then(array=>{
      const a = array.filter(data =>data.id == id)
      return a;
      
    })
      
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(firstName, lastName, email);
  }

  constructor() { }
}
