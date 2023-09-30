import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ProductsFilterService {
  private searchByText: string = '';
  private searchByCompany: string = '';
  private searchByPrice: number = 0;

  constructor() {}

  set byText(value: string) {
    this.searchByText = value;
  }
  get byText(): string {
    return this.searchByText;
  }

  set byCompany(value: string) {
    this.searchByCompany = value;
  }

  get byCompany(): string {
    return this.searchByCompany;
  }

  set byPrice(value: number) {
    this.searchByPrice = value;
  }
  get byPrice(): number {
    return this.searchByPrice;
  }
}
