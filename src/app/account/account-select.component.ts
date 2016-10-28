import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { Account } from './account';
import { AccountRepository } from './account-repository';

@Component({
    selector: 'app-account-select',
    templateUrl: './account-select.component.html'
})
export class AccountSelectComponent implements OnInit, OnDestroy {

    @Input()
    current: Account;

    accounts: Account[];
    private accountsSub: Subscription;

    constructor(private repository: AccountRepository) {
    }

    ngOnInit() {
        this.accountsSub = this.repository.findAll().subscribe(choices => this.accounts = choices);
    }

    ngOnDestroy() {
        this.accountsSub.unsubscribe();
    }

}