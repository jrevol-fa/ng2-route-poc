import { Component, OnInit, OnDestroy } from '@angular/core';
import { TransactionRepository } from './transaction-repository.service';
import { Transaction } from './transaction';
import { Organization } from '../organization';
import { Account } from '../../account';
import { Subscription } from 'rxjs';
import { Filter } from '../filter';
import { PortfolioContext } from './portfolio-context.service';

@Component({
    templateUrl: './portfolio.component.html'
})
export class PortfolioComponent implements OnInit, OnDestroy {

    account: Account;
    organization: Organization;
    filter: Filter;

    transactions: Transaction[];
    private subs: Subscription[];

    constructor(private ctx: PortfolioContext,
                private repository: TransactionRepository) {
    }

    ngOnInit() {
        this.subs = [
            this.ctx.data$
                .flatMap((data: { account: Account, organization: Organization, filter: Filter }) => {
                    this.filter = data.filter;
                    return this.repository.findAll(data.account, data.organization, data.filter);
                })
                .subscribe(transactions => this.transactions = transactions)
        ];
    }

    ngOnDestroy() {
        this.subs.forEach(sub => sub.unsubscribe());
    }

}
