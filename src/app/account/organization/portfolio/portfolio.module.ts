import { NgModule } from '@angular/core';
import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './portfolio.component';
import { TransactionRepository } from './transaction-repository.service';
import { SharedModule } from '../../../shared/shared-module';

@NgModule({
    imports: [
        PortfolioRoutingModule,
        SharedModule
    ],
    declarations: [
        PortfolioComponent
    ],
    providers: [
        TransactionRepository
    ]
})
export class PortfolioModule {
}