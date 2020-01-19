import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// components
import { SearchBoxComponent } from './search-box/search-box.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    SearchBoxComponent,
  ],
  exports: [
    SearchBoxComponent,
  ],
  entryComponents: [
    SearchBoxComponent,
  ],
})
export class ComponentsModule { }
