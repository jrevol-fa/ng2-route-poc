import { NgModule } from '@angular/core';
import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { AccountResolve } from './account-resolve.service';
import { AccountRepository } from './account-repository';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        AccountRoutingModule,
        CommonModule
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