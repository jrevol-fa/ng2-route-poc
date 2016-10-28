import { Component, OnInit, OnDestroy } from '@angular/core';
import { TransactionRepository } from './transaction-repository.service';
import { ActivatedRoute } from '@angular/router';
import { Transaction } from './transaction';
import { Organization } from '../organization';
import { Account } from '../../account';
import { Subscription } from 'rxjs';

@Component({
    templateUrl: './portfolio.component.html'
})
export class PortfolioComponent implements OnInit, OnDestroy {

    transactions: Transaction[];
    private sub: Subscription;

    constructor(private route: ActivatedRoute,
                private repository: TransactionRepository) {
    }

    ngOnInit() {
        this.sub = this.route.data
            .flatMap((data: {account: Account, organization: Organization}) =>
                this.repository.findAll(data.account, data.organization))
            .subscribe(transactions => this.transactions = transactions);
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

}
