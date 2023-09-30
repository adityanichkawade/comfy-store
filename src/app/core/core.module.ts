import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { NavbarItemComponent } from './navbar/navbar-item/navbar-item.component';
import { NavbarItemCartComponent } from './navbar/navbar-item-cart/navbar-item-cart.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  exports: [NavbarComponent, SidebarComponent, CartComponent],
  declarations: [
    NavbarComponent,
    NavbarItemComponent,
    NavbarItemCartComponent,
    SidebarComponent,
    CartComponent,
  ],
  providers: [],
})
export class CoreModule {}
