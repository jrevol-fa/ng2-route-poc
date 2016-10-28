import { NgModule } from '@angular/core';
import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { AccountResolve } from './account-resolve.service';
import { AccountRepository } from './account-repository';

@NgModule({
    imports: [
        AccountRoutingModule
    ],
    declarations: [
        AccountComponent,
    ],
    providers: [
        AccountRepository,
        AccountResolve
    ]
})
export class AccountModule {
}