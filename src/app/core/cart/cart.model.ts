import { Product } from '../products/products.model';

export class Cart {
  constructor(public product: Product, public quantity: number = 0) {}
}
