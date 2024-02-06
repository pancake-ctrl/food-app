import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { InformationService } from '../information.service';
import { CartService } from '../cart.service';

import { Cart } from '../cart';
import { MenuData } from '../menu-card';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  template: `
    <article>
      <img
        class="listing-photo"
        [src]="menuData?.image"
        alt="Exterior photo of {{ menuData?.name }}"
      />
      <section class="listing-description">
        <h2 class="listing-heading">{{ menuData?.name }}</h2>
        <p class="listing-location">{{ menuData?.description }}</p>
        <h2 class="listing-heading">{{ menuData?.availablity }}</h2>
      </section>

      <form class="max-w-xs">
        <label
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Choose quantity:</label
        >
        <div class="relative flex items-center max-w-[11rem]">
          <button
            (click)="decreaseCount()"
            type="button"
            id="decrement-button"
            class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
          >
            <svg
              class="w-3 h-3 text-gray-900 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 2"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h16"
              />
            </svg>
          </button>
          <input
            type="text"
            class="bg-gray-50 border-x-0 border-gray-300 h-11 font-medium text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pb-6 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-0"
            value="{{ count() }}"
            required
          />
          <div
            class="absolute bottom-1 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 flex items-center text-xs text-gray-400 space-x-1 rtl:space-x-reverse"
          ></div>
          <button
            (click)="increaseCount()"
            type="button"
            id="increment-button"
            class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
          >
            <svg
              class="w-3 h-3 text-gray-900 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 1v16M1 9h16"
              />
            </svg>
          </button>
        </div>
        <div class="flex flex-col justify-center">
          <p
            id="helper-text-explanation"
            class="mt-2 mx-auto text-sm text-gray-500 dark:text-gray-400"
          >
            Please select the quantity.
          </p>

          <button
            class="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none"
            type="submit"
            (click)="addCart()"
          >
            Add to cart
          </button>
        </div>
      </form>
    </article>
  `,

  styleUrl: './details.component.scss',
})
export class DetailsComponent implements OnInit {
  route: ActivatedRoute = inject(ActivatedRoute);
  informationService = inject(InformationService);
  cartService = inject(CartService);
  menuData: MenuData | undefined;
  http = inject(HttpClient);
  cartData: Cart;
  menuDataId = parseInt(this.route.snapshot.params['id'], 10);

  count = signal(0);

  increaseCount() {
    this.count.update((value) => value + 1);
  }

  decreaseCount() {
    this.count.update((value) => {
      if (value == 0) {
        return (value = 0);
      }
      return value - 1;
    });
  }

  addCart() {
    this.cartData = this.menuData as Cart;
    this.cartData['quantity'] = this.count();

    this.cartService.getCartItems().subscribe((res) => {
    const exists = res.find((obj) => {
      return obj.id==this.menuDataId
      }); 

      console.log(exists)
      if (exists) {
        this.cartService
          .updateCartItem(this.menuDataId, this.cartData)
          .subscribe((res) => {
            console.log('addToCart', res);
          });
      } else {
        this.cartService.addToCart(this.cartData).subscribe((res) => {
          console.log('addToCart', res);
        });
      }
    });
  }

  constructor() {}

  ngOnInit(): void {
    this.informationService
      .getMenuItemById(this.menuDataId)
      .then((menuData) => {
        this.menuData = menuData[0];
      });
  }
}
function hasKeyValuePair(
  dataArray: any,
  keyToCheck: any,
  valueToCheck: any
): void {
  return dataArray.some(
    (obj: { [x: string]: any }) => obj[keyToCheck] === valueToCheck
  );
}
