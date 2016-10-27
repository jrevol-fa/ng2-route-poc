import { NgModule } from '@angular/core';
import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { AccountResolve } from './account-resolve.service';

@NgModule({
    imports: [
        AccountRoutingModule
    ],
    declarations: [
        AccountComponent
    ],
    providers: [
        AccountResolve
    ]
})
export class AccountModule {
}