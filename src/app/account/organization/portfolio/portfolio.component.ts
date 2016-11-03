import { Component, OnInit, OnDestroy } from '@angular/core';
import { TransactionRepository } from './transaction-repository.service';
import { ActivatedRoute } from '@angular/router';
import { Transaction } from './transaction';
import { Organization } from '../organization';
import { Account } from '../../account';
import { Subscription } from 'rxjs';
import { Filter } from '../filter';

@Component({
    templateUrl: './portfolio.component.html'
})
export class PortfolioComponent implements OnInit, OnDestroy {

    account: Account;
    organization: Organization;
    filter: Filter;
    private dataSub: Subscription;

    transactions: Transaction[];
    private transactionsSub: Subscription;

    constructor(private route: ActivatedRoute,
                private repository: TransactionRepository) {
    }

    ngOnInit() {
        this.dataSub = this.route.data
            .subscribe((data: {account: Account, organization: Organization, filter: Filter}) => {
                this.account = data.account;
                this.organization = data.organization;
                this.filter = data.filter;
            });
        this.transactionsSub = this.route.data
            .flatMap((data: {account: Account, organization: Organization}) =>
                this.repository.findAll(data.account, data.organization))
            .subscribe(transactions => this.transactions = transactions);
    }

    ngOnDestroy() {
        this.dataSub.unsubscribe();
        this.transactionsSub.unsubscribe();
    }

}
