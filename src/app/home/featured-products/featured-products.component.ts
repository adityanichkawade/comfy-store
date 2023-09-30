import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../core/products/products.model';

@Component({
  selector: 'app-featured-products',
  templateUrl: 'featured-products.component.html',
})
export class FeaturedProductsComponent implements OnInit {
  @Input() products: Product[] = [];
  constructor() {}

  ngOnInit() {}
}
