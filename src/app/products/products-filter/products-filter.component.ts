import { Component, OnInit } from '@angular/core';
import { ProductsFilterService } from 'src/app/core/products/products-filter.service';

@Component({
  selector: 'app-products-filter',
  templateUrl: 'products-filter.component.html',
})
export class ProductsFilterComponent implements OnInit {
  constructor(private productsFilterService: ProductsFilterService) {}

  ngOnInit() {}

  set byText(value: string) {
    this.productsFilterService.byText = value;
  }

  get byText(): string {
    return this.productsFilterService.byText;
  }

  set byCompany(value: string) {
    this.productsFilterService.byCompany = value;
  }

  get byCompany(): string {
    return this.productsFilterService.byCompany;
  }

  set byPrice(value: number) {
    this.productsFilterService.byPrice = value;
  }

  get byPrice(): number {
    return this.productsFilterService.byPrice;
  }
}
