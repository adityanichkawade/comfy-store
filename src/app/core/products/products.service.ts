import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './products.model';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  private readonly productsUrl: string = 'assets/products.json';

  private products: Record<string, Product> = {};
  private allList: number[] = [];
  private featuredList: number[] = [];

  constructor(private httpClient: HttpClient) {}

  fetchProducts() {
    return this.httpClient
      .get<{
        products: Record<string, Product>;
        allList: number[];
        featuredList: number[];
      }>(this.productsUrl)
      .subscribe((res) => {
        this.products = res.products;
        this.allList = res.allList;
        this.featuredList = res.featuredList;
      });
  }

  getAllList(): Product[] {
    return this.allList.map((id) => this.products[id]);
  }

  getFeaturedList(): Product[] {
    return this.featuredList.map((id) => this.products[id]);
  }

  getById(id: number): Product {
    return this.products[id];
  }
}
