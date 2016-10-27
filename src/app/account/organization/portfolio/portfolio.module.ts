import { NgModule } from '@angular/core';
import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './portfolio.component';
import { TransactionRepository } from './transaction-repository.service';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        PortfolioRoutingModule,
        CommonModule
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