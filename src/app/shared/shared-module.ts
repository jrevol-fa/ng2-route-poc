import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LipsumComponent } from './lipsum.component';
import { EmptyComponent } from './empty.component';
import { CurrencySelectComponent } from './currency-select.component';
import { SafePipe } from './safe';
import { AutoHeightDirective } from './autoheight.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CurrencySelectComponent,
    EmptyComponent,
    LipsumComponent,
    SafePipe,
    AutoHeightDirective
  ],
  exports: [
    CommonModule,
    CurrencySelectComponent,
    EmptyComponent,
    LipsumComponent,
    SafePipe,
    AutoHeightDirective
  ]
})
export class SharedModule {
}
