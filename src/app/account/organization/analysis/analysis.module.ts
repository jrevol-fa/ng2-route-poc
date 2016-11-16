import { NgModule } from '@angular/core';
import { AnalysisRoutingModule } from './analysis-routing.module';
import { SharedModule } from '../../../shared/shared-module';
import { AnalysisComponent } from './analysis.component';

@NgModule({
  imports: [
    AnalysisRoutingModule,
    SharedModule
  ],
  declarations: [
    AnalysisComponent
  ],
  providers: []
})
export class AnalysisModule {
}
