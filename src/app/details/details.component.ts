import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import {  InformationService } from '../information.service';
import { MenuData } from '../menu-card';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  template: `
  <article>
    <img class="listing-photo" [src]="menuData?.image"
      alt="Exterior photo of {{menuData?.name}}"/>
    <section class="listing-description">
      <h2 class="listing-heading">{{menuData?.name}}</h2>
      <p class="listing-location">{{menuData?.description}}</p>
      <h2 class="listing-heading">{{menuData?.availablity}}</h2>
    </section>
  </article>
`,  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  informationService = inject(InformationService);
  menuData: MenuData | undefined;
  


  constructor() {
     const menuDataId = Number(this.route.snapshot.params['id']);

      this.menuData = this.informationService.getMenuItemById(menuDataId);
  }
}
