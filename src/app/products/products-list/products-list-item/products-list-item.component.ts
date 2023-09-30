import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../core/products/products.model';

@Component({
  selector: 'app-products-list-item',
  templateUrl: 'products-list-item.component.html',
})
export class ProductsListItemComponent implements OnInit {
  @Input() product!: Product;

  constructor() {}

  ngOnInit() {}

  productUrl(id: number): string {
    return `${id}`;
  }
}
