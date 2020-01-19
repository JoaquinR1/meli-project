import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductDetailsPageRoutingModule } from './product-details.routing';
import { ComponentsModule } from '../../components/components.module';
import { ProductDetailsComponent } from './product-details.component';

@NgModule({
  imports: [
    CommonModule,
    ProductDetailsPageRoutingModule,
    FormsModule,
    ComponentsModule,
  ],
  declarations: [
    ProductDetailsComponent,
  ],
})
export class ProductDetailsModule { }
