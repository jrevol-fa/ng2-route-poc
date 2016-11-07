import {NgModule} from "@angular/core";
import {OrganizationRoutingModule} from "./organization-routing.module";
import {OrganizationComponent} from "./organization.component";
import {OrganizationResolve} from "./organization-resolve.service";
import {OrganizationRepository} from "./organization-repository.service";
import {SharedModule} from "../../shared/shared-module";
import {FilterRepository} from "./filter-repository.service";
import {FilterResolve} from "./filter-resolve.service";
import {OrganizationSelectComponent} from "./organization-select.component";
import {FilterSelectComponent} from "./filter-select.component";
import {OrganizationContext} from "./organization-context.service";

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
  providers: [
    FilterRepository,
    FilterResolve,
    OrganizationContext,
    OrganizationRepository,
    OrganizationResolve
  ],
  exports: [
    FilterSelectComponent
  ]
})
export class OrganizationModule {
}
