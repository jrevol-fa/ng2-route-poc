import { NgModule } from '@angular/core';
import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { SharedModule } from '../shared/shared-module';
import { AccountSelectComponent } from './account-select.component';

@NgModule({
  imports: [
    AccountRoutingModule,
    SharedModule
  ],
  declarations: [
    AccountComponent,
    AccountSelectComponent
  ],
  providers: []
})
export class AccountModule {
}
