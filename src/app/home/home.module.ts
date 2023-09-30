import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { FeaturedProductsComponent } from './featured-products/featured-products.component';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [CommonModule, HomeRoutingModule],
  exports: [],
  declarations: [HomeComponent, FeaturedProductsComponent],
  providers: [],
})
export class HomeModule {}
