import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LipsumComponent } from './lipsum.component';
import { EmptyComponent } from './empty.component';
import { CurrencySelectComponent } from './currency-select.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CurrencySelectComponent,
    EmptyComponent,
    LipsumComponent
  ],
  exports: [
    CommonModule,
    CurrencySelectComponent,
    EmptyComponent,
    LipsumComponent
  ]
})
export class SharedModule {
}
