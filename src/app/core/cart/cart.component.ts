import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { Subscription } from 'rxjs';
import { Cart } from './cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: 'cart.component.html',
})
export class CartComponent implements OnInit, OnDestroy {
  constructor(private cartService: CartService) {}

  ngOnInit() {}

  ngOnDestroy(): void {}

  onCloseCart() {
    this.cartService.showCart(false);
  }

  get show(): boolean {
    return this.cartService.getShowCart();
  }

  get items(): Cart[] {
    return this.cartService.getItems();
  }

  get totalPrice(): number {
    return this.cartService.getTotalPrice();
  }

  removeFromCart(cartItem: Cart) {
    this.cartService.removeFromCart(cartItem);
  }

  increaseQuantity(item: Cart): void {
    this.cartService.increaseQuantity(item);
  }

  decreaseQuantity(item: Cart): void {
    this.cartService.decreaseQuantity(item);
  }
}
