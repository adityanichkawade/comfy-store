import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../core/products/products.service';
import { Product } from '../core/products/products.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  constructor(private productsService: ProductsService) {}

  ngOnInit() {}

  get featuredProducts(): Product[] {
    return this.productsService.getFeaturedList();
  }
}
