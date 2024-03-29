import { Component, Input } from '@angular/core';
import { MenuData } from '../menu-card';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-menu-card',
  standalone: true,
  imports: [RouterModule, RouterOutlet],
  template: `
    

<section class="max-w-[24rem] m-2  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
          <img [src] = "menuData.image" class="h-64 mx-auto">
        </a>
        <p class="mb-3  nt-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a [routerLink]="['/details', menuData.id]" href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</section>

  `,
  styleUrl: './menu-card.component.scss',
})
export class MenuCardComponent {
  @Input() menuData!: MenuData;
}
