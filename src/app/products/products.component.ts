import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../core/products/products.service';
import { Product } from '../core/products/products.model';
import { ProductsFilterService } from '../core/products/products-filter.service';

@Component({
  selector: 'app-products',
  templateUrl: 'products.component.html',
})
export class ProductsComponent implements OnInit {
  constructor(
    private productsService: ProductsService,
    private productsFilterService: ProductsFilterService
  ) {}

  ngOnInit() {}

  get products(): Product[] {
    let products: Product[] = this.productsService.getAllList();
    const byText = this.productsFilterService.byText;
    const byCompany = this.productsFilterService.byCompany;
    const byPrice = this.productsFilterService.byPrice;

    if (byText) {
      products = products.filter((product: Product) =>
        product.name.startsWith(byText)
      );
    }

    if (byCompany) {
      products = products.filter(
        (product: Product) => product.company === byCompany
      );
    }

    if (byPrice) {
      products = products.filter(
        (product: Product) => product.price >= byPrice
      );
    }

    return products;
  }
}
