import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrganizationComponent } from './organization.component';
import { OrganizationResolve } from './organization-resolve.service';
import { ORGANIZATION_ID } from './';

const routes: Routes = [
    {
        path: `:${ORGANIZATION_ID}`,
        component: OrganizationComponent,
        resolve: {
            account: OrganizationResolve
        },
        children: [
            {
                path: 'portfolio',
                loadChildren: 'app/account/organization/portfolio/portfolio.module#PortfolioModule'
            }
        ]
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class OrganizationRoutingModule {
}