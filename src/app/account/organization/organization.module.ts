import { NgModule } from '@angular/core';
import { OrganizationRoutingModule } from './organization-routing.module';
import { OrganizationComponent } from './organization.component';
import { OrganizationResolve } from './organization-resolve.service';
import { OrganizationRepository } from './organization-repository.service';

@NgModule({
    imports: [
        OrganizationRoutingModule
    ],
    declarations: [
        OrganizationComponent
    ],
    providers: [
        OrganizationRepository,
        OrganizationResolve
    ]
})
export class OrganizationModule {
}