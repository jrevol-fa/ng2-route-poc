import { NgModule } from '@angular/core';
import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { AccountResolve } from './account-resolve.service';
import { AccountRepository } from './account-repository';
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
    providers: [
        AccountRepository,
        AccountResolve
    ]
})
export class AccountModule {
}