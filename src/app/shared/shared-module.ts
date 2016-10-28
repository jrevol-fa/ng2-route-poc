import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LipsumComponent } from './lipsum.component';

@NgModule({
    imports: [ CommonModule ],
    declarations: [ LipsumComponent ],
    exports: [
        CommonModule,
        LipsumComponent
    ]
})
export class SharedModule {
}