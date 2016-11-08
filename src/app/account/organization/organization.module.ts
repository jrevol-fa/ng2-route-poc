import {NgModule} from '@angular/core';
import {OrganizationRoutingModule} from './organization-routing.module';
import {OrganizationComponent} from './organization.component';
import {SharedModule} from '../../shared/shared-module';
import {OrganizationSelectComponent} from './organization-select.component';
import {FilterSelectComponent} from './filter-select.component';

@NgModule({
  imports: [
    OrganizationRoutingModule,
    SharedModule
  ],
  declarations: [
    FilterSelectComponent,
    OrganizationComponent,
    OrganizationSelectComponent
  ],
  providers: [],
  exports: [
    FilterSelectComponent
  ]
})
export class OrganizationModule {
}
