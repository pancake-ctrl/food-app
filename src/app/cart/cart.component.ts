import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  template: `
    
    <div class="flex items-center justify-center py-8">
            <button onclick="checkoutHandler(false)" class="py-2 px-10 rounded bg-indigo-600 hover:bg-indigo-700 text-white">Open Modal</button>
        </div>
        <div class="w-full  bg-white dark:bg-gray-900 bg-opacity-90 top-0 overflow-y-auto overflow-x-hidden fixed sticky-0" id="chec-div">
            <div class="w-full absolute z-10 right-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700" id="checkout">
                <div class="flex lg:flex-row flex-col justify-start" id="cart">
                    <div class="lg:w-1/2 md:w-8/12 w-full lg:px-8 lg:py-14 md:px-6 px-4 md:py-8 py-4 bg-white dark:bg-gray-800 overflow-y-hidden overflow-x-hidden lg:h-screen h-auto" id="scroll">
                        <div class="flex items-center text-gray-500 hover:text-gray-600 dark:text-white cursor-pointer" onclick="checkoutHandler(false)">
                            <img class="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/shopping-cart-1-svg1.svg" alt="previous"/>
                             <img class="dark:block hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/shopping-cart-1-svg1dark.svg" alt="previous"/>
                            <p class="text-sm pl-2 leading-none dark:hover:text-gray-200">Back</p>
                        </div>
                        <p class="lg:text-4xl text-3xl font-black leading-10 text-gray-800 dark:text-white pt-3">Bag</p>
                        <div class="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50">
                            <div class="md:w-4/12 2xl:w-1/4 w-full">
                                <img src="https://i.ibb.co/SX762kX/Rectangle-36-1.png" alt="Black Leather Bag" class="h-full object-center object-cover md:block hidden" />
                                <img src="https://i.ibb.co/g9xsdCM/Rectangle-37.pngg" alt="Black Leather Bag" class="md:hidden w-full h-full object-center object-cover" />
                            </div>
                            <div class="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
                                <p class="text-xs leading-3 text-gray-800 dark:text-white md:pt-0 pt-4">RF293</p>
                                <div class="flex items-center justify-between w-full pt-1">
                                    <p class="text-base font-black leading-none text-gray-800 dark:text-white">North wolf bag</p>
                                    <select aria-label="Select quantity" class="py-2 px-1 border border-gray-200 mr-6 focus:outline-none dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white">
                                        <option>01</option>
                                        <option>02</option>
                                        <option>03</option>
                                    </select>
                                </div>
                                <p class="text-xs leading-3 text-gray-600 dark:text-white pt-2">Height: 10 inches</p>
                                <p class="text-xs leading-3 text-gray-600 dark:text-white py-4">Color: Black</p>
                                <p class="w-96 text-xs leading-3 text-gray-600 dark:text-white">Composition: 100% calf leather</p>
                                <div class="flex items-center justify-between pt-5">
                                    <div class="flex itemms-center">
                                        <p class="text-xs leading-3 underline text-gray-800 dark:text-white cursor-pointer">Add to favorites</p>
                                        <p class="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">Remove</p>
                                    </div>
                                    <p class="text-base font-black leading-none text-gray-800 dark:text-white">$9,000</p>
                                </div>
                            </div>
                        </div>
                        <div class="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50">
                            <div class="md:w-4/12 2xl:w-1/4 w-full">
                                <img src="https://i.ibb.co/c6KyDXN/Rectangle-5-1.png" alt="Gray Sneakers" class="h-full object-center object-cover md:block hidden" />
                                <img src="https://i.ibb.co/yVSpYqx/Rectangle-6.png" alt="Gray Sneakers" class="md:hidden w-full h-full object-center object-cover" />
                            </div>
                            <div class="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
                                <p class="text-xs leading-3 text-gray-800 dark:text-white md:pt-0 pt-4">RF293</p>
                                <div class="flex items-center justify-between w-full pt-1">
                                    <p class="text-base font-black leading-none text-gray-800 dark:text-white">LW sneakers</p>
                                    <select aria-label="Select quantity" class="py-2 px-1 border border-gray-200 mr-6 focus:outline-none dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white">
                                        <option>01</option>
                                        <option>02</option>
                                        <option>03</option>
                                    </select>
                                </div>
                                <p class="text-xs leading-3 text-gray-600 dark:text-white pt-2">Height: 10 inches</p>
                                <p class="text-xs leading-3 text-gray-600 dark:text-white py-4">Color: Black</p>
                                <p class="w-96 text-xs leading-3 text-gray-600 dark:text-white">Composition: 100% calf leather</p>
                                <div class="flex items-center justify-between pt-5">
                                    <div class="flex itemms-center">
                                        <p class="text-xs leading-3 underline text-gray-800 dark:text-white cursor-pointer">Add to favorites</p>
                                        <p class="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">Remove</p>
                                    </div>
                                    <p class="text-base font-black leading-none text-gray-800 dark:text-white">$9,000</p>
                                </div>
                            </div>
                        </div>
                        <div class="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50">
                            <div class="md:w-4/12 2xl:w-1/4 w-full">
                                <img src="https://i.ibb.co/6gzWwSq/Rectangle-20-1.png" alt="Black Leather Purse" class="h-full object-center object-cover md:block hidden" />
                                <img src="https://i.ibb.co/TTnzMTf/Rectangle-21.png" alt="Black Leather Purse" class="md:hidden w-full h-full object-center object-cover" />
                            </div>
                            <div class="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
                                <p class="text-xs leading-3 text-gray-800 dark:text-white md:pt-0 pt-4">RF293</p>
                                <div class="flex items-center justify-between w-full">
                                    <p class="text-base font-black leading-none text-gray-800 dark:text-white">Luxe card holder</p>
                                    <select aria-label="Select quantity" class="py-2 px-1 border border-gray-200 mr-6 focus:outline-none dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white">
                                        <option>01</option>
                                        <option>02</option>
                                        <option>03</option>
                                    </select>
                                </div>
                                <p class="text-xs leading-3 text-gray-600 dark:text-white pt-2">Height: 10 inches</p>
                                <p class="text-xs leading-3 text-gray-600 dark:text-white py-4">Color: Black</p>
                                <p class="w-96 text-xs leading-3 text-gray-600 dark:text-white">Composition: 100% calf leather</p>
                                <div class="flex items-center justify-between pt-5">
                                    <div class="flex itemms-center">
                                        <p class="text-xs leading-3 underline text-gray-800 dark:text-white cursor-pointer">Add to favorites</p>
                                        <p class="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">Remove</p>
                                    </div>
                                    <p class="text-base font-black leading-none text-gray-800 dark:text-white">$9,000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="lg:w-96 md:w-8/12 w-full bg-gray-100 dark:bg-gray-900 h-full">
                        <div class="flex flex-col lg:h-screen h-auto lg:px-8 md:px-7 px-4 lg:py-20 md:py-10 py-6 justify-between overflow-y-auto">
                            <div>
                                <p class="lg:text-4xl text-3xl font-black leading-9 text-gray-800 dark:text-white">Summary</p>
                                <div class="flex items-center justify-between pt-16">
                                    <p class="text-base leading-none text-gray-800 dark:text-white">Subtotal</p>
                                    <p class="text-base leading-none text-gray-800 dark:text-white">$9,000</p>
                                </div>
                                <div class="flex items-center justify-between pt-5">
                                    <p class="text-base leading-none text-gray-800 dark:text-white">Shipping</p>
                                    <p class="text-base leading-none text-gray-800 dark:text-white">$30</p>
                                </div>
                                <div class="flex items-center justify-between pt-5">
                                    <p class="text-base leading-none text-gray-800 dark:text-white">Tax</p>
                                    <p class="text-base leading-none text-gray-800 dark:text-white">$35</p>
                                </div>
                            </div>
                            <div>
                                <div class="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                                    <p class="text-2xl leading-normal text-gray-800 dark:text-white">Total</p>
                                    <p class="text-2xl font-bold leading-normal text-right text-gray-800 dark:text-white">$10,240</p>
                                </div>
                                <button onclick="checkoutHandler1(true)" class="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white dark:hover:bg-gray-700">Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style>
                /* width */
                #scroll::-webkit-scrollbar {
                    width: 1px;
                }
      
                /* Track */
                #scroll::-webkit-scrollbar-track {
                    background: #f1f1f1;
                }
      
                /* Handle */
                #scroll::-webkit-scrollbar-thumb {
                    background: rgb(133, 132, 132);
                }
            </style>
        </div>
        
        
    

  `,
  styleUrl: './cart.component.scss'
})
export class CartComponent {

}
