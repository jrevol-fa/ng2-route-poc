import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AccountComponent} from './account.component';
import {ACCOUNT_ID} from './';
import {LipsumComponent} from '../shared/lipsum.component';

const routes: Routes = [
  {
    path: `:${ACCOUNT_ID}`,
    component: AccountComponent,
    children: [
      {
        path: 'organization',
        loadChildren: 'app/account/organization/organization.module#OrganizationModule'
      },
      {
        path: '',
        redirectTo: 'organization'
      }
    ]
  },
  {
    path: '',
    component: AccountComponent,
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
export class AccountRoutingModule {
}
