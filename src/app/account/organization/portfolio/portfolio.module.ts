import {NgModule} from '@angular/core';
import {PortfolioRoutingModule} from './portfolio-routing.module';
import {PortfolioComponent} from './portfolio.component';
import {TransactionRepository} from './transaction-repository.service';
import {SharedModule} from '../../../shared/shared-module';
import {OrganizationModule} from '../organization.module';
import {PortfolioContext} from './portfolio-context.service';

@NgModule({
  imports: [
    PortfolioRoutingModule,
    OrganizationModule,
    SharedModule
  ],
  declarations: [
    PortfolioComponent
  ],
  providers: [
    PortfolioContext,
    TransactionRepository
  ]
})
export class PortfolioModule {
}
