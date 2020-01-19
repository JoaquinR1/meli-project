import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ItemsPageRoutingModule } from './items.routing';
import { ComponentsModule } from '../../components/components.module';
import { ItemsComponent } from './items.component';

@NgModule({
  imports: [
    CommonModule,
    ItemsPageRoutingModule,
    FormsModule,
    ComponentsModule,
  ],
  declarations: [
    ItemsComponent,
  ],
})
export class ItemsModule { }
