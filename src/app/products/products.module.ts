import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsFilterComponent } from './products-filter/products-filter.component';
import { ProductsListItemComponent } from './products-list/products-list-item/products-list-item.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsComponent } from './products.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule, ProductsRoutingModule],
  exports: [],
  declarations: [
    ProductsComponent,
    ProductsFilterComponent,
    ProductsListComponent,
    ProductsListItemComponent,
  ],
  providers: [],
})
export class ProductsModule {}
