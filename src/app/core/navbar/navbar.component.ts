import { Component } from '@angular/core';
import { NavbarItem } from './navbar-item.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  navbarItems: NavbarItem[] = [
    {
      title: 'Home',
      path: '/',
    },
    {
      title: 'Products',
      path: '/products',
    },
    {
      title: 'About',
      path: '/about',
    },
  ];
}
