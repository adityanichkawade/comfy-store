import { Component, OnInit } from '@angular/core';
import { CartService } from '../../cart/cart.service';

@Component({
  selector: 'app-navbar-item-cart',
  templateUrl: './navbar-item-cart.component.html',
  styleUrls: ['./navbar-item-cart.component.css'],
})
export class NavbarItemCartComponent {
  constructor(private cartService: CartService) {}

  onShowCartClick() {
    this.cartService.showCart(true);
  }

  get cartCount(): number {
    return this.cartService.getItems().length;
  }
}
