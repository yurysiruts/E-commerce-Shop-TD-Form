import { Component } from '@angular/core';
import { CartService } from '../shared/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  public items = this.cartService.getItems();

  constructor(
    private cartService: CartService,
  ) { }

}
