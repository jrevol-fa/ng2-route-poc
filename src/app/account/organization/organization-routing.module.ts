import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrganizationComponent } from './organization.component';
import { ORGANIZATION_ID } from './';
import { LipsumComponent } from '../../shared/lipsum.component';

const routes: Routes = [
  {
    path: `:${ORGANIZATION_ID}`,
    component: OrganizationComponent,
    children: [
      {
        path: 'analysis',
        loadChildren: 'app/account/organization/analysis/analysis.module#AnalysisModule'
      },
      {
        path: 'portfolio',
        loadChildren: 'app/account/organization/portfolio/portfolio.module#PortfolioModule'
      },
      {
        path: '',
        redirectTo: 'portfolio'
      }
    ]
  },
  {
    path: '',
    component: OrganizationComponent,
    children: [
      {
        path: '',
        component: LipsumComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganizationRoutingModule {
}
