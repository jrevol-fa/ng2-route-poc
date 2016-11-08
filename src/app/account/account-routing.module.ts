import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AccountComponent} from './account.component';
import {AccountResolve} from './account-resolve.service';
import {ACCOUNT_ID} from './';

const routes: Routes = [
  {
    path: `:${ACCOUNT_ID}`,
    component: AccountComponent,
    resolve: {
      account: AccountResolve
    },
    children: [
      {
        path: 'organization',
        loadChildren: 'app/account/organization/organization.module#OrganizationModule'
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
