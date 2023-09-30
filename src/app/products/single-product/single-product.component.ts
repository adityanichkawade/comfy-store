import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductsService } from 'src/app/core/products/products.service';
import { Product } from '../../core/products/products.model';
import { CartService } from 'src/app/core/cart/cart.service';
import { Cart } from 'src/app/core/cart/cart.model';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
})
export class SingleProductComponent implements OnInit {
  product!: Product;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productsService: ProductsService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    const routeId: number = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.productsService.getById(routeId);
    if (!this.product) {
      this.router.navigate(['/', 'products']);
    }
  }

  addToCart(product: Product) {
    this.cartService.addToCart(new Cart(product));
  }
}
