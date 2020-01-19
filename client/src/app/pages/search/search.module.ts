import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchPageRoutingModule } from './search.routing';
import { ComponentsModule } from '../../components/components.module';
import { SearchComponent } from './search.component';

@NgModule({
  imports: [
    CommonModule,
    SearchPageRoutingModule,
    FormsModule,
    ComponentsModule,
  ],
  declarations: [
    SearchComponent,
  ],
})
export class SearchModule { }
