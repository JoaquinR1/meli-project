import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// components
import { SearchBoxComponent } from './search-box/search-box.component';
import { ItemComponent } from './item/item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    SearchBoxComponent,
    ItemComponent
  ],
  exports: [
    SearchBoxComponent,
    ItemComponent
  ],
  entryComponents: [
    SearchBoxComponent,
    ItemComponent
  ],
})
export class ComponentsModule { }
