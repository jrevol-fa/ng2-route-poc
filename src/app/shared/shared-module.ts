import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LipsumComponent } from './lipsum.component';
import { EmptyComponent } from './empty.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    EmptyComponent,
    LipsumComponent
  ],
  exports: [
    CommonModule,
    EmptyComponent,
    LipsumComponent
  ]
})
export class SharedModule {
}
