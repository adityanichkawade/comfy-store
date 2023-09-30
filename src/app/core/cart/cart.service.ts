import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Cart } from './cart.model';

@Injectable({ providedIn: 'root' })
export class CartService {
  private show: boolean = false;
  private cartItems: Cart[] = [];
  constructor() {}

  showCart(show: boolean) {
    this.show = show;
  }

  getShowCart(): boolean {
    return this.show;
  }

  addToCart(cart: Cart): void {
    let foundCart = this.cartItems.find(
      (cartItem: Cart) => cartItem.product.id === cart.product.id
    );
    if (!foundCart) {
      cart.quantity += 1;
      this.cartItems.push(cart);
    } else {
      foundCart.quantity += 1;
    }
  }

  removeFromCart(cart: Cart): void {
    this.cartItems = this.cartItems.filter(
      (cartItem: Cart) => cartItem.product.id !== cart.product.id
    );
  }

  getItems(): Cart[] {
    return this.cartItems;
  }

  getTotalPrice(): number {
    return this.cartItems.reduce(
      (accumulator: number, currentValue: Cart) =>
        accumulator + currentValue.quantity * currentValue.product.price,
      0
    );
  }
}
