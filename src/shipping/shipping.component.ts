import { Component } from '@angular/core';
import { OnStart } from '../app/shared/on-start';

import { CartService } from '../app/shared/cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent {

  public shippingCosts = this.cartService.getShippingPrices();

  constructor(
    private cartService: CartService,
    private startPage: OnStart
  ) { }

  onStart() {
    this.startPage.onStart();
  }

}
