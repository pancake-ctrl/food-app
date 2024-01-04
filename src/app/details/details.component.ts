import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import {  InformationService } from '../information.service';
import { MenuData } from '../menu-card';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  template: `
  <article>
    <img class="listing-photo" [src]="menuData?.image"
      alt="Exterior photo of {{menuData?.name}}"/>
    <section class="listing-description">
      <h2 class="listing-heading">{{menuData?.name}}</h2>
      <p class="listing-location">{{menuData?.description}}</p>
      <h2 class="listing-heading">{{menuData?.availablity}}</h2>
    </section>
    <section class="listing-apply">
      <h2 class="section-heading">Apply now to live here</h2>
      <form [formGroup]="applyForm" (submit)="submitApplication()">
        <label for="first-name">First Name</label>
        <input id="first-name" type="text" formControlName="firstName">

        <label for="last-name">Last Name</label>
        <input id="last-name" type="text" formControlName="lastName">

        <label for="email">Email</label>
        <input id="email" type="email" formControlName="email">
        <button type="submit" class="primary">Apply now</button>
      </form>
    </section>
  </article>
`,  




styleUrl: './details.component.scss'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  informationService = inject(InformationService);
  menuData: MenuData | undefined;
  
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });

  constructor() {
     const menuDataId = Number(this.route.snapshot.params['id']);

      this.menuData = this.informationService.getMenuItemById(menuDataId);
  }
  submitApplication() {
    this.informationService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );
  }

}
