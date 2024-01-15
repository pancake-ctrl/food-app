import { Component, inject } from '@angular/core';
import {  InformationService } from '../information.service';
import { CommonModule } from '@angular/common';
import { MenuData } from '../menu-card';
import { MenuCardComponent } from '../menu-card/menu-card.component';

@Component({
  selector: 'app-food',
  standalone: true,
  imports: [CommonModule, MenuCardComponent],
  template: ` 
  <section class="mb-12">
      <form class="flex justify-center sm:justify-start">
        <input class="border-2 border-black-400 h-[40px] " type="text" placeholder="Filter by city" #filter/>
        <button type="button" (click)="filterResults(filter.value)" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Search</button>
      </form>
    </section>
    <section class="results h-screen flex flex-row flex-wrap sm:justify-start justify-center">
      <app-menu-card class="h-fit block" 
      *ngFor="let food of filteredFoodList"
        [menuData]="food">
    </app-menu-card>
  </section>
    `,
  styleUrl: './food.component.scss',
})

export class FoodComponent {

  menuDataList: MenuData [] = [];
  filteredFoodList: MenuData [] =[];
  informationService: InformationService = inject(InformationService)

  constructor() {
    this.informationService.getAllMenuData().then((menuDataList: MenuData[])=>{
      this.menuDataList = menuDataList;
      this.filteredFoodList = menuDataList;
    });
  }
  
  filterResults(text:String){
    if(!text){
      this.filteredFoodList = this.menuDataList;
      return;
    }

    this.filteredFoodList = this.menuDataList.filter(food => food?.name.toLowerCase().includes(text.toLowerCase()))
  }

  
}
