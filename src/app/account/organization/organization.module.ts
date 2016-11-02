import { NgModule } from '@angular/core';
import { OrganizationRoutingModule } from './organization-routing.module';
import { OrganizationComponent } from './organization.component';
import { OrganizationResolve } from './organization-resolve.service';
import { OrganizationRepository } from './organization-repository.service';
import { SharedModule } from '../../shared/shared-module';
import { FilterRepository } from './filter-repository.service';
import { FilterResolve } from './filter-resolve.service';
import { OrganizationSelectComponent } from './organization-select.component';

@NgModule({
    imports: [
        OrganizationRoutingModule,
        SharedModule
    ],
    declarations: [
        OrganizationComponent,
        OrganizationSelectComponent
    ],
    providers: [
        FilterRepository,
        FilterResolve,
        OrganizationRepository,
        OrganizationResolve
    ]
})
export class OrganizationModule {
}
