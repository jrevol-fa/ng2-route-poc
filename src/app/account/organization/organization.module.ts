import { NgModule } from '@angular/core';
import { OrganizationRoutingModule } from './organization-routing.module';
import { OrganizationComponent } from './organization.component';
import { OrganizationResolve } from './organization-resolve.service';

@NgModule({
    imports: [
        OrganizationRoutingModule
    ],
    declarations: [
        OrganizationComponent
    ],
    providers: [
        OrganizationResolve
    ]
})
export class OrganizationModule {
}