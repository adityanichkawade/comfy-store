import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from '../../core/products/products.service';
import { Product } from '../../core/products/products.model';

@Component({
  selector: 'app-products-list',
  templateUrl: 'products-list.component.html',
})
export class ProductsListComponent implements OnInit {
  @Input() products: Product[] = [];
  constructor() {}

  trackById(index: number, product: Product): number {
    return product.id;
  }

  ngOnInit() {}
}
